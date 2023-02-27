import React, { useEffect, useState } from "react";
import cloudIcon from "./assets/images/cloud.jpeg";
import sunIcon from "./assets/images/sun.png";
import Accordion from "./components/Accordian/Accordian";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import RampChart from "./components/RampChart/RampChart";
import getRampAlgorithms from "./mockApi";
import { routeData } from "./data";

function SidebarWidget() {
  const [data, setData] = useState([]);
  const [rampData, setRampData] = useState([]);

  // api call
  useEffect(() => {
    getRampAlgorithms((ramps) => setData(ramps));
  }, []);

  // calculating the ramps running a particular algorithm
  // setting the ramp data as per pie chart data format
  useEffect(() => {
    let chartArr = [];
    const result = data.reduce((acc, item) => {
      acc[item.algorithm] = (acc[item.algorithm] || 0) + 1;
      return acc;
    }, {});
    Object.entries(result).map(([key, value]) => {
      return chartArr.push({ name: key, value: value });
    });
    setRampData(chartArr);
  }, [data]);

  // function returning delayed route list
  const routeWidgetContent = (data) => {
    return data.map((item, i) => {
      return (
        <div className="container accContainer " key={i} id="routes">
          <div className="row">
            <div className="col-1">
              <span
                className={
                  "dot " + (item.trafficLevel === "High" ? "red" : "yellow")
                }
                data-testid="circle"
              ></span>
            </div>
            <div className="col-8 route1">{item.routeTitle}</div>
            <div className="col-1 route2 dist">{item.distance}</div>
          </div>
          <div className="row">
            <div className="col-1">
              <FontAwesomeIcon icon={faArrowDownLong} color="#91969e" className="arrowIcon" data-testid="arrowIcon"/>
            </div>
            <div className="col-7 route2">
              <div>{item.subroute1}</div>
              <div>{item.subroute2}</div>
            </div>
            <div className="col-3 timeDiv">
              {item.time}
              <span className="minDiv"> min</span>
            </div>
          </div>
        </div>
      );
    });
  };

  // setting delayed route content
  const delayedRouteContent = {
    heading: "DELAYED ROUTES",
    content: routeWidgetContent(routeData),
  };
  return (
    <div className="mainDiv">
      <div className="contentAlignment">
        <div className="container">
          <div className="row">
            <div className="col alignCenter">
              <div className="city">Melbourne</div>
              <div className="temp">32°</div>
              <div className="dateTime">Tue 16th 3:46PM</div>
            </div>
            <div className="col">
              <img
                className="cloudIcon"
                src={cloudIcon}
                alt={cloudIcon}
                height={100}
                width={110}
              />
            </div>
          </div>
          <div className="weather">
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
              <img className="iconPosTop" src={sunIcon} alt={sunIcon} height={20} width={20}></img>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="accordion" data-testid="delayedRouteWidget">
        <Accordion
          heading={delayedRouteContent.heading}
          content={delayedRouteContent.content}
        />
      </div>
      <div className="accordion" data-testid="rampChartWidget">
        <Accordion
          heading="RAMP CHART"
          content={<RampChart data={rampData} dataKey="value" />}
        />
      </div>
    </div>
  );
}

export default SidebarWidget;
