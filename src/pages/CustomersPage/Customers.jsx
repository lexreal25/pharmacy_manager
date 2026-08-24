import * as React from "react";
import "./Customers.css";
import CustomizedTables from "../../components/Table.jsx";
import customersData from "../../assets/customer.js";
import Button from "../../components/Button";

const Customers = () => {
  const [txt, setText] = React.useState("ADD CUSTOMER");
  const [formData, setFormData] = React.useState({
    name: "",
    contact: "",
    address: "",
    totalPurchases: "",
    email: "",
  });

  const handleClick = (e, row) => {
    e.preventDefault();
    setText("UPDATE CUSTOMER");

    setFormData({
      name: row.name || "",
      contact: row.contact || "",
      address: row.address || "",
      email: row.email || "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="customers-container">
      <form className="customers-form">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />

        <label>Contact:</label>
        <input
          type="text"
          placeholder="Enter phone number"
          value={formData.contact}
          name="contact"
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />

        <label>Address:</label>
        <input
          type="text"
          placeholder="Enter address"
          value={formData.address}
          name="address"
          onChange={handleChange}
        />

        <button type="submit">{txt}</button>

        {txt === "UPDATE CUSTOMER" && <Button name="DELETE CUSTOMER" />}
      </form>

      <div className="customers-table">
        <CustomizedTables props={customersData} selectedItem={handleClick} />
      </div>
    </div>
  );
};

export default Customers;
