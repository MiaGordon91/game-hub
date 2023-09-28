import useData from "./useData";

interface Platforms {
    id: number;
    name: string;
    slug: string;
}

//custom hook for fetching data 
const usePlatforms = () => useData<Platforms>('/platforms/lists/parents')

export default usePlatforms;