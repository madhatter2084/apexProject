import "./News.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "../config/axios";
import requests from "../config/requests";

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
      {report.map((report, index) => (
        <Fragment key={index}>
          <div className="news__tile">
            <a
              href={report.link}
              rel="noopener noreferrer"
              target="_blank"
              className="news__link"
            >
              <img
                key={index + 50}
                src={report.img}
                className="news__image"
                alt={report.title}
              />

              <h3 className="news__title" key={index + 100}>
                {report.title}
              </h3>
            </a>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default News;
