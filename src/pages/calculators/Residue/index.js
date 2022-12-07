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

import QuadraticResidueCalculator from "./QuadraticResidueCalculator";


const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);


const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-top: 0;
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

function PrimeFactorization() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="Prime Factorization" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Modular Square Root
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />


      <QuadraticResidueCalculator />

    </React.Fragment>
  );
}

export default PrimeFactorization;
