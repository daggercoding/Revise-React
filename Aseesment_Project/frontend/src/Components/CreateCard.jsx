import React, { useRef} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCard = () => {
  const navigate=useNavigate()

  const imageRef = useRef();
  const positionRef = useRef();
  const byRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef(); // Corrected the variable name

  function submitHandler(event) {
    event.preventDefault();

    const Image = imageRef.current.value;
    const Position = positionRef.current.value;
    const By = byRef.current.value;
    const Title = titleRef.current.value;
    const Perception = descriptionRef.current.value; 
    axios.post("http://localhost:8000/create",{Image, Position,Title,Perception,By})
    .then((res) => {
      console.log(res)
      navigate("/")
      })
    .catch((error)=>console.log(`Error is ${error}`))

    console.log(Image, Position,Title,Perception,By)
  }

  return (
    <form className='user-form' onSubmit={submitHandler}>
      <label htmlFor='image'>Image-Link</label>
      <input type='text' placeholder='please provide url' ref={imageRef} />

      <label htmlFor='position'>DESIGNATION</label>
      <input type='text' ref={positionRef} />

      <label htmlFor='by'>POSTED BY</label>
      <input type='text' ref={byRef} />

      <label htmlFor='title'>Title</label>
      <input type='text' ref={titleRef} />

      <label htmlFor='description'>Description</label>
      <input type='text' ref={descriptionRef} />

      <button type='submit' className='formBtn'>POST WEBINAR</button>
        
     
    </form>
  );
};

export default CreateCard;
