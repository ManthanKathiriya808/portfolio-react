import React from 'react'
import TrueFocus from '../TrueFocus/TrueFocus'
import GradientText from '../gradiantText/GradientText'
import Particles from '../particles/Particles'
import TextTransition, { presets } from 'react-text-transition';
import Orb from '../orb/orb';

const TEXTS = ['FullStack Developer!!! ', 'FrontEnd Developer!!!', 'BackEnd Developer!!!', 'MERN Stack Developer!!! '];
const HeroSection = () => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
      <div className=' py-1 text-white mx-auto'>
        <div style={{ width: '100%', position: 'relative' }} className='h-screen' >
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
      <div className='min-w-7xl   absolute     flex  ' style={{  transform: "translate(-50%, -50%)" ,  top: "50%",
  left: "50%"}}>

        <div className='items-center flex justify-between  w-[100%] '>
                  <div className='content flex justify-center  px-5 flex-col gap-5'>
            {/* <h1>Hey I am manthan </h1> */}
<div className='text-start  '>
                <TrueFocus
sentence="Hi, I'm"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>
</div>

<div>
    
<h1 className='text-5xl   mt-0 py-5 tracking-wide text-center ' >
    <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class "
  style={{fontWeight:"900"}}
>
  Manthan Kathiriya,
</GradientText>
</h1>
</div>

<div>
     <h1 className=''>
      <TextTransition className='text-4xl font-sans  italic' style={{color:"#C27AFF"}} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
</div>



      </div>
    <div className='Image'>

        <div style={{width: '100%', height: '550px', position: 'relative' }} className=' flex justify-center align-items-center'>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
<div className='absolute '  style={{transform: "translate(-50%, -50%) " , top:"50%" , left: "50%",width:"350px", height:"350px"}}>
      <img src="https://bt-portfolio-zeta.vercel.app/img/WhatsApp%20Image%202024-09-11%20at%204.27.00%20PM.jpeg"  className='rounded-full p-2' alt="" />
</div>
</div>
    </div>
        </div>      

      </div>
</div>
    </div>
  )
}

export default HeroSection
