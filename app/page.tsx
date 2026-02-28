import Creative from "@/components/services/creative";
import { Helping } from "@/components/Home/Helping";
import SelectedWork from "@/components/work/Selectedwork ";
import Shared from "@/components/Home/testimonial";
import WhyChooseUs from "@/components/Why/WhyChooseUs";
import Package from "@/components/Package/Package";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import BrandSection from "@/components/Hero/HeroCTA";
import HomeHeroSection from "@/components/Hero/HeroSection";
import DefaultFAQSection from "@/components/global/FQA/DefaultFAQSection";
import { HEADING_ITEMS } from "@/lib/data/Services";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <TrustedBy />
      <Helping />
      <SelectedWork />
      <WhyChooseUs />
      <Creative HEADING_ITEMS={HEADING_ITEMS} ctaText="Service All Items" />
      <Shared />
      <Package />
      <DefaultFAQSection />
      <BrandSection />
    </>
  );
}