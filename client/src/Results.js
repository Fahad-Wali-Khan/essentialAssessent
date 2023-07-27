import React from "react";

export default function Result({ post }) {
  if (post.message) {
    return (
      <div>
        <h1>
          wait for a minute because we are using basic supscription of polygon
          API which can fetch only 5 results in a minute.!!!
        </h1>
        <h2>
          If after the minute also the results are not visible it might be a
          holiday.
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className="card w-50"
          style={{
            backgroundColor: post.open > post.close ? "#e34e29" : "#62f252",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">Open</h5>
            <p className="card-text">{post.open}</p>
            <h5 className="card-title">Close</h5>
            <p className="card-text">{post.close}</p>
            <h5 className="card-title">High</h5>
            <p className="card-text">{post.high}</p>
            <h5 className="card-title">Low</h5>
            <p className="card-text">{post.low}</p>
          </div>
        </div>
      </div>
    );
  }
}
