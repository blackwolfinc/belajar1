import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Acordion } from "../assets/components/Acordion";
import { Footer } from "../assets/components/Footer";
import { Header } from "../assets/components/Header";
import { TableData } from "../assets/components/TableData";
import "../assets/css/MuiLayout.css";

export const MUILayouting = () => {
  return (
    <div>
      {/* 1-12 */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="Layout" container spacing={3}>
          <Grid className="box1" item xs={12} sm={12} md={6} xl={12}>
            <Header />
          </Grid>
          <Grid className="box2" margin={1} item xs={12} sm={3} md={6} xl={6}>
            <h2>Nama  : bagas</h2>
            <h2>umur  : 300 Tahun </h2>
            <h2>Alamat : Bukit Dewi Kuanin </h2>
            <h2>Massage  : Bangun Ojok turu ae anakmu nagis jaluk jajan </h2>
          </Grid>
          <Grid className="box3" item xs={12} sm={9} md={5} xl={5}>
            <TableData/>
          </Grid>
          <Grid className="box4" item xs={12} sm={3} md={6} xl={12}>
            <Footer/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
