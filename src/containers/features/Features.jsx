// Import the `Feature` component and the styles for the `Features` component
import { Feature } from '../../components'
import './features.css'

// Import the data for the heading and the features
import { featuresData, featuresDataHeading } from '../../constants/data'

// This is a functional component that doesn't receive any props
// It returns the JSX for rendering the features section
const Features = () => (
  // {/* Render the features container */}
  <div className="gpt3__features section__padding" id="features">
    {/* Render the heading for the features section */}
    <div className="gpt3__features-heading">
      {/* Render the heading text in a gradient style */}
      <h1 className="gradient__text">{featuresDataHeading.h1}</h1>
      {/* Render the paragraph text */}
      <p>{featuresDataHeading.p}</p>
    </div>
    {/* Render the container for the features */}
    <div className="gpt3__features-container">
      {featuresData.map((feature, index) => (
        <Feature
          key={feature.title + index}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </div>
  </div>
)

export default Features
