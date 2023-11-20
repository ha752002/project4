import React from 'react';
import {useParams} from "react-router-dom";

function ProductDetail(props) {
    const params = useParams();
    return (
        <div>{params.id}</div>
    );
}

export default ProductDetail;