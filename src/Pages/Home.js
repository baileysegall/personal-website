import "./Home.css";
import Cover from"./CoverMe.png";

function Home() {
  return (
    <div className="main">
      <div className="left">
          <img className="headerImage" src={Cover} />
      </div>
      <div className="right">
        <h1>Bailey Segall</h1>
      </div>
    </div>
  );
}

export default Home;
