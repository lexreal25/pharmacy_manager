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
    totalamount: "",
    description: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (e, row) => {
    e.preventDefault();
    setText("UPDATE SALES");
    setFormData({
      itemname: row.itemName || "",
      quantitysold: row.quantitySold || "",
      customername: row.customerName || "",
      totalamount: row.totalAmount || "",
      description: row.description || "",
    });
  };

  const resetForm = () => {
    setFormData({
      itemname: "",
      quantitysold: "",
      customername: "",
      totalamount: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "UPDATE") {
      setText("ADD SALES");
    }
    resetForm();
    console.log(formData);
  };

  return (
    <div className="container">
      <form className="form-container">
        <label htmlFor="customer">Customer Name : </label>
        <input
          type="text"
          placeholder="enter customer name"
          id="customer"
          onChange={handleChange}
          name="customername"
          value={formData?.customername || ""}
        />

        <label htmlFor="item">Select Medicine: </label>
        <select name="item" id="medicine" onChange={handleChange}>
          {medicationData.map((item, index) => (
            <option value="paracetamol" key={index}>
              {item.name}
            </option>
          ))}
        </select>
        <label htmlFor="quantity">Quantity : </label>
        <input
          type="text"
          placeholder="enter quantity"
          id="quantity"
          onChange={handleChange}
          name="quantitysold"
          value={formData?.quantitysold || ""}
        />

        <label htmlFor="price">Price (GH&#8373;): </label>
        <input
          type="text"
          placeholder="enter price"
          id="price"
          onChange={handleChange}
          name="price"
          value={formData?.price || ""}
        />

        <label htmlFor="desc">Description : </label>
        <textarea
          name="description"
          id="desc"
          placeholder="leave a note"
          onChange={handleChange}
          value={formData?.description || ""}
        ></textarea>
        <label htmlFor="" style={{ padding: "0.5rem" }}>
          Total (GH&#8373;): {formData?.totalamount}
        </label>
        {text === "UPDATE SALES" && <button>VIEW RECEIPT</button>}
        <button onClick={handleSubmit} style={{ marginBottom: "5px" }}>
          {text}
        </button>
        {text === "UPDATE SALES" && <Button name="DELETE SALES" />}
      </form>
      <div className="table-container">
        <CustomizedTables props={sales} selectedItem={handleClick} />
      </div>
    </div>
  );
};

export default SalesPage;
