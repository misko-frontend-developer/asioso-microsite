import { createContext, PropsWithChildren, useState } from "react";
import NewsArticle from "interfaces/Article";
interface NewsContextIF {
  category: string;
  heroDisplay: NewsArticle | undefined;
  selectedNews: NewsArticle | undefined;
  handleSelected: (date: NewsArticle) => void;
  handleSetCategory: (value: any) => void;
  handleHeroDisplay: (date: NewsArticle) => void;
}
const NewsContext = createContext({} as NewsContextIF);
export const NewsContextProvider = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState<string>("general");
  const [heroDisplay, setHeroDisplay] = useState<NewsArticle>();
  const [selectedNews, setSelected] = useState<NewsArticle>();

  const handleSetCategory = (data: string) => data && setCategory(data);
  const handleHeroDisplay = (data: NewsArticle) => data && setHeroDisplay(data);
  const handleSelected = (data: NewsArticle) => data && setSelected(data);

  return (
    <NewsContext.Provider value={{ category, handleSetCategory, handleHeroDisplay, handleSelected, heroDisplay, selectedNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
