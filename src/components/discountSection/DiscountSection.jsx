function DiscountSection() {
  return (
    <section className="discount-section">
      <img src="./images/extra.webp" className="bg-img" />
      <div className="container">
        <div className="discount-content">
          <h3>
            30<sup>%</sup> <span>Discount</span>
          </h3>
          <h1>Only in August</h1>
          <p>
            Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis,
            orci elementum eleifend tempor, nunc libero porttitor tellus.
          </p>
          <a href="#" className="btn btn-primary hover">
            read more
          </a>
        </div>
      </div>
    </section>
  );
}

export default DiscountSection;
