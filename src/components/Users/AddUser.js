import React, { useState } from "react";

import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [enterUserName, setEterUserName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid Error",
        messege: "You shoud fill both input ",
      });
      return;
    }
    if (+enterAge < 0) {
      setError({
        title: "Invalid Error",
        messege: "Please check age > 0 ",
      });
      return;
    }
    props.onAddUser(enterUserName, enterAge);
    setEnterAge("");
    setEterUserName("");
  };

  const userNameChangeHandler = (event) => {
    setEterUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };
  const ErrorHandler = () => setError(null);
  return (
    <div>
      {/* this Error will show just if error is trusy , well , therefore to hide this Modal you shoud give state falsy again */}
      {error && (
        <ErrorModal
          hideErrorModal={ErrorHandler}
          title={error.title}
          messege={error.messege}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            value={enterUserName}
            id="username"
            onChange={userNameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={enterAge}
            id="age"
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
