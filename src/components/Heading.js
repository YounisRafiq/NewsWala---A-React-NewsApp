import React from 'react'

function Heading(props) {
  return (
    <div>
      <div className="container">
        <h1 className='text-center' style={{marginTop : "100px"}}>NewsWala - <span className='text-danger'>{props.category}</span></h1>
      </div>
    </div>
  )
}

export default Heading
