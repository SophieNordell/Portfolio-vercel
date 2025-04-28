export default function Home() {
  return (
    // bg-[#8F9779] - ljusgrön
    <div className="font-nunito p-5 flex md:justify-around border-b-2 border-slate-700 pt-16 bg-[#8F9779] ">
      <div className="hidden md:block  ">
        <img
          className="rounded-3xl mb-16 shadow-2xl"
          src="sophie.jpg"
          alt="Photo of me"
          width={250}
        />
      </div>

      <div className="flex flex-col justify-center ">
        <h1 className="font-bold text-4xl font-serif text-gray-300 mb-10 md:text-left  ">
          Hello, <br />I am Sophie Nordell
        </h1>
        <p className="font-serif font-semibold text-xl text-gray-300 max-w-3xl">
          I’m a trained frontend developer currently studying UX/UI design to
          broaden my skillset and create more user-centered, intuitive
          experiences
        </p>
        <a
          href="sophiecv.png"
          download="sophiecv.png"
          className=" mt-4 w-fit px-2 py-2 border border-[#4D5D53] rounded-md bg-[#4D5D53] text-gray-300 hover:bg-gray-300 hover:text-gray-600 shadow-lg font-serif "
        >
          Download resume
        </a>
      </div>
    </div>
  );
}
