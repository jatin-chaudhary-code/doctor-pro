function NewsletterSection() {
  return (
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
  );
}

export default NewsletterSection;
