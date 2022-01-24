import "./News.css";
import React, { useEffect, useState, Fragment } from "react";
import axios from "./axios";

function News({ fetchURL }) {
  const [report, setReport] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setReport(request.data);
      console.log(report);
      return request;
    }
    fetchData();
  }, [fetchURL]);

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
                <h4 className="news__title" key={index + 100}>
                  {report.title}
                </h4>
              </div>
            </Fragment>
          )
      )}
    </div>
  );
}

export default News;
