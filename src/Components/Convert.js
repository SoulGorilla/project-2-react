import { useState, useEffect } from "react";

const Convert = props => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  // const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.currencyscoop.com/v1/latest?base=${props.money.currency}&api_key=6dc992a905728d5796db8c090b68f855`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(() => console.log("error with fetch"));
  }, [props.money.currency]);
  if (loading) return <h1> Loading </h1>;

  const List = () => {
    for (const key in data.response.rates) {
      console.log(`key is ${key}, value is ${data.response.rates[key]}`);
      <div>
        <h2>${key}</h2>
      </div>;
      return (
        <div>
          <h2>${key}</h2>
        </div>
      );
    }
  };

  return (
    <div>
      <li class="list-group-item">
        Euro{" "}
        <span id="result">
          {data.response.rates.EUR.toFixed(3) * props.money.money}
        </span>
      </li>
      <li class="list-group-item">
        British Pounds{" "}
        <span id="result">
          {data.response.rates.GBP.toFixed(4) * props.money.money}
        </span>
      </li>
      <li class="list-group-item">
        Aussie Dollars{" "}
        <span id="result">
          {data.response.rates.AUD.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Canadian Dollars{" "}
        <span id="result">
          {data.response.rates.CAD.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Hong Kong Dollars{" "}
        <span id="result">
          {data.response.rates.HKD.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Hungarian Forint{" "}
        <span id="result">
          {data.response.rates.HUF.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Russian Rubles{" "}
        <span id="result">
          {data.response.rates.RUB.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Venezuelan Bolívar{" "}
        <span id="result">
          {data.response.rates.VEB.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Panamanian Balboa{" "}
        <span id="result">
          {data.response.rates.PAB.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Yemeni Rial{" "}
        <span id="result">
          {data.response.rates.YER.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Japanese Yen{" "}
        <span id="result">
          {data.response.rates.JPY.toFixed(1) * props.money.money}{" "}
        </span>
      </li>
      <li class="list-group-item">
        Bitcoin{" "}
        <span id="result">{data.response.rates.BTC * props.money.money} </span>
      </li>
    </div>
  );
};

export default Convert;

// for (const key in object) {
//   //   console.log(`key is ${key}, value is ${object[key]}`);
//   // }
