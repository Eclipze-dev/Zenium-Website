"use client";

import { useState, type FormEvent } from "react";
import { Check } from "@/components/icons/lucideIcons";
import { cn } from "@/lib/cn";
import { interestOptions } from "./contactData";

const inputClass =
  "w-full border-0 border-b border-[#D5DCE3] bg-transparent pb-2.5 text-body text-[#152D48] outline-none transition-colors placeholder:text-[#9AA6B2] focus:border-[#152D48]";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <label className={cn("flex min-w-0 flex-col gap-2", className)}>
      <span className="text-body font-medium text-[#152D48]">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center">
        <p className="text-p2 m-0 text-[#152D48]">Thank you.</p>
        <p className="mt-3 max-w-[420px] text-p1 text-[#5A6B7C]">
          We’ve received your message and will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 self-start text-body font-medium text-orange transition-colors hover:text-orange-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 [color-scheme:light]">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        <Field
          label="First Name"
          name="firstName"
          placeholder="Enter the first name"
          required
          autoComplete="given-name"
        />
        <Field
          label="Last Name"
          name="lastName"
          placeholder="Enter the last name"
          required
          autoComplete="family-name"
        />
        <Field
          label="Business email"
          name="email"
          type="email"
          placeholder="Enter the email"
          required
          autoComplete="email"
        />
        <Field
          label="Company"
          name="company"
          placeholder="Enter the company name"
          required
          autoComplete="organization"
        />
        <Field
          label="Phone number (optional)"
          name="phone"
          type="tel"
          placeholder="Enter the phone number"
          autoComplete="tel"
          className="sm:col-span-2"
        />
      </div>

      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className="mb-4 text-body font-medium text-[#152D48]">
          I&apos;m interested in
        </legend>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          {interestOptions.map((option, index) => (
            <label
              key={option}
              className="inline-flex cursor-pointer items-center gap-2.5 text-body text-[#152D48]"
            >
              <input
                type="radio"
                name="interest"
                value={option}
                defaultChecked={index === 0}
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
      </fieldset>

      <label className="flex min-w-0 flex-col gap-2">
        <span className="text-body font-medium text-[#152D48]">Message</span>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="Write your message..."
          className={cn(inputClass, "resize-none pt-1")}
        />
      </label>

      <div>
        <button
          type="submit"
          className="button-primary inline-flex items-center justify-center rounded-[4px] border px-[22px] py-[11px] text-button transition-all duration-200"
        >
          Send Message
        </button>
        <p className="mt-4 text-supporting text-[#8A97A5]">
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
