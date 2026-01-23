import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BuildSection from "@/components/BuildSection";
import Footer from "@/components/Footer";
import ContinuousBackground from "@/components/ContinuousBackground";
import GemmaSection from "@/components/GemmaSection";
import EdgeSection from "@/components/EdgeSection";
import ResponsibleAISection from "@/components/ResponsibleAISection";
import CodeAssistanceSection from "@/components/CodeAssistanceSection";
import CommunitySection from "@/components/CommunitySection";
import AppShowcaseSlider from "@/components/AppShowcaseSlider";
import OrganizersSection from "@/components/OrganizersSection";
import DevelopersSection from "@/components/DevelopersSection";
import FAQSection from "@/components/FAQSection";
import dynamic from "next/dynamic";
import SponsorsSection from "@/components/SponsorsSection";
import PartnersSection from "@/components/PartnersSection";
import MentorsSection from "@/components/MentorsSection";
import JurySection from "@/components/JurySection";
import { Analytics } from "@vercel/analytics/next"

const TimelineSection = dynamic(() => import("@/components/TimelineSection"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-white/5 rounded-3xl" />
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ContinuousBackground />
      <Navbar />
      <Hero />
      {/* <BuildSection /> */}
      <GemmaSection />
      <EdgeSection />
      <ResponsibleAISection />
      <TimelineSection />
      <CodeAssistanceSection />
      <PartnersSection />
      <MentorsSection />
      <JurySection />
      <SponsorsSection />
      <AppShowcaseSlider />
      <OrganizersSection />
      <DevelopersSection />
      <FAQSection />
      <CommunitySection />
      <Analytics />
      <Footer />
    </main>
  );
}
