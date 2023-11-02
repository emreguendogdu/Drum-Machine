import React from 'react'
import './Drumpad.scss'

export default function Drumpad(props) {
  return (
      <>
      <div className='container'>
    <div className='drum-pad' 
    onClick={props.handleClick}
    id={props.name.replace(/\W/gi, '')}
    data-key={props.k}>
        {props.k}
        <audio src={"https://s3.amazonaws.com/freecodecamp/drums/" + props.audiosrc} className='clip' 
        id={props.k}>
        </audio>
        </div>
        <div><p className='text'>{props.name}</p></div>
            </div>
        </>
  )
}
