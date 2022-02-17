import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',left: '90%'}}>
                        <span className="badge rounded-pill bg-success"> {source} </span>
                    </div>
                    <img src= {!imgUrl?"https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/yRF5c-O/breaking-news-on-screen-animated-text-graphics-news-broadcast-graphic-title-animation-loop-full-hd-1920x1080-blue-cyan_hkrmjv15e_thumbnail-1080_05.png" :imgUrl} className="card-img-top" alt="..." style={{"height" : "18rem"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

