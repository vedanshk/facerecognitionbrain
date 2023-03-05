import Particles from "react-tsparticles";
import { useCallback, useState } from "react";
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import ImageLinkFrom from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import { particleOptions } from "./utils/particle";
import { detectFace } from "./utils/face-recognition";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
function App() {
  const [url, setUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signin");
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  console.log(box);
  const calculateFaceLocation = (region) => {
    const clarifaiFace = region.region_info.bounding_box;
    const image = document.getElementById("inputimage");

    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displyBox = (box) => {
    setBox(box);
  };

  const handleSubmit = (imgUrl) => {
    setUrl(imgUrl);
    detectFace(imgUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        const output = result.outputs[0].data;
        if (output.regions) {
          console.log(result.outputs[0].data);
          console.log("Predicted concepts:");
          output.regions.forEach((region) => {
            const { name, value } = region.data.concepts[0];
            displyBox(calculateFaceLocation(region));
            console.log(region.region_info.bounding_box);
            console.log(`Name: ${name} , value: ${value}`);
          });
        } else {
          console.log("Face not detected");
        }
      });
  };

  const handleRouteChange = (newRoute) => {
    console.log(newRoute);
    setRoute(newRoute);
  };

  let content;

  if (route == "register") {
    content = <Register onRouteChange={handleRouteChange} />;
  } else if (route == "signin") {
    content = <SignIn onRouteChange={handleRouteChange} />;
  } else if (route === "home") {
    content = (
      <>
        <Navbar onRouteChange={handleRouteChange} />
        <Logo />
        <ImageLinkFrom onSubmit={handleSubmit} />
        <FaceRecognition imgUrl={url} box={box} />)
      </>
    );
  }

  return (
    <div className=" flex flex-col w-[100vw]  justify-evenly ">
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
        className="fixed inset-0 -z-10 bg-transparent"
      >
        {" "}
      </Particles>
    
      {content}
    </div>
  );
}

export default App;
