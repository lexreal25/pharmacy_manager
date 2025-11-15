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

  // Handle click on table row
  const handleClick = (e, row) => {
    e.preventDefault;
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handle submission
  const handleSubmit = () => {
    if (text === "UPDATE") {
      restForm();
    }
    // console.log('add inventory action goes here');
    supplies.push(formData);
    console.log(supplies);
  };

  const restForm = () => {
    setText("ADD INVENTORY");
    setFormData({
      itemName: "",
      price: "",
      quantity: "",
      supplier: "",
      expiryDate: "",
      description: "",
    });
  };
  return (
    <div className="container">
      <form className="form-container">
        <label htmlFor="item">Item Name: </label>
        <select name="itemName" id="" onChange={handleChange}>
          {medicationData.map((med, index) => (
            <option value={med.name} key={index}>
              {med.name}
            </option>
          ))}
          <option value="">Select Item</option>
        </select>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="text"
          placeholder="Enter quantity"
          value={formData?.quantity || ""}
          onChange={handleChange}
          name="quantity"
        />

        <label htmlFor="price">Unit Price (GH&#8373;): </label>
        <input
          type="text"
          placeholder="Enter price"
          value={formData?.price || ""}
          onChange={handleChange}
          name="price"
        />

        <label htmlFor="expiry">Expiry Date: </label>
        <input
          type="date"
          placeholder="Select expiry date"
          value={formData?.expiryDate || ""}
          onChange={handleChange}
          name="expiryDate"
          id="expiry"
        />

        <label htmlFor="supplier">Supplier: </label>
        <input
          type="text"
          placeholder="Enter supplier name"
          value={formData?.supplier || ""}
          onChange={handleChange}
          name="supplier"
        />

        <label htmlFor="desc">Description: </label>
        <textarea
          name="description"
          id="desc"
          placeholder="Leave a note"
          value={formData?.description || ""}
          onChange={handleChange}
        ></textarea>
        <button type="submit" id="update_btn" onClick={handleSubmit}>
          {text}
        </button>
        {text === "UPDATE INVENTORY" && <Button name="DELETE INVENTORY" />}
      </form>

      <div className="table-container">
        {/* <SearchButton /> */}
        <CustomizedTables props={supplies} selectedItem={handleClick} />
      </div>
    </div>
  );
};
export default InventoryPage;
