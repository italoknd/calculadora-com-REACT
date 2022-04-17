/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './button.css'

export default props => {
  return (
    <button
      onClick={e => props.click(props.label)}
      className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.triple ? 'triple' : ''}
    ${props.double ? 'double' : ''} 
  `}
    >
      {props.label}
    </button>
  )
}
