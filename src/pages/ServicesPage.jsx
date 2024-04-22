import {
  BannerSection,
  NewsletterSection,
  PageHeading,
  ServicePriceSection,
  ServiceSection,
} from "../components";

function ServicesPage() {
  return (
    <>
      <PageHeading img={"./images/contact.jpg"} title={"Services"} />
      <ServiceSection />
      <BannerSection />
      <ServicePriceSection />
      <NewsletterSection />
    </>
  );
}

export default ServicesPage;
