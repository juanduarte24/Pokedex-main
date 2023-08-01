import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
    const [infoApi, setInfoApi] = useState()

    const getApi = ()=>{
        axios.get(url)
            .then(res => setInfoApi(res.data))
                .catch(error => console.error(error))
    }
return [infoApi , getApi]

}


export default useFetch
