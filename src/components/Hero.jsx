import AnimatedBg from './AnimatedBg'
import hero from '../../public/assets/Hero.png'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={hero}
        alt="Hero Background"
        className="absolute w-full h-full object-cover z-0"
      />
      {/* <div className="absolute w-full h-full top-0 left-0 z-10">
        <AnimatedBg />
      </div> */}

    </section>
  )
}
