// HOME IS A PAGE AND POPULATES ProductList AND Cart
import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { Layout, Button, Row, Col } from 'antd';


const Home = () => {
  return (
    <>
    <div>
    <h1 style={{ textAlign: 'center', fontSize: '30px', fontFamily: 'fantasy', color: 'tomato' }}>What We Offer</h1>
            <Row style={{ textAlign: 'center'}}>
              <Col span={8}><img src="https://cdn.businessyab.com/assets/uploads/a71d63722fdd96b5209c836f024a3291_-united-states-north-carolina-wake-county-raleigh-southwest-raleigh-beryl-road-5115-penske-truck-rental-919-773-9416.jpg" alt="moving-truck" style={{ height: '300px', width: '300 px' }}></img><h1>Moving Trucks</h1></Col>
              <Col span={8}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5e295pYKfLy_sh--4qEOuo5trRmWxqy5E9A&usqp=CAU" alt="moving-supplies" style={{ height: '300px', width: '300 px' }}></img><h1>Moving Supplies</h1></Col>
              <Col span={8}><img src="https://rockstarpromovers.com/wp-content/uploads/2021/01/moving-labor-in-los-angeles.png" alt="moving-supplies" style={{ height: '300px', width: '300 px' }}></img><h1>Moving Labor</h1></Col>
            </Row>

      <ProductList />
      <Cart />
    </div>
    </>
  );
};

export default Home;
