import { useState, useRef } from 'react';
import styled from "@emotion/styled";
import Latex from 'react-latex';

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
import { areCoprime, extended_gcd, gcd_two_values } from '../../../utils/mathUtils';


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

function ExtendedGCDCalculator(props) {

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

      let gcdResult = extended_gcd(v1.current.value, v2.current.value)
      
      setResult(gcdResult);
      setResultComplete(true);

    }

    let foundIdentity = true;

    let isCoprime = null;
    if ( result !== null ) {
      isCoprime = areCoprime(v1.current.value, v2.current.value) === true 
    }

  

    return (

    <Grid container spacing={6}>
        <Grid item xs={7}>

        <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Extended Euclidean Algorithm Calculator
            </Typography>

            <br />
            <Paper mt={3}>
          <form noValidate autoComplete="off">
            <TextField
              m={2}
              inputRef={v1}
              id="standard-required"
              label="Enter Value for A"
            />
            <br /><br />
            <TextField
              m={2}
              inputRef={v2}
              id="standard-required"
              label="Enter Value for B"
            />
            </form>
            </Paper>

            <span>


            {resultComplete && 
                <span>
                    <br />
                    {result === null && <Alert severity="error">No solution exists. Check your inputs and ensure your moduli are coprime!</Alert>}
                    {result !== null && <Alert severity="success">The greatet common divisor of <strong>{v1.current.value}</strong> and <strong>{v2.current.value}</strong> is <strong>{result[0]}</strong></Alert>}
                    <br />
                    {(result !== null && isCoprime) && <Alert severity="success">These values are coprime.</Alert> }
                    {(result !== null && !isCoprime) && <Alert severity="error">These values are not coprime.</Alert> }
                    <br />
                    {(result !== null && foundIdentity) && <Alert severity="success">Bezout&apos;s Identity coefficients are x=<strong>{result[1]}</strong>, y=<strong>{result[2]}</strong> and satisfy <Latex displayMode={true}>$$ax+by=gcd(a,b)$$</Latex></Alert> }
                    
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Find EGCD</Button>
            <Button size="small" onClick={handleRandomize}>Randomize EGCD</Button>
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
            GCD Calculator Limitations
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For performance and memory reasons stick to numbers under 10,000.
          </Typography>
        </Box>
      </Modal>            </CardActions>
         </Card>
  
         </Grid>

<Grid item xs={5}>

  <Card mb={6}>
  <CardContent>
    <Typography variant="h5" component="div">
      What is it?
    </Typography>

    <br />
    <Paper mt={3}>
      Jeremy / Callie write up here
    </Paper>
    </CardContent>
    </Card>

    <br />

    <Card mb={6}>
  <CardContent>
    <Typography variant="h5" component="div">
      Additional Reading
    </Typography>

    <br />
    <Paper mt={3}>
      
    </Paper>
    </CardContent>
    </Card>

</Grid>

</Grid>

    )
}

export default ExtendedGCDCalculator;