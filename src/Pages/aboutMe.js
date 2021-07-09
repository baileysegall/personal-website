import "./aboutMe.css";
import laptop from './laptop.png'
import classes from './classes.png'

function Aboutme() {
    return (
      <div className="secondPart">
          <div className="leftab">
                <p>Hi I'm Bailey.
                Before my sophomore year of high school, I had never written a line of code 
                or even clicked 'inspect' on a webpage. The thought that three years later, 
                I would be studying Electrical Engineering and Computer Science hadn't even flitted through my mind.

                I  essentially happened into coding by accident, yet as soon as I started, 
                all my intentions for the future shifted. I realized how applicable CS is to 
                my interests and how enthralled I am by its algorithmic nature. I started on 
                my own, toying around with incorporating algorithms into my everyday tasks 
                through coding applications. But quickly expanded to taking the course offered 
                at my local high school and then to other online offerings. 

                However, no matter the extent of the coursework, it always came back to me 
                exploring, learning, and building. I've now taken a full year of university 
                computer science course, and my true enjoyment of coding has not budged.

                I love what I am doing, what I am learning, and all the different ways computer 
                science and I can make a difference.

                Aside from my vested interest in hunching over a computer and a drawing board, 
                I've lived my whole life in PNW (Pacific Northwest). I am an avid outdoors enthusiast, 
                choosing to spend my non-coding time hiking, swimming, backpacking, and whatever else the
                 weather allows.
                  
                </p>
           </div>
           <div className="rightab">
             <div className="text">
              <h3 className="minitit">Some classes I've taken</h3>
              <p className="classes">Designing Information Systems and Devices I & II (current)</p>
              <p className="classes">The Structure and Interpretation of Computer Programs</p>
              <p className="classes">Data Structures</p>
             </div>
              <img className="laptop" src={classes}/>
           </div>
      </div>
    );
  }
  
  export default Aboutme;
  