import React from 'react'

const UserForm = () => {
  return (
    <form className='user-form'>
    
    <label htmlFor="title">Title</label>
    <input type="text"/>

    <label htmlFor="image">Image-Link</label>
    <input type="text" placeholder="please provide url"/>

    <label htmlFor="discription">Discription</label>
    <input type="text"/>

    <label htmlFor="memories">Memories</label>
    <input type="text" placeholder="please seprate by space or ,"/>
    
  <button type="submit" className="btn btn-primary button">Submit</button>
</form>
  )
}

export default UserForm
