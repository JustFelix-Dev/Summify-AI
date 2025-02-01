
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <span className="text-3xl mt-3 font-extrabold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Summify
        </span>

       <div></div>
      </nav>

      <h1 className='head_text'>
        Effortless Article Summaries with <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Save time and get straight to the point with Summify — an open-source tool that distills long articles into simple, easy-to-read summaries.
      </h2>
    </header>
  );
};

export default Hero;
