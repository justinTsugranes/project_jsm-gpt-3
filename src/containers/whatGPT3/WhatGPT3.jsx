import { Feature } from '../../components'
import './whatGPT3.css'

import { whatGPT3, whatGPT3Heading } from '../../constants/data'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        {whatGPT3
          .filter((feature) => feature.id === 'whatgpt3')
          .map((feature, index) => (
            <Feature
              key={feature.id + index}
              title={feature.title}
              text={feature.text}
            />
          ))}
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">{whatGPT3Heading.h1}</h1>
        <p>{whatGPT3Heading.p}</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {whatGPT3.slice(1).map((feature) => (
          <Feature key={feature.id} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  )
}

export default WhatGPT3
