// app/about/layout.js
import styles from "../components/Fade_in.module.css";

export const metadata = {
  title: "About Page",
  description: "About page description",
};

export default function AboutLayout({ children }) {
  return (
    // Add a container that overrides the background color
    <div className={`bg-architectsRed min-h-screen w-screen absolute top-0 left-0 ${styles.fadeIn}`}>
      <div className="mt-3 mr-32 ml-32">{children}</div>
    </div>
  );
}
