import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=99d70feeab2d40b1826e49db65fb1ef4&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading: false })
    }



    nextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil( this.state.totalResults /this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=99d70feeab2d40b1826e49db65fb1ef4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            // this.setState({articles: parsedData.articles})
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    prevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=99d70feeab2d40b1826e49db65fb1ef4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // this.setState({articles: parsedData.articles})
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    // changeLoc = async()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=india&apiKey=99d70feeab2d40b1826e49db65fb1ef4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     // this.setState({articles: parsedData.articles})
    //     this.setState({
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    render() {
        return (
            <div className="container my-3">
                {/* <div className = "container d-flex justify-content-between"> */}
                    <div> <h1 className="text-center">NewsNation - Top Headline for you</h1></div>
                    {/* <button type = "button" onClick ={this.changeLoc}className="btn btn-sn btn-primary" >Change Location to India</button> */}
                {/* </div> */}
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} imgUrl={element.urlToImage} description={element.description ? element.description.slice(0, 90) : ""} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-sn btn-primary" onClick={this.prevClick}> &larr; Previous</button>
                    <button disabled = {this.state.page + 1 > Math.ceil( this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-sn btn-primary" onClick={this.nextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}
export default News