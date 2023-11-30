import React from "react";
import { useParams } from "react-router-dom";
import Main from "./mainDetail/Main";

function ProductDetail(props) {
  const params = useParams();
  return (
    <div>
      {/* {params.id} */}
      <Main />
    </div>
  );
}

export default ProductDetail;
