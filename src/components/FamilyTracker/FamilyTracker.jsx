import React, { useEffect, useState } from "react";
import AgCanvas from "./AgCanvas";
import NewUserForm from "./NewUserForm";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { fetchCountriesByUser, getUsers } from "@/lib/data";
import { addCountryForUser } from "@/lib/data";
import { useFormState } from "react-dom";
const FamilyTracker = ({ animation }) => {
  const [state, formAction] = useFormState(addCountryForUser, undefined);
  const [dropForm, setDropForm] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [users, setUsers] = useState();
  const [canva, setCanva] = useState();
  const fetchUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  const fetchCountries = async (user_id, color) => {
    "use client";
    const visitedCountriesByUser = await fetchCountriesByUser(user_id);

    console.log(visitedCountriesByUser);
    visitedCountriesByUser?.map((code) => {
      if (typeof code.country_code === typeof "RU") {
      }
      const canva = (window.onload = document.getElementById(
        `${code.country_code}`
      ));
    });
  };

  return (
    <>
      <Play
        className={`play-button ${isStarted} ${animation}`}
        onClick={() => {
          setIsStarted(true);
          fetchUsers();
        }}
        size={80}
        color="#fff"
      />
      <div className={`family-tracker-con ${animation} ${isStarted}`}>
        <div className="overlay-wrapper">
          <NewUserForm
            fetchUsers={fetchUsers}
            setDropForm={setDropForm}
            dropForm={dropForm}
          />
          <form action={formAction}>
            <div className="tab-view tab-view-height-auto">
              <div className="tab">
                <button
                  type="button"
                  onClick={() => setDropForm(true)}
                  className="add-member-btn"
                >
                  Add Family Member
                </button>
              </div>

              {users &&
                users.map((user) => {
                  return (
                    <div
                      key={user.id}
                      onClick={() => fetchCountries(user.id, user.color)}
                      className="tab"
                      style={{ backgroundColor: `${user.color}` }}
                    >
                      <input
                        type="hidden"
                        id={user.id}
                        name="user"
                        value={user.id}
                      />
                      <label className=" member-label" htmlFor={user.id}>
                        {user.name}
                      </label>
                    </div>
                  );
                })}
            </div>

            <input type="text" name="country" />
            <button type="submit">Add</button>
          </form>

          <AgCanvas />
          <h2 className="total-count">Total Countries: </h2>
        </div>
      </div>
    </>
  );
};

export default FamilyTracker;
