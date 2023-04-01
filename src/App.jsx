import Layout from "./components/Layout";
import StatsGraphic from './components/StatsGraphic';
import FormGraphicData from "./components/FormGraphicData";
import { useFetchTicker } from "./hooks/useFetchTicker";
import { useState, useEffect } from "react";
import { indices } from "./utils/indices.js";

const App = () => {
  const [currentDataTicker, setCurrentDataTicker] = useState({ticker: "CPIMX", register: "Consumer price index", country: "Mexico"});
  const [filterCodes, setFilterCodes] = useState([]);
  const [currentIndexGraphic, setCurrentIndexGraphic] = useState(0);

  const { 
    data, 
    loading, 
    error, 
    handleCancelRequest 
  } = useFetchTicker(currentDataTicker.ticker);

  useEffect(() => {
    let newFilter = [];
    /* Por cada valor (item) del array de objetos que se importa del archivo indices.js... */
    indices.map(item => {
      /* A todos los que tengan un CPI que no esten ya guardados, se guardarán en newFilter */
      if(item.name==="Consumer price index" && !(newFilter.includes({codeType: "country", code: `${item.ticker}`.slice(3), description: `${item.country}`}))) {
        /* Se guarda el tipo de código (country o register), el código y su referencias */
        newFilter.push({codeType: "country", code: `${item.ticker}`.slice(3), description: `${item.country}`});
      }

      if(item.country==="Mexico" && !(newFilter.includes({codeType: "register", code: `${item.ticker}`.slice(0, -2), description: `${item.name}`}))) {
        newFilter.push({codeType: "register", code: `${item.ticker}`.slice(0, -2), description: `${item.name}`});
      }
    });
    /* Se ordena alfabeticamente el Array */
    newFilter.sort(function (a, b) {
      if (a.description > b.description) {
        return 1;
      }
      if (a.description < b.description) {
        return -1;
      }
      return 0;
    });

    setFilterCodes(newFilter);
  }, []);
  
  function changeCurrentIndex(type, value) {
    let newObject = currentDataTicker;
    if(type === "register") {
      newObject.register = `${value}`;
      setCurrentDataTicker(newObject);
    } else {
      newObject.country = `${value}`;
      setCurrentDataTicker(newObject);
    }
    console.log(currentDataTicker);
  }

  return (
    <Layout>
      <section className="flex flex-col gap-4 content-between max-w-2xl mx-auto my-4">
        <FormGraphicData 
          setCurrentDataTicker = {setCurrentDataTicker}
          currentDataTicker = {currentDataTicker}
          filterCodes = {filterCodes}
          render = {item => (
            <ItemFormGraphic
              key = {item.code}
              code = {item.code}
              codeType = {item.codeType}
              description = {item.description}
              changeCurrentIndex = {changeCurrentIndex}
            />
          )}
        />
        <StatsGraphic 
          currentDataTicker = {currentDataTicker}
        />
      </section>
    </Layout>
  );
}

export default App;


function ItemFormGraphic(props) {
  const cutWorld = () => {
    if(props.description.length > 30) {
      return(`${props.description.slice(0, 30)}...`);
    } else {
      return(props.description);
    }
  }
  return(
    <option value={props.code} title={props.description} onClick={()=>{props.changeCurrentIndex(props.codeType, props.description)}}>{cutWorld()}</option>
  );
}