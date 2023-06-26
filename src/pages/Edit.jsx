import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useState } from "react";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { articledId } = useParams();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelBody = (e) => {
    setBody(e.target.value);
  };
  const handleclick = () => {
    axios
      .put(`https://guestbook.jmoomin.com/articles/${articledId}`, {
        title,
        body,
      })
      .then((e) => {
        console.log(e);
        navigate(-1);
      })
      .catch((e) => {
        console.log(e);
        alert(e);
      });
  };
  return (
    <>
      <input
        name="subject"
        placeholder="제목"
        onChange={handleTitle}
        value={title}
      />
      <br />
      <textarea
        name="content"
        placeholder="내용"
        onChange={handelBody}
        value={body}
      />
      <br />
      <button onClick={handleclick}>방명록 남기기!</button>
    </>
  );
};

export default Edit;
