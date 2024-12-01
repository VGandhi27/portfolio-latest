import Link from "next/link";
import styles from '../app/style/contact.scss'; // Import your SCSS module

export default function Contact_Com() {
  return (
    <div className="contactContainer">
      <div className={styles.header}>
        <h1 className="text-4xl font-bold mt-2 mb-6">Eager to Connect? Contact Me</h1>
      </div>

      <form
        action="https://formspree.io/f/{your_form_id}" // Replace with your form endpoint
        method="POST"
        className="form"
      >
        <div className="formField">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="inputField"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="formField">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="inputField"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="formField">
          <label htmlFor="subject" className="label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="inputField"
            placeholder="Subject"
          />
        </div>

        <div className="formField">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="textArea"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className="submitButton">
          <button type="submit" className="submitBtn">
            Send Message
          </button>
        </div>
      </form>

      <div className="linkSection">
        <p>
          Or you can connect with me on{" "}
          <Link href="https://www.linkedin.com/in/vidushi-gandhi/" className="link">
            LinkedIn
          </Link>
        </p>
      </div>
    </div>
  );
}
