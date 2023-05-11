import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  
  constructor() {
    super();
    console.log("Hello I am constructor from news component")
    this.state = {
      articles: [],
      loading: false,
      page: 1
      
    }
  }

  //life cycle
  async componentDidMount() {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=97f164275a694e5482b069b1b23efb5a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url); // fetch API
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
       totalResults: parsedData.totalResults,
      loading: false
      })

  }
  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=97f164275a694e5482b069b1b23efb5a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url); // fetch API
    let parsedData = await data.json()
    console.log(parsedData);
    
    this.setState( {
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false
    })
    

  }

  handleNextClick = async () => {
    console.log("next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=97f164275a694e5482b069b1b23efb5a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url); // fetch API
      let parsedData = await data.json()
      console.log(parsedData);
    
      this.setState( {
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading : false
      })

    } 


    
  }
  



  render() {
    console.log("render")
    return (
      <div className= "container my-4 p-2">
        <h1 className="text-center" >Morning Updates - Top Headlines</h1>
        {this.state.loading && <Spinner />}

        <div className= "row p-2" >
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className = "col-md-4" key={element.url}>
                <NewsItem title ={element.title?element.title.slice(0, 37): ""} description={element.description?element.description.slice(0, 88): ""} imageUrl ={element.urlToImage} newsUrl={element.url} />
            </div>
          })}                    
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled= {this.state.page<=1} type="button" class="btn btn-primary" onClick = {this.handlePrevClick}> &larr; Previous</button>
          <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-primary" onClick = {this.handleNextClick}>Next &rarr;</button>
        </div>                  
      </div>
    )
  }
}

export default News
