import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
   constructor(){
    super();
    this.state = {
      articles:[],
      loading:false
    }
   }
async componentDidMount(){
let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a02c79f376484622ad5a69d79013f13b"
let data = await fetch(url)
let parseData = await data.json()
this.setState({articles : parseData.articles})

}



  render() {
    return (
      <div className='container my-3'>
        <h2>NewsComponent</h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
            return<div className='col-md-4 my-4'  key={element.url}>
        <NewsItem title={element.title?element.title.slice(0,45):""} des={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} />
        </div>
        })}
        </div>
        
      </div>
    )
  }
}
