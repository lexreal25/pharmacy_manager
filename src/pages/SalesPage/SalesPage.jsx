import React from "react";
import sales from "../../assets/salesData";
import CustomizedTables from "../../components/Table";
import "./SalesPage.css";
import { medicationData } from "../../assets/medicine";
import Button from "../../components/Button";

export const SalesPage = () => {
  const [text, setText] = React.useState("ADD ITEM");

  const [formData, setFormData] = React.useState({
    customername: "",
    itemname: "",
    quantitysold: "",
    price: "",
    totalamount: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      // Auto-calc total amount
      if (name === "price" || name === "quantitysold") {
        const qty = Number(updated.quantitysold);
        const pr = Number(updated.price);
        updated.totalamount = qty && pr ? qty * pr : "";
      }

      return updated;
    });
  };

  const handleClick = (e, row) => {
    e.preventDefault();
    setText("UPDATE SALES");

    setFormData({
      customername: row.customername || "",
      itemname: row.itemname || "",
      quantitysold: row.quantitysold || "",
      price: row.price || "",
      totalamount: row.totalamount || "",
      description: row.description || "",
    });
  };

  const resetForm = () => {
    setFormData({
      customername: "",
      itemname: "",
      quantitysold: "",
      price: "",
      totalamount: "",
      description: "",
    });
    setText("ADD ITEM");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  return (
    <div className="sales-container">
      <form className="sales-form">
        <label>Customer Name:</label>
        <input
          type="text"
          name="customername"
          value={formData.customername}
          onChange={handleChange}
          placeholder="Enter customer name"
        />

        <label>Select Medicine:</label>
        <select
          name="itemname"
          value={formData.itemname}
          onChange={handleChange}
        >
          <option value="">Select Item</option>
          {medicationData.map((item, index) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))}
        </select>

        <label>Quantity:</label>
        <input
          type="text"
          name="quantitysold"
          value={formData.quantitysold}
          onChange={handleChange}
          placeholder="Enter quantity"
        />

        <label>Price (GH₵):</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Leave a note"
        />

        <label>Tax value (GH₵): %13</label>
        <label>Discount (GH₵): 5</label>
        <label>Total (GH₵): {formData.totalamount}</label>
        
        {text === "UPDATE SALES" && <button>VIEW RECEIPT</button>}

        <button onClick={handleSubmit}>{text}</button>

        {text === "UPDATE SALES" && <Button name="DELETE SALES" />}
      </form>

      <div className="sales-table">
        <CustomizedTables props={sales} selectedItem={handleClick} />
      </div>
    </div>
  );
};

export default SalesPage;
