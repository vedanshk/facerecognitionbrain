import React, { useState } from "react";
import Rank from "./Rank";
function ImageLinkForm({onSubmit}) {

    const[imgUrl , setImageUrl] = useState('');

    const handleChange = (e) =>{
        setImageUrl(e.target.value);

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(imgUrl)

    }
  return (
    <div className="self-center flex flex-col justify-between items-center space-y-4 w-[50%] mt-30">
      <Rank />
      <p className="text-xl font-bold ">
        This Magic Brain will detect faces in your Pictures. Git it a try.
      </p>
      <div className="form shadow-lg shadow-purple-500 w-[100%] h-48 ">
        <form className="mt-16 p-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="border outline-none p-2 w-[70%]  placeholder:text-center placeholder:text-slate-700 placeholder:text-xl border-cyan-400 rounded"
            placeholder="Enter image url"
            value={imgUrl}
            onChange={handleChange}
          />
          <button className=" bg-cyan-400 py-2 w-[30%] text-black-400 shadow-lg shadow-purple-500   hover:scale-105">
            Detect
          </button>
        </form>
      </div>
    </div>
  );
}

export default ImageLinkForm;
