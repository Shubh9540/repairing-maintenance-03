'use client';

import { useState } from 'react';
import { FaEnvelope, FaMobileAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { ContactProps } from '@/types/templates.types';

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Subtitle, Call Us & Email Us Cards */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-7 bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-heading)] uppercase">
                {data.eyebrow}
              </span>
            </div>

            <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-[42px] leading-[1.18]">
              {data.titleStart}{' '}
              <span className="text-[var(--color-primary)]">{data.titleAccent}</span>
            </h2>

            <p className="mt-4 text-sm leading-[1.75] text-[var(--color-text)] sm:text-base">
              {data.subtitle}
            </p>

            {/* Stacked Contact Cards */}
            <div className="mt-7 space-y-4">
              {/* Call Us Card */}
              <div className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-sm">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--color-primary)] text-[var(--color-white)]">
                  <FaPhoneAlt className="text-base" aria-hidden="true" />
                </div>
                <span aria-hidden="true" className="h-9 w-[1px] shrink-0 bg-[var(--color-border)]" />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[var(--color-heading)]">
                    {data.callLabel}
                  </div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-[var(--color-text)] sm:text-sm">
                    {data.phones.slice(0, 2).map((phone, idx, arr) => (
                      <span key={`${phone}-${idx}`} className="inline-flex items-center gap-2">
                        <a
                          href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                          className="transition-colors hover:text-[var(--color-primary)]"
                        >
                          {phone}
                        </a>
                        {idx < arr.length - 1 && (
                          <span aria-hidden="true" className="text-[var(--color-border)]">
                            |
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Us Card */}
              <div className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-sm">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[var(--color-primary)] text-[var(--color-white)]">
                  <FaEnvelope className="text-base" aria-hidden="true" />
                </div>
                <span aria-hidden="true" className="h-9 w-[1px] shrink-0 bg-[var(--color-border)]" />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[var(--color-heading)]">
                    {data.emailLabel}
                  </div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-[var(--color-text)] sm:text-sm">
                    {data.emails.slice(0, 2).map((email, idx, arr) => (
                      <span key={`${email}-${idx}`} className="inline-flex items-center gap-2">
                        <a
                          href={`mailto:${email}`}
                          className="transition-colors hover:text-[var(--color-primary)]"
                        >
                          {email}
                        </a>
                        {idx < arr.length - 1 && (
                          <span aria-hidden="true" className="text-[var(--color-border)]">
                            |
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_14px_40px_var(--color-shadow)]"
            >
              {/* Dark Header Bar with Slanted Red Submit Corner */}
              <div className="relative flex items-center justify-between bg-[var(--color-primary-deep)] px-6 py-4 text-[var(--color-white)]">
                <div className="flex items-center gap-3.5">
                  <FaMobileAlt className="text-xl text-[var(--color-white)]" aria-hidden="true" />
                  <span aria-hidden="true" className="h-6 w-[1px] bg-white/20" />
                  <h3 className="font-sans text-base font-bold sm:text-lg">
                    {data.formTitle}
                  </h3>
                </div>

                <button
                  type="submit"
                  aria-label={data.submitLabel}
                  className="absolute top-0 right-0 bottom-0 flex w-20 items-center justify-center bg-[var(--color-primary)] text-[var(--color-white)] transition-colors hover:bg-[var(--color-primary-hover)]"
                  style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}
                >
                  <FaPaperPlane className="ml-2 text-base" aria-hidden="true" />
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 p-6 sm:p-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)] sm:text-[13px]"
                    >
                      {data.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)] sm:text-[13px]"
                    >
                      {data.phoneLabel}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)] sm:text-[13px]"
                    >
                      {data.emailFieldLabel}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-date"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)] sm:text-[13px]"
                    >
                      {data.dateLabel}
                    </label>
                    <input
                      id="contact-date"
                      name="date"
                      type="date"
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-device"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)] sm:text-[13px]"
                    >
                      {data.deviceTypeLabel}
                    </label>
                    <select
                      id="contact-device"
                      name="deviceType"
                      defaultValue=""
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]"
                    >
                      <option value="" disabled />
                      {data.deviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)] sm:text-[13px]"
                    >
                      {data.serviceTypeLabel}
                    </label>
                    <select
                      id="contact-service"
                      name="serviceType"
                      defaultValue=""
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]"
                    >
                      <option value="" disabled />
                      {data.serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)] sm:text-[13px]"
                  >
                    {data.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder={data.messagePlaceholder}
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2.5 text-sm text-[var(--color-heading)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-primary)]"
                  />
                </div>

                {submitted && (
                  <p className="rounded-lg bg-[var(--color-primary-soft)] px-4 py-2.5 text-xs font-medium text-[var(--color-primary)] sm:text-sm">
                    {data.successMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
