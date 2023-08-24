import axios from "axios";

// created an instance of axios with custom config that holds the raw.ig api key

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b2000a7a33bb43afaba497fabe9587d2'
    }
})