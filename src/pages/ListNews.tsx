import { useEffect } from "react";
import http from "../hooks";
import jsonData from "../news.json";
export const ListNews = () => {
  console.log(jsonData);
  // useEffect(() => {
  //   const test = async () => {
  //     const response = await httpRequest.get("/top-headlines/sources?category=science");
  //     console.log(response);
  //   };
  //   test();
  // }, []);

  return <div>ListNews</div>;
};
