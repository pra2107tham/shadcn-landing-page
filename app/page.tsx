import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "AI-Powered Business Automation Solutions",
  description: "Automate your business operations and boost revenue with AI.",
  openGraph: {
    type: "website",
    url: "https://your-website-url.com",
    title: "AI-Powered Business Automation Solutions",
    description: "Automate your business operations and boost revenue with AI.",
    images: [
      {
        url: "https://your-image-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI-Powered Business Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your-twitter-handle",
    title: "AI-Powered Business Automation Solutions",
    description: "Automate your business operations and boost revenue with AI.",
    images: [
      "https://your-image-url.com/og-image.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      {/* <HowItWorksSection /> */}
      <CommunitySection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
