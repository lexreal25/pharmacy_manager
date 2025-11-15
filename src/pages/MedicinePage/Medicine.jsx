import React, { useState } from "react";
import CustomizedTables from "../../components/Table";
import "./MedicinePage.css";
import { medicationData as Medication } from "../../assets/medicine";
import Button from "../../components/Button";




export const Medicine = () => {
  const [txt, setTxt] = useState("ADD MEDICINE");
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "",
    sideEffects: "",
    manufucturer: "",
    description: "",
  });

  const handleClick = (e, row) => {
    e.preventDefault();
    setFormData({
      name:row.name || "",
      dosage: row.dosage || "",
      frequency: row.frequency || "",
      sideEffects: row.sideEffects || "",
      manufucturer: row.manufucturer || "",
      description: row.description || "",
    })
    setTxt("UPDATE MEDICINE");
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    e.preventDefault();
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
              name="name"
              value={formData?.name || ""}
              onChange={handleChange}
            />

            <label htmlFor="dosage">Dosage: </label>
            <input
              type="text"
              placeholder="Enter dosage"
              name="dosage"
              value={formData?.dosage || ""}
              onChange={handleChange}
            />
            <label htmlFor="frequency">Frequency: </label>
            <input
              type="text"
              placeholder="Enter frequency"
              name="frequency"
              value={formData?.frequency || ""}
              onChange={handleChange}
            />
            <label htmlFor="sideEffects">Side Effects: </label>
            <input
              type="text"
              placeholder="Enter side effects"
              name="sideEffects"
              value={formData?.sideEffects || ""}
              onChange={handleChange}
            />
            <label htmlFor="manufucturer">Manufucturer: </label>
            <input
              type="text"
              placeholder="Enter manufucturer"
              name="manufucturer"
              value={formData?.manufucturer || ""}
              onChange={handleChange}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="desc"
              style={{ maxWidth: "400px", maxHeight: "100px" }}
              placeholder="Enter description"
              value={formData?.description || ""}
              onChange={handleChange}
            ></textarea>
            <button type="submit">{txt}</button>
            {
              txt === "UPDATE MEDICINE" && (<Button name="DELETE MEDICINE" />)
            }
          </form>
        <div className="table-container">
          <CustomizedTables props={Medication} selectedItem={handleClick} />
        </div>
      </div>
  );
};

export default Medicine;
