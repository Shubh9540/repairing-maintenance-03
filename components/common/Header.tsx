'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!data) return;

    const sectionIds = [...data.navLinks, data.contactButton]
      .map((link) => link.url.split('#')[1])
      .filter(Boolean);

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 300) + 80;
      let currentId = sectionIds[0] ?? 'hero';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) currentId = id;
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) {
        currentId = sectionIds[sectionIds.length - 1] ?? currentId;
      }

      setActiveId(currentId);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [data]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    const hash = url.split('#')[1];
    if (!hash) return;

    const target = document.getElementById(hash);
    if (target) {
      e.preventDefault();
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${hash}`);
      setActiveId(hash);
    }
  };

  if (!data) return null;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg-main)] transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1280px] items-center justify-between gap-4 px-4 lg:h-[86px] lg:px-8">
        {/* Left: Brand Logo */}
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, '/#hero')}
          aria-label={data.logoAlt}
          className="flex shrink-0 items-center"
        >
          <Image
            src={data.logo}
            alt={data.logoAlt}
            width={380}
            height={110}
            priority
            unoptimized
            className="h-16 w-auto max-w-[260px] origin-left scale-[1.12] object-contain sm:h-[72px] sm:max-w-[320px] lg:h-[80px] lg:max-w-[380px]"
          />
        </Link>

        {/* Center: Navigation Links with bottom active underline */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary navigation">
          {data.navLinks.map((link) => {
            const sectionId = link.url.split('#')[1];
            const isActive = activeId === sectionId;
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={(e) => handleNavClick(e, link.url)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-[17px] xl:text-[18px] transition-colors no-underline ${
                  isActive
                    ? 'font-semibold text-[var(--color-primary)]'
                    : 'font-medium text-[var(--color-heading)] hover:text-[var(--color-primary)]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[var(--color-primary)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Contact Us Button + Mobile Menu Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={data.contactButton.url}
            onClick={(e) => handleNavClick(e, data.contactButton.url)}
            className="hidden sm:inline-flex items-center gap-2.5 rounded-lg bg-[var(--color-primary)] px-6 py-3 text-[16px] font-semibold text-[var(--color-white)] shadow-sm transition-colors duration-200 hover:bg-[var(--color-primary-hover)]"
          >
            <FaPhoneAlt className="text-sm" />
            <span>{data.contactButton.label}</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-border)] text-[var(--color-heading)] transition hover:bg-[var(--color-bg-soft)] lg:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          className="border-t border-[var(--color-border)] bg-[var(--color-bg-main)] px-4 py-4 shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {data.navLinks.map((link) => {
              const sectionId = link.url.split('#')[1];
              const isActive = activeId === sectionId;
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={(e) => {
                    handleNavClick(e, link.url);
                    setOpen(false);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-[var(--color-border)] py-3 text-[15px] transition no-underline ${
                    isActive
                      ? 'font-semibold text-[var(--color-primary)]'
                      : 'font-medium text-[var(--color-heading)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href={data.contactButton.url}
                onClick={(e) => {
                  handleNavClick(e, data.contactButton.url);
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2.5 rounded-lg bg-[var(--color-primary)] px-5 py-3 text-[15px] font-semibold text-[var(--color-white)] shadow-sm transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                <FaPhoneAlt className="text-xs" />
                <span>{data.contactButton.label}</span>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
