import React from 'react'
import './Drumpad.scss'

export default function Drumpad(props) {
  return (
    <div className='drum-pad' onClick={props.handleClick}>{props.k}<audio src={"https://s3.amazonaws.com/freecodecamp/drums/" + props.audiosrc} className='clip' id={props.k} data-name={props.name}></audio></div>
  )
}
