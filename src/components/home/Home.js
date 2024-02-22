import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = (props) => {

    const [news,setNews]=useState([])

    const [country,setCountry]=useState("in")

    const getData=(async()=>{
      try{
        let response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=3a3e234dc986414cabdae07ea70846f1`)
          setNews(response.data.articles)
      }
      catch(err){console.log(err)}
    })
    

    useEffect(()=>{
      getData();
    })

    const changeCountryToIndia=()=>{
      setCountry("in")
    }

    const changeCountryToUsa=()=>{
      setCountry("us")
    }


  return (
    
    <>
    <div className="container">
        <div className="row">
          <div className="my-3 mx-2 ">
            <button className='btn btn-success' onClick={changeCountryToIndia}>India</button>
            <button className='btn btn-primary float-end' onClick={changeCountryToUsa}>Usa</button>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12 fs-3 text-center my-4">{props.heading}</div>
        </div>
        </div>
        <div className="container">
            <div className="row">
                
                    {
                        news.map((item,index)=>
                        <div className="col-md-3" key={index}>
                        <div className="card my-2" style={{width:"100%"}} >
                        <img src={item.urlToImage} className="card-img-top" style={{height:"280px"}} alt='...'/>
                        <div className="card-body">
                          <h6 className="card-title">Author : {item.author}</h6>
                          <p className="card-text">Date : {item.publishedAt}</p>
                          <a href={item.url} className="btn btn-primary">Go To News</a>
                        </div>
                      </div>
                      </div>
                        )
                    }
                
            </div>
        </div>
    </>
  )
}

export default Home
