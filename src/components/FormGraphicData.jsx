import { useRef } from "react";
import React from 'react';

function FormGraphicData( props ) {
  const formGetData = useRef(null);
  const getFormInfo = (event) => {
    event.preventDefault();
    const formData = new FormData(formGetData.current);
    const loginData = {
      dataTeletype: formData.get('dataTeletype'),
      dataCountry: formData.get('dataCountry')
    }
    let newObject = props.currentDataTicker;
    newObject.ticker = `${loginData.dataTeletype}${loginData.dataCountry}`;
    props.setCurrentDataTicker(newObject);
    console.log(props.currentDataTicker);
  }

  return (
    <>
      <form className="w-fit h-fit flex flex-col items-start" action="/" ref={formGetData}>
        <div className="flex flex-col w-fit sm:flex-row sm:mt-4">
          <label htmlFor="dataTeletype" className="w-fit mr-2">Selecciona el tipo de gráfica:</label>
          <select defaultValue={"CPI"} name="dataTeletype" id="dataTeletype" className="min-w-min max-w-fit my-2 p-1 bg-light text-darkBody rounded-sm cursor-pointer text-sm sm:my-0 sm:mx-2 sm:text-base" onChange={getFormInfo}>
            {props.filterCodes.map(item => item.codeType==="register" && props.render(item))}
          </select>
        </div>
        <div className="flex flex-col w-fit sm:flex-row sm:mt-4">
          <label htmlFor="dataCountry" className="w-fit mr-2">Selecciona el país:</label>
          <select defaultValue={"MX"} name="dataCountry" id="dataCountry" className="min-w-min max-w-fit my-2 p-1 bg-light text-darkBody rounded-sm cursor-pointer text-sm sm:my-0 sm:mx-2 sm:text-base" onChange={getFormInfo}>
            {props.filterCodes.map(item => item.codeType==="country" && props.render(item))}
          </select>
        </div>
      </form>
    </>
  );
}

export default FormGraphicData;