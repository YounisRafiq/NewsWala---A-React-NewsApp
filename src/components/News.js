import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from "prop-types";
import Heading from "./Heading";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  };

const [message, setMessage] = useState("");

const update = async () => {
  try {
    const url = `https://newsdata.io/api/1/latest?apikey=${props.apiKey}&country=${props.country}&category=${props.category}`;

    setLoading(true);

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 429) {
        setArticles([]);
        setTotalResults(0);
        setMessage("Currently Data are not found (API limit reached)");
      } else {
        setMessage("Something went wrong while fetching news");
      }
      setLoading(false);
      return;
    }

    const data = await response.json();

    if (data.results?.length > 0) {
      setArticles(data.results);
      setTotalResults(data.totalResults || 0);
      setMessage("");
    } else {
      setArticles([]);
      setTotalResults(0);
      setMessage("Currently Data are not found !");
    }

    setLoading(false);
  } catch (error) {
    setArticles([]);
    setTotalResults(0);
    setMessage("Currently Data are not found (Network/API error)");
    setLoading(false);
  }
};


  useEffect(() => {
    document.title = `Newswala - ${capitalizeFirstLetter(props.category)} News`;
    update();
    // eslint-disable-next-line
  }, [page, props.category]);
  document.title = `NewsWala - ${capitalizeFirstLetter(props.category)}`


  return (
    <div className="container my-3">
                <Heading category= {capitalizeFirstLetter(props.category) + " News"}/>
      
      {loading && <LoadingSpinner />}
      <div className="row">
        {!loading &&
          Array.isArray(articles) &&
          articles.map((articles , index) => (
            <div className="col-md-4" key={articles.link}>
              <NewsItem
              key = {index}
                title={articles.title}
                description={articles.description}
                image_url={articles.image_url}
                newsUrl={articles.link}
                source={articles.source_id}
                author={articles.creator?.[0] || "Unknown"}
                date={articles.pubDate}
                source_url={articles.source_url}
                source_id={articles.source_id}
                source_icon={articles.source_icon}
              />

            </div>
          ))}
      </div>

      <div className="container  my-3">
        <p style={{textAlign: "center", color :"red" , marginTop : "2rem"}}>{message}</p>
      </div>
    </div>
  );
};

// Default Props
News.defaultProps = {
  country: "pk",
};

// Prop Types
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
