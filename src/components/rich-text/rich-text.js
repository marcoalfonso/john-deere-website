import React from 'react'

export default ({ body }) => (
  <div>
    { body && <div dangerouslySetInnerHTML={{__html: body}} /> }
  </div>
)
