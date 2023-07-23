import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img from "@assets/dakikalik-arac-kiralama-hizmeti-nedir-ve-nasil-faydalanilir.jpg";
import img2 from "@assets/arac-paylasiminda-abonelik-modeli-1.jpg";
import img3 from "@assets/ulasim-ihtiyaclarin-icin-yeni-nesil-bir-model-arac-paylasimi.jpg";
import { useEffect, useRef, useState } from "react";
type Props = {};

export default function Blog({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  useEffect(() => {
    const container = containerRef.current;

    const scrollToEnd = () => {
      if (container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (scrollPosition >= maxScroll) {
          setScrollPosition(0);
        } else {
          setScrollPosition(
            (prevPosition) => prevPosition + container.clientWidth
          );
        }
      }
    };

    const interval = setInterval(scrollToEnd, 3000); // Change the duration (in milliseconds) as needed for automatic sliding

    return () => clearInterval(interval);
  }, [scrollPosition]);

  const handlePrevSlide = () => {
    const container = containerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (scrollPosition === 0) {
        setScrollPosition(maxScroll);
      } else {
        setScrollPosition(
          (prevPosition) => prevPosition - container.clientWidth
        );
      }
    }
  };

  const handleNextSlide = () => {
    const container = containerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (scrollPosition >= maxScroll) {
        setScrollPosition(0);
      } else {
        setScrollPosition(
          (prevPosition) => prevPosition + container.clientWidth
        );
      }
    }
  };

  return (
    <div className="bg-light min-h-16  xl:block">
      <div className="container py-10 px-10 flex flex-col md:flex-row lg:flex-row xl:flex-row items-center gap-5">
        <div className="gap-5">
          <h1 className="text-gray-700 font-extrabold text-3xl uppercase">
            Tİktak Blog
          </h1>
          <p className="max-w-md my-5">
            Araç paylaşımı, dakikalık ve günlük kiralama hakkında merak ettiğin
            her şeyi blog yazılarımızda bulabilirsin.
          </p>
          <div className="my-5 flex gap-2">
            <div
              onClick={handlePrevSlide}
              className="border-black cursor-pointer border-2 w-16 p-2 flex items-center justify-center rounded-full"
            >
              <FaArrowLeftLong />
            </div>
            <div
              onClick={handleNextSlide}
              className="border-black border-2 cursor-pointer w-16 p-2 flex items-center justify-center rounded-full"
            >
              <FaArrowRightLong />
            </div>
          </div>
          <button className="bg-primary p-2 font-semibold px-4 text-white  rounded-full uppercase text-sm">
            hepsİNİ GÖR
          </button>
        </div>
        <div className="flex-1 flex gap-3">
          <div
            ref={containerRef}
            className="carousel rounded-box w-[20rem] xl:w-[32rem] gap-10"
          >
            <div className=" carousel-item w-56 h-64 flex flex-col bg-white rounded-xl shadow-lg">
              <img
                src={img3}
                alt=""
                className="w-full h-32 rounded-xl object-cover"
              />
              <div className="flex-1 p-3 pt-5 font-semibold text-sm">
                Ulaşım İhtiyaçların için Yeni Nesil Bir Model: Araç Paylaşımı
              </div>
            </div>{" "}
            <div className="  carousel-item  w-56 h-64 flex flex-col bg-white rounded-xl shadow-lg">
              <img
                src={img2}
                alt=""
                className="w-full h-32 rounded-xl object-cover"
              />
              <div className="flex-1 p-3 pt-5 font-semibold text-sm">
                Araç Paylaşımında Abonelik Modeli
              </div>
            </div>
            <div className="  carousel-item w-56 h-64 flex flex-col bg-white rounded-xl shadow-lg">
              <img
                src={img}
                alt=""
                className="w-full h-32 rounded-xl object-cover"
              />
              <div className="flex-1 p-3 pt-5 font-semibold text-sm">
                Dakikalık Araç Kiralama Hizmeti Nedir ve Nasıl Faydalanılır?
              </div>
            </div>
          </div>
          {/* <div className=" w-56 h-64 flex flex-col bg-white rounded-xl shadow-lg">
            <img
              src={img3}
              alt=""
              className="w-full h-32 rounded-xl object-cover"
            />
            <div className="flex-1 p-3 pt-5 font-semibold text-sm">
              Ulaşım İhtiyaçların için Yeni Nesil Bir Model: Araç Paylaşımı
            </div>
          </div>
          <div className=" w-56 h-64 flex flex-col bg-white rounded-xl shadow-lg">
            <img
              src={img2}
              alt=""
              className="w-full h-32 rounded-xl object-cover"
            />
            <div className="flex-1 p-3 pt-5 font-semibold text-sm">
              Araç Paylaşımında Abonelik Modeli
            </div>
          </div>
          <div className=" w-56 h-64 flex flex-col bg-white rounded-xl shadow-lg">
            <img
              src={img}
              alt=""
              className="w-full h-32 rounded-xl object-cover"
            />
            <div className="flex-1 p-3 pt-5 font-semibold text-sm">
              Dakikalık Araç Kiralama Hizmeti Nedir ve Nasıl Faydalanılır?
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
