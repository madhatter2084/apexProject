import "./News.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "./axios";
import requests from "./requests";

function News() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNews);
      setReport(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="news">
      {report.map(
        (report, index) =>
          index < 10 && (
            <Fragment key={index}>
              <div className="news__tile">
                <img
                  key={index + 50}
                  src={report.img}
                  className="news__image"
                  alt={report.title}
                />
                <a
                  href={report.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="news__link"
                >
                  <h4 className="news__title" key={index + 100}>
                    {report.title}
                  </h4>
                </a>
              </div>
            </Fragment>
          )
      )}
    </div>
  );
}

export default News;
