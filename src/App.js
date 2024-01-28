import './App.css';
import InputGif from './components/InputGif';
import RandomGif from './components/RandomGif';


function App() {
  return (


<div className=' border-2 gap-y-3  h-full overflow-y-auto  mb-4 app'>


  <h2 className ='mx-auto  w-[1200px] font-bold text-[3rem] rounded-lg mt-4 h-[60px] flex items-center justify-center text-center  bg-red-200 '> Random Gif Generator</h2>

    <div className='mt-4 mb-8 flex flex-col gap-y-[35px] max-w-[900px] mx-auto rounded-lg bg-gray-200'>
    <RandomGif/>
    <InputGif/>
    </div>
</div>


    
    
    
   

  );
}

export default App;
