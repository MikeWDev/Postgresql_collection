import { createUser } from "@/lib/data";
import React, { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
const NewUserForm = ({ dropForm, setDropForm, fetchUsers }) => {
  const [state, formAction] = useFormState(createUser, undefined);
  const formRef = useRef();
  useEffect(() => {
    if (state?.succes === "User added succesfully!") {
      formRef?.current.reset();
      setTimeout(() => {
        setDropForm(false);
        fetchUsers();
      }, 1000);
    } else if (state?.error === "User not added, something went wrong") {
      formRef?.current.reset();
    }
  }, [state, dropForm, fetchUsers]);

  return (
    <div className={`new-user-con ${dropForm}`}>
      <h3>Add a Family Member</h3>
      <form ref={formRef} id="newUserForm" action={formAction}>
        <p>What is your name?</p>
        <input
          type="text"
          name="name"
          className="member-input"
          placeholder={`${state?.succes === undefined ? " " : state?.succes} ${
            state?.error === undefined ? " " : state?.error
          }`}
        />

        <p>Pick a color:</p>
        <input type="radio" name="color" id="red" value="red" />
        <label className="user-label" htmlFor="red">
          <span className="red"></span>
        </label>

        <input type="radio" name="color" id="green" value="green" />
        <label className="user-label" htmlFor="green">
          <span className="green"></span>
        </label>

        <input type="radio" name="color" id="yellow" value="yellow" />
        <label className="user-label" htmlFor="yellow">
          <span className="yellow"></span>
        </label>

        <input type="radio" name="color" id="olive" value="olive" />
        <label className="user-label" htmlFor="olive">
          <span className="olive"></span>
        </label>

        <input type="radio" name="color" id="orange" value="orange" />
        <label className="user-label" htmlFor="orange">
          <span className="orange"></span>
        </label>

        <input type="radio" name="color" id="teal" value="indigo" />
        <label className="user-label" htmlFor="teal">
          <span className="teal"></span>
        </label>

        <input type="radio" name="color" id="blue" value="blue" />
        <label className="user-label" htmlFor="blue">
          <span className="blue"></span>
        </label>

        <input type="radio" name="color" id="violet" value="violet" />
        <label className="user-label" htmlFor="violet">
          <span className="violet"></span>
        </label>

        <input type="radio" name="color" id="purple" value="purple" />
        <label className="user-label" htmlFor="purple">
          <span className="purple"></span>
        </label>

        <input type="radio" name="color" id="pink" value="pink" />
        <label className="user-label" htmlFor="pink">
          <span className="pink"></span>
        </label>
        <div className="spacer"></div>
        <div className="buttons">
          <button type="submit">Add</button>
          <button onClick={() => setDropForm(false)} type="button">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
