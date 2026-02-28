import AboutHeroSection from '@/components/about/AboutHero'
import AwardsSection from '@/components/about/Award/AwardsSection'
import StorySection from '@/components/about/Story'
// import StorySection from '@/components/about/Story/StorySection'
import TeamSection from '@/components/about/Team/TeamSection'
import VisionPillarsSection from '@/components/about/VisionPillarsSection-Animated'
import WorkProcessSection from '@/components/about/work/WorkProcessSection'
import BrandSection from "@/components/Hero/HeroCTA";

function page() {
  return (
    <>
    <AboutHeroSection/>
    <StorySection/>
    <VisionPillarsSection/>
    <WorkProcessSection/>
    <AwardsSection/>
    <TeamSection/>
    <BrandSection/>
    </>
  )
}

export default page