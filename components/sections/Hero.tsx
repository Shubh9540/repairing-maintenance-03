import Image from 'next/image';
import { HeroProps } from '@/types/templates.types';

export const Hero = ({ data }: HeroProps) => {
  if (!data) return null;

  return (
    <section id="hero" className="w-full overflow-hidden bg-[var(--color-primary-deep)]">
      {/* Top Dark Content Band */}
      <div className="hero-surface relative w-full">
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-10 sm:py-12 lg:px-8 lg:py-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-[2px] w-7 bg-[var(--color-primary)]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-300 uppercase sm:text-xs">
              {data.eyebrow}
            </span>
          </div>

          {/* 2-Column Split: Headline Left + Description Right */}
          <div className="mt-4 grid grid-cols-1 items-center gap-6 lg:mt-5 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <h1 className="font-sans text-3xl font-extrabold tracking-tight text-[var(--color-white)] sm:text-4xl lg:text-[48px] leading-[1.15]">
                {data.titleStart}{' '}
                <span className="text-[var(--color-primary)]">{data.titleAccent}</span>
                {data.titleEnd ? ` ${data.titleEnd}` : null}
              </h1>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-10">
              <p className="max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Original Full-Color Photo */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={data.backgroundImage}
          alt={data.imageAlt || data.eyebrow}
          width={1920}
          height={534}
          priority
          unoptimized
          className="h-[200px] w-full object-cover object-center sm:h-[260px] md:h-[320px] lg:h-[380px]"
        />
      </div>
    </section>
  );
};
