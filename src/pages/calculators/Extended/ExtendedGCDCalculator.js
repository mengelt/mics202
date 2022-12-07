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
import { areCoprime, extended_gcd, gcd_two_values, isPositiveInteger } from '../../../utils/mathUtils';


import { spacing } from "@mui/system";
import { EXAMPLE_HEADER, OVERVIEW_HEADER } from '../../../constants';
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
    const [inputError, setInputError] = useState(false);

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
        setInputError(false);

        v1.current.value = null;
        v2.current.value = null;
    }

    const handleKeyUp = (e) => {
      if (e.key === 'Enter') {        
        handleSolutionClick();
      }
    }
    
    const handleSolutionClick = () => {

      let inputValue1 = isPositiveInteger(v1.current.value);
      let inputValue2 = isPositiveInteger(v2.current.value);

      if ( inputValue1 === false || inputValue2 === false ) {
        setInputError(true);
        setResult(null)
        setResultComplete(true);
        return;
      } else {
        setInputError(false);
      }      

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
        <Grid item xs={6}>

        <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Extended Euclidean Algorithm Calculator
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Determine the Greated Common Divisor for two integer and Bezout&apos;s Identity coefficients   
            </Typography>
            <br />
            <Paper mt={3}>
          <form noValidate autoComplete="off">
            <TextField
              m={2}
              inputRef={v1}
              InputLabelProps={{shrink: true}}
              error={inputError === true}
              id="standard-required"
              label="Enter Value for A"
            />
            <br /><br />
            <TextField
              m={2}
              inputRef={v2}
              InputLabelProps={{shrink: true}}
              error={inputError === true}
              id="standard-required"
              label="Enter Value for B"
              onKeyUp={handleKeyUp}
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

<Grid item xs={6}>

  <Card mb={6}>
  <CardContent>
    <Typography variant="h5" component="div">
      {OVERVIEW_HEADER}
    </Typography>


    <Paper mt={3}>
    The extended Euclidean algorithm is an algorithm to compute integers x and y: 
  ax + by = gcd(a,b) 
  <br />

    </Paper>
    </CardContent>
    </Card>

    <br />

    <Card mb={6}>
  <CardContent>
    <Typography variant="h5" component="div">
      {EXAMPLE_HEADER}
    </Typography>

    
    <Paper mt={3}>
    We start with our GCD. We rewrite it in terms of the previous two terms:
2 = 26 - 2 * 12 

<br />
<br />
We replace for 12 by taking our previous line (38 = 1 * 26 + 12) and writing it in terms of 12:

2 = 26 - 2 * (38 - 1  * 26).
<br />
<br />
Collect like terms, the 26's, and we have

2 = 3 * 26 - 2 * 38.
<br />
<br />
Repeat the process:

2 = 3 * (102 - 2 * 38) - 2 * 38.

<br />
<br />
The final result is our answer:

2 = 3 * 102 - 8 * 38.
<br />
<br />
Thus x and y are 3 and -8.
    </Paper>
    </CardContent>
    </Card>

</Grid>

</Grid>

    )
}

export default ExtendedGCDCalculator;