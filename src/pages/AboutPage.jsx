import {
  BannerSection,
  NewsletterSection,
  PageHeading,
  SurgeonSection,
  TestimonialSection,
} from "../components";

function AboutPage() {
  return (
    <>
      {/* page heading start  */}
      <PageHeading img={"./images/about.jpg"} title={"About Us"} />
      <section className="about-section">
        <div className="container about-container">
          <div className="about-content">
            <div className="section-heading">
              <h3>This is Dr Pro</h3>
              <h2>Welcome to our Clinic</h2>
            </div>
            <p>
              Integer aliquet congue libero, eu gravida odio ultrices ut. Etiam
              ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat
              bibendum orci, non elementum urna vestibulum in. Nulla facilisi.
              Nulla egestas vel lacus sed interdum. Sed mollis, orci elementum
              eleifend tempor, nunc libero porttitor tellus, vel pharetra metus
              dolor. Integer aliquet congue libero, eu gravida odio ultrices ut.
              Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat
              bibendum orci, non elementum urna vestibulum in. Nulla facilisi.
              Nulla egestas vel lacus sed interdum. Sed mollis
            </p>
            <div className="stat-container">
              <div className="stat">
                <h3>+5000</h3>
                <p>Statisfied Patients</p>
              </div>
              <div className="stat">
                <h3>352</h3>
                <p>Face Liftings</p>
              </div>
              <div className="stat">
                <h3>718</h3>
                <p>Injectibles</p>
              </div>
            </div>
          </div>
          <div className="about-img">
            <img src="./images/intro_1.jpg" alt="" />
          </div>
        </div>
      </section>
      <TestimonialSection />
      <BannerSection />
      <SurgeonSection />
      <NewsletterSection />
    </>
  );
}

export default AboutPage;
