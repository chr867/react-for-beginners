import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response=>response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[]);

  const [money, setMoney] = useState(0);
  const onChange = (evt) =>{
    setMoney(evt.target.value);
  }

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <input type="number" value={money} onChange={onChange} placeholder="insert your money"></input>
      {loading ?<strong>Loading...</strong> :<select>
        {coins.map(item=>(
          <option>
            {item.name} ({item.symbol}): {money!=0 ?money/item.quotes.USD.price :item.quotes.USD.price} USD
          </option>
        ))}
      </select>}

    </div>
  );

}

export default App;
