import React, { FunctionComponent } from 'react'

type FieldProps = {
  value: number;
  x: number;
  y: number;
}

const Field: FunctionComponent<FieldProps> = ({ value, x, y }) => {

  return (
    <div style={{border: '1px solid black'}}>
      {value}
    </div>
  )
};

export default Field;