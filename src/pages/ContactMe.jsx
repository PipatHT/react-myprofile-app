import { useState } from "react";

const fields = [
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "name", label: "Name", type: "text" },
  { id: "address", label: "Address", type: "text" },
];

export default function ContactMe() {
  const [formNotice, setFormNotice] = useState("");

  return (
    <section className="page-content contact-page">
      <h1 className="page-title">Contact <span className="accent">Me</span></h1>
      <p className="contact-intro">Let&apos;s get in touch!</p>

      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          setFormNotice("This form is a visual prototype and is not connected yet.");
        }}
      >
        <div className="contact-fields">
          {fields.map((field) => (
            <label className="contact-field" htmlFor={field.id} key={field.id}>
              <span>{field.label}</span>
              <input id={field.id} name={field.id} type={field.type} />
            </label>
          ))}
        </div>
        <label className="contact-field contact-message" htmlFor="message">
          <span>Content</span>
          <input id="message" name="message" type="text" />
        </label>
        <label className="newsletter-option" htmlFor="newsletter">
          <input id="newsletter" name="newsletter" type="checkbox" />
          <span>I would like to receive the newsletter.</span>
        </label>
        <button className="contact-submit" type="submit">Submit</button>
        {formNotice && <p className="contact-status" role="status">{formNotice}</p>}
      </form>
    </section>
  );
}
