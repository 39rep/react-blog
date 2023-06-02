import React from "react";
import "./style/Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はReactの学習中です。頑張るぞい。頑張るぞい。頑張るぞい。頑張るぞい。頑張るぞい。頑張るぞい。頑張るぞい。頑張るぞい。頑張るぞい。
        </div>
        <div className="nameAndDeleteButton">
          <h3>@replica</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
