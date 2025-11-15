import React, { useState } from "react";
import CustomizedTables from "../../components/Table";
import suppliers from "../../assets/suppliersData";
import Button from "../../components/Button";

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
    setFormData((prevData) => ({
      ...prevData,
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
    <div className="container">
      <form action="" className="form-container">
        <label htmlFor="supplierName">Supplier Name</label>
        <input
          type="text"
          id="supplierName"
          name="supplierName"
          value={formData?.supplierName || ""}
          onChange={handleChange}
          placeholder="Supplier Name"
        />

        <label htmlFor="contact">Contact Name</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData?.contact || ""}
          onChange={handleChange}
          placeholder="Contact Name"
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={formData?.phone || ""}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData?.email || ""}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          value={formData?.address || ""}
        />
        <button type="submit">{txt}</button>
        {txt === "UPDATE SUPPLIER" && (
          <Button name="DELETE SUPPLIER" />
        )}
      </form>
      <div className="table-container">
        <CustomizedTables props={suppliers} selectedItem={handleClick} />
      </div>
    </div>
  );
};

export default SuppliersPage;
