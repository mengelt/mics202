import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@mui/material";

import { spacing } from "@mui/system";

const Chip = styled(MuiChip)`
  height: 20px;
  margin-top: -3px;
  font-weight: bold;
  font-size: 75%;
`;

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Changelog() {
  return (
    <React.Fragment>
      <Helmet title="Changelog" />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Changelog
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Typography>Changelog</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Box mt={3}>
            <Typography variant="subtitle1">
              <Chip color="secondary" label="v4.2.0" /> – Sept 8, 2022
              <ul>
                <li>Improve documentation</li>
                <li>Upgrade to React v18.2.0</li>
                <li>Upgrade to Create React App v5.0.1</li>
                <li>Upgrade to Next.js v12.3.0</li>
                <li>Upgrade to MUI v5.10.4</li>
                <li>Upgrade dependencies to latest versions</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v4.1.1" /> – Jul 7, 2022
              <ul>
                <li>Reduce loading time of development server</li>
                <li>Reduce bundle size using babel-plugin-direct-import</li>
                <li>
                  Migrate date pickers from @mui/lab to @mui/x-date-pickers
                </li>
                <li>Fix issues related to Next.js and deployment on Vercel</li>
                <li>Fix issues related to Cognito authentication</li>
                <li>Upgrade to MUI v5.8.7</li>
                <li>Upgrade dependencies to latest versions</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v4.1.0" /> – Apr 14, 2022
              <ul>
                <li>Add Create React App version for JavaScript</li>
                <li>Add Create React App version for TypeScript</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v4.0.0" /> – Mar 28, 2022
              <ul>
                <li>Rebrand project from Material App to Mira Pro</li>
                <li>Migrate from styled-components to Emotion</li>
                <li>Migrate from Create React app to Next.js</li>
                <li>Add ApexCharts (/charts/apexcharts)</li>
                <li>Upgrade to MUI v5.5.2</li>
                <li>Upgrade dependencies to latest versions</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v3.2.1" /> – Dec 19, 2021
              <ul>
                <li>Fix prettier issues</li>
                <li>Upgrade to MUI v5.2.4</li>
                <li>Upgrade dependencies to latest versions</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v3.2.0" /> – Dec 10, 2021
              <ul>
                <li>Replace Hidden component with the sx prop</li>
                <li>Upgrade to MUI v5.2.3</li>
                <li>Upgrade dependencies to latest versions</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v3.1.0" /> – Sept 20, 2021
              <ul>
                <li>Add Amazon Cognito (/documentation/auth/cognito)</li>
                <li>Upgrade to MUI v5 stable</li>
                <li>Upgrade to MUI Data Grid v5</li>
                <li>Upgrade to React-Quill v2</li>
                <li>Upgrade dependencies to latest versions</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v3.0.0" /> – Sept 1, 2021
              <ul>
                <li>Add Data Grid example (/tables/data-grid)</li>
                <li>Add web-vitals support</li>
                <li>Add Auth0 (/documentation/auth/auth0)</li>
                <li>Add JWT (/documentation/auth/jwt)</li>
                <li>Add Firebase auth (/documentation/auth/firebase)</li>
                <li>
                  Add internationalization docs
                  (/documentation/internationalization)
                </li>
                <li>Add routing docs (/documentation/routing)</li>
                <li>Add Guards docs (/documentation/guards)</li>
                <li>Add Next.js docs (/documentation/migrating-to-next-js)</li>
                <li>Migrate to Material-UI v5 date & time pickers</li>
                <li>Migrate to Material-UI v5 theme format</li>
                <li>Migrate to React Router v6 format</li>
                <li>Migrate to Chart.js v3 format</li>
                <li>Fix issue with sidebar scrollbar on iOS</li>
                <li>Upgrade to React v17</li>
                <li>Upgrade to Material-UI v5</li>
                <li>Upgrade to Chart.js v3</li>
                <li>Upgrade to React Router v6</li>
                <li>Upgrade dependencies to latest versions</li>
                <li>Remove dropzone</li>
                <li>Remove IE11 support</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v2.0.3" /> – Mar 27, 2021
              <ul>
                <li>Remove @material-ui/data-grid package</li>
                <li>Rename Expansion Panel to Accordion</li>
                <li>Fix issue with @babel/preset-env</li>
                <li>Update browserslist</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v2.0.2" /> – Mar 25, 2021
              <ul>
                <li>Add strict mode support</li>
                <li>Replace helmet with helmet-async</li>
                <li>Fix issue with Full Calendar styling</li>
                <li>Fix issue with page flickering</li>
                <li>Fix issue with CSS overflow</li>
                <li>Improve build times</li>
                <li>Upgrade dependencies to latest versions</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v2.0.1" /> – Dec 25, 2020
              <ul>
                <li>Fix issue with react-jsx and TypeScript</li>
                <li>Fix issue with stylesheets injection order</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v2.0.0" /> – Dec 1, 2020
              <ul>
                <li>Add Dark Mode support</li>
                <li>Add Chat page (/pages/chat)</li>
                <li>Add SaaS dashboard (/dashboard/saas)</li>
                <li>Add Data Grid example (/tables/data-grid)</li>
                <li>Add redux-devtools-extension</li>
                <li>Add Formik library and example</li>
                <li>Add Yup validation example</li>
                <li>Add Redux DevTools support</li>
                <li>Add Styled Components Babel plugin</li>
                <li>Add example service with Axios</li>
                <li>Add example API mocks with Axios Mock Adapter</li>
                <li>
                  Add authentication example with redux, services and mocks
                </li>
                <li>Add protected routes examples</li>
                <li>Add ESLint + Prettier configuration</li>
                <li>Add messages/notifications dropdowns</li>
                <li>
                  Replace remaining class components with functional components
                </li>
                <li>Replace font with Inter</li>
                <li>Update landing page</li>
                <li>Update settings sidebar</li>
                <li>Update Redux documentation</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.2.0" /> – Aug 17, 2020
              <ul>
                <li>Add Deployment docs (/documentation/deployment)</li>
                <li>Add Theming docs (/documentation/theming)</li>
                <li>
                  Add Environment Variables docs
                  (/documentation/environment-variables)
                </li>
                <li>
                  Add State Management docs (/documentation/state-management)
                </li>
                <li>Add FAQ to landing page</li>
                <li>Improve route structure</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.1.0" /> – Aug 2, 2020
              <ul>
                <li>Add TypeScript version</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.8" /> – Apr 14, 2020
              <ul>
                <li>Add invoices (/invoices)</li>
                <li>Add orders (/orders)</li>
                <li>Add alerts (/components/alerts)</li>
                <li>Add pagination (/components/pagination)</li>
                <li>Add dropzone (/forms/dropzone)</li>
                <li>Add editors (/forms/editors)</li>
                <li>Improve invoice details (/invoices/detail)</li>
                <li>Improve projects design (/projects)</li>
                <li>Improve settings design (/pages/settings)</li>
                <li>Improve tasks design (/tasks)</li>
                <li>Improve performance</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.7" /> – Mar 2, 2020
              <ul>
                <li>Fixed bug with @material-ui/utils</li>
                <li>Small visual changes</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.6" /> – Feb 20, 2020
              <ul>
                <li>Add React Helmet</li>
                <li>Fixed bug with @material-ui/pickers</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.5" /> – Dec 21, 2019
              <ul>
                <li>Add calendar (/calendar)</li>
                <li>Add landing page</li>
                <li>Add teal color variant</li>
                <li>Fixed horizontal scrollbar issues</li>
                <li>Small visual changes</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.4" /> – Aug 26, 2019
              <ul>
                <li>Add vector maps (/maps/vector-maps)</li>
                <li>Add private route example</li>
                <li>Add catch-all route</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.3" /> – Aug 24, 2019
              <ul>
                <li>Add analytics dashboard (/dashboard/analytics)</li>
                <li>Add language dropdown</li>
                <li>Small visual changes</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.2" /> – Aug 17, 2019
              <ul>
                <li>Add IE11 support</li>
                <li>Add indigo color variant</li>
                <li>Add sidebar badges</li>
                <li>Add profile page (/pages/profile)</li>
                <li>Add projects page (/pages/projects)</li>
                <li>Add tasks page (/pages/tasks)</li>
                <li>Small visual changes</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
            <Divider my={6} />

            <Typography variant="subtitle1">
              <Chip color="secondary" label="v1.0.1" /> – Aug 2, 2019
              <ul>
                <li>Add dark sidebar variant</li>
                <li>Add light sidebar variant</li>
                <li>Add settings page (/settings)</li>
                <li>Add google maps (/maps)</li>
                <li>Add drawer with color variant</li>
                <li>Small visual changes</li>
                <li>Upgrade dependencies to latest version</li>
              </ul>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Changelog;
