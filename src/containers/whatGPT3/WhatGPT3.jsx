// Import the `Feature` component and the styles for the `WhatGPT3` component
import { Feature } from '../../components'
import './whatGPT3.css'

// Import the data for the heading and the features
import { whatGPT3, whatGPT3Heading } from '../../constants/data'

// This is a functional component that doesn't receive any props
// It returns the JSX for rendering the "What is GPT3?" section
const WhatGPT3 = () => {
  return (
    // Render the "What is GPT3?" container
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      {/* Render the feature for the "What is GPT3?" section */}
      <div className="gpt3__whatgpt3-feature">
        {/* Render a `Feature` component for the first element in the `whatGPT3` array */}
        {whatGPT3
          .filter((feature) => feature.id === 'whatgpt3')
          .map((feature, index) => (
            // Pass the title and text for the feature as props to the `Feature` component
            <Feature
              key={feature.id + index}
              title={feature.title}
              text={feature.text}
            />
          ))}
      </div>
      {/* Render the heading for the "What is GPT3?" section */}
      <div className="gpt3__whatgpt3-heading">
        {/* Render the heading text in a gradient style */}
        <h1 className="gradient__text">{whatGPT3Heading.h1}</h1>
        {/* Render the paragraph text */}
        <p>{whatGPT3Heading.p}</p>
      </div>
      {/* Render the container for the additional features in the "What is GPT3?" section */}
      <div className="gpt3__whatgpt3-container">
        {/* Render a `Feature` component for each element in the `whatGPT3` array except for the first element */}
        {whatGPT3.slice(1).map((feature) => (
          // Pass the title and text for the feature as props to the `Feature` component
          <Feature key={feature.id} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  )
}

export default WhatGPT3
