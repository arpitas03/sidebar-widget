import React from "react";
import cloudIcon from "./assets/images/partlyCloudy.png";
import sunIcon from "./assets/images/sun.png";
import Accordion from "./components/Accordian/Accordian";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

function SidebarWidget() {

  const accordianContent = (data) => {
    return data.map((item,i)=> {
      return (
        <div className="container accContainer" key={i}>
        <div className="row">
          <div className="col-1">
            <span className={"dot " + (item.trafficLevel === 'High' ? 'red' : 'yellow')}></span>
          </div>
          <div className="col-8 route1" >{item.routeTitle}</div>
          <div className="col-1 route2">{item.distance}</div>
        </div>
        <div className="row">
          <div className="col-1">
            <FontAwesomeIcon icon={faArrowDownLong} color="#515459"/>
          </div>
          <div className="col-8 route2">
            <div>{item.subroute1}</div>
            <div>{item.subroute2}</div>
          </div>
          <div className="col-3 ac">{item.time}<span className="route2"> min</span></div>
        </div>
       
      </div>
      );
    })
 
  };

  const routeData = [{
    routeTitle: "Monash Fwy Out",
    distance: "13km",
    subroute1: "Kings Way",
    subroute2: "EastLink",
    time: "45",
    trafficLevel: "High"
  },
  {
    routeTitle: "Monash Fwy Out",
    distance: "15km",
    subroute1: "Kings Way",
    subroute2: "EastLink",
    time: "28",
    trafficLevel: "High"
  },
  {
    routeTitle: "Western Ring Rd",
    distance: "5km",
    subroute1: "West Gate Fwy",
    subroute2: "Western Fwy",
    time: "5",
    trafficLevel: "Moderate"
  },
  {
    routeTitle: "Eastern Fwy",
    distance: "15km",
    subroute1: "Hoddle St",
    subroute2: "Springvale Rd",
    time: "25",
    trafficLevel: "Moderate"
  }]
  const accordionData = {
    heading: "DELAYED ROUTES",
    content: accordianContent(routeData),
  };
  return (
    <div className="mainDiv">
      <div className="contentAlignment">
        <div className="container">
          <div className="row">
            <div className="col alignCenter">
              <div className="city offset-md-2">Melbourne</div>
              <div className="temp offset-md-2">32°</div>
              <div className="dateTime">Tue 16th 3:46PM</div>
            </div>
            <div className="col">
              <img
                className="cloudIcon"
                src={cloudIcon}
                alt={cloudIcon}
                height={120}
                width={120}
              />
            </div>
          </div>
          <div className="row">
            <div className="col city">
              <span>Humidity</span>
            </div>
            <div className="col">78%</div>
          </div>
          <div className="row">
            <div className="col city">Chance of Rain</div>
            <div className="col"> 34%</div>
          </div>
          <div className="row">
            <div className="col city">Wind</div>
            <div className="col  ">
              21 <span className="city">kmh</span>
            </div>
          </div>
          <div className="row">
            <div className="col city">Tomorrow</div>
            <div className="col">
              <span>30°</span>
              <img src={sunIcon} alt={sunIcon} height={12} width={12}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion ">
        <Accordion
          heading={accordionData.heading}
          content={accordionData.content}
        />
      </div>
    </div>
  );
}

export default SidebarWidget;
