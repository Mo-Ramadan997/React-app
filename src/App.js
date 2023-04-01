import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserLists from "./components/Users/UserLists";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (Ulis, Alist) => {
    setUserList((prevows) => {
      return [
        ...prevows,
        { name: Ulis, age: Alist, id: (Math.random() * 1000).toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={userList} />
    </div>
  );
}

export default App;
