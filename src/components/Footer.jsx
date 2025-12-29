import fb from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

export default function Footer() {
  const content = [
    {
      head: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      head: "Resources ",
      links: ["Blog", "Developers", "Support"],
    },

    {
      head: "Company  ",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  const handles = [fb, twitter, pinterest, instagram];

  return (
    <div className="text-center py-10 bg-gray-950 text-white">
      <p className="font-bold text-4xl mb-10">Shortly</p>
      <div>
        {content.map((obj) => (
          <FooterList obj={obj} />
        ))}
      </div>

      <ul className="flex gap-7 justify-center items-center">
        {handles.map((img, i) => (
          <li key={i}>
            <a>
              <img src={img} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterList({ obj }) {
  return (
    <ul className="mb-10">
      <li className="font-bold mb-4 text-lg">{obj.head} </li>

      {obj.links.map((el, i) => (
        <li className="mb-2 text-lg" key={i}>
          <a className="text-gray-400 ">{el}</a>
        </li>
      ))}
    </ul>
  );
}
