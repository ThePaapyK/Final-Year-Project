import React from "react";
import './Analyse.css';

export default function Analyse() {
  return (
    <>
      <div className="m-item submit-mammo">
            <form action="upload.php" method="post" enctype="multipart/form-data">
               <h3>Upload Mammogram</h3>
               <input type="file" accept="image/*" name="fileToUpload" id="fileToUpload" />
               <input type="submit" value="Analyse Mammogram" name="submit" />
            </form>
          </div>
          <div className="m-item ana-r">
            <h3>Analysis Results</h3>
            <p>Analysis Outcome: Normal</p>
            <p>Recommendations: Regular</p>
            <p>Next Steps: Follow up in 8 months</p>
          </div>
          <div className="m-item print-r">
            <h3>Print Results</h3>
            <button>Print</button>
          </div>
    </>
  );
};
