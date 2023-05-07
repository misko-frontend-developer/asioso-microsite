import { useState, useEffect } from "react";
import http from "hooks";
const useNewsPerCategory = (category: string) => {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const { data } = await http.get(`top-headlines?country=us&category=${category}`);

        if (data.articles) {
          setData(data.articles);
        } else {
          setError(`No articles for this category`);
        }
      } catch (error: any) {
        setError(error?.message);
      }
    };

    fetchFile();
  }, [category]);

  return { data, error };
};

export default useNewsPerCategory;
