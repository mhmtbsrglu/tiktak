import logo from "@assets/logo.png";
import AccordionMenu from "../AccordionMenu/AccordionMenu";
import { RiMenu3Fill } from "react-icons/ri";

type Props = {};

function Navigation({}: Props) {
  return (
    <div className="flex justify-between relative items-center container my-5 z-10">
      <div>
        <img src={logo} className="w-20 " />
      </div>
      <div className="text-black text-3xl md:hidden lg:hidden xl:hidden">
        <RiMenu3Fill />
      </div>
      <div className=" items-center hidden   md:flex  lg:flex xl:flex">
        <ul className="flex gap-2 md:gap-2 lg:gap-2 xl:gap-5 font-extrabold uppercase text-sm xl:text-md">
          <AccordionMenu
            type={0}
            header="Hakkımızda"
            subItems={[
              {
                header: "TikTak Hakkında",
                href: "/hakkında",
              },
              {
                header: "Kariyer",
                href: "/kariyer",
              },
            ]}
          />
          <AccordionMenu
            type={0}
            header="Nasıl Kullanılır"
            subItems={[
              {
                header: "En çok Merak Edilenler",
                href: "/merak",
              },
              {
                header: "Sıkça Sorulanlar",
                href: "/sss",
              },
            ]}
          />
          <li className="hover:text-primary hover:cursor-pointer">
            Marka İşbirlikleri
          </li>
          <li className="hover:text-primary hover:cursor-pointer">Bize Ulaş</li>
          <li className="hover:text-primary hover:cursor-pointer cursor-pointer">
            Tiktak Neo
          </li>
          <AccordionMenu
            type={1}
            header="Kurumsal"
            subItems={[
              {
                header: "Kurumsal Başvuru",
                href: "/kurumsalbasvuru",
              },
              {
                header: "Kurumsal Müşteri Giriş",
                href: "/kurumsalgiris",
              },
            ]}
          />
        </ul>
        <button className="bg-primary hover:bg-white border-2 border-primary hover:border-black hover:text-black p-1 font-semibold px-4 text-white mx-5 rounded-full">
          EN
        </button>
      </div>
    </div>
  );
}

export default Navigation;
