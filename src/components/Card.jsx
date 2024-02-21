import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={1.2}
        dragTransition={{bounceStiffness : 100, bounceDamping:10}}
        className=" relative w-40 h-52 flex-shrink-0 bg-zinc-900/90 rounded-[30px] text-white px-5 
      py-8 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-xs mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0 ">
          <div className="flex justify-between items-center px-6 py-3">
            <h5 className="text-xs">{data.filesize}</h5>
            <span className="w-4 h-4 rounded-full flex justify-center items-center bg-zinc-600">
              {data.close ? (
                <IoClose size={12} />
              ) : (
                <MdOutlineFileDownload size={12} color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-3 ${
                data.tag.tagColor === "blue" ? "bg-blue-700" : "bg-green-700"
              } flex justify-center items-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
