<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
=======
import React,{useEffect,useState} from 'react'
>>>>>>> temp-branch

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

<<<<<<< HEAD
const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
=======
const News =(props)=> {
    // this.state = {
    //     articles: [],
    //     loading: true,
    //     page: 1,
    //     totalResults: 0
    // }
    //=================down part of three lines in function based===========
   const [articles,setArticles] = useState([])
   const [loading,setLoading] = useState(true)
   const [page,setPage] = useState(1)
   const [totalResults, setTotalResults] = useState(0)
    
   const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    const updateNews = async () =>{
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        
>>>>>>> temp-branch
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
<<<<<<< HEAD
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
=======
        
        props.setProgress(100);

    }
    useEffect (()=>{
           document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

        updateNews();
        //eslint-disable-next-line
    },[])
    
    

//    const handlePrevClick = async () => {
//         setPage(page-1)
//         updateNews();
//     }

//    const handleNextClick = async () => {
//         setPage(page+1)
//         updateNews()
//     }

    const fetchMoreData = async () => {  
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
>>>>>>> temp-branch
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
<<<<<<< HEAD
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
=======
        // this.setState({
        //     articles: articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults
        // })
      };


        return (
            <>
                <h1 className="text-center" style={{ margin: '68px 0px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
>>>>>>> temp-branch
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
<<<<<<< HEAD
    
}
=======
    }

>>>>>>> temp-branch


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
<<<<<<< HEAD
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
=======
>>>>>>> temp-branch
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
