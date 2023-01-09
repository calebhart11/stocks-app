import { useLoaderData } from "react-router-dom";

const Stock = (props) => {
    // get the data fetched by our loader
    const stock = useLoaderData();
  
    return (
      <div className="stock">
        <h1>
          {stock.name}/{stock.lastPrice}
        </h1>
        <h2>{stock.change}</h2>
        <h3>{stock.high}</h3>
        <h3>{stock.low}</h3>
        <h3>{stock.open}</h3>
      </div>
    );
  };
  export default Stock