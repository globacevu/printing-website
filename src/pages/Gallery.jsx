const gallery = [
  "gallery1.jpg",
  "gallery2.jpg",
  "gallery3.jpg",
  "gallery4.jpg",
  "gallery5.jpg",
  "gallery6.jpg",
];

export default function Gallery() {
  return (
    <section className="page">

      <h1>Gallery</h1>

      <div className="masonry">

        {gallery.map((img) => (
          <img key={img} src={`/images/${img}`} alt="" />
        ))}

      </div>

    </section>
  );
}