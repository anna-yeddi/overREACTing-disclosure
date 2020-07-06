import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Disclosure(props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="disclosure-container">
      <h1>{props.title}</h1>
      {props.contentTop}
      <button
        className="disclosure-btn"
        aria-expanded={isExpanded}
        aria-controls="disclosure"
        onClick={() => handleExpanded()}>
        {props.trigger}
      </button>
      <div
        id="disclosure"
        className={`disclosure-content ${
          isExpanded ? 'disclosure-expanded' : 'disclosure-collapsed'
        }`}>
        {props.children}
      </div>
    </div>
  )
}

Disclosure.propTypes = {
  props: PropTypes.objectOf({
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Disclosure
