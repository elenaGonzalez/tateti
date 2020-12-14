import React from 'react';
import './square.css';

export default function Square(props){
    return(
            <button className="square btn btn-secondary" 
            onClick={props.onClick}
            >
            {props.value}
            </button>
    )
}
