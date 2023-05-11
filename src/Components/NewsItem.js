import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor() {
        super();
        console.log("Hello I am constructor");
    }




  render() {
    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl? "https://c.ndtvimg.com/2020-07/p9jor23o_rajiv-gandhi-foundation-fb_625x300_08_July_20.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
