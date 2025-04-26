import { Player } from '@lottiefiles/react-lottie-player';
import clarityAnimation from './clarity-animated.json';

const Fallback = () => {
  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col justify-center items-center px-4 relative overflow-hidden">


      <div className="text-center max-w-2xl relative z-10 flex flex-col items-center">

        <div>
          <Player
            autoplay
            loop
            // speed={0.5}
            src={clarityAnimation}
            style={{ height: '200px', width: '200px' }}
          />
        </div>

        <p className="text-xl mb-8">
          Please wait, This won't take long!
        </p>


      </div>
    </div>
  )
}

export default Fallback