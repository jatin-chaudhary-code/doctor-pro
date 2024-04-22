function AboutPage() {
  return (
    <>
      {/* page heading start  */}
      <section
        className="page-heading-section"
        style={{ backgroundImage: 'url("./images/about.jpg")' }}
      >
        <div className="container">
          <h1 className="main-heading">About us</h1>
          <h5 className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
        </div>
        <img src="./images/home_overlay.png" alt="" className="overlay-img" />
      </section>
      {/* page heading end  */}
      {/* about section start  */}
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
      {/* about section end */}
      {/* testimonial section start  */}
      <section className="testimonial-section">
        <div className="container">
          <div className="section-heading center">
            <h3>This is Dr Pro</h3>
            <h2>Clients testimonials</h2>
          </div>
          <div className="testimonial-icon">
            <i className="fa-solid fa-quote-left" />
          </div>
          <div className="testimonial-slide">
            <p className="testimonial-content">
              Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
              nisl. Duis feugiat bibendum orci, non elementum urna vestibulum
              in. Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed
              mollis, orci elementum eleifend tempor, nunc libero porttitor
              tellus, vel pharetra metus dolor.
            </p>
            <div className="testimonial-detail">
              <img
                src="./images/test.jpg"
                alt="testimonial"
                className="testi-img"
              />
              <p className="testimonial-name">
                Mairia Williams, <span>Patient</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial section end  */}
      {/* banner-section start  */}
      <section className="banner-section">
        <div className="container">
          <div className="left-side">
            <h2>Make your appointment today!</h2>
            <p>Etiam ac erat ut enim maximus accumsan vel ac nisl</p>
          </div>
          <div className="right-side">+34 586 778 8892</div>
        </div>
      </section>
      {/* banner section end  */}
      {/* surgeon section start  */}
      <section className="surgeon-section">
        <div className="container">
          <div className="section-heading center">
            <h3>This is Dr Pro</h3>
            <h2>Meet the Surgeons</h2>
          </div>
          <div className="surgeon-container">
            <div className="surgeon-card">
              <div className="surgeon-img">
                <img src="./images/team_1.jpg" alt="surgeon" />
              </div>
              <h3 className="surgeon-name">Micheal Smith</h3>
              <p className="surgeon-post">Plastic Surgeon</p>
              <p className="content">
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
            <div className="surgeon-card">
              <div className="surgeon-img">
                <img src="./images/team_2.jpg" alt="surgeon" />
              </div>
              <h3 className="surgeon-name">Micheal Smith</h3>
              <p className="surgeon-post">Plastic Surgeon</p>
              <p className="content">
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
            <div className="surgeon-card">
              <div className="surgeon-img">
                <img src="./images/team_3.jpg" alt="surgeon" />
              </div>
              <h3 className="surgeon-name">Micheal Smith</h3>
              <p className="surgeon-post">Plastic Surgeon</p>
              <p className="content">
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* surgeon section end  */}
      {/* newsletter section start  */}
      <section className="newsletter-section">
        <div className="container">
          <h1>subscribe to our newsletter</h1>
          <div className="input-field">
            <input type="email" placeholder="Your E-mail" />
            <a href="#" className="btn btn-primary">
              subscribe
            </a>
          </div>
        </div>
      </section>
      {/* newsletter section end  */}
    </>
  );
}

export default AboutPage;
