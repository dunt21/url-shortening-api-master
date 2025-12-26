import Button from "./Button";

export default function FormShortenLink() {
  return (
    <form className="mt-24 bg-purple-950 relative flex flex-col py-7 px-5 border rounded-lg gap-5">
      <input
        type="text"
        className="bg-white py-3 px-5 border rounded-xl"
        placeholder="Shorten a link here"
      />
      <Button classname="py-4 rounded-md!">Shorten it!</Button>
    </form>
  );
}
