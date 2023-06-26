import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Article = () => {
  const { articledId } = useParams();
  const navigate = useNavigate();
  const [infor, setInfor] = useState([]);
  const deleteArticles = () => {
    axios
      .delete(`https://guestbook.jmoomin.com/articles/${articledId}`)
      .then(() => {
        navigate(-1);
      });
  };
  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/articles/${articledId}`)
      .then((res) => {
        console.log(res);
        setInfor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return infor === null ? (
    <p>loading</p>
  ) : (
    <>
      <h1>{infor.title}</h1>
      <p>{infor.body}</p>
      <p>작성일: {infor.createdAt}</p>
      <button onClick={() => navigate(`/articles/${articledId}/edit`)}>
        수정
      </button>
      <button onClick={deleteArticles}>제거하기</button>
    </>
  );
};

export default Article;
