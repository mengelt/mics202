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
import { areCoprime, gcd_two_values } from '../../../utils/mathUtils';

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

function MICalculator(props) {

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

      let gcdResult = gcd_two_values(v1.current.value, v2.current.value)
      setResult(gcdResult);
      setResultComplete(true);

    }

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
              Modular Multiplicitive Inverse Calculator
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              If your values are coprime, you can find the multiplicitive inverse
            </Typography>

            <div>coming soon to a browser near you</div>

{/*
            <br />
            <Paper mt={3}>
          <form noValidate autoComplete="off">
            <TextField
              m={2}
              required
              inputRef={v1}
              id="standard-required"
              label="Value 1"              
            />
            <br /><br />
            <TextField
              m={2}
              required
              inputRef={v2}
              id="standard-required"
              label="Value 2"
            />
            </form>
            </Paper>

          */}
            <span>

            {resultComplete && 
                <span>
                    <br />
                    {result === null && <Alert severity="error">No solution exists. Check your inputs and ensure your moduli are coprime!</Alert>}
                    {result !== null && <Alert severity="success">The greatet common divisor of <strong>{v1.current.value}</strong> and <strong>{v2.current.value}</strong> is <strong>{result}</strong></Alert>}
                    <br />
                    {(result !== null && isCoprime) && <Alert severity="success">These values are coprime.</Alert> }
                    {(result !== null && !isCoprime) && <Alert severity="error">These values are not coprime.</Alert> }
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Find Inverse</Button>
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
            Multiplicitive Inverse Calculator Limitations
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
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
              How is this useful to cryptography?
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

export default MICalculator;