import { useState } from "react";
import Button from "./Button";

export default function ShortenedLink({ obj }) {
  const [copied, setCopied] = useState(false);

  if (!obj) return;

  function handleCopy() {
    navigator.clipboard.writeText(obj.newLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-7 bg-white border-0 shadow-[0_0px_8px_rgba(0,0,0,0.12)] rounded-sm p-4 space-y-3 font-semibold">
      <p className="text-gray-950">{obj.oldLink}</p>
      <div className="border-b border-gray-400"></div>
      <p className="text-blue-400">{obj.newLink}</p>

      <Button
        classname={"text-blue-400 w-full py-3 rounded-md!"}
        onClick={handleCopy}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}
