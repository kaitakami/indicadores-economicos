import Layout from "./components/Layout";
import NavGraphic from "./components/NavGraphic";
import ItemNavGraphic from './components/ItemNavGraphic';
import StatsGraphic from './components/StatsGraphic';

const App = () => {
  return (
    <Layout>
      <section className="flex flex-col gap-4 content-between max-w-2xl mx-auto my-4">
        <NavGraphic>
          <ItemNavGraphic/>
        </NavGraphic>
        <StatsGraphic />
      </section>
    </Layout>
  );
}

export default App