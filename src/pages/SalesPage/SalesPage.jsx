import React from "react";
import CustomizedTables from "../../components/Table";
import Button from "../../components/Button";

const sales = [
  {
    itemName: "Paracetamol",
    quantitySold: 20,
    saleDate: "2024-10-01",
    totalAmount: 100.0,
    customerName: "John Doe",
  },
  {
    itemName: "Ibuprofen",
    quantitySold: 15,
    saleDate: "2024-10-02",
    totalAmount: 120.0,
    customerName: "Jane Smith",
  },
  {
    itemName: "Aspirin",
    quantitySold: 30,
    saleDate: "2024-10-03",
    totalAmount: 90.0,
    customerName: "Alice Johnson",
  },
  {
    itemName: "Amoxicillin",
    quantitySold: 10,
    saleDate: "2024-10-04",
    totalAmount: 120.0,
    customerName: "Bob Brown",
  },
  {
    itemName: "Cough Syrup",
    quantitySold: 25,
    saleDate: "2024-10-05",
    totalAmount: 187.5,
    customerName: "Charlie Davis",
  },
  {
    itemName: "Vitamin C",
    quantitySold: 40,
    saleDate: "2024-10-06",
    totalAmount: 200.0,
    customerName: "Diana Evans",
  },
];
export const SalesPage = () => {
  return (
    <div className="container">
      <Button name="Add Sales" />
      <CustomizedTables props={sales} />
    </div>
  );
};

export default SalesPage;
