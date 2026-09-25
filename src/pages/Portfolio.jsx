const portfolio = [
  "business-cards.jpg",
  "packaging.jpg",
  "books.jpg",
  "paper-bags.jpg",
  "flyers.jpg",
  "posters.jpg",
];

export default function Portfolio() {
  return (
    <section className="page">

      <h1>Portfolio</h1>

      <div className="masonry">

        {portfolio.map((img) => (
          <img key={img} src={`/images/${img}`} alt="" />
        ))}

      </div>

    </section>
  );
}