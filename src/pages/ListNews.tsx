import { HeroSection } from "../components/HeroSection";
import { SiteWrapper } from "../components/SiteWrapper";
import { NewsList } from "../components/NewsList";
import { Subscription } from "../components/Subscription";
import { Footer } from "../components/Footer";

export const ListNews = () => {
  return (
    <SiteWrapper>
      <HeroSection />
      <NewsList />
      <Subscription />
      <Footer />
    </SiteWrapper>
  );
};
