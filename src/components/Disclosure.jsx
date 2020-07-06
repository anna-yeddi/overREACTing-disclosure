import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Disclosure(props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="disclosure-container">
      <h1>Disclosure Design Pattern</h1>
      <p>
        A{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#disclosure">
          disclosure
        </a>{' '}
        is a button that controls visibility of a section of content. When the
        controlled content is hidden, it is often styled as a typical push
        button with a right-pointing arrow or triangle to hint that activating
        the button will display additional content. When the content is visible,
        the arrow or triangle typically points down.
      </p>
      <button
        className="disclosure-btn"
        aria-expanded={isExpanded}
        aria-controls="disclosure"
        onClick={() => handleExpanded()}>
        Keyboard Interaction
      </button>
      <div
        id="disclosure"
        className={`disclosure-content ${
          isExpanded ? 'disclosure-expanded' : 'disclosure-collapsed'
        }`}>
        <p>When the disclosure control has focus: </p>
        <ul>
          <li>
            <strong>Enter: </strong>
            activates the disclosure control and toggles the visibility of the
            disclosure content.
          </li>
          <li>
            <strong>Space: </strong>
            activates the disclosure control and toggles the visibility of the
            disclosure content.
          </li>
        </ul>
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
