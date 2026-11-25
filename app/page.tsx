import rawData from '@/data/templates.json';
import { RepairingTemplateData } from '@/types/templates.types';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const data = rawData as RepairingTemplateData;
  const sections = data.categories.Repairing.sections;

  return (
    <main className="flex min-h-screen w-full min-w-0 flex-col bg-[var(--color-bg-main)]">
      <Hero data={sections.Hero.variants.RepairingHero2} />
      <AboutUs data={sections.AboutUs.variants.RepairingAboutUs2} />
      <Services data={sections.Services.variants.RepairingServices2} />
      <WhyChooseUs data={sections.WhyChooseUs.variants.RepairingWhyChooseUs2} />
      <Testimonials data={sections.Testimonials.variants.RepairingTestimonials2} />
      <Contact data={sections.Contact.variants.RepairingContact2} />
    </main>
  );
}
