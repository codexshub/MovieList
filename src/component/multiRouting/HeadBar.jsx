import React from 'react';
import '../multiRouting/HeadBar.css';
import { NavLink } from 'react-router-dom';

const HeadBar = () => {
  return (
    <>
      <section>
        <div className="NavbarSection">
            <div className="NavbarContainer container">
                <div className="MenuListContainer col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/multiRouting/service">Service</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/multiRouting/product">Product</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/multiRouting/gallery">Gallery</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/multiRouting/card">Card</NavLink>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default HeadBar
