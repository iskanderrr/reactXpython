import React from 'react';
import "../css/pages/about.css";
import alecImage from "../assets/images/founder_alce_celestin.jpeg";

export default function About() {
  return (
    <main className='main'>
        <section className="founder-outer">
            <div className="founder-pic-side">
                <div className="first-img-outer">
                    <img className="first-img" src={alecImage}/>
                </div>
                <p className="founder-img-caution">This image is the property of the Lineo Rescue Fund. We respectfully request
                    that it not be used, reproduced, or distributed without prior authorization. Unauthorized use of this
                    photo will be monitored, and appropriate actions will be taken to ensure accountability.</p>
            </div>
            <div className="founder-details-side">
                <h3 className="founder-details-heading">MEET OUR FOUNDER, ALEC CELESTIN</h3>
                <p className="founder-details-text">
                    Alec Celestin is the driving force behind the Lineo Rescue Fund. His leadership is defined by passion,
                    determination, and a deep sense of purpose. Alec is not the kind of leader who stays on the
                    sidelines—he’s on the ground, in the fire zones, working alongside teams and volunteers to bring relief
                    to those in need.
                    <br/>
                    <br/>
                    His focus and energy push everyone around him to act quickly, think boldly, and aim higher. What sets
                    Alec apart is his authenticity. He leads with both his head and his heart, always driven by the belief
                    that we can create a better, safer world together. Despite the intensity of his mission, Alec remains
                    approachable and grounded. He’s just like the people he serves—compassionate, determined, and deeply
                    human.
                    <br/>
                    <br/>
                    Alec credits much of his character and drive to his parents, who shaped his values and inspired his
                    relentless commitment to helping others. Protective of his family’s privacy, Alec has respectfully
                    requested that no media or news channels contact them. For him, leadership is about action and results,
                    not attention or personal recognition.
                    <br/>
                    <br/>
                    Alec credits much of his character and drive to his parents, who shaped his values and inspired his
                    relentless commitment to helping others. Protective of his family’s privacy, Alec has respectfully
                    requested that no media or news channels contact them. For him, leadership is about action and results,
                    not attention or personal recognition.
                </p>
            </div>
        </section>
    </main>
  )
}