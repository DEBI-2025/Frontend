import React ,{useEffect,useState} from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from "axios";
function Activate() {
  const {uid ,token} = useParams();
  const navigate = useNavigate();
  console.log("UID:", uid, "TOKEN:", token); 
  
  const [verificationStatus, setVerificationStatus] = useState("loading");
  const { mutate: verifyEmail } = useMutation({
    mutationFn: async () => {
      await axios.post("http://localhost:8000/auth/users/activation/", { uid, token });
    },
    onSuccess:()=>{
      setVerificationStatus("success");
      setTimeout(() => navigate("/login"), 10000);
    },
    onError: () => {
      setVerificationStatus("error");
    },

});
useEffect(()=>{
  if(uid && token){
    verifyEmail();
  }
  },[uid ,token]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
    {verificationStatus === "loading" && (
      <h2 className="text-xl font-semibold">Verifying your email...</h2>
    )}
    {verificationStatus === "success" && (
      <div>
        <h2 className="text-2xl font-bold text-green-600">Email Verified! 🎉</h2>
        <p className="text-gray-600">You will be redirected to the login page shortly.</p>
      </div>
    )}
    {verificationStatus === "error" && (
      <div>
        <h2 className="text-2xl font-bold text-red-600">Verification Failed ❌</h2>
        <p className="text-gray-600">The link may be expired or invalid.</p>
      </div>
    )}
  </div>
  )
}

export default Activate