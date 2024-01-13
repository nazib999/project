import React, { useState, useEffect } from "react";
import axios, { all } from "axios";

const Test = ({onCount}) => {
  const [file, setFile] = useState();
  const [allFile, setAllFile] = useState([]);
  

  useEffect(() => {
    // Fetch the list of files from the backend
    axios
      .get("http://localhost:3000/files")
      .then((response) => {
        setAllFile(response.data.files);
        onCount(allFile.length)
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, [allFile]);
  
  

  const Upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {})
      .catch((er) => console.log(er));
  };
  return (
    
    <div>
      <div style={{margin:'20px'}}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={Upload}>Upload</button>
      </div>
      <ul style={{ listStyle: "none" }}>
        {allFile?.map((fileName, index) => (
          <li key={index} style={{ padding: "10px" }}>
            {fileName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
