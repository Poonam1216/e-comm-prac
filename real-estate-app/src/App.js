// import React from 'react'
// import Header from './components/header/header'
// import Sidebar from './components/sidebar/sidebar'
// import Property_list from './components/property_listing/property_list1'
// import BasicInfoForm from './components/addproperty/basic/basicform';
// import GeneralFormInfo from './components/addproperty/general/generalform';
// import LocationFormInfo from './components/addproperty/location/location';
// import PropertyFormInfo from './components/addproperty/property/propertyform';
// import  './App.css';
// import { BrowserRouter, Route, Router } from 'react-router-dom';



// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Router>
//         <Route>

//          <Sidebar/>
//          <Header/>
//          <Property_list/>
//     <BasicInfoForm/>
//     <GeneralFormInfo/>
//     <LocationFormInfo/>
//     <PropertyFormInfo/>
//     </Route>
//     </Router>
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BasicInfoForm from './components/addproperty/basic/basicform';
import GeneralFormInfo from './components/addproperty/general/generalform';
import LocationFormInfo from './components/addproperty/location/location';
import PropertyFormInfo from './components/addproperty/property/propertyform';
//
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import PropertyList from "./components/property_listing/property_list1"
// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp/SignUp';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' element={<PropertyList />} />
          <Route path='/basicinfo' element={<BasicInfoForm />} />
          <Route path='/propertyinfo' element={<PropertyFormInfo />} />
          <Route path='/generalinfo' element={<GeneralFormInfo />} />
          <Route path='/locationinfo' element={<LocationFormInfo />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;