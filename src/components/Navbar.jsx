import logo from "../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import Button from "./Button";

export default function Navbar() {
  const navItems = ["Features", "Pricing", "Resources"];

  return (
    <div className="pt-8 flex justify-between items-center relative">
      <img src={logo} />
      <div>
        <BiMenu className="text-gray-500 " size={40} />
        <div className="absolute left-0 bg-purple-950 text-white w-full py-8 px-5 text-center font-bold border rounded-xl text-lg mt-5 hidden">
          <div>
            <ul>
              {navItems.map((el, i) => (
                <li key={i} className="mb-6">
                  <a>{el}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="border-[0.1px] border-gray-500"></div>

            <a className="mb-6">Login</a>
            <Button classname="w-full py-[0.7rem] mt-7">Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
