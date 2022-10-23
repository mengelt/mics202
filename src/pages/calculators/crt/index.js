import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { spacing } from "@mui/system";


const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function CRT() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title="CRT Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            CRT Dashboard
          </Typography>
          <Typography variant="subtitle1">
            {t("Welcome back")}, Lucy! {t("We've missed you")}.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          hi
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
ok usa
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
ok usa
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
ok usa
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
ok usa
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={5}>
          yes
        </Grid>
        <Grid item xs={12} lg={7}>
          no
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          what
        </Grid>
        <Grid item xs={12} lg={8}>
          what
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CRT;
