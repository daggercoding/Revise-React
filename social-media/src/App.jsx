import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react"

import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import UserForm from './Components/UserForm';
import PostList from './Components/PostList';
import PostListProvider from './Store/Post-list-store';

function App() {
  let[selectedTab,setSelectedTab]=useState("Home")
  return (
    <PostListProvider>
    <div className='app-Container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='content'>
      <Header/>
      {selectedTab==="Home"?<PostList/>:<UserForm/>}
      <Footer/>
      </div>
      </div>
   
    </PostListProvider>
  )
}

export default App
