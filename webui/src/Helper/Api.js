import Axios from 'axios';

const API = Axios.create({
    //baseURL: "http://127.0.0.1:8000/drf/todo/",
    baseURL: "http://ec2-3-35-3-10.ap-northeast-2.compute.amazonaws.com/drf/todo/",
    timeout: 3000,
})
export default API;

// "favouritegroup": http://localhost:8000/drf/todo/favouritegroup/
// "favourite": http://localhost:8000/drf/todo/favourite/
// "todogroup": http://localhost:8000/drf/todo/todogroup/
// "todo": http://localhost:8000/drf/todo/todo/
