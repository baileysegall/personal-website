import './contact.css';
import sit from './sit.png';
import linkedin from './linkedin.png';
import github from './github.png';
import resume from './document.png';
import res from './Bailey Segall Resume.pdf';

function Contact(){
    return(
        <div className='contact'>
            <div className='sitting'>
                <img className='sit' src={sit}/>
            </div>
            <div className='contactstuff'>
                <h1 className="contactme">please feel free to contact me,<br></br> i'd love to chat</h1>
                <div className="email">
                <h1 className="e">email</h1>
                    <a className='link' href="mailto:bailey@segallgirls.com">
                        <h1>bailey@segallgirls.com</h1></a>   
                </div>
                <div className="logos">
                    <a  href='https://www.linkedin.com/in/bailey-segall'>
                        <img className="icon" src={linkedin}/>
                        </a>
                    <a href='https://github.com/baileysegall'>
                        <img className="icon" src={github}/>
                        </a>
                    <a href="https://drive.google.com/file/d/1yJzw094Hf-jkZ1VYOJzis-hg2Do20XMt/view?usp=sharing">
                        <img className="icon" src={resume}/>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Contact;