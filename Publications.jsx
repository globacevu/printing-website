const books = [
  "book1.jpg",
  "book2.jpg",
  "book3.jpg",
];

export default function Publications() {
  return (
    <section className="page">

      <h1>Publications</h1>

      <div className="grid">

        {books.map((book) => (
          <div className="card" key={book}>
            <img src={`/images/${book}`} alt="" />
            <button>Download PDF</button>
          </div>
        ))}

      </div>

    </section>
  );
}