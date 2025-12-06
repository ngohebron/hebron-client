import axios from "axios";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET; // unsigned preset


export const uploadToCloudinary = async (file, folder = "heborn/events") => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", folder);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    return {
      url: res.data.secure_url,
      public_id: res.data.public_id,
    };
  } catch (err) {
    console.error("Cloudinary Error:", err.response?.data || err);
    throw err;
  }
};

// export const uploadToCloudinary = async (file, folder = "heborn/events") => {
//   try {
//     // Debug logs (remove later)
//     console.log("Cloudinary Cloud:", CLOUD_NAME);
//     console.log("Preset:", UPLOAD_PRESET);
//     console.log("File:", file);
//     console.log("Is File instance?", file instanceof File);

//     if (!file || !(file instanceof File)) {
//       throw new Error("Invalid file input. Expected a File object.");
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", UPLOAD_PRESET);
//     formData.append("folder", folder);

//     const response = await axios.post(
//       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     return {
//       url: response.data.secure_url,
//       public_id: response.data.public_id,
//     };
//   } catch (error) {
//     console.error("Cloudinary Upload Error:", error?.response || error);
//     throw error;
//   }
// };
