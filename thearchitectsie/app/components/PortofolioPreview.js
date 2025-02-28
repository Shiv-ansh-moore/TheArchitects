import Image from "next/image";

export default function PortofolioPreview({
  PortImage,
  aLocation,
  alternate,
  title,
  location,
  description,
}) {
  return (
    <div>
      {aLocation === "right" ? (
        <div className="flex items-start">
          <div className="text-2xl mt-32">
            <h3>{title}</h3>
            <h3 className="font-thin">{location}</h3>
            <button>
              <Image
                className="rounded-3xl"
                src={PortImage}
                width={750}
                height={563}
                alt={alternate}
              />
            </button>
          </div>
          <Image
            className="mt-8 ml-auto"
            src="/bigARed.svg"
            height={463}
            width={327}
            alt="The architects Logo"
          />
        </div>
      ) : (
        <div className="flex items-start">
          <Image
            className="mt-8"
            src="bigA.svg"
            height={563}
            width={750}
            alt="The architects Logo"
          />
          <div className="text-2xl ml-auto mt-32">
            <h3>{title}</h3>
            <h3 className="font-thin">{location}</h3>
            <button>
              <Image
                className="rounded-3xl"
                src={PortImage}
                width={618}
                height={463}
                alt={alternate}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
