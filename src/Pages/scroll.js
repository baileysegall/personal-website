import "./scroll.css";

function Scroll() {
  return (
    <div className="bar">
      <ul>
        <li><a className="active" href="hom">Bailey Segall</a></li>
        <li><a href="about">About Me</a></li>
        <li><a href="./Proj">Projects</a></li>
        <li><a href="#Extras">Fun Extras</a></li>
        <li><a href="cont">Contact Me</a></li>
      </ul>
    </div>
  );
}

export default Scroll;
