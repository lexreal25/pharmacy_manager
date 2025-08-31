import * as React from "react";
import "./Customers.css";
import Button from "../../components/Button.jsx";
import CustomizedTables from "../../components/Table.jsx";

const customersData = [
  {
    name: "John Doe",
    contact: "123-456-7890",
    email: "jon@mail.com",
    address: "123 Main St, Cityville",
    totalPurchases: 250.0,
  },
  {
    name: "Jane Smith",
    contact: "987-654-3210",
    email: "jamesmith@gmail.com",
    address: "456 Oak Ave, Townsville",
    totalPurchases: 300.0,
  },
  {
    name: "Alice Johnson",
    contact: "555-123-4567",
    email: "alice@mail.com",
    address: "789 Pine Rd, Village",
    totalPurchases: 150.0,
  },
  {
    name: "Bob Brown",
    contact: "444-555-6666",
    email:"bob@mail.com",
    address: "321 Cedar St, Hamlet",
    totalPurchases: 400.0,
  },
  {
    name: "Charlie Davis",
    contact: "222-333-4444",
    address: "654 Spruce Ln, Borough",
    totalPurchases: 350.0,
    email:"charles@mail.com"
  }]

const Customers = () => {
  return (
    <div className="container">
      <Button name="Add Customer" />
      <CustomizedTables props={customersData} />
    </div>
  );
};
export default Customers;
