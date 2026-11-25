'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <FaFacebookF className="text-sm" aria-hidden="true" />,
  instagram: <FaInstagram className="text-sm" aria-hidden="true" />,
  linkedin: <FaLinkedinIn className="text-sm" aria-hidden="true" />,
  youtube: <FaYoutube className="text-sm" aria-hidden="true" />,
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    const hash = url.split('#')[1];
    if (!hash) return;

    const target = document.getElementById(hash);
    if (target) {
      e.preventDefault();
      const headerOffset = 88;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${hash}`);
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[var(--color-primary-deep)] text-[var(--color-white)]">
      {/* Subtle Top-Right & Bottom-Left Red Corner Accents */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full border-[14px] border-[var(--color-primary)]/80 opacity-80"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full border-[14px] border-[var(--color-primary)]/80 opacity-80"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 pt-12 pb-8 lg:px-8 lg:pt-14">
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-0">
          {/* Column 1: Footer Logo & Description */}
          <div className="flex flex-col justify-start lg:col-span-4 lg:border-r lg:border-white/10 lg:pr-10">
            <Link
              href="/#hero"
              onClick={(e) => handleScroll(e, '/#hero')}
              className="inline-block"
            >
              <Image
                src={data.logo}
                alt={data.logoAlt}
                width={280}
                height={80}
                unoptimized
                className="h-14 w-auto max-w-[240px] object-contain sm:h-16 sm:max-w-[260px]"
              />
            </Link>
            <p className="mt-5 max-w-[300px] text-sm leading-relaxed text-gray-300">
              {data.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:px-7">
            <h4 className="font-sans text-base font-bold text-[var(--color-white)] sm:text-lg">
              {data.quickLinksTitle}
            </h4>
            <div className="mt-2 mb-5 h-[2px] w-10 bg-[var(--color-primary)]" />
            <ul className="space-y-3 text-sm">
              {data.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    onClick={(e) => handleScroll(e, link.url)}
                    className="group inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-[var(--color-white)]"
                  >
                    <FaChevronRight
                      aria-hidden="true"
                      className="text-[10px] text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-primary)]"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:px-7">
            <h4 className="font-sans text-base font-bold text-[var(--color-white)] sm:text-lg">
              {data.usefulLinksTitle}
            </h4>
            <div className="mt-2 mb-5 h-[2px] w-10 bg-[var(--color-primary)]" />
            <ul className="space-y-3 text-sm">
              {data.usefulLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    onClick={(e) => handleScroll(e, link.url)}
                    className="group inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-[var(--color-white)]"
                  >
                    <FaChevronRight
                      aria-hidden="true"
                      className="text-[10px] text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-primary)]"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="lg:col-span-4 lg:pl-8">
            <h4 className="font-sans text-base font-bold text-[var(--color-white)] sm:text-lg">
              {data.contactTitle}
            </h4>
            <div className="mt-2 mb-5 h-[2px] w-10 bg-[var(--color-primary)]" />
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-center gap-3.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[var(--color-primary)] text-[var(--color-white)]">
                  <FaPhoneAlt className="text-xs" aria-hidden="true" />
                </span>
                <a
                  href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}
                  className="transition-colors hover:text-[var(--color-white)]"
                >
                  {data.phone}
                </a>
              </li>

              <li className="flex items-center gap-3.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[var(--color-primary)] text-[var(--color-white)]">
                  <FaEnvelope className="text-xs" aria-hidden="true" />
                </span>
                <a
                  href={`mailto:${data.email}`}
                  className="transition-colors hover:text-[var(--color-white)]"
                >
                  {data.email}
                </a>
              </li>

              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[var(--color-primary)] text-[var(--color-white)]">
                  <FaMapMarkerAlt className="text-xs" aria-hidden="true" />
                </span>
                <span className="leading-snug">{data.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright + Social Row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-center text-xs text-gray-400 sm:text-left sm:text-[13px]">
            {data.copyrightText}
          </p>

          {data.socialLinks.length > 0 && (
            <div className="flex items-center gap-2.5">
              {data.socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  onClick={(e) => handleScroll(e, social.url)}
                  aria-label={social.ariaLabel}
                  className="grid h-8 w-8 place-items-center rounded-md border border-white/25 text-gray-200 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]"
                >
                  {socialIconMap[social.icon] ?? null}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
