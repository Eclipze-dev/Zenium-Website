import { interestOptions } from "@/app/contact/components/contactData";

export type ContactInterest = (typeof interestOptions)[number];

export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
};

export type ContactFieldName = keyof ContactFormPayload;

export type ContactFieldErrors = Partial<Record<ContactFieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isInterest(value: string): value is ContactInterest {
  return (interestOptions as readonly string[]).includes(value);
}

export function validateContactForm(input: ContactFormPayload): {
  errors: ContactFieldErrors;
  data: ContactFormPayload | null;
} {
  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();
  const email = input.email.trim();
  const company = input.company.trim();
  const phone = input.phone.trim();
  const interest = input.interest.trim();
  const message = input.message.trim();

  const errors: ContactFieldErrors = {};

  if (!firstName) errors.firstName = "First name is required.";
  if (!lastName) errors.lastName = "Last name is required.";
  if (!email) {
    errors.email = "Business email is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid business email.";
  }
  if (!company) errors.company = "Company is required.";
  const phoneDigits = phone.replace(/\D/g, "");
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (phoneDigits.length < 7) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!interest) {
    errors.interest = "Please select what you are interested in.";
  } else if (!isInterest(interest)) {
    errors.interest = "Please select a valid interest.";
  }
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return { errors, data: null };
  }

  return {
    errors: {},
    data: { firstName, lastName, email, company, phone, interest, message },
  };
}
