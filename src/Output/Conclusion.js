import React from 'react';


const conclusion = (props) => {
    return (
            <div className="conclusion" onchange={props.changed}>
        <p>
            I believe that with more research on the functionality given by the HL7® FHIR® framework,
            my goal of being able to change EHR data in real-time may actually be able to be accomplished.
            Perhaps however, this kind of app would be better over a browser especially because of the lightweight nature of applications hosted
            within browsers.
        </p>

            </div>

        )


};

export default conclusion;