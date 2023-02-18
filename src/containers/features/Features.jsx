import { Feature } from '../../components'
import './features.css'

import { featuresData, featuresDataHeading } from '../../constants/data'

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">{featuresDataHeading.h1}</h1>
      <p>{featuresDataHeading.p}</p>
    </div>
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
