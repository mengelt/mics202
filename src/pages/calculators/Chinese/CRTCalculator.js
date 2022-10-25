import { useState, useRef } from 'react';

import {
    Grid,
    Divider as MuiDivider,
    Typography as MuiTypography,
    Card as MuiCard,
    CardContent as MuiCardContent,
    CardHeader,
    Button,
    IconButton,
    TextField,
    
  } from "@mui/material";


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
            if ( i > 100000 ) {
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
        <span>
            {/*renderInputs(inputs)*/}
            
    
            <div> x = <TextField inputRef={v1} defaultValue={1} variant="standard" /> mod <TextField defaultValue={3} inputRef={m1} variant="standard" /> </div>
            <div> x = <TextField inputRef={v2} defaultValue={4} variant="standard" /> mod <TextField defaultValue={5} inputRef={m2} variant="standard" /> </div>
            <div> x = <TextField inputRef={v3} defaultValue={6} variant="standard" /> mod <TextField defaultValue={7} inputRef={m3} variant="standard" /> </div>

            {resultComplete && 
                <span>
                    {result === null && <span>No solution exists</span>}
                    {result !== null && <span style={{color: 'green', fontSize: '24px', fontWeight: 'bold'}}>x &#8780; {result}</span>}
                </span>}
            <br />
            <Button variant="outlined" onClick={handleSolutionClick}>Find Solution</Button>
            
        </span>
    )
}

export default CRTCalculator;