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
    manufacturer: "",
    description: "",
  });

  const handleClick = (e, row) => {
    e.preventDefault();

    setFormData({
      name: row.name || "",
      dosage: row.dosage || "",
      frequency: row.frequency || "",
      sideEffects: row.sideEffects || "",
      manufacturer: row.manufacturer || "",
      description: row.description || "",
    });

    setTxt("UPDATE MEDICINE");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="medicine-container">
      <form className="medicine-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Dosage:</label>
        <input
          type="text"
          name="dosage"
          placeholder="Enter dosage"
          value={formData.dosage}
          onChange={handleChange}
        />

        <label>Frequency:</label>
        <input
          type="text"
          name="frequency"
          placeholder="Enter frequency"
          value={formData.frequency}
          onChange={handleChange}
        />

        <label>Side Effects:</label>
        <input
          type="text"
          name="sideEffects"
          placeholder="Enter side effects"
          value={formData.sideEffects}
          onChange={handleChange}
        />

        <label>Manufacturer:</label>
        <input
          type="text"
          name="manufacturer"
          placeholder="Enter manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">{txt}</button>

        {txt === "UPDATE MEDICINE" && <Button name="DELETE MEDICINE" />}
      </form>

      <div className="medicine-table">
        <CustomizedTables props={Medication} selectedItem={handleClick} />
      </div>
    </div>
  );
};

export default Medicine;
