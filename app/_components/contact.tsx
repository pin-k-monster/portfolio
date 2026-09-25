"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpLeft, AtSign, Briefcase, GitBranch, Link2, LoaderCircle, Mail, Send } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SuccessCheck } from "@/components/animations/success-check";
import { DitherBackground } from "@/components/backgrounds/dither";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FormField, type Validator, useForm } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";
import { contact } from "@/lib/site/contact/data";
import {
  CONTACT_MESSAGES,
  contactFieldRules,
  type ContactFieldName,
} from "@/lib/site/contact/validation";

const SOCIAL_ICONS: Record<string, typeof GitBranch> = {
  github: GitBranch,
  linkedin: Briefcase,
  telegram: Send,
  x: AtSign,
};

/** Adapts a shared field rule to the `useForm` validator signature. */
const ruleFor =
  (field: ContactFieldName): Validator =>
  (value) => {
    const code = contactFieldRules[field](value);
    return code ? CONTACT_MESSAGES[code] : undefined;
  };

export default function Contact() {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  const form = useForm({
    initial: { name: "", email: "", phone: "", message: "" },
    // Same rules as the API route, so the two can never disagree.
    schema: {
      name: [ruleFor("name")],
      email: [ruleFor("email")],
      phone: [ruleFor("phone")],
      message: [ruleFor("message")],
    },
    onSubmit: async (values) => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = (await res.json()) as { ok?: boolean; error?: string };
        if (!res.ok || !data.ok) {
          throw new Error(data.error ?? CONTACT_MESSAGES["send-failed"]);
        }
        setSent(true);
        toast({
          variant: "success",
          title: contact.form.successTitle,
          description: contact.form.successDescription,
        });
      } catch (error) {
        toast({
          variant: "error",
          title: contact.form.errorTitle,
          description: error instanceof Error ? error.message : contact.form.errorDescription,
        });
      }
    },
  });

  const fieldByName = (name: string) => contact.form.fields.find((f) => f.name === name);
  const nameField = form.field("name");
  const emailField = form.field("email");
  const phoneField = form.field("phone");
  const messageField = form.field("message");

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-16 sm:py-24">
      <DitherBackground opacity={0.08} className="absolute inset-0" />
      <div className="container relative mx-auto px-4">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
            <Badge variant="brand">{contact.eyebrow}</Badge>
            <h2 id="contact-title" className="text-2xl font-bold leading-tight sm:text-3xl">
              {contact.title}
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">{contact.description}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand/40"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span className="min-w-0 space-y-1">
                  <span className="block text-xs text-muted-foreground">ایمیل</span>
                  <span
                    dir="ltr"
                    className="block truncate text-sm font-medium text-foreground group-hover:text-brand"
                  >
                    {contact.email}
                  </span>
                </span>
              </a>

              <div className="flex flex-wrap gap-2">
                {contact.socials.map((social) => {
                  const Icon = social.icon ?? SOCIAL_ICONS[social.id] ?? Link2;

                  return (
                    <Link
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (در تب جدید)`}
                      className="group inline-flex items-center rounded-xl border border-border bg-card px-3 py-2 text-sm transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <Icon className="size-4 shrink-0 me-2" aria-hidden />
                      {social.label}
                      <ArrowUpLeft
                        aria-hidden
                        className="size-0 ms-0 text-muted-foreground transition-all group-hover:ms-2 group-hover:size-3.5"
                      />
                    </Link>
                  );
                })}
              </div>

              <Alert variant="info">{contact.responseNote}</Alert>
            </div>
          </Reveal>

          <Reveal delay={180} className="h-full">
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              {sent ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center" role="status">
                  <SuccessCheck size={80} />
                  <p className="text-lg font-bold">{contact.form.successTitle}</p>
                  <p className="text-sm text-muted-foreground">{contact.form.successDescription}</p>
                  <Button
                    variant="ghost"
                    className="mt-2 cursor-pointer"
                    onClick={() => {
                      setSent(false);
                      form.reset();
                    }}
                  >
                    {contact.form.anotherLabel}
                  </Button>
                </div>
              ) : (
                <form className="space-y-2.5" onSubmit={form.handleSubmit} noValidate>
                  <FormField
                    label={fieldByName("name")?.label ?? "نام"}
                    htmlFor={nameField.id}
                    required={fieldByName("name")?.required}
                    error={nameField.error}
                    hint={fieldByName("name")?.hint}
                  >
                    <Input
                      id={nameField.id}
                      name={nameField.name}
                      value={nameField.value}
                      onChange={nameField.onChange}
                      onBlur={nameField.onBlur}
                      placeholder={fieldByName("name")?.placeholder}
                      className="placeholder:text-foreground/70!"
                      aria-invalid={nameField.error ? true : undefined}
                    />
                  </FormField>

                  <FormField
                    label={fieldByName("email")?.label ?? "ایمیل"}
                    htmlFor={emailField.id}
                    required={fieldByName("email")?.required}
                    error={emailField.error}
                    hint={fieldByName("email")?.hint}
                  >
                    <Input
                      id={emailField.id}
                      name={emailField.name}
                      type="email"
                      dir="ltr"
                      value={emailField.value}
                      onChange={emailField.onChange}
                      onBlur={emailField.onBlur}
                      placeholder={fieldByName("email")?.placeholder}
                      className="placeholder:text-foreground/70!"
                      aria-invalid={emailField.error ? true : undefined}
                    />
                  </FormField>

                  <FormField
                    label={fieldByName("phone")?.label ?? "موبایل"}
                    htmlFor={phoneField.id}
                    required={fieldByName("phone")?.required}
                    error={phoneField.error}
                  >
                    <PhoneInput
                      id={phoneField.id}
                      value={phoneField.value}
                      onChange={(digits) => form.setValue("phone", digits)}
                    />
                  </FormField>

                  <FormField
                    label={fieldByName("message")?.label ?? "پیام"}
                    htmlFor={messageField.id}
                    required={fieldByName("message")?.required}
                    error={messageField.error}
                    hint={fieldByName("message")?.hint}
                  >
                    <Textarea
                      id={messageField.id}
                      name={messageField.name}
                      value={messageField.value}
                      onChange={messageField.onChange}
                      onBlur={messageField.onBlur}
                      placeholder={fieldByName("message")?.placeholder}
                      maxLength={fieldByName("message")?.maxLength}
                      autoResize
                      showCount
                      className="placeholder:text-foreground/70!"
                      aria-invalid={messageField.error ? true : undefined}
                    />
                  </FormField>

                  <Button
                    variant="brand"
                    size="lg"
                    type="submit"
                    className="w-full cursor-pointer"
                    disabled={form.submitting}
                  >
                    {form.submitting && <LoaderCircle className="size-4 animate-spin" aria-hidden />}
                    {form.submitting ? contact.form.pendingLabel : contact.form.submitLabel}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
