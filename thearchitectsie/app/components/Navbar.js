import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex">
      <div>
        <button>
          <Image
            src="\TitleLogo.svg"
            height={53}
            width={280}
            alt="Logo of The Architects"
          />
        </button>
        <button></button>
      </div>
      <div className="ml-auto flex flex-col justify-center">
        <ul className="flex">
          <button>
            <li className="ml-8 text-2xl">Home</li>
          </button>
          <button>
            <li className="ml-8 text-2xl">About</li>
          </button>
          <button>
            <li className="ml-8 text-2xl font-bold">Contact</li>
          </button>
        </ul>
      </div>
    </div>
  );
}
