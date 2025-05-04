import { quizScore } from "../../API/AfterSubmit";
import { useState } from "react";

export default function useQuizLogic(){
    const [scoreData ,setScoreData] = useState(null);
    const [loading ,setLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitQuiz = async (answers)=>{
        setLoading(true);
        setError(null);
        try{
            const result = await quizScore(answers);
            setScoreData(result);
            console.log("nodara")
            return result;
        }catch(err){
            setError('Failed to submit quiz.');
            throw err;
        }finally{
            setLoading(false);
        }
    };
    return{
        scoreData,
        submitQuiz,
        loading ,
        error,
    };

}