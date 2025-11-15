import React from "react";
import "./Settings.css";
import CustomizedTables from "../../components/Table";
import { users } from "../../assets/users";
import Button from "../../components/Button";

const Settings = () => {
  const [txt, setText] = React.useState("ADD USER");
  
  const handleCick = (e,row) => {
    e.preventDefault();
    if(txt === "ADD USER"){
      setText("UPDATE USER")
    }
    console.log(row);
  }
  return (
    <div className="container">
      <div className="settings-container">
        <div className="user-settings">
          <form className="form-container">
            <h2>User Management</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Username" required/>
            <input
              type="password"
              placeholder="Password"
              pattern=".{8,}"
              required
              title="Password must be 8 characters"
            />
            <input type="email" placeholder="Email" required />
            <select>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <select required>
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button type="submit">{txt}</button>
            {txt === "UPDATE USER" && <Button name="DELETE USER" />}
          </form>
          <CustomizedTables props={users} selectedItem={handleCick} />
        </div>
        {/* <div className="general-settings">
          <h2>General Settings</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Settings;
