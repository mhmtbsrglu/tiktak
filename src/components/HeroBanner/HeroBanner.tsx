import appstore from "@assets/img-app-store.png";
import playstore from "@assets/img-google-play.png";
import neo from "@assets/tiktak-neo.png";
type Props = {};

function HeroBanner({}: Props) {
  return (
    <div className="container my-12 flex flex-col  md:flex-row  lg:flex-row xl:flex-row">
      <div>
        <h1 className="text-primary uppercase font-extrabold text-5xl">
          Tİktak Neo
        </h1>
        <p className="max-w-lg lg:max-w-xl my-5 ">
          Yeni nesil abonelik modeli Tiktak Neo’ya geç araba yapmanın en kısa
          yoluyla tanış. Hemen Tiktak indir, 30 gün boyunca, dilediğin arabayı
          tıpkı kendi araban gibi her gün kullanmaya başla.
        </p>
        <button className="bg-primary p-2 font-semibold px-4 text-white my-5 rounded-full uppercase text-sm">
          İncele
        </button>
        <div className="flex gap-5 my-5">
          <img src={appstore} alt="app store" />
          <img src={playstore} alt="play store" />
        </div>
      </div>
      <div>
        <img src={neo} className="w-80 xl:w-[28rem]" alt="" />
      </div>
    </div>
  );
}

export default HeroBanner;
