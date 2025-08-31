import React from 'react'
import CustomizedTables from '../../components/Table'
import Button from '../../components/Button'

const supplies = [
  { itemName: 'Paracetamol', quantity: 100, price: 5.00, supplier: 'ABC Pharma', expiryDate: '2024-12-31' },
  { itemName: 'Ibuprofen', quantity: 50, price: 8.00, supplier: 'XYZ Meds', expiryDate: '2025-06-30' },
  { itemName: 'Aspirin', quantity: 200, price: 3.00, supplier: 'HealthCorp', expiryDate: '2023-11-15' },
  { itemName: 'Amoxicillin', quantity: 75, price: 12.00, supplier: 'MediSupply', expiryDate: '2024-08-20' },
  { itemName: 'Cough Syrup', quantity: 150, price: 7.50, supplier: 'Wellness Inc.', expiryDate: '2025-01-10' },
  { itemName: 'Vitamin C', quantity: 233, price :5.00, supplier:'HealthPlus', expiryDate:'2026-05-05' },
]

export const InventoryPage = () => {
  return (
   <div className="container">
    {/* <input type="text"placeholder='Search Item' /> */}
    <Button name="Add Inventory" />
    <CustomizedTables props={supplies}/>
   </div>
  )
}
export default InventoryPage
