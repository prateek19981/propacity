import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  Text,
} from "recharts";
import { Typography, Chip } from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/node/Container";
import { Link } from "react-router-dom";
import { textAlign } from "@mui/system";
const Chart = ({ data }) => {
  const idArray = data?.map((item) => item.userId);
  let uniqueUserIds = [...new Set(idArray)];
  const [graphdata, setGraphdata] = useState(uniqueUserIds);

  const getNumberofAlbumsById = () => {
    let res = data?.reduce((acc, curr) => {
      if (acc[curr.userId]) {
        acc[curr.userId]++;
      } else {
        acc[curr.userId] = 1;
      }
      return acc;
    }, {});
    return res;
  };
  const albums = getNumberofAlbumsById();
  let albumsArray = [];
  for (let i in albums) {
    let temp = {};
    temp.userId = i;
    temp.count = albums[i];
    albumsArray.push(temp);
  }

  return (
    <>
      <Typography variant="h3" ml={9} padding={2} fontFamily={"monospace"}>
        Albums vs UserId
      </Typography>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={500}
          height={1100}
          data={albumsArray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="userId">
            <Label value="User Id" offset={0} position="insideBottom" />
          </XAxis>

          <YAxis dataKey="count" height="100">
            <Label
              value="Number of Albums"
              offset={0}
              position="insideLeft"
              angle="-90"
            />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <Link to={"/users"} style={{ textDecoration: "none", marginLeft: 70 }}>
        <Chip label="user List" color="success" />
      </Link>
    </>
  );
};

export default Chart;
