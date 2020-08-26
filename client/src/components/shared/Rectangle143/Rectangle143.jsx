import React from 'react'
import './Rectangle143.css'
import { Link } from 'react-router-dom'

function Rectangle143({ copy }) {
  const addlClass = copy.subheader ? 'subheader-class' : ''
  const addlButtonClass = copy.subheader ? 'subheader-button' : ''
  const addlHeadingClass = copy.subheader ? 'subheader-heading' : ''
  const noButtonClass = copy.buttonValue === null ? 'no-button' : ''
  let volunteerButton = null
  if (typeof copy.buttonValue === 'string') {
    volunteerButton = copy.buttonValue.includes('Volunteer')
  }

  return (
    <div className={`rectangle143 ${addlClass}`}>
      <h2 className={`rectangle-header ${addlHeadingClass}`}>{copy.header}</h2>
      {copy.subheader && (
        <h3 className='rectangle-subheading'>{copy.subheader}</h3>
      )}
      <p className='rectangle-content'>{copy.content}</p>
      {volunteerButton ? (
        <Link to='/sign-up' className='rectangle-link'>
          <button
            className={`rectangle-button ${addlButtonClass} ${noButtonClass}`}>
            <span className='button-words'>{copy.buttonValue}</span>
          </button>
        </Link>
      ) : (
        <button
          className={`rectangle-button ${addlButtonClass} ${noButtonClass}`}>
          <span className='button-words'>{copy.buttonValue}</span>
        </button>
      )}
    </div>
  )
}

export default Rectangle143
