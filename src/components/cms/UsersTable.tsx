"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "@/components/cms/DataTable";
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
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button type="button" onClick={() => setCreateOpen(true)}>
          New user
        </Button>
      </div>
      <DataTable
        data={users}
        searchPlaceholder="Search users…"
        columns={[
          { accessorKey: "name", header: "Name" },
          { accessorKey: "email", header: "Email" },
          {
            accessorKey: "role",
            header: "Role",
            cell: ({ row }: { row: { original: CmsAdminPublic } }) => (
              <span className="capitalize">{row.original.role}</span>
            ),
          },
          {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }: { row: { original: CmsAdminPublic } }) => (
              <Badge variant={row.original.status === "active" ? "default" : "secondary"}>
                {row.original.status}
              </Badge>
            ),
          },
          {
            accessorKey: "last_login_at",
            header: "Last login",
            cell: ({ row }: { row: { original: CmsAdminPublic } }) =>
              formatDate(row.original.last_login_at),
          },
          {
            id: "actions",
            header: "",
            cell: ({ row }: { row: { original: CmsAdminPublic } }) => {
              const user = row.original;
              const nextStatus = user.status === "active" ? "disabled" : "active";
              return (
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => openEdit(user)}>
                    Edit
                  </Button>
                  <Button
                    variant={user.status === "active" ? "destructive" : "secondary"}
                    size="sm"
                    disabled={user.id === currentUserId && nextStatus === "disabled"}
                    onClick={async () => {
                      const result = await setUserStatusAction(user.id, nextStatus);
                      if (!result.ok) {
                        toast.error(result.error);
                        return;
                      }
                      toast.success(
                        nextStatus === "disabled" ? "User disabled" : "User enabled",
                      );
                      router.refresh();
                    }}
                  >
                    {user.status === "active" ? "Disable" : "Enable"}
                  </Button>
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
              <Button type="submit" disabled={createForm.formState.isSubmitting}>
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
              <Button type="submit" disabled={editForm.formState.isSubmitting}>
                Save
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
