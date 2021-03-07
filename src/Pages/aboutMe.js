import "./aboutMe.css";
import laptop from './laptop.png'

function Aboutme() {
    return (
      <div className="secondPart">
          <div className="leftab">
                <p>Hi I'm Bailey.
                  <br></br>
                  <br></br>
                  I tried coding for the first time my sophmore year of highschool with little to no
                  intent. little did I know that four years later I would be studying Electrical Engineering
                  and Computer Science at UC Berkeley.
                  <br></br>
                  <br></br>
                  As soon as I started coding, I realized how applicable CS can be to almost all of
                  my other interests. I started toying around with it's different application and incoorperating
                  coding into my everyday tasks.
                  <br></br>
                  <br></br>
                  I love what I am doing, what I am learning, and all the different ways computer science, and I 
                  can make a difference.
                  <br></br>
                  <br></br>
                  Aside from my vested interested in hunching over a computer and a drawing board...
                  I've lived my whole life in PNW and am an avid outdoors enthusiast, choosing to spend
                  my non-coding time hiking, swimming, and enjoying the outdoors.
                
                  
                </p>
           </div>
           <div className="rightab">
             <h3 className="minitit">Some classes I've taken</h3>
             <p className="classes">Designing Information Systems and Devices I & II (current)</p>
             <p className="classes">The Structure and Interpretation of Computer Programs</p>
             <p className="classes">Data Structures</p>
              <img className="laptop" src={laptop}/>
           </div>
      </div>
    );
  }
  
  export default Aboutme;
  