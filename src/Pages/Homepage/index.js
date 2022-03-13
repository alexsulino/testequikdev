import React, { Component } from 'react';
import Banner1 from '../../Layout/Banners/Banner1';

import {CardGroup, Card, CardSubtitle, CardText, CardImg, CardBody, CardTitle, Button} from 'reactstrap';

class Homepage extends React.Component { // iNICIO

      constructor(props){
          super(props);
        
          this.state = {
            posts: [],
            dataRoute: 'https://tudocheiroso.com.br/wp-json/wp/v2/posts'
          }
      }

      render() {
          return(
            <div className="container">
                <div className="container-fluid">
                <Banner1 />
                <h1 className="title"> Por que investir com <strong>C6 TechInvest</strong></h1>


                </div>
            </div>
          );
      };

}// FIM



export default Homepage;