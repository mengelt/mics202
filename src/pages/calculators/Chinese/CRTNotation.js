import { useState, useRef } from 'react';
import styled from "@emotion/styled";

import { findFactors, isComposite, isPositiveInteger, isPrime, primeFactorize } from '../../../utils/mathUtils';

import "./crt.css";

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

function CRTNotation(props) {

    const [working, setWorking] = useState(false);
    const [result, setResult] = useState(null);
    const [inputError, setInputError] = useState(false);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);    

    const [resultComplete, setResultComplete] = useState(false);
    const v1 = useRef();
    const m1 = useRef();

    const solve = (inputs) => {
        let i = 0;
        while(1) {
            if (inputs.map( (cong, i) => (i % cong.mod) === cong.value).every(r => r === true)) {
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

        handleNotateIt()
        

    }


    const handleResetCalculator = () => {
        
        setResultComplete(false);
        setResult(null);
        setInputError(false);

        v1.current.value = null;
        m1.current.value = null;
    }


    const handleNotateIt = () => {

        let inputValue1 = isPositiveInteger(v1.current.value);
        let inputValue2 = isPositiveInteger(m1.current.value);

        if ( inputValue1 === false || inputValue2 === false ) {
            setInputError(true);
            setResult(null)
            setResultComplete(false);
            return;
          } else {
    

        // determine if modulus is prime
        let currentValue = m1.current.value;
        let notation = [];

        const isPrimeValue = isPrime(currentValue);

        let allFactors = findFactors(currentValue);

        const isCompositeValue = isComposite(currentValue);

        let primies = [];
        if ( isCompositeValue ) {
            primies = primeFactorize(currentValue).reverse();
            console.info({primies})
        } else {
            allFactors = allFactors.filter(f => f !== 1)
            primies = [...allFactors];
        }

        // 11 (mod 15)
        // < 2 mod 3, 1 mod 5 >
        

            let preprocess = primies.map( factor => {
                return {
                    value: +v1.current.value,
                    factor: factor,
                    remainder: +v1.current.value % factor,
                    power: 1,
                    valuePower: factor
                }
                /*
                let remainder = v1.current.value % factor;
                console.info(`checking ${factor} % ${v1.current.value} remainder is ${remainder}`)
                return `${remainder} mod ${factor}`                
                */
            });

            console.info({preprocess})
            
            let reduced = preprocess.reduce( (prev, curr) => {
                if ( curr.factor in prev) {
                    return {...prev, [curr.factor]: prev[curr.factor] + 1 }
                } else {
                    return {...prev, [curr.factor]: 1}
                }
            }, {})

            console.info({reduced})

            let hasDuplicateFactors = false;            
            let duplicateFactors = [];
            for (const [key, value] of Object.entries(reduced)) {
                if ( value > 1 ) {
                    duplicateFactors.push(+key)
                    hasDuplicateFactors = true;
                    break;
                }
            }

            if ( hasDuplicateFactors) {
                
                console.info('has dupe factors', duplicateFactors);
                // remove all keys from preprocess and replace with info on how many power to raise to

                let singleFactors = preprocess.filter(f => duplicateFactors.includes(f.factor) === false);

                console.info('preprocess', preprocess)

                console.info('single factors', singleFactors)

                // count how many occurrances of each duplicated factor

                duplicateFactors.forEach( df => {

                    let instanceCount = preprocess.filter(f => f.factor === df).length;

                    let factor = preprocess.find(f => f.factor === df);

                    singleFactors.push({
                        ...factor,
                        power: instanceCount,
                        valuePower: +factor.factor * +instanceCount
                    })

                })

                preprocess = [...singleFactors];

            } 
            

            preprocess.sort( (a,b) => a.valuePower - b.valuePower )

            notation = preprocess.map( element => {
                /*
                return {
                    value: v1.current.value,
                    factor: factor,
                    remainder: v1.current.value % factor
                }
                */
                /*
                let remainder = v1.current.value % factor;
                console.info(`checking ${factor} % ${v1.current.value} remainder is ${remainder}`)
                */
                if ( element.power > 1 ) {
                    let powerValue = Math.pow(element.factor, element.power);
                    let updatedRemainder = element.value % powerValue;
                    
                    return <span className="crtnotation">{updatedRemainder} mod {element.factor}<sup>{element.power}</sup></span>
                }
                return <span className="crtnotation">{element.remainder} mod {element.factor}</span>

            });



        //notationLabel = `<${notation.join(', ')}>`;

        setResult(notation);
        
        // 2 mod 3, 1 mod 5
        
        // does it have 2 prime factors?
        // is it a composite with multiple factors?
        }
    }



    return (

        <Grid container spacing={6}>
        <Grid item xs={6}>


        <Card mb={6}>
        <CardContent>
        <Typography variant="h5" component="div">
      Chinese Remainder Theorem Notation
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        &nbsp;
      </Typography>
<br />
  <span>
            {/*renderInputs(inputs)*/}
            
    
            <div>

                <TextField
                    inputProps={{min: 0, style: { textAlign: 'center' }}}
                    style={{width: 40}}
                    inputRef={v1} defaultValue={6} variant="standard" /> mod 
                <TextField inputProps={{min: 0, style: { textAlign: 'center' }}} style={{width: 40}} defaultValue={15} inputRef={m1} variant="standard" />
            </div>

            <br />
            {inputError &&
              <Alert severity="error">Missing or invalid input!</Alert>
            }



            {result !== null && 
                <span>
                    <br />                    
                    {result === "?" && <Alert severity="error">Hmm. Something went wrong... back to the drawing board!</Alert>}
                    {result !== null && <Alert severity="success">This can be expressed as <strong>&lt; {result} &gt;</strong></Alert>}
                </span>}
            <br />
 
        </span>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleNotateIt}>Notate It</Button>
            <Button size="small" onClick={handleResetCalculator}>Reset</Button>
            <Button size="small" onClick={handleRandomize}>Randomize Value</Button>
            {/*
            <Button size="small" onClick={handleOpen}>About Calculator</Button>
            */}
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
  
         </Grid>

<Grid item xs={6}>

  <Card mb={6}>
  <CardContent>
    <Typography variant="h5" component="div">
      {OVERVIEW_HEADER}
    </Typography>

    <Paper mt={3}>

    The Chinese Remainder Theorem (CTR) uses the two building blocks of modular math and greatest common divisors (GCD).
    CTR gives a unique solution to simultaneous linear congruences with coprime moduli. 

    <br /> <br />When given an integer M, we want to first find its GCD.

    <br />After the GCD is taken, we will begin to cycle through with the modular math of the GCD. 




    </Paper>
    </CardContent>
    </Card>

    <br />

    <Card mb={6}>
  <CardContent>
    <Typography variant="h5" component="div">
      {EXAMPLE_HEADER}
    </Typography>


    <Paper mt={3}>
    Let’s use the number 15 as our value. 
    
    <br /> <br />Then break this down into the two steps of GCD and modular math to perform the CRT.

    <br /> <br />First: Finding the GCD of our value 15. So the number 15 has the GCD of 3 and 5. 

    <br /> <br />So, when we evaluate the CRT of numbers in Mod 15, we are actually going to be evaluating them against mod 3 and mod 5!

    <br /> <br />To show this, 2 mod 15 would be evaluated as &lt;2 mod 3, 2 mod 5&gt;.

    <br /> <br /> Extending this, 7 mod 15 would be evaluated as &lt;7 mod 3, 7 mod 5&gt;, = &lt;1 mod 3, 2 mod 5&gt; respectively. 
    
    <br /> <br />And 15 mod 15 would be evaluated as &lt;15 mod 3, 15 mod 5&gt;, = &lt;0 mod 3, and 0 mod 5&gt; 

    </Paper>
    </CardContent>
    </Card>

</Grid>

</Grid>


    )
}

export default CRTNotation;