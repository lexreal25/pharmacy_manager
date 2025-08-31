import React from 'react'
import './Sidebar.css'
import { Navigation } from '../pages/Navigation/Navigation.jsx';

const Sidebar = () => {
    
  return (
    <div className="left">
        <div className="business-name">
          <h2>Pharmacy Management System</h2>
          <span className="slogan">Quanlity Health Service</span>
        </div>
        {/* menui-items */}
          <Navigation/>  
           
      </div>
  )
}

export default Sidebar;