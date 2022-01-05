import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
         country : 'us',
         pageSize : 8,
         category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalize = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalize(this.props.category)} - NewsNation`
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading: false })
    }



    nextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil( this.state.totalResults /this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
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
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
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

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style = {{margin: '30px 0px'}}>NewsNation - Top Headline for you</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} imgUrl={element.urlToImage} description={element.description ? element.description.slice(0, 90) : ""} newsUrl={element.url} author ={element.author} date = {element.publishedAt} source = {element.source.name} />
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