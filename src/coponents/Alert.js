import React from 'react'

function Alert(props) {
  return ( 
    <div style={{height: '60px'}}>
       { props.alert && <div className={` container alert alert-${props.alert.tp} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.msg}</strong>
      </div>  }     
   </div>
  )
}

export default Alert
