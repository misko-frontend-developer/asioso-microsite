import { useEffect } from "react";
import http from "../hooks";
import jsonData from "../news.json";
import { HeroSection } from "../components/HeroSection";
import { SiteWrapper } from "../components/SiteWrapper";
import { NewsList } from "../components/NewsList";
import { Subscription } from "../components/Subscription";
export const ListNews = () => {
  // useEffect(() => {
  //   const test = async () => {
  //     const response = await httpRequest.get("/top-headlines/sources?category=science");
  //     console.log(response);
  //   };
  //   test();
  // }, []);

  return (
    <SiteWrapper>
      <HeroSection />
      <NewsList />
      <Subscription />
    </SiteWrapper>
  );
};
