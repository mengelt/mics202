import { useState, useRef } from 'react';
import styled from "@emotion/styled";

import {
    Alert,
    Chip,
    Grid,
    Divider as MuiDivider,
    Typography as MuiTypography,
    Card,
    CardContent as MuiCardContent,
    CardHeader,
    CardActions,
    Button,
    Modal,
    Box,
    Paper as MuiPaper,
    Typography,
    IconButton,
    TextField,
    Popover,    
  } from "@mui/material";
import { areCoprime, findFactors, gcd_two_values } from '../../../utils/mathUtils';

import { spacing } from "@mui/system";

const MAX_ITERATIONS = 100_000;

const Paper = styled(MuiPaper)(spacing);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Factors(props) {

    const [working, setWorking] = useState(false);
    const [result, setResult] = useState(null);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    

    const [resultComplete, setResultComplete] = useState(false);
    const v1 = useRef();
    const v2 = useRef();

    const handleRandomize = () => {

        setResultComplete(false);
        setResult(null);

        v1.current.value = parseInt( Math.random()*1000 );
        v2.current.value = parseInt( Math.random()*1000 );

        handleSolutionClick();

    }


    const handleResetCalculator = () => {

        setResultComplete(false);
        setResult(null);

        v1.current.value = null;
        v2.current.value = null;
    }


    const handleSolutionClick = () => {

      let factors = findFactors(v1.current.value);

      setResult(factors)
      setResultComplete(true);

    }



    return (
        <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Find Factors for N
            </Typography>

            <br />
            <Paper mt={3}>
          <form noValidate autoComplete="off">
            <TextField
              m={2}
              required
              inputRef={v1}
              id="standard-required"
              label="Enter Value for N"              
            />

            </form>
            </Paper>

            <span>


            {resultComplete && 
                <span>
                    <br />
                    {result !== null && <Alert severity="success"><strong>{v1.current.value.toLocaleString("en-US")}</strong> has <strong>{result.length}</strong> factors</Alert>}
                    <br />
                    {result.map(r => {
                      return <Chip style={{margin: '5px'}} size='small' color='primary' variant="outlined" key={r} label={r.toLocaleString("en-US")} />
                    })}
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Find Factors</Button>
            <Button size="small" onClick={handleResetCalculator}>Reset</Button>
            <Button size="small" onClick={handleOpen}>About Calculator</Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Factor Finding Limitations
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For performance and memory reasons stick to numbers under 1,000,000. Larger values may work but use at your own risk :)
          </Typography>
        </Box>
      </Modal>            </CardActions>
         </Card>
  
    )
}

export default Factors;