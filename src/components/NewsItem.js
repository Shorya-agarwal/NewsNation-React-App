import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imgUrl, newsUrl} = this.props
        return (
            <div className= "my-3">
                <div className="card" style={{width: "18rem"}}>
                <img src= {!imgUrl?"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtd9?ver=8b09" :imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}.</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sn btn-primary">Detailed article</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

