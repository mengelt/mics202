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



function About() {
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
            
              The goal of the project was to create a resource with explaining recurring course concepts with easy to use calculators. While this site is not exhaustive, it provides a good base of concepts to help the MICS student. While Python+Sage are a far better technology decision for a site like this, JavaScript is used to keep costs as low as possible. 
              All calculations are run within the browser and do not use any additional bandwidth once the site is loaded.
              <br /><br />
              This site is currently hosted on an AWS free plan and is using <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer">Amazon Amplify</a> to automate the CICD.

            </Typography>

            <br />

        </CardContent>
         </Card>

      

    </React.Fragment>
  );
}

export default About;
