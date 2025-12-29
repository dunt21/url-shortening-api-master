// import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import FormShortenLink from "./FormShortenLink";
import Statistics from "./Statistics";
import Boost from "./Boost";
import Footer from "./Footer";
import ShortenedLink from "./ShortenedLink";

function App() {
  return (
    <div className=" max-w-screen min-h-screen overflow-x-hidden bg-gray-50">
      <div className="px-5">
        <Navbar />
        <Header />
        <FormShortenLink />

        <Statistics />
      </div>

      <Boost />
      <Footer />
    </div>
  );
}

export default App;
