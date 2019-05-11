import React from 'react';
import './Output.css';
import connectview from './ConnectView.png';
import endpointsview from './EndpointsView.png';
import patientsingleview from './PatientSingleView.png';
import patientview from './PatientsView.png';
import patientviewprop from './PatientViewProp.png';



const design = (props) => {
    return (
            <div className="design" onchange={props.changed}>
                <img src={endpointsview} width={200} height={400} mode='fit'/>
                <img src={connectview} width={200} height={400} mode='fit'/>
                <img src={patientview} width={200} height={400} mode='fit'/>
                <img src={patientsingleview} width={200} height={400} mode='fit'/>
                <img src={patientviewprop} width={200} height={400} mode='fit'/>
                <p>
                    This app was made in xcode in the mojave macosx environment.
                    The source used for the application is the Swift programming language created by Apple.
                    I also used online creation tools
                    <a className="App-link" href="https://appicon.co/" target="_blank" rel="noopener noreferrer"> appicon.co </a>
                    to create my app.
                </p>

            </div>

        )


};

export default design;