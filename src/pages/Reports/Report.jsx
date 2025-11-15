import React from 'react'
import './Report.css'
import SalesChart from '../../components/SalesChart';
import { ExpenesesReport } from '../../components/BarChart';

export const Report = () => {
  return (
    <div className='container'>
      <div className="layout">
         <SalesChart/>
      </div>
     <div className="expenses">
      <ExpenesesReport/>
     </div>
    </div>   
  )
}

export default Report;