import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import { MoreVertical } from "react-feather";

import {
  Card as MuiCard,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  LinearProgress as MuiLinearProgress,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)});
`;

const LinearProgress = styled(MuiLinearProgress)`
  height: 14px;
  width: 180px;
  border-radius: 3px;
  background: ${(props) => props.theme.palette.grey[200]};
`;

function LanguagesTable({ theme }) {
  return (
    <Card mb={6}>
      <CardHeader
        action={
          <IconButton aria-label="settings" size="large">
            <MoreVertical />
          </IconButton>
        }
        title="Languages"
      />
      <Paper>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row">
                  Language
                </TableCell>
                <TableCell align="right">Users</TableCell>
                <TableCell>% Users</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell scope="row">en-us</TableCell>
                <TableCell align="right">865</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">en-gb</TableCell>
                <TableCell align="right">240</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={65}
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">fr-fr</TableCell>
                <TableCell align="right">220</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={50}
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">es-es</TableCell>
                <TableCell align="right">162</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={30}
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">de-de</TableCell>
                <TableCell align="right">86</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={15}
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">ru-ru</TableCell>
                <TableCell align="right">32</TableCell>
                <TableCell>
                  <LinearProgress
                    variant="determinate"
                    value={5}
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </Paper>
    </Card>
  );
}

export default withTheme(LanguagesTable);
