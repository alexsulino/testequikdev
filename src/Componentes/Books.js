import React, { Component } from 'react'
import axios from 'axios';

import BookItems from './BookItems';

export class Books extends Component {
   state = {
       books: [],
       isLoaded: false
   }
 componentDidMount () {
   axios.get('https://tudocheiroso.com.br/wp-json/wp/v2/books')
       .then(res => this.setState({
           books: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }
   render() {
      console.log(this.state);
       return (
           <div>
              <BookItems />
           </div>
       )
   }
}
export default Books