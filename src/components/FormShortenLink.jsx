import { useEffect, useState } from "react";
import Button from "./Button";
import PostApi from "../../Config";
import ShortenedLink from "./ShortenedLink";

export default function FormShortenLink() {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const [urls, setUrls] = useState(() => {
    const storedurl = JSON.parse(localStorage.getItem("urls"));

    return storedurl ? storedurl : [];
  });

  console.log(urls);

  useEffect(() => localStorage.setItem("urls", JSON.stringify(urls)), [urls]);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!link) {
        setError("Please add link");
        return;
      }

      const userData = link.trim();

      const result = await PostApi(userData);

      console.log(result.result_url);
      if (result.result_url)
        setUrls((prev) => [
          { oldLink: link, newLink: result.result_url },
          ...prev,
        ]);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form
        className={`mt-24 bg-purple-950 relative flex flex-col py-7 px-5 border rounded-lg  `}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className={`bg-white py-3 px-5 border rounded-lg ${
            error ? "border-red-400 border-3" : ""
          } `}
          placeholder="Shorten a link here"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        {error && <p className="text-red-400 italic ">{error} </p>}

        <Button classname="py-4 rounded-md! mt-5">Shorten it!</Button>
      </form>

      {urls && urls.map((obj) => <ShortenedLink obj={obj} />)}
    </div>
  );
}
