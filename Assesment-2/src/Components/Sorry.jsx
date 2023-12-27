import React from 'react'
import { GoAlertFill } from "react-icons/go";


const Sorry = () => {
  return (
    <div className='product-missing'>
    <GoAlertFill className='missing-icon' />
    <h1 className='missing-heading'>No Matching Product Found</h1>
    </div>
  )
}

export default Sorry
