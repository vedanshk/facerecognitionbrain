function FaceRecognition({imgUrl}) {

    console.log(imgUrl)
  return (
  <div className="self-center h-[400px] text-center"> 
    <img src={imgUrl} alt="image" className="h-[100%] " />
  </div>
  );
}

export default FaceRecognition;
