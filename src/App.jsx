import Layout from "./components/Layout";
import NavGraphic from "./components/NavGraphic";
import ItemNavGraphic from './components/ItemNavGraphic';
import StatsGraphic from './components/StatsGraphic';
import { useFetchTicker } from "./hooks/useFetchTicker";
import { useState } from "react";

const App = () => {
  const [currentTicker, setCurrentTicker] = useState("US");
  const geographyOptions = [
    { name: "EEUU", code: "US" },
    { name: "China", code: "CN" },
    { name: "Japan", code: "JP" },
    { name: "Germany", code: "DE" },
    { name: "France", code: "FR" },
    { name: "India", code: "IN" },
    { name: "México", code: "MX" },
  ];
  /* const geographyOptions = {
    US: "United State",
    CN: "China",
    JP: "Japan",
    DE: "Germany",
    FR: "France",
    IN: "India",
    MX: "México"
  } */
  const { 
    data, 
    loading, 
    error, 
    handleCancelRequest 
  } = useFetchTicker(`CPI${currentTicker}`);
  console.log(data.data);
  // console.log(Object.assign(data.data));

  return (
    <Layout>
      <section className="flex flex-col gap-4 content-between max-w-2xl mx-auto my-4">
        <NavGraphic
          geographyOptions = {geographyOptions}
          render={item => (
            <ItemNavGraphic
              // key = {Object.keys(item)}
              key = {item.code}
              geographyCode = {item.code}
              geographyName = {item.name}
              setCurrentTicker = {setCurrentTicker}
            />
          )}
        />
        <StatsGraphic />
      </section>
    </Layout>
  );
}

export default App