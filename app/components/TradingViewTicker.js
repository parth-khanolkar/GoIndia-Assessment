"use client"
import React from 'react'


import dynamic from "next/dynamic";
const TradingView = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

const TradingViewTicker = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
        <TradingView 
          className="custom-widget"
         symbols={[
            {
              proName: 'NASDAQ:AAPL',
              title: 'AAPL',
            },
            {
              proName: 'NYSE:MSFT',
              title: 'MSFT',
            },
          
            {
              proName: 'NYSE:MSFT',
              title: 'MSFT',
            },
            {
              title: "NSE:NIFTY",
              proName: "NSE:NIFTY"
            },
            {
              title: "NSE:BANKNIFTY",
              proName: "NSE:BANKNIFTY"
            },
    
            {
              title: "NSE:NIFTYMIDCAP50",
              proName: "NSE:NIFTYMIDCAP50"
            },
            {
              title: "NSE NIFTYSMLCAP250",
              proName: "NSE:NIFTYSMLCAP250"
            }
        ]}

   colorTheme="dark" DisplayMode="compact" showMarket="false"/* Additional props if needed */ />
    </div>
  )
}

export default TradingViewTicker
