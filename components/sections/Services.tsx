'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { HiArrowDown, HiArrowRight } from 'react-icons/hi2';
import { ServicesProps } from '@/types/templates.types';

export const Services = ({ data }: ServicesProps) => {
  const [openId, setOpenId] = useState<string | null>(data?.services?.[0]?.id ?? null);

  if (!data) return null;

  const toggleService = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="w-full overflow-hidden bg-[var(--color-bg-soft)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        {/* Centered Section Header */}
        <div className="mb-8 text-center lg:mb-10">
          <div className="inline-flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-[2px] w-7 bg-[var(--color-primary)]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-heading)] uppercase">
              {data.eyebrow}
            </span>
          </div>

          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-[42px] leading-[1.18]">
            {data.titleStart}{' '}
            <span className="text-[var(--color-primary)]">{data.titleAccent}</span>
            {data.titleEnd ? ` ${data.titleEnd}` : null}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
            {data.subtitle}
          </p>
        </div>

        {/* Accordion Card Container */}
        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[0_12px_35px_var(--color-shadow)]">
          <div className="divide-y divide-[var(--color-border)]">
            {data.services.map((service) => {
              const isOpen = openId === service.id;

              return (
                <div key={service.id} className="px-5 sm:px-8">
                  {/* Accordion Header Row */}
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors sm:py-6"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="shrink-0 text-sm font-bold tracking-wider text-[var(--color-primary)] sm:text-base">
                        /{service.number}/
                      </span>
                      <span aria-hidden="true" className="h-5 w-[1px] shrink-0 bg-[var(--color-border)]" />
                      <h3 className="truncate font-sans text-lg font-bold text-[var(--color-heading)] sm:text-xl lg:text-[22px]">
                        {service.title}
                      </h3>
                    </div>

                    {/* Circular Arrow Toggle Button */}
                    <span
                      aria-hidden="true"
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-200 sm:h-11 sm:w-11 ${
                        isOpen
                          ? 'bg-[var(--color-primary)] text-[var(--color-white)] shadow-sm'
                          : 'border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-heading)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                      }`}
                    >
                      {isOpen ? <HiArrowDown className="text-base" /> : <HiArrowRight className="text-base" />}
                    </span>
                  </button>

                  {/* Expanded Details Panel */}
                  {isOpen && (
                    <div className="pb-6 sm:pb-8">
                      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                        {/* Left Dark Details Card */}
                        <div className="flex flex-col justify-between rounded-2xl border-b-4 border-[var(--color-primary)] bg-[var(--color-primary-deep)] p-6 text-[var(--color-white)] sm:p-7 lg:col-span-6">
                          <p className="text-sm leading-[1.75] text-gray-300 sm:text-[15px]">
                            {service.description}
                          </p>

                          <div>
                            <div className="my-5 h-[1px] w-full bg-white/15" />
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                              {service.features.map((feature) => (
                                <span
                                  key={feature}
                                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-[var(--color-white)] sm:text-[13px]"
                                >
                                  <FaCheckCircle
                                    aria-hidden="true"
                                    className="shrink-0 text-sm text-[var(--color-primary)]"
                                  />
                                  <span>{feature}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Full-Color Service Image */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl lg:col-span-6 lg:aspect-auto lg:min-h-[260px]">
                          <Image
                            src={service.image}
                            alt={service.imageAlt}
                            fill
                            unoptimized
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
