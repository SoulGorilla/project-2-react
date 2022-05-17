import { useState, useEffect } from "react";

const Currency = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [entry, setEntry] = useState(0);
  const [money, setMoney] = useState(0);

  const handleChange = event => {
    console.log(event.target.value);
  };

  const handleSubmit = event => {};

  useEffect(() => {
    fetch(
      "https://api.currencyscoop.com/v1/latest?api_key=6dc992a905728d5796db8c090b68f855"
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(() => console.log("error with fetch"));
  }, []);
  if (loading) return <h1> Loading </h1>;

  console.log(data.response.base);

  return (
    <div>
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          class="form-control me-2"
          inputmode="numeric"
          type="text"
          placeholder="Amount"
          aria-label="Search"
          onChange={handleChange}
        />
        <select class="custom-select">
          <option selected>Currency</option>
          <option value="1">Ruble</option>
          <option value="2">Dollar</option>
          <option value="3">AUD</option>
        </select>
        <button className="btn btn-outline-success" type="submit">
          CONVERT!
        </button>
      </form>
      <h1>
        {data.response.base} ${data.response.rates.USD * money}
      </h1>
      <ul class="list-group">
        <li class="list-group-item">
          Rubles {data.response.rates.RUB.toFixed(1) * 100}
        </li>
        <li class="list-group-item">
          Euro {data.response.rates.EUR.toFixed(3) * 100}
        </li>
        <li class="list-group-item">
          British Pounds {data.response.rates.GBP.toFixed(4) * 100}
        </li>
      </ul>
    </div>
  );
};

export default Currency;
