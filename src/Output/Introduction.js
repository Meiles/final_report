import React from 'react';


const introduction = (props) => {
    return (
            <div className="introduction" onchange={props.changed}>
    
        <p>
        At first, I wanted the ability to update your healthcare data in realtime with some kind of external monitor,
        either the Apple iWatch or newer models of fitbit. As I learned more about the different ways to retrieve healthcare data,
        I found that there were many different ways to perform the retrieval of medical data already on the market.
        However, I also saw that because there were so many different ways to connect to Electronic Health Resources
        and many ways that couldn't connect to each other. While looking around, I found the HL7® website which pointed me towards
        the FHIR or Fast Healthcare Interoperability Resources.
        </p>time.

            </div>

        )


};

export default introduction;