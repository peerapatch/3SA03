import React,{useState,useRef,useEffect} from 'react';

export default function CharacterCard(props) { 
    const [active, setActive] = useState(false); 
    const activate = () => {        
        if(!active){            
             setActive(true)             
             props.activationHandler(props.value)  
    }
    setActive(true)
}
    const className = `card${active ? ' activeCard': ''}`   

    const attemptRef = useRef(props.attempt);
    useEffect(() => {
        if(attemptRef.current != props.attempt){
        setActive(false)
        attemptRef.current = props.attempt
        }
        })
       
    return (
        <div className={className} onClick={activate}>
            {props.value}
        </div> )   
         
        }