import Image from 'next/image';
import { FaShieldAlt, FaStopwatch, FaUserCog } from 'react-icons/fa';
import { WhyChooseUsItem, WhyChooseUsProps } from '@/types/templates.types';

const iconMap: Record<WhyChooseUsItem['icon'], React.ReactNode> = {
  technician: <FaUserCog className="text-lg" aria-hidden="true" />,
  clock: <FaStopwatch className="text-lg" aria-hidden="true" />,
  shield: <FaShieldAlt className="text-lg" aria-hidden="true" />,
};

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section id="why-choose-us" className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        {/* Top Split Header */}
        <div className="mb-8 grid grid-cols-1 items-center gap-6 lg:mb-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3">
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
          </div>

          <div className="lg:col-span-6 lg:border-l lg:border-[var(--color-border)] lg:pl-10">
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* 3-Column Feature Photo Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3.6] w-full overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                unoptimized
                className="object-cover object-center"
              />

              {/* Bottom Floating Pill Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center overflow-hidden rounded-xl bg-[var(--color-card)] shadow-lg">
                <div className="flex h-11 w-12 shrink-0 items-center justify-center bg-[var(--color-primary)] text-[var(--color-white)]">
                  {iconMap[item.icon]}
                </div>
                <div className="flex-1 px-3 text-center text-sm font-bold text-[var(--color-heading)] sm:text-[15px]">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

