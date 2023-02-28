import Particles from "react-tsparticles";
import { useCallback, useState } from "react";
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import ImageLinkFrom from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import { particleOptions } from "./utils/particle";
function App() {
  const [url, setUrl] = useState("");
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const handleSubmit = (imgUrl) => {

      setUrl(imgUrl);
  };
  return (
    <div className=" flex flex-col w-[100vw] gap-2">
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
        className="fixed inset-0 -z-10 bg-transparent"
      >
        {" "}
      </Particles>
      <Navbar />
      <Logo />

      <ImageLinkFrom onSubmit={handleSubmit} />
      <FaceRecognition imgUrl={url} />
    </div>
  );
}

export default App;
