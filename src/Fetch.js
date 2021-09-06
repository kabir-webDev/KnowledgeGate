import axios from "axios";
import React, { useEffect, useState } from "react";

function Fetch() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/users";
  const API_URL =
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.results);
        // setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {data.map((datas) => (
          <li key={datas.id}>{datas.name}</li>
        ))}
      </ul>
    </div>
  );

  //   useEffect(() => {
  //     fetch(BASE_URL)
  //       .then((res) => res.json())
  //       .then((items) => setData(items));
  //     console.log(data);
  //   }, []);

  //   return <div>Pokam</div>;
}

{
  //  <div className="container">
  //     <span className="question_section">
  //       <h2 className="question">{questions[0].question}</h2>
  //     </span>
  //     <div>
  //       <button className="option_style">{questions[0].correct_answer} </button>
  //       <button className="option_style">
  //         {questions[1].incorrect_answer[0]}
  //       </button>
  //       <br />
  //       <button className="option_style">
  //         {questions[2].incorrect_answer[1]}
  //       </button>
  //       <button className="option_style">
  //         {questions[3].incorrect_answer[2]}
  //       </button>
  //     </div>
  //   </div>
}
export default Fetch;
