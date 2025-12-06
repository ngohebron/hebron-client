// components/CreateEvents.jsx
import React, { useState } from "react";
import AdminMainLayout from "../../layout/AdminMainLayout";
import { uploadToCloudinary } from "../../utils/cloudinaryApi";

const CreateEvents = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    output: "",
    // imageFiles will hold File objects
    imageFiles: [],
    caption: "",
  });

  const [showMediaDialog, setShowMediaDialog] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      imageFiles: files,
    }));
  };

  const openMediaDialog = (e) => {
    e.preventDefault();
    setShowMediaDialog(true);
  };

  const closeMediaDialog = () => {
    setShowMediaDialog(false);
  };


   

const handleMediaSubmit = async () => {
  if (!formData.imageFiles || formData.imageFiles.length === 0) {
    alert("Please select images");
    return;
  }

  try {
    console.log("Uploading images...");

    // Upload all images to Cloudinary
    const uploadedImages = await Promise.all(
      formData.imageFiles.map((file) => uploadToCloudinary(file))
    );

    console.log("Uploaded Images:", uploadedImages);

    // Save uploaded image URLs into formData
    const updatedForm = {
      ...formData,
      images: uploadedImages,
    };

    setFormData(updatedForm);

    // Close image modal
    setShowMediaDialog(false);

    // 🔥 CALL handleSubmit AFTER UPLOAD SUCCESS
    handleSubmit(updatedForm);

  } catch (error) {
    console.error(error);
    alert("Image upload failed!");
  }
};





const handleSubmit = async (finalEventData) => {
  const payload = {
    title: finalEventData.title,
    description: finalEventData.description,
    output: finalEventData.output,
    caption: finalEventData.caption,
    images: finalEventData.images,  // [{url, public_id}]
  };

  console.log("FINAL EVENT PAYLOAD:", payload);

  // TODO: Send to backend
  // await axios.post("/api/events", payload);

  alert("Event created successfully!");
};




  const initialFormData = {
  title: "",
  description: "",
  imageFiles: [],
};



  return (
    <AdminMainLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl my-2 font-bold text-gray-800">
          Create New Event
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow border p-4 md:p-6">
        <form onSubmit={openMediaDialog} className="space-y-6">
          <div className="grid grid-cols-1 mgrid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter event title"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
              placeholder="Event description..."
              required
            />
          </div>

          <div className="grid grid-cols-1  gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Output
              </label>
              <input
                type="text"
                name="output"
                value={formData.output}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter location"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              onClick={() => {setFormData(initialFormData)
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-900"
            >
              Select Images
            </button>
          </div>
        </form>
      </div>

      {/* Media Dialog Modal */}
      {showMediaDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
            <h2 className="text-xl font-semibold mb-4">Add Images & Caption</h2>
            <form onSubmit={handleMediaSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Images
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image Caption
                </label>
                <input
                  type="text"
                  name="caption"
                  value={formData.caption}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter caption"
                />
              </div>

              {/* Preview selected images */}
              {formData.imageFiles && formData.imageFiles.length > 0 && (
                <div className="mt-4 max-h-52 overflow-y-auto overflow-x-hidden p-2 border rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formData.imageFiles.map((file, idx) => {
                      const url = URL.createObjectURL(file);
                      return (
                        <img
                          key={idx}
                          src={url}
                          alt={`preview-${idx}`}
                          className="object-cover h-24 w-full rounded-md"
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={closeMediaDialog}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  onClick={() => {
                    // After selecting images + caption, now submit full form
                    handleMediaSubmit();
                     // or call directly
                  }}
                >
                  Submit Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminMainLayout>
  );
};

export default CreateEvents;
