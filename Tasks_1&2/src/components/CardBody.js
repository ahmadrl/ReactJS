import React from 'react';

class CardBody extends React.Component {


  render() {
    return (
          <div style={{display:'row'}} >
         <img style={{width:'100px'}} src="make-a-website-1280x720.jpg"/>
        <h3>{this.props.name} </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        <input type="button" value={'See profile'}/><br></br><br></br>
      </div>
  

       );

  }
}
export default CardBody;