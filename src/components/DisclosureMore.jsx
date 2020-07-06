import React from 'react'
import PropTypes from 'prop-types'

function DisclosureMore(props) {
  const { isMoreExpanded } = props

  const handleToggle = () => {
    props.onToggle()
  }

  return (
    <div className="disclosure-more-container">
      <h2>WAI-ARIA Roles, States, and Properties</h2>
      <div>
        <p>When the disclosure control has focus: </p>
        <ul>
          <li>
            <p>The element that shows and hides the content has role button.</p>
          </li>
          <li>
            <p>
              When the content is visible, the element with role button has
              aria-expanded set to true. When the content area is hidden, it is
              set to false.
            </p>
          </li>
          {/* ToDo: Manage focus to be moved on the top of the revealed content with useRef */}
          <li
            id="disclosureMore"
            className={`disclosure-more-content ${
              isMoreExpanded
                ? 'disclosure-more-expanded'
                : 'disclosure-more-collapsed'
            }`}>
            {props.children}
          </li>
        </ul>
        <button
          className="disclosure-more-btn"
          aria-expanded={isMoreExpanded}
          aria-controls="disclosureMore"
          onClick={handleToggle}>
          {isMoreExpanded ? props.expandedLabel : props.collapsedLabel}
        </button>
      </div>
    </div>
  )
}

DisclosureMore.propTypes = {
  props: PropTypes.objectOf({
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
  }),
}

export default DisclosureMore
