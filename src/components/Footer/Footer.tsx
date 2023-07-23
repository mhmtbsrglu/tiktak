import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import apple from "@assets/img-app-store.png";
import playstore from "@assets/img-google-play.png";
import logo from "@assets/footer.svg";

const Footer = () => {
  return (
    <div className="border-t-2 border-blue-400 h-60  text-sm">
      <div className="flex container flex-col lg:flex-row md:flex-row h-full gap-10 py-10">
        <div className="flex flex-col flex-1 ">
          <div className="flex-1">©2023 TikTak</div>
          <div className="flex flex-1 items-end  ">
            <ul className="flex gap-5">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col flex-1 z-10 relative ">
          <div className="font-extrabold mb-2 z-10">TİKTAK</div>
          <div className="flex flex-1 ">
            <ul className="flex  gap-2 flex-col z-10   relative">
              <li>Kurumsal Başvuru</li>
              <li>Marka İşbirlikleri</li>
              <li>Bize Ulaş</li>
              <li>TikTak Hakkında</li>
              <li>En Çok Merak Edilenler</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col flex-1 relative  ">
          <img src={logo} alt="" className="absolute -bottom-10 w-80 z-0" />
          <div className="font-extrabold mb-2 z-10 relative">
            MOBİL UYGULAMAMIZI İNDİR
          </div>
          <div className="flex flex-1 relative ">
            <ul className="flex  gap-2 ">
              <li>
                <img src={apple} alt="" />
              </li>
              <li>
                <img src={playstore} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
