import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0017.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0131.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0147.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0150.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0151.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0154.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_krakow_0136.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zdjecia_chrztu_swietego_i_slubu_krakow_start.jpg"}
                    images={images}
                    headTitle={"Fotograf na chrzest Krak??w"}
                    headDescription={"Fotograf na Chrzest ??wi??ty Krak??w. Miejsce wydarze?? Krak??w. Serdecznie zapraszam na kilka zdj???? Chrztu ??wi??tego."}
                    headKeywords={"fotograf na chrzest krak??w, restauracja szafrantu zagacie, fotografia chrztu"}
                    headUrl={"https://99foto.pl/zdjecia-chrztu-swietego-i-slubu-krakow"}
                    entryContentP1={
                        'Niedziela z wyj??tkowo zmienn?? aur??, pogoda typowo marcowa. Osiedle Ku??nicy Ko??????tajowskiej i ??lub niezwyk??y pod wieloma wzgl??dami. Dzie?? PODW??JNIE WA??NY dla ca??ej rodziny. Pierwszoplanowa rola w ca??ej uroczysto??ci zosta??a wype??niona nie przez jak to zwykle przecie?? na ??lubach bywa Pann?? M??od??, ale przez dzielnego obserwatora niedzielnych wydarze?? ma??ego Franka. Kr??tkie przygotowania w mieszkaniu, gdzie go??ci przybywa??o z minuty na minut??, a godzina zero zbli??a??a si?? wielkimi krokami. Franio, kt??ry w modnych szelkach regenerowa?? si??y korzystaj??c z popo??udniowej drzemki. Moc pozytywnej energii pomimo du??ego zamieszania.  Tak min????o b??ogos??awie??stwo rodzic??w i wszyscy udali??my si?? do pobliskiego <a href="https://www.gotyk.home.pl/" target="_blank" rel="nofollow">Ko??cio??a Chrystusa Kr??la w Krakowie</a>, gdzie rozpocz????a si?? ceremonia ??lubu i Chrztu ??wi??tego. Ksi??dz przekazuj??c mn??stwo ??yciowych rad, wyg??osi?? dowcipne kazanie, kt??re wywo??a??o u??miechy na twarzach wielu go??ci.'
                    }
                    entryContentP2={
                        'Pa??stwo M??odzi powiedzieli sobie TAK i nadszed?? czas wyzwania dla maluszka. Franek zachowa?? si?? niezwykle dzielnie podczas polewania g??owy wod?? ??wi??con??. Nieustannie obserwowa?? co te?? dooko??a niego si?? dzieje. Po ceremoni Pa??stwo M??odzi zaprosili swoich go??ci do <a href="https://www.szafrantu.pl/o-nas/62" target="_blank" rel="nofollow">Restauracji Szafrantu w Niepo??omicach</a>. Rodzice powitali M??odych chlebem i sol??, odby?? si?? klasyczny rzut kieliszkami i walka ze zmiotk??. Piotr przeni??s?? Sandr?? przez pr??g Restauracji. Po ??yczeniach i obiedzie zesp???? muzyczny <a href="https://gooroleska.pl/" target="_blank" rel="nofollow">Gooroleska</a> zaprosi?? go??ci na pierwszy taniec i do wsp??lnej zabawy. W trakcie zabawy zaserwowali go??ciom swoje najwi??ksze przeboje, kt??re warto w internecie odnale???? i przes??ucha??. Stolik Pa??stwa M??odych zdecydowanie dawa?? rad?? i ani przez moment nie pozosta?? bierny. Parkiet zape??nia?? si?? w ekspresowym tempie.  Mateusz i Kasia z <a href="https://www.blinkfilm.pl" target="_blank" rel="nofollow">Blink Film z Miechowa</a> skrupulatnie rejestrowali ka??d?? chwil??. Ogl??da??em ich portfolio i nie mam ??adnych w??tpliwo??ci, ??e powstanie mega film. Na koniec dodam, ??e kilka minut przed p????noc?? Franio pojawi?? si?? na sali i sprawdzi?? czy rodzice bawi?? si?? nadal tak dobrze jak kilka godzin wcze??niej. Dzi??kuj?? Wam Sandro i Piotrze za ten magiczny wiecz??r, za zaufanie i pozytywne emocje, by??o ??wietnie. Teraz ju?? zapraszam na kr??tk?? histori?? tego wyj??tkowego dnia.'
                    }
                    slug={"zdjecia-chrztu-swietego-i-slubu-krakow"}
                    title={"FOTOGRAF NA CHRZEST ??WI??TY KRAK??W - SANDRA, PIOTR i FRANEK"}
                    tags={"fotograf na chrzest krak??w, restauracja szafrantu zagacie, fotografia chrztu"}
                    date={"30 kwietnia 2017"}
                    menuNames={"SANDRA, PIOTR i FRANEK"}
                    menuTitle={"ZDJ??CIA CHRZTU ??WI??TEGO i ??LUBU KRAK??W"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
