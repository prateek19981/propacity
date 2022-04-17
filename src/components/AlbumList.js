import React from "react";
import Album from "./Album";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AlbumList() {
  const { userid } = useParams();
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function getData() {
      const URL = `https://jsonplaceholder.typicode.com/albums?userId=${userid}`;
      let data = await axios.get(URL);

      setAlbums(data.data);
    }
    getData();
  }, []);

  {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Album List</h1>

        {albums.length > 0 &&
          albums.map((album) => {
            return <Album data={album} />;
          })}
      </>
    );
  }
}
