import img from "@assets/nerede.png";

const Nerede = () => {
  return (
    <div className="container flex items-center flex-col md:flex-row lg:flex-row px-10 my-5">
      <div className="flex flex-col flex-1">
        <h1 className="text-gray-700 font-extrabold text-3xl">
          NERELERDE VARIZ?
        </h1>
        <p className="max-w-sm my-5">
          Mobil uygulamada belirtilen İstanbul il sınırları içerisindeki hizmet
          bölgesinde yer alan TikTak araçlarını kullanabilirsin.
        </p>
      </div>
      <div className="flex-1">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Nerede;
