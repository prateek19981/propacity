import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material/node";
import { Link } from "react-router-dom";

export default function Album({ data }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 20 }}
          color="text.primary"
          variant="h1"
          gutterBottom
        >
          <Link
            to={`/users/${data.userId}/albums/${data.id}`}
            style={{ textDecoration: "none" }}
          >
            {data.title}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
