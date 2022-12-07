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
import { areCoprime, gcd_two_values, isPositiveInteger, multiplicitive_inverse, quadratic_residue } from '../../../utils/mathUtils';


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

function QuadraticResidueCalculator(props) {

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
        setInputError(null);   

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
        setInputError(null);
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

        let isCoprime = areCoprime(v1.current.value, v2.current.value);

        if ( isCoprime ) {
          let residue = quadratic_residue(v1.current.value, v2.current.value);
          setResult(residue);
        } else {
          //setInputError(`${v1.current.value} and ${v2.current.value} are not coprime. This has no solution.`)
          setResult(null);
        }
        
        setResultComplete(true);
  
      }

    }


  

    return (

      <Grid container spacing={6}>
        <Grid item xs={6}>


        <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Modular Square Root
            </Typography>
            {/*
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              When both values are coprime, a solution exists.
            </Typography>
    */}

            <br />
            <Paper mt={3}>
          <form noValidate autoComplete="off">
            <TextField
              m={2}
              inputRef={v1}
              error={inputError === true}
              id="standard-required"
              label="Enter Value for A"
              InputLabelProps={{shrink: true}}
            />
            <br /><br />
            <TextField
              m={2}
              inputRef={v2}
              error={inputError === true}
              id="standard-required"
              label="Enter Modulo"
              onKeyUp={handleKeyUp}
              InputLabelProps={{shrink: true}}
              />
            </form>
            </Paper>

            
            <br />
            {inputError &&
              <Alert severity="error">Missing or invalid input!</Alert>
            }

            {resultComplete === true && 
                <span>
                    <br />
                    {(result === null || result.length === 0) && <Alert severity="error">No solution exists. Check your inputs and ensure they are coprime!</Alert>}
                    {(result !== null && result.length > 0) && <Alert severity="success">The modular square roots are <strong>∈ = {result.join(',')}</strong>  and satisfies <Latex displayMode={true}>$$ r² \equiv a\pmod p$$</Latex></Alert>}
                </span>}
            <br />
 
        
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Calculate</Button>
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

    A modular square root of an integer modulo another integer greater than 1 is a value such that: r^2 ≡ a ( mod m ).
    <br />This calculator can locate the value or r when a solution exists.
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
    <a href="https://en.wikipedia.org/wiki/Quadratic_residue" target="_blank" rel="noopener noreferrer">Quadratic Residues on Wikipedia</a><br />
    
    </Paper>
    </CardContent>
    </Card>

</Grid>

</Grid>


    )
}

export default QuadraticResidueCalculator;