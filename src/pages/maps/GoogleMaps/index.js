import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";

import Default from "./Default";
import Hybrid from "./Hybrid";
import LightStyle from "./LightStyle";
import DarkStyle from "./DarkStyle";
import Streetview from "./Streetview";
import Markers from "./Markers";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

function GoogleMaps() {
  return (
    <React.Fragment>
      <Helmet title="Google Maps" />
      <Typography variant="h3" gutterBottom display="inline">
        Google Maps
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Maps
        </Link>
        <Typography>Google Maps</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Default />
        </Grid>
        <Grid item xs={12} md={6}>
          <Hybrid />
        </Grid>
        <Grid item xs={12} md={6}>
          <LightStyle />
        </Grid>
        <Grid item xs={12} md={6}>
          <DarkStyle />
        </Grid>
        <Grid item xs={12} md={6}>
          <Streetview />
        </Grid>
        <Grid item xs={12} md={6}>
          <Markers />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default GoogleMaps;
