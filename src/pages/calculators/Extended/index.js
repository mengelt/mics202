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
  Paper as MuiPaper,
  CardHeader,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";

import ExtendedGCDCalculator from "./ExtendedGCDCalculator";


const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);


const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-top: 0;
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

function Extended() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="Extended Euclidean" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Extended Euclidean Algorithm 
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />


      <ExtendedGCDCalculator />

    </React.Fragment>
  );
}

export default Extended;
