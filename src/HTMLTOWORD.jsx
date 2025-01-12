import React, { useState } from "react";
// import { render } from "react-dom";
// import Hello from "./Hello";
// import "./style.css";

import { saveAs } from "file-saver";
import { Packer } from "docx";
import { experiences, education, skills, achievements } from "./cv-data";
import { DocumentCreator } from "./cv-generator";

export const HTMLToWord = () => {
  const [name, setName] = useState("React");

  const generate = () => {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements
    ]);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };

  return (
    <div>
      {/* <Hello name={name} /> */}
      <p>
        Start editing to see some magic happen :)
        <button onClick={generate}>Generate CV with docx!</button>
      </p>
    </div>
  );
};
