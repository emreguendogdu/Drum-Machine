import React from 'react'

export default function Drumpad(props) {
  return (
    <div id='drumpad' onClick={props.handleClick}>{props.key}<audio src={"https://s3.amazonaws.com/freecodecamp/drums/" + props.audiosrc} className='clip' id={props.key} data-name={props.name}></audio></div>
  )
}
