import React from 'react'
import './App.css'
import './components/Disclosure.css'
import './components/DisclosureMore.css'
import Disclosure from './components/Disclosure'

function App() {
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
    </div>
  )
}

export default App
