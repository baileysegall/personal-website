import "./scroll.css";

function Scroll() {
  return (
    <div className="bar">
      <ul>
        <li><a className="active" href="#home">Bailey Segall</a></li>
        <li><a href="#aboutMe">About Me</a></li>
        <li><a href="#experience">Projects</a></li>
        <li><a href="#Extras">Fun Extras</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </div>
  );
}

export default Scroll;
