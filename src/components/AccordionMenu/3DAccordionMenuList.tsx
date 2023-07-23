import React from "react";

import logo_white from "@assets/logo-white.png";
type props = {
  menubarViewState: boolean;
};
const AccordionMenuList = ({ menubarViewState }: props) => {
  return (
    <div
      className={`absolute top-20 right-6 transition-all  duration-[1500ms]  ${
        menubarViewState ? "translate-x-0 " : "translate-x-96"
      }`}
    >
      <img src={logo_white} alt="" className="w-24" />
      <ul className="gap-5 flex flex-col my-10">
        <li className="font-extrabold text-white">Hakkımızda</li>
        <li className="font-extrabold text-white">Nasıl Kullanılır?</li>
        <li className="font-extrabold text-white">Marka İşbirlikleri</li>
        <li className="font-extrabold text-white">Bize Ulaş</li>
        <li className="font-extrabold text-white">Neo</li>
        <li className="font-extrabold text-black uppercase">Kurumsal</li>
      </ul>
    </div>
  );
};

export default AccordionMenuList;
