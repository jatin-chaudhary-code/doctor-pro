import {
  AboutSection,
  BannerSection,
  DiscountSection,
  HomeSection,
  NewsletterSection,
  ServiceSection,
  WhyChooseSection,
} from "../components";

function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <WhyChooseSection />
      <BannerSection />
      <ServiceSection />
      <DiscountSection />
      <NewsletterSection />
    </>
  );
}

export default HomePage;
