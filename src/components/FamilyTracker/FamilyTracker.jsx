import React, { useState } from "react";
import AgCanvas from "./AgCanvas";
import NewUserForm from "./NewUserForm";

const FamilyTracker = ({ animation }) => {
  const [dropForm, setDropForm] = useState(false);
  return (
    <div className={`family-tracker-con ${animation}`}>
      <div
        className="tab-view tab-view-height-auto"
        action="/user"
        method="post"
      >
        <NewUserForm dropForm={dropForm} />

        <button onClick={() => setDropForm(true)} className="add-member-btn">
          Add Family Member
        </button>
      </div>

      <form action="/add" method="post">
        <input type="text" name="country" />
        <button type="submit">Add</button>
      </form>

      <AgCanvas setDropForm={setDropForm} />
      <h2 className="total-count">Total Countries: </h2>
    </div>
  );
};

export default FamilyTracker;
