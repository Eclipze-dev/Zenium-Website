"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { toast } from "sonner";
import { notifyResult } from "@/components/cms/notifyResult";
import { Button } from "@/components/ui/button";
import {
  CmsFormLabel as FormLabel,
  CmsInput as Input,
  CmsSelectTrigger as SelectTrigger,
  submitClass,
} from "@/components/cms/cmsFields";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  ListTable,
  PrimaryText,
  SecondaryText,
  StatusPill,
} from "@/components/cms/ListTable";
import { PageHeader } from "@/components/cms/PageHeader";
import {
  createUserAction,
  setUserStatusAction,
  updateUserAction,
} from "@/lib/cms/actions/users";
import { userCreateSchema, userUpdateSchema } from "@/lib/cms/schemas";
import type { CmsAdminPublic } from "@/types/cms";

const createSchema = userCreateSchema;
const editSchema = userUpdateSchema.omit({ id: true });

type CreateValues = z.infer<typeof createSchema>;
type EditValues = z.infer<typeof editSchema>;

function formatDate(value: Date | string | null) {
  if (!value) return "Never";
  return new Date(value).toLocaleString();
}

export default function UsersTable({
  users,
  currentUserId,
}: {
  users: CmsAdminPublic[];
  currentUserId: number;
}) {
  const router = useRouter();
  const [createOpen, setCreateOpen] = useState(false);
  const [editing, setEditing] = useState<CmsAdminPublic | null>(null);

  const createForm = useForm<CreateValues>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "editor",
      status: "active",
    },
  });

  const editForm = useForm<EditValues>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "editor",
      status: "active",
    },
  });

  function openEdit(user: CmsAdminPublic) {
    setEditing(user);
    editForm.reset({
      name: user.name,
      email: user.email,
      password: "",
      role: user.role,
      status: user.status,
    });
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        subtitle="Admins can manage CMS users. Editors cannot access this page."
        actions={
          <Button type="button" onClick={() => setCreateOpen(true)}>
            New user
          </Button>
        }
      />
      <ListTable
        rows={users}
        rowKey={(row) => String(row.id)}
        searchPlaceholder="Search users…"
        emptyMessage="No users match your search."
        searchText={(row) => `${row.name} ${row.email} ${row.role} ${row.status}`}
        columns={[
          {
            header: "Name",
            accessor: (row) => <PrimaryText>{row.name}</PrimaryText>,
          },
          {
            header: "Email",
            accessor: (row) => <SecondaryText>{row.email}</SecondaryText>,
          },
          {
            header: "Role",
            accessor: (row) => (
              <StatusPill tone={row.role === "admin" ? "purple" : "gray"}>
                {row.role === "admin" ? "Admin" : "Editor"}
              </StatusPill>
            ),
          },
          {
            header: "Status",
            accessor: (row) => (
              <StatusPill tone={row.status === "active" ? "green" : "gray"}>
                {row.status === "active" ? "Active" : "Disabled"}
              </StatusPill>
            ),
          },
          {
            header: "Last login",
            accessor: (row) => <SecondaryText>{formatDate(row.last_login_at)}</SecondaryText>,
          },
          {
            header: "Actions",
            accessor: (row) => {
              const nextStatus = row.status === "active" ? "disabled" : "active";
              const cannotDisable = row.id === currentUserId && nextStatus === "disabled";
              return (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    title="Edit"
                    onClick={() => openEdit(row)}
                    className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    type="button"
                    disabled={cannotDisable}
                    className="rounded-lg px-2 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                    onClick={async () => {
                      await notifyResult(
                        await setUserStatusAction(row.id, nextStatus),
                        nextStatus === "disabled" ? "User disabled" : "User enabled",
                        () => router.refresh(),
                      );
                    }}
                  >
                    {row.status === "active" ? "Disable" : "Enable"}
                  </button>
                </div>
              );
            },
          },
        ]}
      />

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New user</DialogTitle>
          </DialogHeader>
          <Form {...createForm}>
            <form
              className="space-y-4"
              onSubmit={createForm.handleSubmit(async (values) => {
                const result = await createUserAction(values);
                if (!result.ok) {
                  toast.error(result.error);
                  return;
                }
                toast.success("User created");
                setCreateOpen(false);
                createForm.reset();
                router.refresh();
              })}
            >
              <FormField
                control={createForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={createForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className={submitClass} disabled={createForm.formState.isSubmitting}>
                Create
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit user</DialogTitle>
          </DialogHeader>
          <Form {...editForm}>
            <form
              className="space-y-4"
              onSubmit={editForm.handleSubmit(async (values) => {
                if (!editing) return;
                const result = await updateUserAction({ ...values, id: editing.id });
                if (!result.ok) {
                  toast.error(result.error);
                  return;
                }
                toast.success("User updated");
                setEditing(null);
                router.refresh();
              })}
            >
              <FormField
                control={editForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New password (optional)</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="disabled">Disabled</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className={submitClass} disabled={editForm.formState.isSubmitting}>
                Save
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
