import Image from 'next/image';
import { FaTools } from 'react-icons/fa';
import { AboutUsProps } from '@/types/templates.types';

export const AboutUs = ({ data }: AboutUsProps) => {
  if (!data) return null;

  return (
    <section id="about" className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Staggered 2x2 Image & Mission Card Collage */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {/* Left Sub-Column: Circuit Photo + Red Mission Card */}
              <div className="flex flex-col gap-4 sm:gap-5 sm:pt-8">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={data.circuitImage.src}
                    alt={data.circuitImage.alt}
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-[var(--color-primary)] p-6 text-[var(--color-white)] shadow-md">
                  <FaTools className="mb-3 text-2xl text-[var(--color-white)]" aria-hidden="true" />
                  <p className="text-xs font-medium tracking-wide text-white/85 sm:text-sm">
                    {data.missionCard.label}
                  </p>
                  <p className="mt-1.5 text-lg font-bold leading-snug text-[var(--color-white)] sm:text-xl">
                    {data.missionCard.quote}
                  </p>
                </div>
              </div>

              {/* Right Sub-Column: Technician Photo + Screen Replacement Photo */}
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={data.technicianImage.src}
                    alt={data.technicianImage.alt}
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative aspect-[4/2.9] w-full overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={data.screenImage.src}
                    alt={data.screenImage.alt}
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Eyebrow + Headline + Description */}
          <div className="flex flex-col justify-center lg:col-span-6 lg:pl-4">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-7 bg-[var(--color-primary)]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-heading)] uppercase">
                {data.eyebrow}
              </span>
            </div>

            <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-[42px] leading-[1.18]">
              {data.titleStart}{' '}
              <span className="text-[var(--color-primary)]">{data.titleAccent}</span>
              {data.titleEnd ? ` ${data.titleEnd}` : null}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-[1.75] text-[var(--color-text)] sm:text-base">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
