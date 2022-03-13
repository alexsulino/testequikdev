import React, { Component } from 'react';
import Banner1 from '../Layout/Banners/Banner1';

import {CardGroup, Card, CardSubtitle, CardText, CardImg, CardBody, CardTitle, Button} from 'reactstrap';

class Posts extends React.Component {

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
                    <h1 className="title"> Posts Teste <strong>API Wordpress</strong></h1>

                    <div className="d-flex justify-content-around">
                                
                        {this.state.posts.map((post) =>

                            <div className="post" key={`post-${post.id}}`} style={{ width: '25%', padding:'10px', backgroundColor:'#fff' }}>

                            <img src={ post.featured } alt={ post.name } className="post-image"/>  

                            <h3>{ post.name }</h3>
                            <p>{ post.id }</p>
                            <p>Cat: { post.categories }</p>
                            <p>Slug: { post.slug }</p>
                            <p>Descicao: { post.content }</p>
                            <p>Resumo: { post.excerpt }</p>
                            <p>Link:{ `${this.state.dataRoute}/${post.id}`}</p>

                            <button className="snipcart-add-item"
                            data-item-name={ post.name }
                            data-item-id={ post.id }
                            data-item-image={ post.image }
                            //data-item-media_details={ post.media_details }
                            data-item-description={ post.description }
                            data-item-url= { `${this.state.dataRoute}/${post.id}`}
                            data-item-price={ post.price }>
                            Buy it for { post.price } $
                            </button>

                        </div>
                        )}
  
                    </div>

                    </div>
                </div>

                
        );
};


  componentDidMount(){
          fetch(this.state.dataRoute)
                  .then(res => res.json())
                  .then(posts => this.setState((prevState, props) => {
                  return { posts: posts.map(this.mapPost)};
                  }));
  }

  mapPost(post){
          return {
                  id: post.id,
                  slug: post.slug,
                  image: post.image,
                  name: post.title.rendered,
                  content: post.content.rendered,
                  excerpt: post.excerpt.rendered,
                  featured: post.better_featured_image.media_details.sizes.thumbnail.source_url,
                  categories: post.categories,
                  description: post.description
          }
  }

}



export default Posts;