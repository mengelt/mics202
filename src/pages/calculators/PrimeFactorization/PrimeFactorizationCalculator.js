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
import { areCoprime, gcd_two_values, primeFactorize } from '../../../utils/mathUtils';

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

function PrimeFactorizationCalculator(props) {

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

        handleSolutionClick();

    }


    const handleResetCalculator = () => {

        setResultComplete(false);
        setResult(null);

        v1.current.value = null;
        
    }


    const handleSolutionClick = () => {

      console.info(v1.current.value)
      let primeFactors = primeFactorize(v1.current.value);
      primeFactors.reverse();
      setResult(primeFactors);
      setResultComplete(true);

    }


    return (
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
          <form noValidate autoComplete="off">
            <TextField
              m={2}
              required
              inputRef={v1}
              id="standard-required"
              label="Enter an Integer N"              
            />
            </form>
            </Paper>
            <span>

            {resultComplete && 
                <span>
                    <br />
                    {result !== null && <Alert severity="success">The value <strong>{parseInt(v1.current.value).toLocaleString("en-US")}</strong> is equal to the prime factorization <strong>{result.join(' x ')}</strong></Alert>}
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Factorize</Button>
            <Button size="small" onClick={handleRandomize}>Randomize Value</Button>
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
            Prime Factorization Calculator
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For performance and memory reasons stick to numbers under 1,000,000. Use larger numbers at your own risk!
          </Typography>
        </Box>
      </Modal>            </CardActions>
         </Card>
  
    )
}

export default PrimeFactorizationCalculator;