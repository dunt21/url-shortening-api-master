export default function Statistics() {
  const contents = [
    {
      header: `Brand Recognition`,
      main: `Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`,
      img: "/src/assets/icon-brand-recognition.svg",
    },
    {
      header: `Detailed Records`,
      main: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. `,
      img: "/src/assets/icon-detailed-records.svg",
    },
    {
      header: `Fully Customizable`,
      main: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
      img: "/src/assets/icon-fully-customizable.svg",
    },
  ];

  return (
    <div className="text-center mt-24">
      <p className="text-3xl font-bold text-gray-950 mb-8">
        Advanced Statistics
      </p>
      <p className="text-lg text-gray-500">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="mt-24 space-y-28 relative">
        {contents.map((obj, i) => {
          const middleCard = i === 1;

          return (
            <>
              <StatsList obj={obj} key={i} />

              {middleCard && (
                <>
                  <div>
                    <div className="bg-blue-400 h-18 w-2 absolute top-68 left-[49.5%] "></div>
                  </div>

                  <div>
                    <div className="bg-blue-400 h-18 w-2 absolute bottom-78 left-[49.5%] "></div>
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

function StatsList({ obj }) {
  return (
    <div className="flex flex-col items-center bg-white shadow-[0_0px_8px_rgba(0,0,0,0.12)] p-8 pt-20 relative ">
      <div className=" border-0 rounded-full p-7 bg-purple-950 absolute -top-12 z-10">
        <img src={obj.img} />
      </div>

      <p className="text-2xl font-bold text-gray-950 mb-4">{obj.header}</p>
      <p className="text-lg  text-gray-500">{obj.main}</p>
    </div>
  );
}
