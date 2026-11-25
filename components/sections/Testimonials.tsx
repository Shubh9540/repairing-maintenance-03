import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  if (!data || !data.items?.length) return null;

  return (
    <section id="testimonials" className="w-full overflow-hidden bg-[var(--color-bg-soft)] py-8 lg:py-14">
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

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.items.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_10px_30px_var(--color-shadow)] sm:p-7"
            >
              <div>
                {/* Top Row: Quote Badge + 5 Stars */}
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                    <FaQuoteLeft className="text-base" aria-hidden="true" />
                  </div>

                  <div className="flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <FaStar
                        key={idx}
                        className="text-sm text-[var(--color-primary)]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="mt-5 text-sm leading-[1.7] text-[var(--color-text)] sm:text-[15px]">
                  {item.quote}
                </p>
              </div>

              {/* Author Block */}
              <div className="mt-6 flex items-center gap-3.5 border-t border-[var(--color-border)] pt-5">
                <div className="relative h-12 w-12 shrink-0 rounded-full bg-gradient-to-tr from-[var(--color-primary)] via-[var(--color-primary)]/30 to-transparent p-[2px]">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--color-bg-soft)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-sans text-[15px] font-bold text-[var(--color-heading)] sm:text-base">
                    {item.name}
                  </h3>
                  <p className="truncate text-xs text-[var(--color-text-muted)] sm:text-[13px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
