import { createContext, useReducer} from "react";

export const PostListContext = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

function reducer(currPostList,action)
{
    let newPostList=currPostList//
    if(action.type==="DeletePost")
    {
        newPostList=currPostList.filter((post)=>post.id!==action.payload.id)
    }
    return newPostList;
}


const PostListProvider = ({children})=>{

    const[postList,dispatchPostList]=useReducer(reducer,dummyData)

    const addPost=()=>
    {
    //   dispatchPostList()
    }

    const deletePost=(id)=>{
        dispatchPostList(
            {
                type:"DeletePost",
                payload:{
                    id
                }
            }
        )
    }

    return <PostListContext.Provider value={{postList,addPost,deletePost}}>{children}</PostListContext.Provider>
}
const dummyData=[
    {
        id:1,
        title:"My College Trip",
        discription:"this is one of the best place visited",
        memories:["harshita","vibhuti","khushi"],
        img:"https://amc.amcgroup.edu.in/wp-content/uploads/2022/06/DSC_1264-1024x681.jpg"
    },
    {
        id:2,
        title:"My Manali Trip",
        discription:"you can drink soo much bear there",
        memories:["gourav","akash","anas"],
        img:"https://mygate.com/wp-content/uploads/2023/08/159.jpg"

        
    }
]

export default PostListProvider;