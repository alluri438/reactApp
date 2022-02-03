import React from 'react';
import './first.css'

// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(props)
//         this.state = {
//             "parveen":"IShita"
//         }
//     }
//     handleChange = (event) =>{
//         this.setState({parveen:event.target.value})
//     }
//     render() {
        
//         return (
//             <div>
//                 <h1>this is from test jsx</h1>
//                 <div className = "test">this is that {this.state.parveen} {this.props.year}</div>
//                 <input onChange={this.handleChange}></input>
//             </div>
//         )
//     }
// }



// class ProdData extends Component {
//     constructor(props) {
//         console.log(props)
//         super(props);
//         this.state = {
            
//         }
//     }

//     productRender = this.props.productData.map(product => ({
//             return console.log(product)
//     }))
//     render() {
//         return (
//             <div>{this.productRender}</div>
//         )
//     }
// }


const ProdData = (props) =>{
    return (
    <div>
    {props.productData.filter(product => product.name.includes(props.filterData)).map(filteredData => (
        <p>{filteredData.name}</p>
    ))}
  </div>
);
}

// function ProdData() {
//   return (
//     <div>
//       {names.filter(name => name.includes('J')).map(filteredName => (
//         <li>
//           {filteredName}
//         </li>
//       ))}
//     </div>
//   );
// }

export default ProdData;