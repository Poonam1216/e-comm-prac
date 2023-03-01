import React from 'react'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import  './App.css';
import Property_list from './components/property_listing/property_list'



const App = () => {
  return (
    <div>
    <Sidebar/>
    <Header/>
    <Property_list/>
    </div>
  )
}

export default App

