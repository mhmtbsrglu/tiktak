import React, { useEffect, useRef } from "react";
import kiralamaozetidir from "@assets/1.jpg";
import arabanisec from "@assets/2.jpg";
import kullan from "@assets/3.jpg";
import kirala from "@assets/4.jpg";
import iphone from "@assets/iphone.png";
import arrows from "@assets/arrows.svg";
import Tab from "../Tab/Tab";

enum ArrowState {
  LEFT,
  T_POSE,
  RIGHT,
}
const HowWorks = () => {
  const [state, setState] = React.useState(0);
  const [hoverState, setHoverState] = React.useState<ArrowState>(
    ArrowState.T_POSE
  );
  const itemsRef = useRef<Array<any>>([]);
  const data = [
    {
      id: 0,
      header: "KAYIT OL",
      imageIndex: 0,
      contentElement: (
        <div className="flex flex-col my-10">
          <span className="text-gray-600 font-extrabold text-3xl">
            DİJİTAL SÖZLEŞME İLE
          </span>
          <span className="text-primary font-extrabold text-4xl">
            HIZLICA KAYIT OL
          </span>
          <p className="max-w-md my-5">
            Arabanı hizmet bölgesi içerisindeki ücretsiz park edilebilir
            alanlara veya İspark’lara bırakabilirsin. Uygulamadaki gerekli
            yönlendirmeleri takip ederek kiralamayı hızlıca sonlandırabilirsin.
          </p>
        </div>
      ),
    },
    {
      id: 1,
      header: "ARABANI SEÇ",
      imageIndex: 0,
      contentElement: (
        <div className="flex flex-col my-10">
          <span className="text-gray-600 font-extrabold text-3xl">
            ARABANI SEÇ
          </span>
          <span className="text-primary font-extrabold text-4xl">
            KİRALAMAYA BAŞLA
          </span>
          <p className="max-w-md my-5">
            Sana en yakın arabalar arasından ihtiyacına uygun arabayı seçerek
            kiralamanı hemen başlatabilirsin.Arabanı hizmet bölgesi içerisindeki
            ücretsiz park edilebilir alanlara veya İspark’lara bırakabilirsin.
            Uygulamadaki gerekli yönlendirmeleri takip ederek kiralamayı hızlıca
            sonlandırabilirsin.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      header: "KULLANMAYA BAŞLA",
      imageIndex: 0,
      contentElement: (
        <div className="flex flex-col my-10">
          <span className="text-gray-600 font-extrabold text-3xl">
            SÜRE, TARİH BELİRTMEDEN
          </span>
          <span className="text-primary font-extrabold text-4xl">
            DİLEDİĞİN KADAR KULLAN
          </span>
          <p className="max-w-sm my-5">
            Kredi kartını tanımlayıp arabanın başına giderek uygulama üzerinden
            kiralama sürecini başlatabilir, yakıt ihtiyacın olduğunda sana en
            yakın Shell benzin istasyonuna giderek ödeme yapmadan ve arabadan
            hiç inmeden yakıt alabilirsin.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      header: "KİRALAMAYI BİTİR",
      imageIndex: 0,
      contentElement: (
        <div className="flex flex-col my-10">
          <span className="text-gray-600 font-extrabold text-3xl">
            ARABANI DİLEDİĞİN YERE BIRAK
          </span>
          <span className="text-primary font-extrabold text-4xl">
            KİRALAMAYI HIZLICA BİTİR
          </span>
          <p className="max-w-sm my-5">
            Arabanı hizmet bölgesi içerisindeki ücretsiz park edilebilir
            alanlara veya İspark’lara bırakabilirsin. Uygulamadaki gerekli
            yönlendirmeleri takip ederek kiralamayı hızlıca sonlandırabilirsin.
          </p>
        </div>
      ),
    },
  ];
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, data.length);
  }, [data]);

  const move = () => {
    if (itemsRef.current) {
      switch (state) {
        case 0:
          itemsRef.current[0].scrollIntoView({
            behavior: "smooth",
          });
          break;
        case 1:
          itemsRef.current[1].scrollIntoView({
            behavior: "smooth",
          });
          break;
        case 2:
          itemsRef.current[2].scrollIntoView({
            behavior: "smooth",
          });
          break;
        case 3:
          itemsRef.current[3].scrollIntoView({
            behavior: "smooth",
          });
          break;
        default:
          itemsRef.current[state].scrollIntoView({
            behavior: "smooth",
          });
          break;
      }
    }
  };

  const getArrowPosition = () => {
    switch (hoverState) {
      case ArrowState.LEFT:
        return "-translate-x-2 ";
      case ArrowState.RIGHT:
        return "translate-x-6 ";
      case ArrowState.T_POSE:
        return "translate-x-0 ";
      default:
        return "translate-x-0 ";
    }
  };

  React.useEffect(() => {
    move();
  }, [state]);
  return (
    <div className="flex flex-col md:flex-row  lg:flex-row xl:flex-row container my-14">
      <div className="relative">
        <div className=" absolute inset-0 w-full h-full">
          <img
            src={arrows}
            className={`absolute inset-0 translate-y-1/3 transition-all  ${getArrowPosition()}`}
            alt=""
          />
          <div className="relative w-full h-full z-10">
            <div
              className="absolute top-0 left-5 h-full w-20 cursor-pointer z-10"
              onMouseEnter={() => {
                setHoverState(ArrowState.LEFT);
              }}
              onMouseLeave={() => setHoverState(ArrowState.T_POSE)}
              onClick={() => {
                if (state > 0) {
                  setState(state - 1);
                }
              }}
            ></div>
            <div
              className="absolute top-0 right-5 h-full w-20  cursor-pointer z-10"
              onMouseEnter={() => {
                setHoverState(ArrowState.RIGHT);
              }}
              onMouseLeave={() => setHoverState(ArrowState.T_POSE)}
              onClick={() => {
                if (state < data.length - 1) {
                  setState(state + 1);
                }
              }}
            ></div>
          </div>
        </div>
        <div className="relative overflow-hidden pointer-events-none">
          <img src={iphone} alt="" />
          <div className="absolute  flex inset-0  overflow-hidden  items-center justify-center rounded-md p-2 ">
            <div className=" w-1/2 h-1/2 -translate-y-[5rem] rounded-xl">
              <div className="carousel w-full">
                <div
                  ref={(el) => (itemsRef.current[0] = el)}
                  className="carousel-item w-full"
                >
                  <img src={kiralamaozetidir} className="w-full rounded-xl" />
                </div>
                <div
                  ref={(el) => (itemsRef.current[1] = el)}
                  className="carousel-item w-full"
                >
                  <img src={arabanisec} className="w-full rounded-xl" />
                </div>
                <div
                  ref={(el) => (itemsRef.current[2] = el)}
                  className="carousel-item w-full"
                >
                  <img src={kullan} className="w-full rounded-xl" />
                </div>
                <div
                  ref={(el) => (itemsRef.current[3] = el)}
                  className="carousel-item w-full"
                >
                  <img src={kirala} className="w-full rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-primary uppercase font-semibold text-3xl ">
          Tİktak Nasıl ÇalışIr?
        </h1>
        <div>
          <Tab
            currentIndex={state}
            onCallback={(index: number) => {
              setState(index);
            }}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
