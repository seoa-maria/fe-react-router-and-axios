import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Owner = () => {
  const { ownerId } = useParams();
  const [infor, setInfor] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://guestbook.jmoomin.com/${ownerId}/articles`)
      .then((res) => {
        console.log(res);
        setInfor(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h1>{ownerId}님의 방명록</h1>

      {infor.length ? (
        <ul>
          {infor.map((element) => {
            return (
              <li>
                {<Link to={`/articles/${element.id}`}>{element.title}</Link>}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>방명록이 없습니다</p>
      )}

      <button onClick={() => navigate(`/${ownerId}/create`)}>
        방명록 남기기
      </button>
    </>
  );
};

export default Owner;
