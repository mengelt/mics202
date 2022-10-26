import { useState, useRef } from 'react';
import styled from "@emotion/styled";

import {
    Alert,
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
    Typography,
    IconButton,
    TextField,
    Popover,    
  } from "@mui/material";
  
const MAX_ITERATIONS = 100_000;


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

function CRTCalculator(props) {

    const [working, setWorking] = useState(false);
    const [result, setResult] = useState(null);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    

    const [resultComplete, setResultComplete] = useState(false);
    const v1 = useRef();
    const m1 = useRef();
    const v2 = useRef();
    const m2 = useRef();
    const v3 = useRef();
    const m3 = useRef();

    const solve = (inputs) => {
        let i = 0;
        while(1) {
            if (inputs.map(cong => (i % cong.mod) === cong.value).every(r => r === true)) {
                break;
            }
            i++;
            if ( i > MAX_ITERATIONS ) {
                return null;
            }
        }
        return i
    }


    const handleRandomize = () => {

        setResultComplete(false);
        setResult(null);

        let tv1 = getRandomInt(5)+5
        let tm1 = tv1 - getRandomInt(3) - 1;
        m1.current.value = tv1;
        v1.current.value = tm1;


        let tv2 = getRandomInt(5)+5
        let tm2 = tv2 - getRandomInt(3) - 1;
        m2.current.value = tv2;
        v2.current.value = tm2;

        let tv3 = getRandomInt(5)+5
        let tm3 = tv3 - getRandomInt(3) - 1;
        m3.current.value = tv3;
        v3.current.value = tm3;

        handleSolutionClick();

    }


    const handleResetCalculator = () => {

        setResultComplete(false);
        setResult(null);

        v1.current.value = '1';
        v2.current.value = '4';
        v3.current.value = '6';
        m1.current.value = '3';
        m2.current.value = '5';
        m3.current.value = '7';
    }


    const handleSolutionClick = () => {

        setResultComplete(false);
        setResult(null);
        let inputs = [];

        inputs.push( {value: +v1.current.value, mod: +m1.current.value})
        inputs.push( {value: +v2.current.value, mod: +m2.current.value})
        inputs.push( {value: +v3.current.value, mod: +m3.current.value})
        console.info({inputs})
        setWorking(true);
        let result = solve(inputs);
        setWorking(false);
        console.info(result);
        setResult(result);
        setResultComplete(true);
    }

    return (
        <Card mb={6}>
        <CardContent>
        <Typography variant="h5" component="div">
      Solving a System of Congruence
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Given coprime moduli and integer values the system of congruences has a solution
      </Typography>
<br />
  <span>
            {/*renderInputs(inputs)*/}
            
    
            <div>
                <strong style={{fontSize: '1.2em'}}>x &#8780;</strong>
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}} style={{width: 40}} inputRef={v1} defaultValue={1} variant="standard" /> mod 
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}} style={{width: 40}} defaultValue={3} inputRef={m1} variant="standard" />
            </div>
            <div>
                <strong style={{fontSize: '1.2em'}}>x &#8780;</strong>
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}} style={{width: 40}} inputRef={v2} defaultValue={4} variant="standard" /> mod 
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}} style={{width: 40}} defaultValue={5} inputRef={m2} variant="standard" />
            </div>
            <div>
                <strong style={{fontSize: '1.2em'}}>x &#8780;</strong>
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}} style={{width: 40}} inputRef={v3} defaultValue={6} variant="standard" /> mod 
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}} style={{width: 40}} defaultValue={7} inputRef={m3} variant="standard" />
            </div>



            {resultComplete && 
                <span>
                    <br />
                    
                    {result === null && <Alert severity="error">No solution exists. Check your inputs and ensure your moduli are coprime!</Alert>}
                    {result !== null && <Alert severity="success">A solution for this congruence is: <strong>x = {result}</strong></Alert>}
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleSolutionClick}>Find Solution</Button>
            <Button size="small" onClick={handleRandomize}>Randomize Congruence</Button>
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
            CRT Calculator Limitations
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            For performance and memory reasons, the calculator stops searching for solutions at 100,000.
          </Typography>
        </Box>
      </Modal>            </CardActions>
         </Card>
  
    )
}

export default CRTCalculator;