import { Card } from "./components/Card";
// import { Content } from "./components/Content";
import { fruits } from "./components/Data/data";

function App() {
  return (
    <>
      <div className="content">
        {fruits.map((singleElement, index) => {
          return <Card key={index} Data={singleElement} />;
        })}
      </div>
    </>
  );
}

export default App;
