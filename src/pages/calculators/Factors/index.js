import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";


import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,


} from "@mui/material";
import { spacing } from "@mui/system";

import FactorCalculator from "./FactorCalculator";


const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);




function Factors() {


  return (
    <React.Fragment>
      <Helmet title="Factors" />
      <Grid justifyContent="space-between" container spacing={2}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Find Factors of N
          </Typography>
        </Grid>
      </Grid>


      <Divider my={6} />


      <FactorCalculator />

    </React.Fragment>
  );
}

export default Factors;
