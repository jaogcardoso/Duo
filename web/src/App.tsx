import './styles/main.css';
import logoImg from './assets/Logo.svg'


function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">DUO</span> está aqui</h1>
    
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-1.png" alt="" />
          <div className="w-full pt-2 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block!">League of Legends</strong>
            <span className="text-zinc-300 text-sm block!">4 Anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-2.png" alt="" />
          <div className="w-full pt-2 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-3.png" alt="" />
          <div className="w-full pt-2 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Counter-strike</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-4.png" alt="" />
          <div className="w-full pt-2 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">World of war craft</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-5.png" alt="" />
          <div className="w-full pt-2 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/image-6.png" alt="" />
          <div className="w-full pt-2 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div>
        </a>
      </div>

      <div className="bg-[#2A2634]"></div>
    </div>
    
  )
}

export default App
