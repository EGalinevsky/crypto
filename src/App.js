import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './Coin';

const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {
  const [coins, setCoins] = useState([])
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        setCoins(res.data)
      }).catch(error => console.log(error))

  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }
  const dataToday = new Date()
  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())).slice(0,20)
  console.log(filteredCoins)
  let month = months[dataToday.getMonth()];
  return (
    <div className="coin-app">
      <button className='btn' onClick={()=> setShow(prew => !prew)}>
        Show search
      </button>
      {show && <div className="coin-search">
        <h1 className="coin-text-sera">
          Search a currency
        </h1>
        <form>
          <input onChange={handleChange} type="text" placeholder="Search" className="coin-input" />
        </form>
      </div>}

      <div className='header'>
        <h1 className='header-title'>
          Курс криптовалюты
        </h1>
        <p className='header-text'>
          {`${dataToday.getDate()} ${month}, ${dataToday.getFullYear()}`}
        </p>
      </div>
      <div className='wrapper'>
      {filteredCoins.map(coin => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume} />
        )
      })}
      </div>
      <div className='border-first'/>
      <div className='border-second'/>


    </div>
  );
}

export default App;