import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

const postRegistrationData = async (data) => {
  try {
    const response = await axios.post("/registration", data);
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default postRegistrationData;
