import { Feature } from '../../components'
import './whatGPT3.css'
import { features, featuresHeading } from '../../constants/data'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin ' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        {features
          .filter((feature) => feature.id === 'whatgpt3')
          .map((feature) => (
            <Feature
              key={feature.id}
              title={feature.title}
              text={feature.text}
            />
          ))}
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>{featuresHeading.h1}</h1>
        <p>{featuresHeading.p}</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        {features.slice(1).map((feature) => (
          <Feature key={feature.id} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  )
}

export default WhatGPT3
