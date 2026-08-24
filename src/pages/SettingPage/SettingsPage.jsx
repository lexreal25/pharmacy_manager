import React from "react";
import "./Settings.css";
import CustomizedTables from "../../components/Table";
import { users } from "../../assets/users";
import Button from "../../components/Button";

const Settings = () => {
  const [txt, setText] = React.useState("ADD USER");

  const handleClick = (e, row) => {
    e.preventDefault();
    setText("UPDATE USER");
    console.log(row);
  };

  return (
    <div className="settings-wrapper">
      
      {/* PAGE HEADER */}
      <div className="settings-header">
        <h1>System Settings</h1>
        <p>Manage users, roles, and system access permissions.</p>
      </div>

      <div className="settings-container">

        {/* LEFT: USER FORM */}
        <div className="user-form-section">
          <form className="form-container">
            <h2>User Management</h2>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Username" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                pattern=".{8,}"
                required
                title="Password must be 8 characters"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select className="status-select">
                <option value="">Select Status</option>
                <option value="Active" data-status="Active">Active</option>
                <option value="Inactive" data-status="Inactive">Inactive</option>
              </select>
            </div>

            <button type="submit">{txt}</button>
            {txt === "UPDATE USER" && <Button name="DELETE USER" style={{backgroundColor:'red !important'}} />}
          </form>
        </div>

        {/* RIGHT: USER TABLE */}
        <div className="user-table-section">
          <h2>Registered Users</h2>
          <CustomizedTables props={users} selectedItem={handleClick} />
        </div>

      </div>
    </div>
  );
};

export default Settings;
