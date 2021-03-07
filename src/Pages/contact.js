import './contact.css';
import sit from './sit.png';

function Contact(){
    return(
        <div className='contact'>
            <div className='sitting'>
                <img className='sit' src={sit}/>
            </div>
            <div className='contactstuff'>
                <h1>Contacts</h1>
            </div>
        </div>
    );
}

export default Contact;