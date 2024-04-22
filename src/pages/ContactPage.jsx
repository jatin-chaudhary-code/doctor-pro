import { ContactSection, NewsletterSection, PageHeading } from "../components";

function ContactPage() {
  return (
    <>
      <PageHeading img={"./images/contact.jpg"} title={"Contact"} />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}

export default ContactPage;
