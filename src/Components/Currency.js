import { useState, useEffect } from "react";
import Convert from "./Convert";

const Currency = () => {
  const [entry, setEntry] = useState(0);
  const [currency, setCurrency] = useState("");
  const [money, setMoney] = useState({});

  const handleChange = event => {
    setEntry(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setMoney({
      money: entry,
      currency: currency
    });
    setEntry(0);
  };

  //   useEffect(() => {
  //     fetch(
  //       "https://api.currencyscoop.com/v1/latest?api_key=6dc992a905728d5796db8c090b68f855"
  //     )
  //       .then(res => res.json())
  //       .then(data => {
  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch(() => console.log("error with fetch"));
  //   }, []);
  //   if (loading) return <h1> Loading </h1>;

  //   console.log(data.response.base);

  return (
    <div>
      <form class="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          class="form-control me-2"
          inputMode="numeric"
          type="text"
          placeholder="Amount"
          aria-label="Search"
          onChange={handleChange}
        />
        <select
          class="custom-select"
          id="select"
          onChange={e => setCurrency(e.target.value)}
        >
          <option selected>Currency</option>
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pounds</option>
          <option value="AUD">Aussie Dollars</option>
          <option value="CAD">Canadian Dollars</option>
          <option value="RUB">Ruble</option>
          <option value="AUD">AUD</option>
          <option value="GBP">British Pounds</option>
        </select>
        <button className="btn btn-outline-success" type="submit">
          CONVERT!
        </button>
      </form>
      <ul class="list-group">
        <Convert money={money} />
      </ul>
    </div>
  );
};

export default Currency;
