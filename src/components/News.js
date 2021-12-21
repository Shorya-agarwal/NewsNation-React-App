import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Ryan Leston",
            "title": "Spider-Man: Kevin Feige Reveals That Happy Hogan Originally Died in Iron Man 3 - IGN",
            "description": "Spider-Man: No Way Home producer Kevin Feige reveals that Happy Hogan almost didn't make it into the Spider-Man movies, after he was almost killed off in Iron Man 3.",
            "url": "https://www.ign.com/articles/spider-man-kevin-feige-reveals-the-only-reason-happy-hogan-survived-iron-man-3",
            "urlToImage": "https://assets1.ignimgs.com/2019/04/25/jon-favreau-happy-hogan-1556210455984.jpg?width=1280",
            "publishedAt": "2021-12-21T11:14:46Z",
            "content": "It looks as though Happy Hogan almost didnt survive the events of Iron Man 3\r\n.\r\nDuring an interview with Comicbook.com\r\n, Marvel boss Kevin Feige and Spider-Man: No Way Home star Jon Favreau explain… [+1897 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Nathan Bomey",
            "title": "Movie theaters get box office hit with Spider-Man, but omicron looms",
            "description": "Spider-Man gave movie theaters a much-needed boost. But omicron threatens to halt the momentum.",
            "url": "https://www.axios.com/spider-man-no-way-home-box-office-d44cb53e-de15-4180-9763-32025863c017.html",
            "urlToImage": "https://images.axios.com/O4CadfTGEMkZ9KU9-SCVC0mMkjM=/0x0:1920x1080/1366x768/2021/12/20/1640042300063.jpg",
            "publishedAt": "2021-12-21T10:31:03Z",
            "content": "Movie theaters were bustling last weekend as \"Spider-Man: No Way Home delivered smashing results, but its too early to call it a comeback.\r\nCatch up quick: Disney's Marvel movie spun up the second bi… [+2142 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Peg Aloi",
            "title": "11 Dark Christmas Movies to Watch If You’re Not Quite Feeling the Holiday Spirit",
            "description": "For a little Christmas counter-programming, try some darker choices like 'Eyes Wide Shut' or 'Fanny and Alexander.'",
            "url": "http://time.com/6130310/dark-christmas-movies/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2021/12/dark-christmas-movies-featured.jpg?quality=85&w=1200&h=628&crop=1",
            "publishedAt": "2021-12-20T21:29:44Z",
            "content": "Ah, Yuletide! The burgeoning darkness, the bitter cold, the twinkling lights, the existential angst. Whether you participate in holiday rituals for spiritual reasons, because you crave nostalgia, out… [+8761 chars]"
        },
        {
            "source": {
                "id": "reddit-r-all",
                "name": "Reddit /r/all"
            },
            "author": null,
            "title": "\rshittymoviedetails - In the early days of the MCU, many actors had to go shirtless in order to save costs on the wardrobe budget",
            "description": "19,372 votes and 470 comments so far on Reddit",
            "url": "https://www.reddit.com/r/shittymoviedetails/comments/rk6uq5/in_the_early_days_of_the_mcu_many_actors_had_to/",
            "urlToImage": "https://preview.redd.it/5kbde531nk681.jpg?auto=webp&s=61d38f93ba125f19a27ed2e191b2e977ca983113",
            "publishedAt": "2021-12-20T04:22:44.7519944Z",
            "content": "To be fair, Hugh Jackman took it to another level. In the first movie, he just looks like a normal dude, then by the 2nd or 3rd Wolverine movie, he was so jacked and tan, he looked like a fucking sad… [+80 chars]"
        }
    ]
    constructor(){
        super();
        this.state = {
            articles:this.articles,
            loading: false
        }
     }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsNation - Top Headline for you</h2>
                
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key ={element.url}>
                    <NewsItem  title = {element.title.slice(0,45)} imgUrl = {element.urlToImage} description = {element.description.slice(0,90)} newsUrl = {element.url} />
                </div>
                })}
                    
                </div>
            </div>
        )
    }
}

export default News
