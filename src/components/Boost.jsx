import Button from "./Button";

export default function Boost() {
  return (
    <div className="text-center bg-[url('/assets/bg-boost-mobile.svg')] bg-center bg-cover py-24 px-5 bg-purple-950 text-white mt-20 space-y-8">
      <p className="font-bold text-3xl">Boost your links today</p>
      <Button classname={"py-4 w-[60%]"}>Get Started</Button>
    </div>
  );
}
