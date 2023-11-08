import React, { useCallback, useEffect } from "react";
import HomeCarousel from "../../Layout/HomeCarousel";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const grantCode = searchParams.get("grant_code");
  const getPage = useCallback(async () => {
    await axios
      .get(`http://localhost:2708/auth/google/callback/${grantCode}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [grantCode]);

  useEffect(() => {
    grantCode && getPage();
  }, [getPage]);

  return (
    <div>
      <HomeCarousel />
    </div>
  );
};

export default HomePage;
