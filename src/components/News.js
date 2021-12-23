import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles:[],
            loading: true
        }
     }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=99d70feeab2d40b1826e49db65fb1ef4";
        let data  = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
     }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsNation - Top Headline for you</h2>
                
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key ={element.url}>
                    <NewsItem  title = {element.title?element.title.slice(0,45):""} imgUrl = {element.urlToImage} description = {element.description?element.description.slice(0,90):""} newsUrl = {element.url} />
                </div>
                })}   
                </div>
            </div>
        )
    }
}

export default News
