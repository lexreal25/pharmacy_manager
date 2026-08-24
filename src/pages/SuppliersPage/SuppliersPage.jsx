import React, { useState } from "react";
import CustomizedTables from "../../components/Table";
import suppliers from "../../assets/suppliersData";
import Button from "../../components/Button";
import "./SuppliersPage.css";

export const SuppliersPage = () => {
  const [txt, setText] = useState("ADD SUPPLIER");

  const [formData, setFormData] = useState({
    supplierName: "",
    contact: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e, row) => {
    e.preventDefault();
    setText("UPDATE SUPPLIER");

    setFormData({
      supplierName: row.supplierName || "",
      contact: row.contact || "",
      phone: row.phone || "",
      email: row.email || "",
      address: row.address || "",
    });
  };

  return (
    <div className="suppliers-container">
      <form className="suppliers-form">
        <label>Supplier Name</label>
        <input
          type="text"
          name="supplierName"
          value={formData.supplierName}
          onChange={handleChange}
          placeholder="Supplier Name"
        />

        <label>Contact Name</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Contact Name"
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <button type="submit">{txt}</button>

        {txt === "UPDATE SUPPLIER" && <Button name="DELETE SUPPLIER" />}
      </form>

      <div className="suppliers-table">
        <CustomizedTables props={suppliers} selectedItem={handleClick} />
      </div>
    </div>
  );
};

export default SuppliersPage;
