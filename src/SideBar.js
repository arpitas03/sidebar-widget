import React from "react";
import cloudIcon from "./assets/images/partlyCloudy.png";
import sunIcon from "./assets/images/sun.png";
import Accordion from "./components/Accordian/Accordian";

function SidebarWidget() {
  const accordionData = 
    {
      heading: "DELAYED ROUTES",
      content:
        "",
    }
  ;
  return (
    <div className="mainDiv">
      <div className="contentAlignment">
      <div className="container">
        <div className="row">
          <div className="col alignCenter">
            <div className="city offset-md-2">Melbourne</div>
            <div className="temp offset-md-2" >32°</div>
            <div className="dateTime">Tue 16th 3:46PM</div>
          </div>
          <div className="col">
            <img className="cloudIcon" src={cloudIcon} alt={cloudIcon} height={120} width={120} />
          </div>
        </div>
        <div className="row">
          <div className="col city"><span>Humidity</span></div>
          <div className="col"> <span>78%</span></div>
        </div>
        <div className="row">
          <div className="col city">Chance of Rain</div>
          <div className="col "> 34%</div>
        </div>
        <div className="row">
          <div className="col   city">Wind</div>
          <div className="col  ">
            21 <span className="city">kmh</span>
          </div>
        </div>
        <div className="row">
          <div className="col   city">Tomorrow</div>
          <div className="col  ">
            <span>30°</span>
            <img src={sunIcon} alt={sunIcon} height={12} width={12}></img>
          </div>
        </div>
      </div>
      </div>
      
      <div className="accordion ">
        <Accordion heading={accordionData.heading} content={accordionData.content}/> 
    </div>
     
    </div>
  );
}

export default SidebarWidget;
