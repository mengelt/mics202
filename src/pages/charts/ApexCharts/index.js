import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import CandlestickChart from "./CandlestickChart";
import ColumnChart from "./ColumnChart";
import HeatmapChart from "./HeatmapChart";
import LineChart from "./LineChart";
import MixedChart from "./MixedChart";
import PieChart from "./PieChart";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function Blank() {
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }, []);

  return (
    <React.Fragment>
      <Helmet title="ApexCharts" />
      <Typography variant="h3" gutterBottom display="inline">
        ApexCharts
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Charts
        </Link>
        <Typography>ApexCharts</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <AreaChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ColumnChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <HeatmapChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <MixedChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <CandlestickChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Blank;
