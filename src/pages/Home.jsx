import Gallery from "../components/Gallery";
import "./css/Home.css";

function Home({ items, image, text }) {
  return (
    <div className="home-container">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >

        <div className="hero-overlay"></div>
        <h2 className="hero-text">{text}</h2>
      </div>
      <div className="home-divider"></div>

      <Gallery items={items} />
    </div>
  );
}

export default Home;
