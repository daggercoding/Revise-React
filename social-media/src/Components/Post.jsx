import React,{useContext} from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { PostListContext } from '../Store/Post-list-store';


const Post = ({post}) => {
  const {deletePost}=useContext(PostListContext)
  
  return (
    <div className="card postContainer" style={{width:"18rem"}}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
      <MdDeleteSweep /></span>
    <img src={post.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.discription}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item tags">Memories :{post.memories.map((tag)=><button key={tag} type="text" className=" btn-outline-danger tags">{tag}</button>)}</li>
      
    </ul>
  </div>
  )
}

export default Post
