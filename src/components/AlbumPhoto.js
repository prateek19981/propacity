import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImageList, ImageListItem } from "@mui/material/node";

export default function AlbumPhoto() {
  const { albumid } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const URL = `https://jsonplaceholder.typicode.com/photos?albumId=${albumid}`;
      let data = await axios.get(URL);

      setData(data.data);
    }
    getData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Image List</h1>
      <ImageList
        sx={{ width: 500, height: 6500, marginLeft: 60, marginTop: 8 }}
        cols={2}
        rowHeight={240}
        gap={10}
      >
        {data &&
          data.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={item.url}
                srcSet={item.url}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
      </ImageList>
    </>
  );
}
