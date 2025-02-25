import Navbar from "./Navbar";

export default function About({handleAboutClick, handleHomeClick}) {
  return (
    <div className="bg-architectsRed min-h-screen w-screen -mt-3 -mr-32 -ml-32">
      <div className="mr-32 ml-32 pt-3">
        <Navbar
          aColor="#FFFBF5"
          handleAboutClick={handleAboutClick}
          handleHomeClick={handleHomeClick}
        />
      </div>
    </div>
  );
}
