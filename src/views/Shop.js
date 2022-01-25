import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Card} from 'react-bootstrap';
import React,{useState, useEffect} from 'react';
//import './App.css';

const Shop=()=>{
  const [fake,setFake]=useState([]);
  console.log(fake);
  useEffect(()=>{
    fakestore();
  },[])

  const fakestore = async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const jsonData=await response.json();
    console.log(jsonData);
    setFake(jsonData)
  }
   
  
  //fakestore();
  return(
    <>
    <h2 className="head12">Fake store</h2>
    <div className="container1s">
      {fake.map((values)=>{
        return(
          <>
    
          <Card className={"mt-3 p-3"} bg={'dark'} text={'light'} style={{ width: '18rem', height:'950px' }}>
            <Card.Img stlye={{width:'30px', }} variant="top"  src={values.image} alt={values.category} />
            <Card.Body>
              <Card.Title>{values.title}</Card.Title>
              <Card.Text>
              {values.description}
              </Card.Text>
              <Button variant="primary" onClick={()=>this.props.HandleAddToCart(this.props.item)}> Add To Cart</Button>
            </Card.Body>
          </Card>
    
          </>
        )
      })}
      
    </div>
    </>
  )
}

export default Shop;
