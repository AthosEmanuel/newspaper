import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Button, Card, Title } from "../../components";
import { getAllPosts, PostProps } from "../../services/api";
import "./style.css";

const Home: React.FC = () => {
  const [posts, SetPosts] = useState<Array<PostProps | undefined>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = getAllPosts();
      if (data) {
        SetPosts(await data);
      }
    };
    getData();
  }, []);

  const sendToDetails = (id: any, title: any, body: any) => {
    navigate({
      pathname: "/details",
      search: createSearchParams({
        id: id,
        title: title,
        body: body,
      }).toString(),
    });
  };
  const backToLogin = () => {
    navigate("/");
  };

  return (
    <>
      <Title
        text="Posts"
        customSyles={{
          marginBottom: 24,
          color: "#00AFBC",
          fontFamily: "UnifrakturCook",
          fontStyle: "Regular",
          fontSize: 100,
          fontWeight: 700,
          textAlign: "center",
        }}
      />

      <div className="bodyCard">
        {posts.map((row, index) => (
          <Card
            title={row?.title}
            body={row?.body}
            handleEvent={() =>
              sendToDetails(row?.id, row?.title, row?.body || 1)
            }
          />
        ))}
      </div>
      <Button
        text="Voltar"
        handleEvent={backToLogin}
        customStyles={{
          backgroundColor: "#5B5D52",
          color: "#F6F0E7",
          width: 200,
          height: 44,
          borderRadius: 4,
          textAlign: "center",
          border: "transparent 0 none",
        }}
      />
    </>
  );
};

export default Home;
