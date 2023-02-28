import Tilt from 'react-parallax-tilt';
import LogoImg from './images/brain.png';
function Logo() {
  return (
    <Tilt className=' max-w-[100px] ml-10'>
    <div  className='h-36 w-36 text-center tilt shadow-lg p-5'>
      <img src={LogoImg} alt="brain" />
    </div>
  </Tilt>
  );
}

export default Logo;
