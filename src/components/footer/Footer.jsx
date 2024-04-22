function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info footer-item">
          <div className="logo light">
            <h3>
              Dr <span>PRO</span>
            </h3>
            <p>Plastic Surgery</p>
          </div>
          <p>
            Nulla facilisi. Nulla egestas vel lacus sed interdum. Sed mollis,
            orci eleme ntum eleifend tempor, nunc libero porttitor tellus.
          </p>
        </div>
        <div className="footer-contact footer-item">
          <h4>Contact Info</h4>
          <p>
            +53 345 7953 32453 <br />
            yourmail@gmail.com <br />
            contact@gmail.com
          </p>
        </div>
        <div className="footer-locations footer-item">
          <h4>Our Locations</h4>
          <p className="clr-primary">Miami</p>
          <p className="margin">45 Greekside Av FL 931</p>
          <p className="clr-primary margin">Los Angeles</p>
          <p className="margin">1481 Greekside Lane Avilla Beach, CA 931</p>
        </div>
        <div className="footer-timing footer-item">
          <h4>Opening Hours</h4>
          <table border={0}>
            <tbody>
              <tr>
                <td>Monday:</td>
                <td>8:00am - 9:00pm</td>
              </tr>
              <tr>
                <td>Monday:</td>
                <td>8:00am - 9:00pm</td>
              </tr>
              <tr>
                <td>Monday:</td>
                <td>8:00am - 9:00pm</td>
              </tr>
              <tr>
                <td>Monday:</td>
                <td>8:00am - 9:00pm</td>
              </tr>
              <tr>
                <td>Monday:</td>
                <td>8:00am - 9:00pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
