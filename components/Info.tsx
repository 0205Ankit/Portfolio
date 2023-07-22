

export default function Info() {

  return (
    <div className="mt-[120px]">
      <p className="text-purple-500 tracking-[2px] animate-fadeUp1">
        Hi, my name is
      </p>
      <h1 className="text-gray-100 text-7xl font-bold mt-3 animate-fadeUp2">
        Ankit Singh.
      </h1>
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-6xl font-semibold leading-[80px] animate-fadeUp3">
        I build things for the web.
      </h3>
      <p className="text-gray-300 max-w-[500px] mt-3 animate-fadeUp4">
        I’m a web developer specializing in building exceptional digital
        experiences and practical applications. Currently, I’m looking for an
        employment opportunity.
      </p>
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
        <div className="w-fit py-3 px-5 mt-7 font-medium border-[1.5px] rounded-md border-violet-500 text-violet-500 animate-fadeUp5">
          Check out my Resume!
        </div>
      </a>
    </div>
  );
}
