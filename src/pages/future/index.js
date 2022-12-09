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



function Future() {
  const { t } = useTranslation();

  return (
    <React.Fragment>

      <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Future Plans
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            
              There are a number of ways this site could be improved:

              <ul>
                <li>Move computation off the main thread and into <a target="_blank" rel="noreferrer noopenner" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">web workers</a>. Currently, most calculators will seize the browser if sufficiently large numbers are used. </li>
                <li>Most of the calculators would benefit from hardening, more checks for invalid inputs</li>
                <li>Some calculators are not currently accepting negative numbers when they probably should be</li>
                <li>Translate user input into Sage input with copy and paste functionality (credit: Aaron Crouch)</li>
                <li>The calculators were put together quickly and need more rigorous testing to ensure accuracy</li>
                <li>The calculators that allow randomization of inputs should be smarter - e.g., only generate coprime values when that is what the calculator needs</li>
                <li>Automated tests for the core math functions</li>
                <li>Linting, code cleanup, general housekeeping</li>
              </ul>

            </Typography>

        </CardContent>
         </Card>

      

    </React.Fragment>
  );
}

export default Future;
