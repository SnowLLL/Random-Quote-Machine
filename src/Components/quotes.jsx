import {FaQuoteLeft} from 'react-icons/fa';
import React, {useState} from 'react'
import "./../Styles/index.css"

const quotes = [ 
    { 
        quote: "Definiteness of purpose is the starting point of all achievement.",
        author: "- W. Clement Stone"
    },
    { 
        quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author:"- Dalai Lama"
    },
    {  
        quote:"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
        author:"- Sheryl Sandberg"
    },
    { 
        quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
        author: "- Ayn Rand"
    },
    { 
        quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "- Maya Angelou"
    },
    { 
        quote:"Definiteness of purpose is the starting point of all achievement.",
        author:"- W. Clement Stone"
    
    },
    { 
        quote: "Everything has beauty, but not everyone can see.",
        author: "- Confucius"
    },
    { 
        quote: "Life isn’t about getting and having, it’s about giving and being.",
        author: "- Kevin Kruse"
    },
    { 
        quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
        author:"- Maimonides"
    },
    {
        quote:"The question isn’t who is going to let me; it’s who is going to stop me.",
        author:"- Ayn Rand"
    },
    {
        quote: "Our lives begin to end the day we become silent about things that matter.",
        author: "- Martin Luther King Jr."
    }
]

const colors =[
    '#c04851',
    '#5a1216',
    '#eea2a4',
    '#5c2223',
    '#2f2f35',
    '#815c94',
    '#8076a3',
    '#346c9c',
    '#8fb2c9',
    '#2c9678',
    '#20894d',
    '#fed71a',
    '#d2b116',
    '#f7de98',
    '#bbb5ac'
]

const RandomQuote = ()=> {

    let num = Math.floor(Math.random()*11);
    let colorNum = Math.floor(Math.random()*15)

    const [count, setCount] = useState(0);

    const NewClick = () => {
        setCount (count+1);
    }

    const styledColors = () =>{
        return colors[colorNum];
    }

    const tweHref = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + quotes[num].quote + '" ' + quotes[num].author)}`;
    const tumHref = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + encodeURIComponent(quotes[num].author) + '&content=' + encodeURIComponent(quotes[num].quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';

    return (
        <div style = {{backgroundColor:styledColors(), height:"100vh"}} className="d-flex align-items-center justify-content-center">
        <div>
            <div style={{backgroundColor: 'white', maxHeight:"20vm", maxWidth:"60vw"}} className="p-5 quoteCard">
            <div style = {{color:styledColors()}}> 
                <span className="fs-3"><FaQuoteLeft /> {quotes[num].quote} </span> <br/>
                <div className="text-end my-4">
                    <span className="fs-10">{quotes[num].author} </span>
                </div>
            </div>
            <div className="row align-top">
                <div className="col-md-4 grid">
                        <a href = {tweHref} target="_blank" rel="noreferrer"><i style = {{color:styledColors()}} className="fab fa-twitter-square fa-2x me-2"></i></a>
                        <a href={tumHref} target="_blank" rel="noreferrer"><i className="fab fa-tumblr-square fa-2x" style = {{color:styledColors()}}></i></a>  
                </div>
                <div className="col-md-8 text-end">
                    <button style = {{backgroundColor:styledColors(), color:"white", fontSize:"0.875em"}} className="btn btn-sm" onClick={NewClick}>New quote</button>
                </div>
            </div>
            </div>
            <div>
                <p>by Snow Liu</p>
            </div>
        </div>
        </div>
    )
}

export default RandomQuote
