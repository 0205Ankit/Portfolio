export default function Info() {
  return (
    <div className="mt-[120px] flex flex-col">
      <p className="text-purple-500 tracking-[2px] animate-fadeUp1">
        Hi, my name is
      </p>
      <h1 className="text-gray-100 text-7xl max-md:text-4xl font-bold mt-3 animate-fadeUp2">
        Ankit Singh.
      </h1>
      <h3 className="text-transparent max-md:text-3xl bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 text-6xl font-semibold leading-[80px] animate-fadeUp3 mt-1">
        I build things for the web.
      </h3>
      <p className="text-gray-300 max-md:text-sm max-w-[500px] mt-3 animate-fadeUp4">
        I’m a web developer specializing in building exceptional digital
        experiences and practical applications.
      </p>
      <a
        href="/Ankit_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit p-[12px_20px] text-sm max-md:p-[6px_10px] mt-7 max-md:mt-4 max-md:text-xs font-medium border-[1.5px] rounded-md border-violet-500 text-violet-500 animate-fadeUp5"
      >
        Check out my Resume!
      </a>
    </div>
  );
}
