import React from 'react';

import { useSelector } from 'react-redux';

import "./station.css"

function Station({ contryName, min, max, dot }) {

   const stationRef = React.useRef()

   // Положение скрола выбора радиостанции
   const valueTuning = useSelector(state => state.tuning.tuning)

   // Включаем подсветку в зависимости от положения ползунка
   React.useEffect(() => {

      let station = stationRef.current

      if (valueTuning >= min && valueTuning <= max) {
         station.classList.add("radio__display-station-neon")
      }

      else {
         station.classList.remove("radio__display-station-neon")
      }

   }, [valueTuning, min, max, dot])

   return (

      <div className="radio__station-wraper ">

         {/* прицел для ползунка выбора станции - в этом месте включается музыка */}
         {dot === true ? <div className='radio__station-point_range'></div> : null}

         <div ref={stationRef} className="radio__station-body">
            {contryName}
         </div>

         {dot === false ? <div className='radio__station-point_range'></div> : null}

      </div >
   );
}

export default Station;