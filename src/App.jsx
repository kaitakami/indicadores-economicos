import Layout from "./components/Layout";
import NavGraphic from "./components/NavGraphic";
import ItemNavGraphic from './components/ItemNavGraphic';
import StatsGraphic from './components/StatsGraphic';
import { useFetchTicker } from "./hooks/useFetchTicker";
import { useState, useEffect } from "react";
import { indices } from "./utils/indices.js";

const App = () => {
  const [currentTicker, setCurrentTicker] = useState("CPIMX");
  const [currentCountry, setCurrentCountry] = useState("Mexico");
  const [currentDescription, setCurrentDescription] = useState("Consumer price index");
  const [lastDateLoad, setLastDateLoad] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);

  const { 
    data, 
    loading, 
    error, 
    handleCancelRequest 
  } = useFetchTicker(currentTicker);

  useEffect(() => {
    let lastDate;
    if(data){
      lastDate = new Date(`${(data.data.dates[data.data.dates.length - 1]).slice(0, 4)}/${(data.data.dates[data.data.dates.length - 1]).slice(5, 7)}/${(data.data.dates[data.data.dates.length - 1]).slice(8, 10)}`);
    } else {
      const today = new Date()
      const day = today.getUTCDay()-1;
      const month = today.getUTCMonth();
      const year = today.getUTCFullYear();
      lastDate = new Date(`${year}/${month}/${day}`);
    }
    const lastDateString = `${lastDate}`.slice(0,15);
    setLastDateLoad(lastDateString);

    let newFilter = [];
    Object.values(indices).map(item => {
      if(item.name === currentDescription){
        newFilter.push(item);
      }
    });
    setFilterCountry(newFilter);
  }, [currentTicker]);

  return (
    <Layout>
      <section className="flex flex-col gap-4 content-between max-w-2xl mx-auto my-4">
        <NavGraphic
          filterCountry = {filterCountry}
          currentTicker = {currentTicker}
          currentDescription = {currentDescription}
          render = {item => (
            <ItemNavGraphic
              key = {item.ticker}
              ticker = {item.ticker}
              country = {item.country}
              setCurrentTicker = {setCurrentTicker}
              setCurrentCountry = {setCurrentCountry}
            />
          )}
        />
        <StatsGraphic 
        lastDateLoad = {lastDateLoad}
        currentCountry = {currentCountry}
        />
      </section>
    </Layout>
  );
}

export default App