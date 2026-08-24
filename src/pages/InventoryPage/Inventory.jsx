import React from "react";
import CustomizedTables from "../../components/Table";
import "./Inventory.css";
import supplies from "../../assets/inventoryData";
import { medicationData } from "../../assets/medicine";
import Button from "../../components/Button";

export const InventoryPage = () => {
  const [text, setText] = React.useState("ADD INVENTORY");

  const [formData, setFormData] = React.useState({
    itemName: "",
    quantity: "",
    price: "",
    expiryDate: "",
    description: "",
    supplier: "",
  });

  const handleClick = (e, row) => {
    e.preventDefault();
    setText("UPDATE INVENTORY");

    setFormData({
      itemName: row.itemName || "",
      quantity: row.quantity || "",
      price: row.price || "",
      expiryDate: row.expiryDate || "",
      description: row.description || "",
      supplier: row.supplier || "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    supplies.push(formData);
    console.log(supplies);

    restForm();
  };

  const restForm = () => {
    setText("ADD INVENTORY");
    setFormData({
      itemName: "",
      quantity: "",
      price: "",
      expiryDate: "",
      description: "",
      supplier: "",
    });
  };

  return (
    <div className="inventory-container">
      <form className="inventory-form">
        <label>Item Name:</label>
        <select name="itemName" onChange={handleChange} value={formData.itemName}>
          <option value="">Select Item</option>
          {medicationData.map((med, index) => (
            <option value={med.name} key={index}>
              {med.name}
            </option>
          ))}
        </select>

        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Enter quantity"
        />

        <label>Unit Price (GH₵):</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
        />

        <label>Expiry Date:</label>
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
        />

        <label>Supplier:</label>
        <input
          type="text"
          name="supplier"
          value={formData.supplier}
          onChange={handleChange}
          placeholder="Enter supplier name"
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Leave a note"
        />

        <button type="submit" onClick={handleSubmit}>{text}</button>

        {text === "UPDATE INVENTORY" && <Button name="DELETE INVENTORY" />}
      </form>

      <div className="inventory-table">
        <CustomizedTables props={supplies} selectedItem={handleClick} />
      </div>
    </div>
  );
};

export default InventoryPage;
