function TestimonialSection() {
  return (
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
            nisl. Duis feugiat bibendum orci, non elementum urna vestibulum in.
            Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis,
            orci elementum eleifend tempor, nunc libero porttitor tellus, vel
            pharetra metus dolor.
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
  );
}

export default TestimonialSection;
