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
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";
import BasesCalculator from "./BasesCalculator";



const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);


const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-top: 0;
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

function Bases() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="CRT Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Convert Between Bases
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />

      <BasesCalculator />



    </React.Fragment>
  );
}

export default Bases;
