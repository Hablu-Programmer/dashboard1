import React from 'react'
import TodaySales from './TodaysSales';
import TopProducts from './TopProducts';
import Earnings from './Earning';


function Dashboard() {
  return (
    <div>
     <TodaySales />
     <TopProducts />
     <Earnings />
    </div>
  )
}

export default Dashboard;