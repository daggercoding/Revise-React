import React,{useEffect, useState} from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Sorry from './Sorry';

const Home = ({setCount}) => {
    let[loading,setLoading]=useState(false)
    let[card,setCard]=useState([])
    let[priceFilter,setPriceFilter]=useState([])
    let[searchProduct,setSearchProduct]=useState([])
    
    const navigate=useNavigate()
     useEffect(()=>{
      const token = localStorage.getItem("token")
      if(!token || token==="undefined")
      {
       navigate("/create")
       return 
      }
      setLoading(true)    
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data=>{
        setCard(data.products)
       setLoading(false)});
        
    },[])


    useEffect(() => {
      setLoading(true)
      fetch(`https://dummyjson.com/products/search?q=${searchProduct}&price=${priceFilter}`)
        .then(response => response.json())
        .then(data => {setCard(data.products)
        setLoading(false)});
    }, [searchProduct,priceFilter]);
  
    //HANDLING THE FILTER HERE
    function handleSearchChange(event) {
      setSearchProduct(event.target.value);     
    };

    function handlePriceFilterChange(event)
    {
      setPriceFilter(event.target.value)

    }

    function incHandler()
    {
    setCount((prev)=>prev+1)
    }
   
  
  return (
  <>
   
   <div className='search-bar'>
    <label htmlFor='SearchProduct'>Search-By-Name
    <input className='fi' type='text' name='SearchProduct' 
    value={searchProduct} onChange={handleSearchChange}/>
    </label>

    <label htmlFor='SearchPrice'>Search-By-Price
    <input className='fi' type='text' name='SearchPrice' onChange={handlePriceFilterChange} value={priceFilter}></input>
    </label>
   </div>
   {loading? (<div className="spin spinner-border text-success" role="status" >
</div>):card.length>0?<div className='cards'>

{card.map((card)=>{
    return(
        <>

<div className="card card-container"key={card.id}>   
<img src={card.thumbnail} className="card-img-tops image" alt="..."/>
<div className="card-body">

<div className='after-image'>
<span className="badge text-bg-primary">Price: {card.price}$</span>
<span className='brand'>{card.brand}</span>
</div>

<h5 className='title' >{card.title}</h5>
<p className='perception'>{card.description}</p>
<hr/>

<div className='after-image'>
<p><span>Rating :</span>{card.rating}<IoMdStarOutline style={{color:"red",fontSize:"20px",marginBottom:"4px",marginLeft:"2px",fontWeight:"bolder"}}/></p>
<a href="#" className="btn btn-success button " onClick={incHandler}>Add to Cart</a>
</div>
</div>
</div>
        </>
    )
})}
</div>
:<Sorry/>}
    
  </>
  )
}

export default Home
