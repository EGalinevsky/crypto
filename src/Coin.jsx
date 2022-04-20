import React from 'react'
import './styles/coin.css'

const Coins = ({ marketcap, image, name, symbol, price, volume, priceChange }) => {
    console.log(marketcap.toFixed(2))
    return (
            <div className="coin-conntainer">
            <div className="coin-row">
                <div className="coin">
                    <div>                        
                        <img src={image} alt="crypto" />
                    </div>
                    <div className="coin-item">
                        <h1 className="coin-title">{symbol}</h1>
                        <p className="coin-text">{name}</p>
                    </div>
                </div>
                <div className="coin-data">
                    {priceChange < 0 ? (
                        <p className="coin-precent red">
                            {priceChange.toFixed(2)}%
                        </p>
                    ) : (
                        <p className="coin-precent green">
                            {priceChange.toFixed(2)}%
                        </p>
                    )}
                    <p className="coin-price">${price}</p>

                </div>
            </div>
            </div>
    )
}

export default Coins
