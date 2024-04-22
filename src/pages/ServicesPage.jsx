function ServicesPage() {
  return (
    <>
      {/* page heading start  */}
      <section
        className="page-heading-section"
        style={{ backgroundImage: 'url("./images/contact.jpg")' }}
      >
        <div className="container">
          <h1 className="main-heading">Contact</h1>
          <h5 className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
        </div>
        <img src="./images/home_overlay.png" alt="" className="overlay-img" />
      </section>
      {/* page heading end  */}
      {/* service section start  */}
      <section className="service-section">
        <div className="container">
          <div className="section-heading center">
            <h3>This is Dr Pro</h3>
            <h2>Our Services</h2>
          </div>
          <div className="service-item-container">
            <div className="service-item">
              <div className="icon">
                <img src="./images/icon_4.svg" alt="" />
              </div>
              <h4>Breast Augementation</h4>
              <p>
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img src="./images/icon_5.svg" alt="" />
              </div>
              <h4>Breast Augementation</h4>
              <p>
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img src="./images/icon_6.svg" alt="" />
              </div>
              <h4>Breast Augementation</h4>
              <p>
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img src="./images/icon_7.svg" alt="" />
              </div>
              <h4>Breast Augementation</h4>
              <p>
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img src="./images/icon_8.svg" alt="" />
              </div>
              <h4>Breast Augementation</h4>
              <p>
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <img src="./images/icon_3.svg" alt="" />
              </div>
              <h4>Breast Augementation</h4>
              <p>
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
                nisl. Duis feugiat bibendum orci, non elementum urna.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* service section end  */}
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
      {/* service price section start  */}
      <section className="service-price-section">
        <div className="container service-price-container">
          <div className="service-price-card">
            <h4 className="service-name">Eyelid Surgery</h4>
            <p className="service-content">
              Integer aliquet congue libero, eu gravida odio ultrces ut. Etiam
              ac erat ut enim maximus accumsan vel ac nisl.
            </p>
            <div className="service-price">From $3500</div>
          </div>
          <div className="service-price-card">
            <h4 className="service-name">Eyelid Surgery</h4>
            <p className="service-content">
              Integer aliquet congue libero, eu gravida odio ultrces ut. Etiam
              ac erat ut enim maximus accumsan vel ac nisl.
            </p>
            <div className="service-price">From $3500</div>
          </div>
          <div className="service-price-card">
            <h4 className="service-name">Eyelid Surgery</h4>
            <p className="service-content">
              Integer aliquet congue libero, eu gravida odio ultrces ut. Etiam
              ac erat ut enim maximus accumsan vel ac nisl.
            </p>
            <div className="service-price">From $3500</div>
          </div>
          <div className="service-price-card">
            <h4 className="service-name">Eyelid Surgery</h4>
            <p className="service-content">
              Integer aliquet congue libero, eu gravida odio ultrces ut. Etiam
              ac erat ut enim maximus accumsan vel ac nisl.
            </p>
            <div className="service-price">From $3500</div>
          </div>
        </div>
      </section>
      {/* service price section end  */}
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

export default ServicesPage;
