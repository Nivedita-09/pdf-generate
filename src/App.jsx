// App.jsx
import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

function App() {
  const [data, setData] = useState({
    id: "",
    name: "",
    slogan: "",
    description: "",
    image: null,
  });
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setData({ ...data, image: imageFile });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(data);

    const pdfContent = <MyDocument data={data} />;
    // const pdfBlob = await pdf(pdfContent).toBlob();
    pdf(pdfContent)
      .toBlob()
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      });
    // const fromData = new FormData();
    // formData.append("id", data.id);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Fill up the form</h1>
      <form onSubmit={submitForm}>
        <div className="flex flex-row gap-3 p-3 ">
          <div className="w-1/2 my-2 ">
            <label>Name</label>{" "}
            <input
              type="text"
              name="name"
              className="border-blue-600 border w-full p-2"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </div>
          <div className="w-1/2 my-2">
            <label>slogan</label>
            <input
              type="text"
              name="slogan"
              className="border-blue-600 border w-full p-2 "
              value={data.slogan}
              onChange={(e) => {
                setData({ ...data, slogan: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="w-[95%] p-2 mx-auto ">
          <label>description</label>
          <textarea
            type="text"
            value={data.description}
            onChange={(e) => {
              setData({ ...data, description: e.target.value });
            }}
            className="border-blue-600 border w-full p-2"
          />
        </div>
        <div className="w-[95%] p-2 mx-auto ">
          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border-blue-600 border w-full "
          />
        </div>
        <div className="text-center">
          <button type="submit" className="bg-red-600 text-red-50 p-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
