import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Navitems from "./Navitems";

export default function Home(props) {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  
  let [page, setPage] = useState(1);

  async function getAPIData() {
    setPage(1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&language=${props.language}&pageSize=24&page=1&sortBy=publishedAt&apiKey=807d700957354e9794ec9a60f0d7d8bc`)
    response = await response.json()
    if (response.status === "ok") {
      setArticles(response.articles.filter(x => x.title !== "[Removed]"))
      setTotalResults(response.totalResults)
    }
  }

  let fetchData = async () => {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.search ? props.search : props.q}&language=${props.language}&pageSize=24&page=${page}&sortBy=publishedAt&apiKey=807d700957354e9794ec9a60f0d7d8bc`)
    response = await response.json()
    if (response?.status === "ok")
      setArticles(articles.concat(response.articles.filter(x => x.title !== "[Removed]")))
  }

  useEffect(() => {
    getAPIData()
  }, [props])
  return (
    <div className="">
      <h5 className="background  text-light text-center mt-2 p-2 text-capitalize">
        {props.search ? props.search : props.q} Articles
      </h5>
      <InfiniteScroll
        dataLength={articles?.length} 
        
        next={fetchData}
        hasMore={articles?.length < totalResults}
        loader={
          <div className="my-5 text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <div className="row">
          {articles?.map((item, index) => {
            return (
              <Navitems
                key={index}
                source={item.source.name ?? "N/A"}
                author={item.author ?? "N/A"}
                title={item.title}
                description={item.description}
                url={item.url}
                pic={item.urlToImage ?? "/noimage.png"}
                date={item.publishedAt}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}


