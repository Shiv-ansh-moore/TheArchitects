import Image from "next/image";

export default function PortofolioPreview({
  PortImage,
  aLocation,
  alternate,
  title,
  location,
  description,
  handleProjectClick,
  handleprojectData,
}) {
  return (
    <div className="">
      {aLocation === "right" ? (
        <div className="flex items-start">
          <div className="text-2xl md:mt-32 mt-12">
            <h3>{title}</h3>
            <h3 className="font-thin">{location}</h3>
            <button
              onClick={() => {
                handleProjectClick();
                handleprojectData({
                  PortImage,
                  alternate,
                  title,
                  location,
                  description,
                  alternate,
                });
              }}
            >
              <Image
                className="rounded-3xl"
                src={PortImage}
                width={618}
                height={463}
                alt={alternate}
              />
            </button>
          </div>
          <Image
            className="hidden md:block mt-8 ml-auto"
            src="/bigARed.svg"
            height={463}
            width={327}
            alt="The architects Logo"
          />
        </div>
      ) : (
        <div className="flex items-start">
          <Image
            className="hidden md:block mt-8"
            src="bigA.svg"
            height={463}
            width={327}
            alt="The architects Logo"
          />
          <div className="text-2xl ml-auto md:mt-32 mt-12">
            <h3>{title}</h3>
            <h3 className="font-thin">{location}</h3>
            <button
              onClick={() => {
                handleProjectClick();
                handleprojectData({
                  PortImage,
                  alternate,
                  title,
                  location,
                  description,
                  alternate,
                });
              }}
            >
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