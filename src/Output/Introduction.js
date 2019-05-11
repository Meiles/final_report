import React from 'react';


const introduction = (props) => {
    return (
            <div className="introduction" onchange={props.changed}>
    
        <p>
        At first, I wanted the ability to update your healthcare data in realtime with some kind of external monitor,
        either the Apple iWatch or newer models of fitbit. As I learned more about the different ways to retrieve healthcare data,
        I found that there were many different ways to perform the retrieval of medical data already on the market.
        However, I also saw that because there were so many different ways to connect to Electronic Health Resources
        and many ways that couldn't connect to each other. While doing research on potential solutions, I found the <a className="App-link" href="https://www.hl7.org/fhir/overview.html" target="_blank" rel="noopener noreferrer"> HL7® website </a>which pointed me towards
        the FHIR® or Fast Healthcare Interoperability Resources. This framework allows a developer to use their standardized resources
        to create an application using predefined classes. This cuts down on development time once a developer knows the various classes
        available to them through FHIR®.
        </p>

            </div>

        )


};

export default introduction;