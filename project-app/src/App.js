import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Users } from "./components/users.component";
import { NewUser } from "./components/addUser.component";
import { User } from "./components/user.component";
import { UpdateUser } from "./components/updateUser.component";



function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route exact path="/user" element={<Users />}>
            <Route path="showUser/:id" element={<User />} />
            <Route exact path="newUser" element={< NewUser />} />
            <Route exact path="updateUser/:id" element={< UpdateUser />} />
          </Route>
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
