function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container contact-container">
        <div className="about-form">
          <form action="" className="form-container">
            <h3 className="form-heading">Make an Appointment</h3>
            <div className="input-field-container">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your E-mail" />
              <input type="number" placeholder="Your Phone" />
              <input type="text" placeholder="Speciality" />
              <input type="text" placeholder="Doctor" />
              <input type="text" placeholder="Date" />
              <input
                type="submit"
                defaultValue="Make an appointment"
                className="btn btn-primary hover"
              />
            </div>
          </form>
        </div>
        <div className="contact-information">
          <h2 className="contact-heading">Get in touch with us</h2>
          <p>
            Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac
            nisl. Duis feug iat bibendum orci, non elementum urna. Cras sit amet
            sapien aliquam.
          </p>
          <div className="contact-no">
            <span>Direct Line</span> +53 345 7953 324
          </div>
          <table className="contact-table">
            <tbody>
              <tr>
                <th>Address</th>
                <td>1481 Creekside Lane Avila Beach, CA 931</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>+53 345 7953 32453</td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>yourmail@gmail.com</td>
              </tr>
            </tbody>
          </table>
          <div className="social-handle">
            <span>
              <i className="fa-brands fa-pinterest-p" />
            </span>
            <span>
              <i className="fa-brands fa-facebook-f" />
            </span>
            <span>
              <i className="fa-brands fa-twitter" />
            </span>
            <span>
              <i className="fa-brands fa-dribbble" />
            </span>
            <span>
              <i className="fa-brands fa-behance" />
            </span>
            <span>
              <i className="fa-brands fa-linkedin-in" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
