import React, { Component, useEffect, useRef, useState } from 'react';
import classes from "./Synchroniser.module.css";
import arpng from "./arrow.png"
import Button from '@mui/material/Button';
import syncFrame from "./synchroWP.png"
import { abort } from 'process';


const Synchroniser = () => {
    const[result, setResult] = useState(0)
    const[word, setWord] = useState("")
    const point:any = useRef(null);
    const k = useRef(0);
    const m:any = useRef()

    function calculateResult(){
        var myvar = k.current
        if (myvar<30 || myvar>330){
            setWord("GOOD")
        } else{
            // setWord("try again")
            setWord("BAD")
        }
    }

    useEffect(() => {
    if (point.current !== null) {
    const inter = setInterval(() => {
        if (k.current < 360) {
          k.current = k.current + 5;
        }
        if (k.current >=360){
            k.current = 0
            
        }
        point.current.style.transform = `rotate(${k.current}deg)`;
      }, 10);
      return () => clearInterval(inter)
    } else {
      console.log("0");
      
    }
    
  });

    return(
        <div>
            <div className={classes.syncont}>
            <img src={arpng} ref={point} alt="arrow" className={classes.ar} />
            <img src={syncFrame} alt="syncframe" className={classes.syn} />
            </div>

            <div >
            <Button variant='contained' onClick={calculateResult}>SYNCHRONISE</Button>
                <h1> {word}  </h1>
            </div>
        </div>
        
    );
};

export default Synchroniser