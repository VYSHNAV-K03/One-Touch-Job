import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

// export const apiUrl = "https://onetouchjob-app.herokuapp.com/api";
export const apiUrl = "http://localhost:5000/api";

export const fileUpload = async (data, options, loginState) => {
  try {
    // console.log("sumesh");
    const res = await axios.post(apiUrl + `/uploadfiles/${loginState}`, data, {
      withCredentials: true,
    });
  } catch (error) {
    console.log("upload error", error);
  }
};

export const deleteFile = async (fileid, id, loginState) => {
  try {
    await axios.patch(apiUrl + `/updatefiles/${loginState}/${fileid}/${id}`);
  } catch (error) {
    console.log("delete error", error);
  }
};

export const ReactfileUpload = async (data, options, mystate) => {
  try {
    const res = await axios.post(apiUrl + `/${mystate}`, data, options);
  } catch (error) {
    console.log("upload error", error);
  }
};

export const reactDeleteFile = async (url, fileid) => {
  try {
    await axios.delete(apiUrl + `/courses/${url}/url/delete/${fileid}`);
  } catch (error) {
    console.log("delete error", error);
  }
};

// export const UpdatePassion = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     (passion) => {
//       return axios.post(
//         apiUrl + `/updatepassion/${passion.myLoginState}/${passion.final}`,
//         passion,
//         {
//           withCredentials: true,
//         }
//       );
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("progressbar");
//       },
//     }
//   );
// };
