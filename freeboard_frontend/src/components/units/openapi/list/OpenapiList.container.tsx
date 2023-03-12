import OpenApiListUI from "./OpenapiList.presenter";
import { useState, useEffect } from "react";
import axios from "axios";

export default function OpenApiList() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async () => {
      // [1,1,1,1,1,1,1,1,1]
      new Array(9).fill(1).map(async (_) => {
        const result = await axios.get("https://dog.ceo/api/breeds/image/random");
        setImgUrls((prev) => [...prev, result.data.message]);
      });
    };
    getImg();
  }, []);

  return <OpenApiListUI imgUrls={imgUrls} />;
}
