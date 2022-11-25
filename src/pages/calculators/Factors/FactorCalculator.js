import { useState, useRef } from 'react';
import styled from "@emotion/styled";

import {
    Alert,
    Chip,
    Grid,
    Avatar,
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
import { areCoprime, findFactors, gcd_two_values, isPrime, primeFactorize, isPositiveInteger } from '../../../utils/mathUtils';

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
    
    const [result, setResult] = useState(null);
    const [inputError, setInputError] = useState(false);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    

    const [resultComplete, setResultComplete] = useState(false);
    const v1 = useRef();
    

    const resetCalculator = () => {

      setResultComplete(false);
      setResult(null);
      setInputError(false);

      v1.current.value = null;

    }

    const handleRandomize = () => {

      resetCalculator();
      v1.current.value = parseInt( Math.random()*10_000_000 );
      handleSolutionClick();

    }


    const handleResetCalculator = () => {

      resetCalculator();
        
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
      
      let factors = findFactors(+v1.current.value);

      setResult(factors)
      setResultComplete(true);

    }


    return (
      <Grid container spacing={6}>
        <Grid item xs={7}>

        <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Factoring Calculator
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            A factor is a number that divides into another number and leaves no remainder
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

            <br />

            <span>

            
            {inputError &&
              <Alert severity="error">What would I do with that?</Alert>
            }

            {resultComplete && 
                <span>
                    
                    {result !== null && <Alert severity="success"><strong>{parseInt(v1.current.value).toLocaleString("en-US")}</strong> has <strong>{result.length}</strong> factors</Alert>}
                    <br />
                    {result !== null && result.map(r => {
                      
                      if ( isPrime(r)) {
                        return <Chip style={{margin: '5px'}} size='small' color='success' variant="filled" key={r} label={r.toLocaleString("en-US")} />
                      }

                      return <Chip style={{margin: '5px'}} size='small' color='primary' variant="filled" key={r} label={r.toLocaleString("en-US")} />
                    })}
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Find Factors</Button>
            <Button size="small" onClick={handleRandomize}>Randomize N</Button>
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
          Limitations on Finding Factors
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For performance and memory reasons stick to numbers under 10,000,000. Larger values may work but use at your own risk :)
          </Typography>
        </Box>
      </Modal>
      </CardActions>
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

        </Grid>
      
      {/*

                  */}


      </Grid>
    )
}

export default Factors;