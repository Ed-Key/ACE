import "../styles/main.css";
import Card from "./Card";
import Grace from "./contact-pics/grace_caldara.png";
import Malfalda from "./contact-pics/mafalda_gueta.png"

function Contact() {

    return(
        <div className="contact">
            <h1 className="contact-title">
                <b>Program Directors</b>
            </h1>
            <div className="card-container">
                <Card 
                    imgSrc={Grace}
                    position="Director"
                    name="Grace Caldara"
                    email="Grace.Caldara@tufts.edu"
                />
                <Card 
                    imgSrc={Malfalda}
                    position="Diversity Program Administrator"
                    name="Malfalda Gueta"
                    email="Malfalda.Gueta@tufts.edu"
                />
            </div>
        </div>
    );
}

export default Contact;