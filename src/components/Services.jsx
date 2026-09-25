const services = [
  ["Business Cards", "/images/business.jpg"],
  ["Packaging", "/images/packaging.jpg"],
  ["Books", "/images/books.jpg"],
  ["Flyers", "/images/flyers.jpg"],
  ["Paper Bags", "/images/paper-bags.jpg"],
  ["Posters", "/images/posters.jpg"],
];

export default function Services() {
  return (
    <section className="page">

      <h1>Our Services</h1>

      <div className="grid">

        {services.map((item) => (
          <div className="card" key={item[0]}>

            <img
              src={item[1]}
              alt={item[0]}
            />

            <h3>{item[0]}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}