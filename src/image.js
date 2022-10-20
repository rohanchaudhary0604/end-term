import React, { useState } from "react";
const UploadAndDisplayImage = () => { const [selectedImage, setSelectedImage] = useState(null); return ( < div > < h1 className = "text-primary text-center mt-4" > Upload and Display Image</h1> {selectedImage && ( <div> <img alt="not fount" width={"700px"} height={"400px"} src={URL.createObjectURL(selectedImage)} /> <br /> <button className="btn btn-danger ml-2 mt-2" onClick={()=>setSelectedImage(null)}>Remove</button> </div> )} <br /> <br /> <input className="btn btn-danger ml-2" type="file" name="myImage" onChange={(event) => { console.log(event.target.files[0]); setSelectedImage(event.target.files[0]); }} /> </div> ); }; export default UploadAndDisplayImage;