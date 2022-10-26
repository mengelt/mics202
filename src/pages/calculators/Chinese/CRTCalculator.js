import { useState, useRef } from 'react';

import {
    Grid,
    Divider as MuiDivider,
    Typography as MuiTypography,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Button,
    Typography,
    IconButton,
    TextField,
    
  } from "@mui/material";

const MAX_ITERATIONS = 100_000;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function CRTCalculator(props) {

    const [working, setWorking] = useState(false);
    const [result, setResult] = useState(null);
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

    const handleValueChange = (e) => {
        console.info(e);
        console.info(e.target.value)
        console.info(e.target.getAttribute("value"))
    }
    
    const handleModChange = (e) => {
        console.info(e);
    }
    const renderInputs = (inputs) => {
        return inputs.map( (input, x) => {
            return (
                <div>x &#8780; 
                    <TextField data-row={input.row} data-name="value" onChange={handleValueChange} label="coefficient" variant="standard" value={input.value} /> 
                    (mod <TextField data-row={input.row} data-name="mod" onChange={handleModChange} label="mod" variant="standard" value={input.mod} />)</div>
            )
        })
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
                    {result === null && <span style={{color: 'red', fontSize: '24px', fontWeight: 'bold'}}>No solution exists</span>}
                    {result !== null && <span style={{color: 'green', fontSize: '24px', fontWeight: 'bold'}}>x = {result}</span>}
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={handleSolutionClick}>Find Solution</Button>
        <Button size="small" onClick={handleRandomize}>Randomize Congruence</Button>
        <Button size="small" onClick={handleResetCalculator}>Reset</Button>
        <Button size="small">About Calculator</Button>
      </CardActions>
         </Card>
  
    )
}

export default CRTCalculator;