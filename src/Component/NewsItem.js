import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {
    let {title,des,imageurl,key,newsurl} = this.props;
    return (
      <div>
  <div className="card" style={{width: '18rem'}} key={key}>
  <img className="card-img-top" src={imageurl?imageurl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{des}</p>
    <a href={newsurl} target="_/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    )
  }
}
