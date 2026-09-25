"use client";

import { useState, type FormEvent } from "react";
import { Check } from "@/components/icons/lucideIcons";
import { cn } from "@/lib/cn";
import {
  validateContactForm,
  type ContactFieldErrors,
  type ContactFieldName,
  type ContactFormPayload,
} from "@/lib/mail/contactValidation";
import { interestOptions } from "./contactData";

const emptyForm: ContactFormPayload = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  interest: "",
  message: "",
};

const inputClass =
  "w-full border-0 border-b bg-transparent pb-2.5 text-body text-[#152D48] outline-none transition-colors placeholder:text-[#9AA6B2] focus:border-[#152D48]";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  className,
  value,
  error,
  onChange,
}: {
  label: string;
  name: keyof ContactFormPayload;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  className?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const errorId = `${name}-error`;

  return (
    <label className={cn("flex min-w-0 flex-col gap-2", className)}>
      <span className="text-body font-medium text-[#152D48]">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(inputClass, error ? "border-[#C0392B]" : "border-[#D5DCE3]")}
      />
      {error ? (
        <span id={errorId} role="alert" className="text-supporting text-[#C0392B]">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormPayload>(emptyForm);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function updateField(name: keyof ContactFormPayload, value: string) {
    setValues((current) => ({ ...current, [name]: value }));

    const field = name as ContactFieldName;
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    const { errors: nextErrors, data } = validateContactForm(values);
    if (!data) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string; errors?: ContactFieldErrors }
        | null;

      if (!response.ok) {
        if (payload?.errors) setErrors(payload.errors);
        setSubmitError(payload?.message || "We could not send your message. Please try again.");
        return;
      }

      setSent(true);
      setValues(emptyForm);
    } catch {
      setSubmitError("We could not send your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center" role="status">
        <p className="text-p2 m-0 text-[#152D48]">Message sent successfully.</p>
        <p className="mt-3 max-w-[420px] text-p1 text-[#5A6B7C]">
          Thank you. We have received your enquiry and sent a confirmation to your business email.
          Our team will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setErrors({});
            setSubmitError("");
          }}
          className="mt-8 self-start text-body font-medium text-orange transition-colors hover:text-orange-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-8 max-lg:gap-6 [color-scheme:light]"
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 max-lg:gap-x-6 max-lg:gap-y-6">
        <Field
          label="First Name"
          name="firstName"
          placeholder="Enter the first name"
          autoComplete="given-name"
          value={values.firstName}
          error={errors.firstName}
          onChange={(value) => updateField("firstName", value)}
        />
        <Field
          label="Last Name"
          name="lastName"
          placeholder="Enter the last name"
          autoComplete="family-name"
          value={values.lastName}
          error={errors.lastName}
          onChange={(value) => updateField("lastName", value)}
        />
        <Field
          label="Business email"
          name="email"
          type="email"
          placeholder="Enter the email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
        />
        <Field
          label="Company"
          name="company"
          placeholder="Enter the company name"
          autoComplete="organization"
          value={values.company}
          error={errors.company}
          onChange={(value) => updateField("company", value)}
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="Enter the phone number"
          autoComplete="tel"
          className="sm:col-span-2"
          value={values.phone}
          error={errors.phone}
          onChange={(value) => updateField("phone", value)}
        />
      </div>

      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className="mb-4 text-body font-medium text-[#152D48] max-lg:mb-3">
          I&apos;m interested in
        </legend>
        <div className="flex flex-wrap gap-x-7 gap-y-3 max-lg:grid max-lg:grid-cols-4 max-lg:gap-x-6 max-lg:gap-y-3 max-sm:flex max-sm:flex-wrap max-sm:gap-x-7">
          {interestOptions.map((option) => (
            <label
              key={option}
              className="inline-flex cursor-pointer items-center gap-2.5 text-body text-[#152D48]"
            >
              <input
                type="radio"
                name="interest"
                value={option}
                checked={values.interest === option}
                onChange={() => updateField("interest", option)}
                className="peer sr-only"
              />
              <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#152D48] bg-transparent peer-checked:hidden peer-focus-visible:ring-2 peer-focus-visible:ring-orange/40 peer-focus-visible:ring-offset-2" />
              <span className="hidden h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#152D48] peer-checked:flex peer-focus-visible:ring-2 peer-focus-visible:ring-orange/40 peer-focus-visible:ring-offset-2">
                <Check className="h-[11px] w-[11px] text-[#FFFFFF]" strokeWidth={3} />
              </span>
              {option}
            </label>
          ))}
        </div>
        {errors.interest ? (
          <p id="interest-error" role="alert" className="mt-3 text-supporting text-[#C0392B]">
            {errors.interest}
          </p>
        ) : null}
      </fieldset>

      <label className="flex min-w-0 flex-col gap-2">
        <span className="text-body font-medium text-[#152D48]">Message</span>
        <textarea
          name="message"
          rows={3}
          placeholder="Write your message..."
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => updateField("message", event.target.value)}
          className={cn(inputClass, "resize-none pt-1", errors.message ? "border-[#C0392B]" : "border-[#D5DCE3]")}
        />
        {errors.message ? (
          <span id="message-error" role="alert" className="text-supporting text-[#C0392B]">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div>
        <button
          type="submit"
          disabled={sending}
          className="button-primary inline-flex items-center justify-center rounded-[4px] border px-[22px] py-[11px] text-button transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 max-lg:w-auto max-lg:px-[16px] max-lg:py-[9px] max-lg:text-[13px] max-lg:leading-[18px] max-sm:w-full max-sm:px-[14px] max-sm:py-[10px] max-sm:text-[12px]"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
        {submitError ? (
          <p role="alert" className="mt-4 text-supporting text-[#C0392B]">
            {submitError}
          </p>
        ) : null}
        <p className="mt-4 text-supporting text-[#8A97A5] max-lg:mt-3">
          By submitting this form, you agree to Zenium&apos;s{" "}
          <a
            href="/privacy"
            className="text-[#8A97A5] underline decoration-[#C5CDD6] underline-offset-2 transition-colors hover:text-orange"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
