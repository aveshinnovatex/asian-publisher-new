import { useState } from "react";
import axios from "axios";
import { toastError, toastSuceess } from "../util/reactToastify";

function useOrder() {
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function submitData(formData) {
    setLoading(true);
    // setError(null);
    try {
      const response = await axios.post(
        "https://api.asianpublisher.in/api/OrderApi",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (
        response?.data?.message !== undefined &&
        response?.data?.message === "Success"
      ) {
        toastSuceess("Your Transaction has successfully done");
        setData(response.data);
        // toastSuceess(response?.data?.message);
      }
    } catch (error) {
      toastError(error?.response?.data?.message);
    }
    setLoading(false);
  }

  return { loading, data, submitData };
}

export default useOrder;
