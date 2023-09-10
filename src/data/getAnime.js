import axios from "axios";

const getAnime = async (path) => {
    const response = await axios.get(path);
    console.log(response.data);

    return response.data;
  };


  export default getAnime