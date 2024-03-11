import axios from "axios";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://www.omdbapi.com/?apiKey=67b73de6&s=Marvel"
        );
        setData(response.data.Search); 
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <div>
      {data.map((item, i) => {
        return <div key={i}>{item.Title}</div>; 
      })}
    </div>
  );
};

export default Data;
