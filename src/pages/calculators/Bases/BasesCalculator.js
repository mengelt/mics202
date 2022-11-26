
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
    CardActions,
    Button,
    Modal,
    Box,
    Tooltip,
    Paper as MuiPaper,
    Typography,
    TextField,
  } from "@mui/material";
import { convertToBases, isPrime, isPositiveInteger } from '../../../utils/mathUtils';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { spacing } from "@mui/system";

const Paper = styled(MuiPaper)(spacing);


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

function BasesCalculator(props) {
    
    const [result, setResult] = useState(null);
    const [inputError, setInputError] = useState(false);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    

    const [resultComplete, setResultComplete] = useState(false);

    const [base, setBase] = useState(10);

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

    const handleKeyUp = (e) => {
      if (e.key === 'Enter') {        
        handleSolutionClick();
      }
    }

    

    const handleChange = (e) => {
      setBase(e.target.value);
    };

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
      
      let result = convertToBases(base, +v1.current.value);

      setResult(result)
      setResultComplete(true);

    }


    return (
      <Grid container spacing={6}>
        <Grid item xs={7}>

        <Card mb={6}>
          <CardContent>
            <Typography variant="h5" component="div">
              Convert Numerical Base
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              A number can be represented in different bases
            </Typography>

            <br />
            <Paper mt={3}>
              <form noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>

              <FormControl required >
  <InputLabel id="demo-simple-select-label">Base</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={base}
    label="Base"
    onChange={handleChange}
  >
    <MenuItem value={2}>Binary</MenuItem>
    <MenuItem value={8}>Octal</MenuItem>
    <MenuItem value={10}>Decimal</MenuItem>
    <MenuItem value={16}>Hexidecimal</MenuItem>
  </Select>
</FormControl>


              <TextField
                style={{marginLeft: '8px'}}
                m={2}
                required
                inputRef={v1}
                id="standard-required"
                label="Enter Value for N"
                onKeyUp={handleKeyUp}
              />

              </form>
            </Paper>

            <br />

            <span>

            
            {inputError &&
              <Alert severity="error">Missing or invalid input!</Alert>
            }

            {resultComplete && 
                <span>

                    <div>
                        <div style={{display: 'inline-block', width: '200px'}}>Binary (base 2)</div>
                        <div style={{display: 'inline-block', width: '200px'}}>{result[2]}</div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', width: '200px'}}>Octal (base 8)</div>
                        <div style={{display: 'inline-block', width: '200px'}}>{result[8]}</div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', width: '200px'}}>Decimal (base 10)</div>
                        <div style={{display: 'inline-block', width: '200px'}}>{result[10]}</div>
                    </div>
                    <div>
                        <div style={{display: 'inline-block', width: '200px'}}>Hexidecimal (base 16)</div>
                        <div style={{display: 'inline-block', width: '200px'}}>{result[16]}</div>
                    </div>

                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Convert</Button>
            <Button size="small" onClick={handleRandomize}>Randomize N</Button>
            <Button size="small" onClick={handleResetCalculator}>Reset</Button>
            
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
      


      </Grid>
    )
}

export default BasesCalculator;