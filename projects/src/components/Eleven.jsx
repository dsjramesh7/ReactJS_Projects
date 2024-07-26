import React, { useState } from "react";

const Eleven = () => {
  const [file, setFile] = useState(null);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />

      <div>
        {file && <img src={URL.createObjectURL(file)} alt="uploaded image" style={{ width: "500px", height: "500px" }}/>}
      </div>
    </>
  );
};

export default Eleven;
