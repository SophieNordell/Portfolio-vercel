export default function Home() {
  return (
    <div className="flex pl-5 md:justify-around border-b-2 border-slate-700 pt-16 bg-[#8F9779] ">
      <div className="hidden md:block ">
        <img
          className="rounded-full mb-16"
          src="sophie.jpg"
          alt="Photo of me"
          width={250}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-4xl font-serif text-gray-300 mb-10 md:text-left ">
          Hello, <br />I am Sophie Nordell
        </h1>
        <p className="font-serif font-semibold text-xl text-gray-300">
          Currently looking for a LIA:
          <br /> week 47 2023 - week 18 2024
        </p>
        <a href="Cv Sophie Nordell.pdf" download={"Cv Sophie Nordell.pdf"}>
          <button className="border block border-gray-300 w-fit px-3 rounded-md mt-10 mb-10 hover:bg-gray-300 hover:text-gray-600 text-gray-300 text shadow-lg font-serif">
            Download resume
          </button>
        </a>
      </div>
    </div>
  );
}
