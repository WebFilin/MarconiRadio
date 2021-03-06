import React from "react";

import "./stationsDefaultList.css";

import Station from "../Station/Station";

function StationsDefaultUp(props) {
  return (
    <div className="default-stations-lists__wraper">
      <div className="default-stations__wraper-up">
        <Station dot={"down"} min={0} max={5} contryName={"Canada"} />
        <Station dot={"down"} min={11} max={14} contryName={"America"} />
        <Station dot={"down"} min={20} max={22} contryName={"Japan"} />

        <Station dot={"down"} min={28} max={31} contryName={"Aruba"} />
        <Station dot={"down"} min={37} max={40} contryName={"Malta"} />
      </div>

      <div className="default-stations__wraper-down">
        <Station dot={"up"} min={6} max={10} contryName={"Switzerland"} />
        <Station dot={"up"} min={15} max={18} contryName={"Germany"} />
        <Station dot={"up"} min={25} max={27} contryName={"Italy"} />
        <Station dot={"up"} min={32} max={36} contryName={"Norway"} />
        <Station dot={"up"} min={41} max={45} contryName={"Spain"} />
      </div>
    </div>
  );
}

export default StationsDefaultUp;
