(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/ConnectView.b85813fe.png"},function(e,t,a){e.exports=a.p+"static/media/EndpointsView.f5a6b0a5.png"},function(e,t,a){e.exports=a.p+"static/media/PatientSingleView.23e5d60a.png"},function(e,t,a){e.exports=a.p+"static/media/PatientsView.ce65885b.png"},function(e,t,a){e.exports=a.p+"static/media/PatientViewProp.978393f7.png"},function(e,t,a){e.exports=a.p+"static/media/appscreenview.6a78e12c.png"},function(e,t,a){e.exports=a.p+"static/media/TXWES.22482b85.png"},,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(3),r=a.n(i),l=(a(22),a(4)),s=a(5),c=a(14),h=a(6),d=a(15),p=(a(2),function(e){return o.a.createElement("div",{className:"Output",onchange:e.changed},o.a.createElement("h1",null,"FastChart"),o.a.createElement("ul",null,o.a.createElement("li",null,"Miles Cruz"),o.a.createElement("li",null,"Spring 2019")),o.a.createElement("p",null,'This application was to be tentatively titled "HealthTracker". Later in development it was changed to "FastChart" which reflected it\'s new aim towards front-facing healthcare professionals. This application will be used to download the user\'s FHIR\xae records from supported healthcare institutions. The system then updates the records in the background on a scheduled basis. The user will have to consent to give out clinical data however, test data will be used in preliminary testing. With more updates, the possibility of integrating an iWatch app to compare real-time data pulled from the FHIR records could be used to better track a person\'s state based on their medical history. The application will be primarily developed using the Xcode IDE on the Mac OSX operating system. This application will be an iOS app utilizing the swift programming language as its source. The structure of the presentation will be orally based, with a simulation of the app running to show the application when in use on the iOS framework. I will put together a short video showing a short synopsis of how the app was made as well.'))}),m=function(e){return o.a.createElement("div",{className:"introduction",onchange:e.changed},o.a.createElement("p",null,"At first, I wanted the ability to update your healthcare data in realtime with some kind of external monitor, either the Apple iWatch or newer models of fitbit. As I learned more about the different ways to retrieve healthcare data, I found that there were many different ways to perform the retrieval of medical data already on the market. However, I also saw that because there were so many different ways to connect to Electronic Health Resources and many ways that couldn't connect to each other. While doing research on potential solutions, I found the ",o.a.createElement("a",{className:"App-link",href:"https://www.hl7.org/fhir/overview.html",target:"_blank",rel:"noopener noreferrer"}," HL7\xae website "),"which pointed me towards the FHIR\xae or Fast Healthcare Interoperability Resources. This framework allows a developer to use their standardized resources to create an application using predefined classes. This cuts down on development time once a developer knows the various classes available to them through FHIR\xae."))},u=a(7),g=a.n(u),w=a(8),f=a.n(w),b=a(9),v=a.n(b),E=a(10),y=a.n(E),k=a(11),H=a.n(k),O=a(12),I=a.n(O),j=function(e){return o.a.createElement("div",{className:"design",onchange:e.changed},o.a.createElement("img",{src:I.a,width:150,height:300,mode:"fit"}),o.a.createElement("img",{src:f.a,width:200,height:400,mode:"fit"}),o.a.createElement("img",{src:g.a,width:200,height:400,mode:"fit"}),o.a.createElement("img",{src:y.a,width:200,height:400,mode:"fit"}),o.a.createElement("img",{src:v.a,width:200,height:400,mode:"fit"}),o.a.createElement("img",{src:H.a,width:200,height:400,mode:"fit"}),o.a.createElement("p",null,"This app was made in xcode in the mojave macosx environment. The source used for the application is the Swift programming language created by Apple. I also used online creation tools",o.a.createElement("a",{className:"App-link",href:"https://appicon.co/",target:"_blank",rel:"noopener noreferrer"}," appicon.co "),"to create my app icons which gave my application a more individual look."))},x=function(e){return o.a.createElement("div",{className:"conclusion",onchange:e.changed},o.a.createElement("p",null,"Testing involved creating a simulated EHR or Electronic Health Record, and to do that I used the                     ",o.a.createElement("a",{className:"App-link",href:"https://www.hspconsortium.org/",target:"_blank",rel:"noopener noreferrer"},"HSPC "),"or Healthcare Services Platform Consortium, which allow developers to store data to be used for testing purposes. This data storage solution allowed me to add test patient data to my database without having to collect or tamper with any existing patient data. I believe that with more research on the functionality given by the HL7\xae FHIR\xae framework, my goal of being able to change EHR data in real-time may actually be able to be accomplished. Perhaps however, this kind of app would be better over a browser especially because of the lightweight nature of applications hosted within browsers. An Apple iWatch coule somehow do the samething, but maybe in 30 minute increments or less depending on the situation, but i'm not sure if external monitors other than truly professional equipment can be lifesaving. There will be solutions in the future that won't be expensive but will also be lightweight enough to carry."))},T=(a(23),a(13)),A=a.n(T),C=(a(24),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={showObjects:!1},a.toggleObjectsHandler=function(){var e=a.state.showObjects;a.setState({showObjects:!e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={borderRadius:5,backgroundColor:"blue",font:"inherit",fontColor:"yellow",border:"3x solid yellow",padding:"4px"};return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:A.a,className:"App-logo",alt:"logo"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{style:e,onClick:this.toggleObjectsHandler},"Summary")," ",!0===this.state.showObjects?o.a.createElement("div",null,o.a.createElement(p,null)):null,o.a.createElement("button",{style:e,onClick:this.toggleObjectsHandler},"Introduction")," ",!0===this.state.showObjects?o.a.createElement("div",null,o.a.createElement(m,null)):null,o.a.createElement("button",{style:e,onClick:this.toggleObjectsHandler},"Design and Implementation")," ",!0===this.state.showObjects?o.a.createElement("div",null,o.a.createElement(j,null)):null,o.a.createElement("button",{style:e,onClick:this.toggleObjectsHandler},"Testing, Conclusions, and Future Work")," ",!0===this.state.showObjects?o.a.createElement("div",null,o.a.createElement(x,null)):null,o.a.createElement("a",{className:"App-link",href:"https://meiles.github.io/",target:"_blank",rel:"noopener noreferrer"},"Back to Hub")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,1,2]]]);
//# sourceMappingURL=main.cc584b7e.chunk.js.map