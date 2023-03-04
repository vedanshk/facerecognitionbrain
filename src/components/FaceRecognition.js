function FaceRecognition({imgUrl , box}) {
  
  const style ={top: box.topRow , right:box.rightCol , bottom:box.bottomRow , left:box.leftCol}

    console.log(style)
  return (
  <div className="self-center h-[500px] w-[500px] text-center relative"> 
    <img id="inputimage" src={imgUrl} alt="image" className="h-[100%] "  />
    <div className="bounding-box" style={ style}></div>
  </div>
  );
}

export default FaceRecognition;
