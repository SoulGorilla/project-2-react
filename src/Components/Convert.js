import { useState, useEffect } from "react";

const Convert = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

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

  console.log(props.money.currency);

  return (
    <div>
      <li class="list-group-item">{data.response.base}</li>
      <li class="list-group-item">
        Rubles {data.response.rates.RUB.toFixed(1) * props.money.money}
      </li>
      <li class="list-group-item">
        Euro {data.response.rates.EUR.toFixed(3) * props.money.money}
      </li>
      <li class="list-group-item">
        British Pounds {data.response.rates.GBP.toFixed(4) * props.money.money}
      </li>
    </div>
  );
};

export default Convert;
