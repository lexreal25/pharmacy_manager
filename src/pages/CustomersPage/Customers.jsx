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
      <div className="container">
          <form action="" className="form-container">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="Enter name"
              value={formData?.name || ""}
              name="name"
              onChange={handleChange}
            />
            <label htmlFor="contact">Contact: </label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={formData?.contact || ""}
              name="contact"
              onChange={handleChange}
            />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData?.email || ""}
              onChange={handleChange}
            />
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              placeholder="Enter address"
              value={formData?.address}
              onChange={handleChange}
              name="address"
            />
            <button type="submit">{txt}</button>
            {
              txt === "UPDATE CUSTOMER" && <Button name="DELETE CUSTOMER" />
            }
          </form>
        <div className="table-container">
          <CustomizedTables props={customersData} selectedItem={handleClick} />
        </div>
      </div>
  );
};
export default Customers;
