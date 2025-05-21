
import axios from "axios";
import Cookies from "js-cookie";

const USER_URL = "http://127.0.0.1:8000/api/quizzesResults/";


export const getQuizResult = async ()=>{
    

    try {
        const token = Cookies.get("innerViews-access-token");
         if (!token) {
          throw new Error("No access token found. Please log in.");
        }
        const {data} = await axios.get(USER_URL,{
            headers:{
               "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
      },
    });
    console.log("User data:", data);
    return {
        success:true,
        user:data[0],
    };
    
    }catch(error){
        console.error("Error fetching user", error);
       if (error.response && error.response.status === 401) {
      return {
        success: false,
        message: "Unauthorized. Please login again.",
      };
    }
    return {
      success: false,
      message: "An error occurred while fetching the user.",
    };
  }
};
    
