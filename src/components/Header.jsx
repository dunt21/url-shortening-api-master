import Button from "./Button";

export default function Header() {
  return (
    <div className="mt-26 text-center">
      <img
        src="/src/assets/illustration-working.svg"
        alt="person-using-pc"
        className="scale-150 ml-24 mb-24"
      />

      <p className="text-5xl font-bold text-gray-900 tracking-tighter mb-5">
        More than just shorter links
      </p>
      <p className="text-xl text-gray-500 mb-8">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button classname="py-[0.9rem] w-[60%] rounded-3xl!">Get Started</Button>
    </div>
  );
}
