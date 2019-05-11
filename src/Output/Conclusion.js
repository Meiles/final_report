import React from 'react';


const conclusion = (props) => {
    return (
            <div className="conclusion" onchange={props.changed}>
        <p>Testing involved creating a simulated EHR or Electronic Health Record, and to do that I used the                     <a className="App-link" href="https://www.hspconsortium.org/" target="_blank" rel="noopener noreferrer">HSPC </a>
 or 
            Healthcare Services Platform Consortium, which allow developers to store data to be used for testing purposes.
            This data storage solution allowed me to add test patient data to my database without having to collect or tamper
            with any existing patient data. 
            I believe that with more research on the functionality given by the HL7® FHIR® framework,
            my goal of being able to change EHR data in real-time may actually be able to be accomplished.
            Perhaps however, this kind of app would be better over a browser especially because of the lightweight nature of applications hosted
            within browsers. An Apple iWatch coule somehow do the samething, but maybe in 30 minute increments or less depending on the situation,
            but i'm not sure if external monitors other than truly professional equipment can be lifesaving. There will be solutions in the future
            that won't be expensive but will also be lightweight enough to carry. 
        </p>

            </div>

        )


};

export default conclusion;