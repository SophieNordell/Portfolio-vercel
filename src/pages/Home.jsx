export default function Home() {
  return (
    <div className="flex pl-5 md:justify-around border-b-2 mt-10 ">
      <div className="hidden md:block">
        <img
          className="rounded-full mb-16"
          src="lighthouse.avif"
          alt="lighthouse"
          width={550}
        />
      </div>
      <div className="flex flex-col justify-center -translate-x-15 ">
        <h1 className="font-bold text-4xl font-serif text-gray-600 mb-10 md:text-left ">
          Hello, I am Sophie Nordell
        </h1>
        <p className="font-serif font-semibold text-xl text-gray-500">
          Currently looking for a LIA:
          <br /> week 47 2023 - week 18 2024
        </p>
        <a href="Cv Sophie Nordell.pdf" download={"Cv Sophie Nordell.pdf"}>
          <button className="border border-gray-300 w-fit px-3 rounded-md mt-10 mb-10 hover:bg-gray-300 text-gray-500 text shadow-md font-serif">
            Download resume
          </button>
        </a>
      </div>
    </div>
  );
}
