import Projectsapi from "./ProjectsApi.js";
import './Proj.css'

function Proj(){
    return(
    <div>
        <h1>Projects</h1>
        <div className="outer">
        <Projectsapi />
        </div>
    </div>
    );
}

export default Proj;