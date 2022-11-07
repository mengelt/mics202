import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Card as MuiCard,
  CardContent,
  Paper as MuiPaper,
  CardHeader,
  IconButton,
} from "@mui/material";
import { spacing } from "@mui/system";




const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);


const Card = styled(MuiCard)(spacing);



function Bases() {
  const { t } = useTranslation();

  return (
    <React.Fragment>

      <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              About this Site
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            
              MICS202Tools is the final project for Jeremy Colvin, Mark Mengelt, and Callie Stull for Cyber 202 in the Fall 2022 semester.

            </Typography>

            <br />
            <Typography sx={{ mb: 1.5 }} color="text.primary">
            
              The goal of the project was to create a simple resource with recurring course concepts. The project includes calculators and simple explanations.

            </Typography>

            <br />

        </CardContent>
         </Card>

      

    </React.Fragment>
  );
}

export default Bases;
