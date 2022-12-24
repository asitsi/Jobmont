import React, { FC } from 'react'
import './Heading.scss'

interface MyCompProps {
	display: string,
  heading: string
}

const Heading: FC<MyCompProps> = (props) => {
  return (
    <React.Fragment>
      <div className='heading' style={{display: `${props.display}`}}>
        <div>
          <h5>{props.heading}</h5>
          <h2>we are best about this job solution</h2>
        </div>
        <div>
          <p>There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby injected humour, by injected humour, or randomised coved ceilings.</p> {/* {props.paragraph} */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Heading