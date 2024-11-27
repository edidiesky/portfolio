"use client"
import Link from "next/link";
import Image from "next/image";
const Card = ({ data, index, setMousePosition }) => {

  const handleMouseEnter = () => {
    setMousePosition({
      active: true,
      index: index,
    });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({
      active: false,
      index: 0,
    });
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full"
    >
      <Link
        className="flex flex-col group w-full gap-8"
        href={`/work/${data?.mainTitle}`}
      >
        <div className="w-full h-[380px] lg:h-[580px] relative overflow-hidden">
          <div
            style={{
              transition: "all .3s",
            }}
            className="w-full relative lg:h-[580px] group-hover:scale-[1.1] scale-[1] "
          >
            <Image
              src={data?.mainImage}
              alt=""
              fill
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="w-full flex pb-4 md:pb-8 border-b border-[rgba(255,255,255,.09)] items-center justify-between">
            <h2 className="text-dark font-portfolio_regular w-full text-2xl lg:text-3xl">
              {data?.mainTitle}
            </h2>
          </div>
          <div className="w-full flex items-center justify-between">
            <h3 className="text_background font-portfolio_regular w-full text-lg lg:text-xl">
              {data?.role}
            </h3>
            <span className="text-lg lg:text-xl font-portfolio_regular text_background">
              {data?.year}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
