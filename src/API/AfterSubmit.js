import axios from "axios";
const url_api = 'http://127.0.0.1:8000/api/getscore/'
export  const  quizScore = async(answers)=>{
    try{
        
        const response = await axios.post(url_api,answers,{
            headers:{
                'Content-Type': 'application/json',
            },
        });
        //the return data
        return response.data ;
   
    }catch(error){
        if(error.response){
            console.error("API Error: ", error.response.data);
        throw new Error(error.response.data.message || 'Failed to fetch score');
    } else {
      throw new Error('Network error');
    }
    }
}