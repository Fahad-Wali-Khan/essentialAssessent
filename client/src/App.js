import React from "react";
import axios from "axios";
import Result from "./Results";
import { useState } from "react";
export default function App() {
  const [post, setPost] = useState({ open: "" });
  const [stock, setStock] = useState({
    name: "AA",
    date: "2022-05-13",
  });
  function handle(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/fetchStockData", stock)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
  }
  function change(e) {
    setStock({ ...stock, [e.target.name]: e.target.value });
  }
  return (
    <div className=" p-3 mb-2 bg-success-subtle text-emphasis-success">
      <h1 className="text-center">Stock history data App</h1>
      <div class="mb-3 w-50">
        <label className="form-label">Stock name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={change}
          placeholder="AA"
        />
      </div>
      <div class="mb-3 w-50">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          name="date"
          onChange={change}
          placeholder="2022-05-13"
          min="2022-01-10"
        />
      </div>
      <button type="button" className="btn btn-success mt-4" onClick={handle}>
        Success
      </button>
      <div className="mt-4">
        <Result post={post}></Result>
      </div>
    </div>
  );
}
