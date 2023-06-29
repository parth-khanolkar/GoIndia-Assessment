import CompanyWidget from './components/CompanyWidget'
import DiscussionForum from './components/DiscussionForum'
import MarketStories from './components/MarketStories'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TradingViewTicker from './components/TradingViewTicker'


export default function Home() {
  return (
    <>
    <Navbar/>
    <TradingViewTicker />
    <CompanyWidget />
    <div className='grid grid-cols-6 gap-2  bg-gray-100'>
      <div className='col-span-1 '>
        <Sidebar/>
      </div>
      <div className='col-span-3 mx-2'>
        <DiscussionForum/>
      </div>
      <div className='col-span-2 mx-2'>
        <MarketStories/>
      </div>

    </div>
    </>
  )
}
