import { useState, useEffect } from "react";
import http from "hooks";
const useNewsPerCategory = (category: string) => {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchFile = async () => {
      if (category) {
        setLoading(true);
        try {
          const { data } = await http.get(`top-headlines?country=us&category=${category}`);

          if (data.articles) {
            setData(data.articles);
            setLoading(false);
          } else {
            setError(`No articles for this category`);
            setLoading(false);
          }
        } catch (error: any) {
          setError(error?.message);
          setLoading(false);
        }
      }
    };

    fetchFile();
  }, [category]);

  return { data, loading, error };
};

export default useNewsPerCategory;
