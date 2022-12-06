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
  
import { areCoprime, gcd_two_values, isPositiveInteger, primeFactorize } from '../../../utils/mathUtils';

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

function PrimeFactorizationCalculator(props) {

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

        v1.current.value = parseInt( Math.random()*1000000 );

        handleSolutionClick();

    }


    const handleResetCalculator = () => {

        setResultComplete(false);
        setResult(null);
        setInputError(false);

        v1.current.value = null;
        
    }


    const handleSolutionClick = () => {

      let inputValue = isPositiveInteger(v1.current.value);
      
      if ( inputValue === false ) {
        setInputError(true);
        setResult(null)
        setResultComplete(true);
        return;
      } else {
        setInputError(false);
      }

      let primeFactors = primeFactorize(v1.current.value);
      primeFactors.reverse();

      setResult(primeFactors);
      setResultComplete(true);

    }

    const handleKeyUp = (e) => {
      if (e.key === 'Enter') {        
        handleSolutionClick();
      }
    }

    return (

      <Grid container spacing={6}>
        <Grid item xs={6}>


        <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Prime Factorization Calculator
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Prime factorization is a process of writing a number as a product of primes.
            </Typography>

            
          <br />
            
            <Paper mt={3}>
          <form noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
            <TextField
              m={2}
              required
              inputRef={v1}
              id="standard-required"
              label="Enter Value for N"
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
                    {result !== null && <Alert severity="success">The value <strong>{parseInt(v1.current.value).toLocaleString("en-US")}</strong> is equal to the prime factorization <strong>{result.join(' x ')}</strong></Alert>}
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Factorize</Button>
            <Button size="small" onClick={handleRandomize}>Randomize N</Button>
            <Button size="small" onClick={handleResetCalculator}>Reset</Button>
            <Button size="small" onClick={handleOpen}>Limitations</Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Prime Factorization Calculator
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            To ensure browser stability, stick to numbers under 100,000,000. Use larger numbers at your own risk!
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

            <br />
            <Paper mt={3}>
            Use this prime numbers calculator to find all prime factors of a given integer. There are various methods for the prime factorization of a number.
            <br /><br />
            Common methods include:
              <ul>
                <li>Factorization using factor trees</li>
                <li>Factorization using division</li>
              </ul>
            <br />
            This calculator uses the division method.
            </Paper>
            </CardContent>
            </Card>

            <br />

            <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              {EXAMPLE_HEADER}
            </Typography>

            <br />
            <Paper mt={3}>
            The number 12,345 can be represented using only prime numbers:
            <Latex displayMode={true}>$$12,345 = 3 \cdot 5 \cdot 823$$</Latex>
            </Paper>
            </CardContent>
            </Card>

            <br />

            <Card mb={6}>

          <CardContent>
            <Typography variant="h5" component="div">
              {ADDITIONAL_READING_HEADER}
            </Typography>

            <br />
            <Paper mt={3}>
              <a href="https://en.wikipedia.org/wiki/Integer_factorization" target="_blank" rel="noopener noreferrer">Integer Factorization on Wikipedia</a>
            </Paper>
            </CardContent>
            </Card>


        </Grid>         
        </Grid>
  
    )
}

export default PrimeFactorizationCalculator;