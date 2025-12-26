// import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import FormShortenLink from "./FormShortenLink";
import Statistics from "./Statistics";
import Boost from "./Boost";

function App() {
  return (
    <div className="px-5 max-w-screen min-h-screen overflow-x-hidden bg-gray-50">
      <Navbar />
      <Header />
      <FormShortenLink />
      <Statistics />
      <Boost />
    </div>
  );
}

export default App;
