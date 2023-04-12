import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { Acordion } from "../assets/components/Acordion";
import { Footer } from "../assets/components/Footer";
import { Header } from "../assets/components/Header";
import { TableData } from "../assets/components/TableData";
import "../assets/css/MuiLayout.css";

export const MUILayouting = () => {
  const [nama, setNama] = useState("");
  const [genderData, setGender] = useState("");
  const [ArrayData, setArrayData] = useState([
    { nama: "bagas", gender: "mele" },
    { nama: "alhan", gender: "mele" },
    { nama: "jordy", gender: "mele" },
    { nama: "iman", gender: "mele" },
  ]);
  const [Submit, setSubmit] = useState(false)



  const handlePeserta = () => {
    let dataHandle = ArrayData ? ArrayData : [];
    return dataHandle.map((value, index) => {
      return (
        <div className="boxMap">
          <h1>{value.nama}</h1>
          <h1>{value.gender}</h1>
        </div>
      );
    });
  };

  const AddArray = () => {
    let dataHandle = ArrayData ? ArrayData : [];
    dataHandle.push({ nama: nama, gender: genderData });
    setArrayData(dataHandle);
    setSubmit(!Submit)
  };

  return (
    <div>
      {/* 1-12 */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="Layout" container spacing={3}>
          <Grid className="box1" item xs={12} sm={12} md={6} xl={12}>
            <Header />
          </Grid>
          <Grid className="box2" margin={1} item xs={12} sm={3} md={6} xl={6}>
            {handlePeserta()}
            <h2>Nama : bagas</h2>
            <h2>umur : 300 Tahun </h2>
            <h2>Alamat : Bukit Dewi Kuanin </h2>
            <h2>Massage : Bangun Ojok turu ae anakmu nagis jaluk jajan </h2>
          </Grid>
          <Grid className="box3" item xs={12} sm={9} md={5} xl={5}>
            <TableData />
            <Grid mt={2}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={genderData}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />

              <button
                onClick={() => {
                  AddArray();
                  
                }}
              >
                Submit
              </button>
            </Grid>
          </Grid>
          <Grid className="box4" item xs={12} sm={3} md={6} xl={12}></Grid>
        </Grid>
      </Box>
    </div>
  );
};
