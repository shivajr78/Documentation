import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Hello World Lorem ipsum dolor sit adipisicing elit.",
      filesize: "0.78mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
    {
      desc: "Hello World Lorem ipsum dolor sit adipisicing elit.",
      filesize: "0.78mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
    {
      desc: "Hello World Lorem ipsum dolor sit adipisicing elit.",
      filesize: "0.78mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
  ];
  return (
    <>
      <div ref={ref} className=" fixed z-[3] top-0 left-0 w-full h-full p-6 flex gap-8 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
