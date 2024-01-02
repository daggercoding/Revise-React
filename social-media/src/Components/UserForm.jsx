import React,{useRef,useContext} from 'react'
import { PostListContext } from '../Store/Post-list-store';


const UserForm = () => {
  let {addPost}=useContext(PostListContext)

  const titleRef =useRef();
  const imageRef =useRef();
  const discriptionRef =useRef();
  const memoriesRef =useRef();
  const idRef=useRef();

  function submitHandler(event)
  {
    event.preventDefault() ;
    const id=idRef.current.value;
    const title=titleRef.current.value;
    const img=imageRef.current.value;
    const discription=discriptionRef.current.value;
    const memories=memoriesRef.current.value.split(" ");

    addPost(id,title,img,discription,memories)
  }

  return (
    <form className='user-form' onSubmit={submitHandler}>
    
    <label htmlFor="title">Title</label>
    <input type="text" ref={titleRef}/>

    <label htmlFor="image">Image-Link</label>
    <input type="text" placeholder="please provide url" ref={imageRef}/>

    <label htmlFor="discription">Discription</label>
    <input type="text" ref={discriptionRef}/>

    <label htmlFor="memories">Memories</label>
    <input type="text" placeholder="please seprate by space or ," ref={memoriesRef}/>
    
    <label htmlFor="id">Memories</label>
    <input type="text" ref={idRef}/>
    
  <button type="submit" className="btn btn-primary button">POST</button>
</form>
  )
}

export default UserForm
