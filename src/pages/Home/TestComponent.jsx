// import useSwr from "swr"
// import { apiClient } from "../../services/API"

// export default function TestComponent(props){
    
//   const { data, isLoading, error } = useSwr('/category/getAll', (endpoint) => apiClient.get(endpoint).then(data => data))
//   if(isLoading){
//     return <div>...loading</div>
//   }
//   if (data) {
//     console.log(data);
//   }
// }