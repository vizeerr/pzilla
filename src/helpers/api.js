import axios from "axios";


const hostName = "http://localhost:3000"
const handleError = (error) => {
  
    if(!error.response.data.message){
      toast.error("Server Not Responding!")
      return
    }
  
    toast.error(error.response.data.message);
    return
  };
  
  
  export const getAllTokens = async () => {
    try {
      const response = await axios.get(`${hostName}/api/getTokensMock/`);
      if(response.status===200){
        return response.data.data;
      }

    }catch(error){
      handleError(error)

    }
      
  };
  
  
  export const getToken = async (token) => {
    console.log(token);
    try {
      const response = await axios.get(`${hostName}/api/getTokenMock?token_address=${token}`);
      if(response.status===200){
        return response.data.data;
      }

    }catch(error){
      handleError(error)

    }
      
  };
  