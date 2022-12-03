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
    Tooltip,
    Paper as MuiPaper,
    Typography,
    IconButton,
    TextField,
    Popover,    
  } from "@mui/material";
import { areCoprime, coprimeList, eulersTotient, gcd_two_values, isPrime } from '../../../utils/mathUtils';

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

function EulersTotientCalculator(props) {

    const [working, setWorking] = useState(false);
    const [result, setResult] = useState(null);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    

    const [resultComplete, setResultComplete] = useState(false);
    const v1 = useRef();
    const v2 = useRef();

    const handleRandomize = () => {

        v1.current.value = parseInt( Math.random()*1000 );
        handleSolutionClick();

    }


    const handleResetCalculator = () => {

        setResultComplete(false);
        setResult(null);

        v1.current.value = null;
        v2.current.value = null;
    }

    const handleKeyUp = (e) => {
      if (e.key === 'Enter') {        
        handleSolutionClick();
      }
    }

    const handleSolutionClick = () => {

      let resultValue = eulersTotient(v1.current.value);
      setResult(resultValue);
      setResultComplete(true);

    }

    const renderCoprimeList = (value) => {
      let coprimes = coprimeList(value);
      return coprimes.map(n => {
        if (isPrime(n)) {
          return (
          <Tooltip title="Prime" placement="top">
            <Chip style={{margin: '5px'}} size='small' color='success' variant="filled" key={n} label={n.toLocaleString("en-US")} />  
          </Tooltip>
          )
        }
        return (
          <Tooltip title="Composite" placement="top">
            <Chip style={{margin: '5px'}} size='small' color='primary' variant="filled" key={n} label={n.toLocaleString("en-US")} />
          </Tooltip>
        )
      })
    }

    return (

      <Grid container spacing={6}>
        <Grid item xs={6}>


        <Card mb={6}>
          <CardContent>
            
            <Typography variant="h5" component="div">
              Euler&apos;s Totient Calculator
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Find how many numbers less an N that are coprime to N
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


            {resultComplete && 
                <span>
                    <br />
                    {result !== null && <Alert severity="success">Φ({v1.current.value}) = <strong>{result}</strong></Alert>}
                </span>}
                <br />
            {resultComplete && renderCoprimeList(v1.current.value)}


            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Calculate</Button>
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
            Euler&apos;s Totient Calculator Limitations
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For performance and memory reasons, stick to numbers under 1,000,000. Larger values may work but use at your own risk :)
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
              totient overview
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
              totient example
            </Paper>
            </CardContent>
            </Card>

        </Grid>

      </Grid>
  
    )
}

export default EulersTotientCalculator;