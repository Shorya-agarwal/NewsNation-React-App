import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imgUrl, newsUrl, author , date, source} = this.props
        return (
            <div className= "my-3">
                <div className="card"><span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style = {{zindex: ' 1', left: '95%'}}>{source}</span>
                <img src= {!imgUrl?"https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/yRF5c-O/breaking-news-on-screen-animated-text-graphics-news-broadcast-graphic-title-animation-loop-full-hd-1920x1080-blue-cyan_hkrmjv15e_thumbnail-1080_05.png" :imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}.</p>
                    <p className="card-text"><small className="text-muted">By {!author? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sn btn-primary">Detailed article</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

