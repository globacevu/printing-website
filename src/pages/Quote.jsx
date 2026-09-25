export default function Quote() {
  return (
    <section className="page">

      <h1>Request Quote</h1>

      <form className="contact-form">

        <input placeholder="Name" />

        <input placeholder="Email" />

        <input placeholder="Phone" />

        <input placeholder="Quantity" />

        <select>
          <option>Business Cards</option>
          <option>Packaging</option>
          <option>Books</option>
          <option>Flyers</option>
        </select>

        <textarea placeholder="Project details"></textarea>

        <button>Submit</button>

      </form>

    </section>
  );
}