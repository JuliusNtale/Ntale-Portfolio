import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="Hero Image" fill className="object-contain" />
      </div>
      
      {/* TEXT CONTAINER */}
      <div className="h-1/2 p-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to my portfolio! <br />
          I'm Julius, a freelance web developer and graphic designer.
        </h1>
        <p className="text-center mb-6">
          I specialize in creating engaging and visually stunning websites and
          applications. My passion for technology and user-centric design has led me
          to develop a unique skill set that allows me to bring your ideas to life.
          <br />
          Feel free to reach out if you have any projects in mind or need help with
          your digital needs.
        </p>
        {/* BUTTONS */}
        <div className="flex gap-4">
          <Link href="/portfolio">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600">
              View My Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-green-600">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
