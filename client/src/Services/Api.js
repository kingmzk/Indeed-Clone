import Axios from "axios";

// API base URL
const API_URL = "http://localhost:8080";

// Function to save a job post
export const savePost = async (payload) => {
  try {
    // Log the payload before sending the POST request
    console.log("Payload:", payload);
    
    // Send a POST request to the specified endpoint with the payload
    return await Axios.post(`${API_URL}/post`, payload);
  } catch (error) {
    // Handle any errors that occur during the POST request
    if (error.response && error.response.data) {
      // If error.response exists and has a data property
      console.log("Error response:", error.response.data);
      return error.response.data;
    } else {
      // If error.response is undefined or does not have a data property
      console.error("Error:", error.message);
      return { error: error.message };
    }
  }
};


export const getAllPosts = async() =>
{
    try{

      return await Axios.get(`${API_URL}/posts`);

    }
    catch (error) {

      if (error.response && error.response.data) {
        console.log("Error response:", error.response.data);
        return error.response.data;
      } else {
        console.error("Error:", error.message);
        return { error: error.message };
      }
    }
};