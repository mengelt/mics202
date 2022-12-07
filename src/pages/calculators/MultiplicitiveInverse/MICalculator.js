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
import { areCoprime, gcd_two_values, isPositiveInteger, multiplicitive_inverse } from '../../../utils/mathUtils';


import { spacing } from "@mui/system";
import { ADDITIONAL_READING_HEADER, EXAMPLE_HEADER, OVERVIEW_HEADER } from '../../../constants';
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

function MICalculator(props) {

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

        setInputError(false);
        setResultComplete(false);
        setResult(null);

        v1.current.value = parseInt( Math.random()*1000 );
        v2.current.value = parseInt( Math.random()*1000 );

        handleSolutionClick();

    }

    const handleKeyUp = (e) => {
      if (e.key === 'Enter') {        
        handleSolutionClick();
      }
    }

    const handleResetCalculator = () => {

        setResultComplete(false);
        setResult(null);
        setInputError(false);

        v1.current.value = null;
        v2.current.value = null;
    }


    const handleSolutionClick = () => {

      let inputValue1 = isPositiveInteger(v1.current.value);
      let inputValue2 = isPositiveInteger(v2.current.value);

      if ( inputValue1 === false || inputValue2 === false ) {
        setInputError(true);
        setResult(null)
        setResultComplete(false);
        return;
      } else {

        let isCoprime = areCoprime(v1.current.value, v2.current.value) === true 

        if ( isCoprime ) {
  
          let inverse = multiplicitive_inverse(v1.current.value, v2.current.value);
          setResult(inverse);
  
        } else {
          setResult(null);
        }
        
        setInputError(false);
        setResultComplete(true);

      }      



    }


  

    return (

      <Grid container spacing={6}>
        <Grid item xs={6}>


        <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Find a Modular Multiplicitive Inverse
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              When both values are coprime, a solution exists.
            </Typography>

            <br />
            <Paper mt={3}>
          <form noValidate autoComplete="off">
            <TextField
              m={2}
              error={inputError === true}
              InputLabelProps={{shrink: true}}
              inputRef={v1}
              id="standard-required"
              label="Enter Value for A"
            />
            <br /><br />
            <TextField
              m={2}
              error={inputError === true}
              InputLabelProps={{shrink: true}}
              inputRef={v2}
              id="standard-required"
              label="Enter Modulo"
              onKeyUp={handleKeyUp}
              />
            </form>
            </Paper>

            <span>
            <br />
            {inputError &&
              <Alert severity="error">Missing or invalid input!</Alert>
            }

            {resultComplete && 
                <span>
                    {result === null && <Alert severity="error">No solution exists. Check your inputs and ensure they are coprime!</Alert>}
                    {result !== null && <Alert severity="success">The modular multiplicitive inverse is <strong>b = {result}</strong>  and satisfies <Latex displayMode={true}>$$ab \equiv1\pmod n$$</Latex></Alert>}
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Calculate Inverse</Button>
            <Button size="small" onClick={handleRandomize}>Randomize Values</Button>
            <Button size="small" onClick={handleResetCalculator}>Reset</Button>
            {/*<Button size="small" onClick={handleOpen}>About Calculator</Button>*/}
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

        The modular multiplicative inverse of an integer is the product of two numbers such that the value is congruent to 1 when using a modulus n.
        Another way to think about this is that the modulus value divides evenly into the product of two numbers minus 1.
        <br />
        <br />
        Given an integer and the modulus, this calculator can find the other integer.
        <br /><br />
        The modular multiplicitive inverse has uses in public-key cryptography and the RSA algorithm.
        <br /><br />
        Example: A=3, C=7
        <br /><br />
Step 1. Calculate A * B mod C for B values 0 through C-1
<br />
<br /> 3 * 0 ≡ 0 (mod 7)
<br /> 3 * 1 ≡ 3 (mod 7)
<br /> 3 * 2 ≡ 6 (mod 7)
<br /> 3 * 3 ≡ 9 ≡ 2 (mod 7)
<br /> 3 * 4 ≡  12 ≡ 5 (mod 7)
<br /> 3 * 5 ≡ 15 (mod 7) ≡ 1 (mod 7)
<br /> 3 * 6 ≡ 18 (mod 7) ≡ 4 (mod 7)
<br /><br />
Step 2. The modular inverse of A mod C is the B value that makes A * B mod C = 5 is the modular inverse of 3 mod 7 since 5*3 mod 7 = 1
    </Paper>
    </CardContent>
    </Card>

    <br />

    <Card mb={6}>
  <CardContent>
    <Typography variant="h5" component="div">
      {ADDITIONAL_READING_HEADER}
    </Typography>


    <Paper mt={3}>
    <a href="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse" target="_blank" rel="noopener noreferrer">Modular Multiplicitive Inverse on Wikipedia</a><br />
    
    </Paper>
    </CardContent>
    </Card>

</Grid>

</Grid>


    )
}

export default MICalculator;