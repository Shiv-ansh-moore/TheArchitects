import Navbar from "../components/Navbar";

export default function about() {
  return (
    <div>
      <Navbar aColor={"#FFFBF5"} />
      <div className="m-16 text-background mw-50vw">
        <p>
          We are an architectural practice located in Dun Laoghaire, Co. Dublin.
          Our team of architects have extensive experience in domestic and
          commercial work, from home renovations and extensions through to
          one-off houses, housing developments and commercial fit outs. At a
          larger scale we collaborate with other field specialists to bring
          projects through to fruition.
        </p>
      </div>
    </div>
  );
}
