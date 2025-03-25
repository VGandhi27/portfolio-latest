"use client"; // Ensure it's a client component

import { useState } from "react";
import Link from "next/link";
import styles from "../app/style/contact.scss"; // Import your SCSS module

export default function Contact_Com() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/mqaeryzl", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset(); // Reset the form after submission
    } else {
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="contactContainer" style={{marginTop: '5rem' }}>
      <div className={styles.header}>
        <h1 className="text-4xl font-bold mt-2 mb-6">
          Eager to Connect
        </h1>
      </div>

      {submitted ? (
        <div className="min-h-[50vh] thankYouMessage text-green-600 text-l font-bold">
          Thank you for submitting the form! I will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="min-h-[60vh] form">
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
      )}

      <div className="linkSection" style ={{marginTop : '2rem'}}>
        <p>
          Or you can connect with me on{" "}
          <Link href="https://www.linkedin.com/in/vidushi-gandhi27/" className="link text-green-600">
            LinkedIn
          </Link>
        </p>
      </div>
    </div>
  );
}
