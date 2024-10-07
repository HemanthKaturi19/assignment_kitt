import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage.jsx'
import Loading from './components/Loading.jsx'
import FlightResults from './components/FlightResults.jsx'
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />   
         <Route path="/SearchPage" element={<SearchPage />}/>
         <Route path="/Loading" element={<Loading/>}/>
         <Route path="/FlightResults" element={<FlightResults />}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
