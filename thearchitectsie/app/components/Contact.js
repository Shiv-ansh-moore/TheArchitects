import Navbar from "./Navbar";
import styles from "./Fade_in.module.css";
import Form from "./Form";

export default function Contact({ handleHomeClick, handleAboutClick }) {
  return (
    <div>
      {/* Fade-in red background overlay */}
      <div
        className={`bg-architectsRed min-h-screen w-screen -mt-3 -mr-32 -ml-32 absolute ${styles.fadeIn}`}
      />
      <div className="z-10 relative">
        <Navbar
          aColor="#FFFBF5"
          handleHomeClick={handleHomeClick}
          handleAboutClick={handleAboutClick}
        />
        <div className="flex mt-8">
          <Form />
        </div>
        <div className="text-background max-w-96 my-8 text-xl">
          <p>The architects, 111 patrick st, Dun Laoghaire, Co. Dublin</p>
          <p>info@thearchitects.ie</p>
          <p>+353 1 2144 444</p>
        </div>
      </div>
    </div>
  );
}
