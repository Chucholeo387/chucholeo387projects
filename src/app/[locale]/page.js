
import { useTranslations } from "next-intl";
import Image from "next/image";

const Home = () => {

  const t = useTranslations('chucholeo')
  return (
    <div>
      <div className="flex border-2 rounded my-2 justify-center shadow-lg">
        <div className="max-w-[530px] text-center p-5 py-10 font-medium">
            <div className="">{t('title1')} </div>
            <div className="mt-4" >{t('title2')}</div> 
            <div className="mt-4">{t('title3')}</div>             
        </div>
        <div className="flex justify-center items-center">
          <Image alt="chucholeo387" src="/foto_jesus.png" width={420} height={300} className="p-10"/>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
