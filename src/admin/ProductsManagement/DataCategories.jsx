import useSwr from "swr"
import { apiClient } from "../../services/API"
import React, { useRef, useEffect, useState } from "react";

// export default function DataCategory(props) {


// }
export const DataCategory = async () => {
    const { data, isLoading, error } = useSwr('/category/getAll', (endpoint) => apiClient.get(endpoint).then(data => data))
    
    if (data) {
        console.log(data);
        return {
            data,
            isLoading,
            error
        };
    }
}