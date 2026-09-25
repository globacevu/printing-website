export default function Contact() {
  return (
    <section className="page">

      <h1>Contact Us</h1>

      <form className="contact-form">

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <input type="tel" placeholder="Phone" />

        <textarea placeholder="Message"></textarea>

        <button>Send Message</button>

      </form>

    </section>
  );
}