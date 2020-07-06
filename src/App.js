import React, { useState } from 'react'
import './App.css'
import './components/Disclosure.css'
import './components/DisclosureMore.css'
import Disclosure from './components/Disclosure'
import DisclosureMore from './components/DisclosureMore'

function App() {
  // For DisclosureMore:
  const [isMoreExpanded, setIsMoreExpanded] = useState(false)

  const handleMoreExpanded = () => {
    setIsMoreExpanded(!isMoreExpanded)
  }

  return (
    <div>
      <Disclosure
        title="Disclosure Design Pattern"
        trigger="Keyboard Interaction"
        contentTop={
          <p>
            A{' '}
            <a href="https://www.w3.org/TR/wai-aria-practices/#disclosure">
              disclosure
            </a>{' '}
            is a button that controls visibility of a section of content. When
            the controlled content is hidden, it is often styled as a typical
            push button with a right-pointing arrow or triangle to hint that
            activating the button will display additional content. When the
            content is visible, the arrow or triangle typically points down.
          </p>
        }>
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
      </Disclosure>

      {/* ToDo: Manage focus to be moved on the top of the revealed content with useRef */}
      <DisclosureMore
        collapsedLabel="Show More"
        expandedLabel="Show Less"
        isMoreExpanded={isMoreExpanded}
        onToggle={handleMoreExpanded}>
        <p>
          Optionally, the element with role button has a value specified for
          aria-controls that refers to the element that contains all the content
          that is shown or hidden.
        </p>
      </DisclosureMore>
    </div>
  )
}

export default App
