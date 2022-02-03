import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import ProdData from './prodData'
import json from './db.json'


class Home extends Component {
constructor(props) {
  super(props);
  this.state = {
    prodData :json,
    filterProduct :''
  }
}
filterProduct = (product) => {
  this.setState({filterProduct:product ? product : undefined})
}
render() {
  return (
    <div>
      <Header userText = {(data) => {this.filterProduct(data)}}/>
      {/* <Test year="newest"/> */}
      <ProdData productData={this.state.prodData} filterData = {this.state.filterProduct}/>
      <Footer year="newest"/>
    </div>
  )
}
}


export default Home;
