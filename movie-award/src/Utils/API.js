import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // Get  Movie details
    getAllEmployee: function (movie) {
        return axios.get("https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy");
    }
}
