function PageHeading({ img, title }) {
  return (
    <section
      className="page-heading-section"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container">
        <h1 className="main-heading">{title}</h1>
        <h5 className="sub-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h5>
      </div>
      <img src="./images/home_overlay.png" alt="" className="overlay-img" />
    </section>
  );
}

export default PageHeading;
