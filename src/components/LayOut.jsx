import { Footer } from "../sections";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <main className="relative">
      <Nav />
      <Outlet />
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default LayOut;
