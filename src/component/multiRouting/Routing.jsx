import React from 'react';
import HeadBar from '../multiRouting/HeadBar';
import Gallery from '../subComponents/Service/Gallery'
import Service from '../subComponents/Service/Service'
import Product from '../subComponents/Service/Product'
import Card from '../subComponents/Service/Card'
import {Routes, Route} from 'react-router-dom';
import TabBar from './TabBar';

const Routing = () => {
  return (
    <>
     <section>
        <HeadBar/>
     <Routes>
   <Route exact path="/multiRouting/service" element={<Service/>} />
   <Route exact path="/multiRouting/product" element={<Product/>} />
   <Route exact path="/multiRouting/gallery" element={<Gallery/>} />
   <Route exact path="/multiRouting/card" element={<Card/>} />
   </Routes>
   <TabBar/>
    </section> 
    </>
  )
}

export default Routing
