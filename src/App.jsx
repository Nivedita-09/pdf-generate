// App.jsx
import { useState, useEffect } from "react";
import { pdf } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    id: "1",
    name: "Testing Thane grp",
    slogan: "We Are working with you",
    description:
      "We Are working with you We Are working with youWe Are working with you We Are working with you",
    image: null,
  });
  const [pdfBlob, setPdfBlob] = useState(null);
  const [pdfContent, setPdfContent] = useState(null);
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setData({ ...data, image: imageFile });
  };

  useEffect(() => {
    const pdfContent = <MyDocument data={data} />;
    setPdfContent(pdfContent);
  }, [data]);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(data);
    const pdfContent = <MyDocument data={data} />;

    const blob = await pdf(pdfContent).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "your_pdf_name.pdf";
    setPdfBlob(url);
    setPdfContent(pdfContent);
    // a.click();
    // URL.revokeObjectURL(url);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Fill up the form</h1>
      <form onSubmit={submitForm}>
        <div className="flex flex-row gap-3 p-3 ">
          <div className="w-1/2 my-2 ">
            <label>Id</label>{" "}
            <input
              type="text"
              name="name"
              className="border-blue-600 border w-full p-2"
              value={data.id}
              onChange={(e) => {
                setData({ ...data, id: e.target.value });
              }}
            />
          </div>
        </div>
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

      <div>
        {pdfContent && (
          <PDFViewer
            style={{
              width: "50%",
              height: "50vh",
              margin: "auto",
              marginTop: "10px",
              backgroundColor: "red",
            }}
            showToolbar={true}
            width={"100%"}
            height={"100%"}
          >
            {pdfContent}
          </PDFViewer>
        )}
      </div>
    </>
  );
}

export default App;
