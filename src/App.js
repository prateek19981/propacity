import Button from "@mui/material/Button";
import { Grid, ListItem } from "@mui/material";
import Item from "@mui/material/ListItem";
import React from "react";
import UserCard from "./components/UserCard";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import axios from "axios";
import Chart from "./components/Chart";
import Album from "./components/Album";
import AlbumList from "./components/AlbumList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import AlbumPhoto from "./components/AlbumPhoto";

function App() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function getData() {
      let userData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      let albumData = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );

      setUsers(userData.data);
      setAlbums(albumData.data);
    }

    getData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Chart data={albums} />
            </>
          }
        ></Route>
        <Route path="/users/:userid/albums" element={<AlbumList />}></Route>
        <Route path="/users" element={<UserList users={users} />}></Route>
        <Route
          path="/users/:userid/albums/:albumid"
          element={<AlbumPhoto />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
