import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader,
  Button,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";

import CRTCalculator from "./CRTCalculator";
import CRTNotation from "./CRTNotation";



const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);


const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-top: 0;
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;


function Chinese() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="Chinese Remainder Theorem" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Chinese Remainder Theorem
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />


      <CRTNotation />

    

    {/* <CRTCalculator /> */}

    </React.Fragment>
  );
}

export default Chinese;
