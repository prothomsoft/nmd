import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0041.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0060.jpg", height: 785 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0040.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0038.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0047_1.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0042.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0045_1.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0049_1.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0050.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0051.jpg", height: 566 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0052.jpg", height: 301 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0053.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0057.jpg", height: 872 },
            { imageSrc: "/static/blog/2017/06/sesja_zdjeciowa_kopiec_kraka_0059.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_zdjeciowa_kopiec_kraka_przegorzaly_kryspinow_start.jpg"}
                    images={images}
                    headTitle={"Sesja zdj??ciowa Kopiec Kraka, Przegorza??y, Kryspin??w"}
                    headDescription={"Natalia i Tomasz na plener ??lubny wybrali Kopiec Krakusa na Krakowskim Podg??rzu, Zamek w Przegorza??ach i zach??d s??o??ca nad jeziorem w Kryspinowie."}
                    headKeywords={"kopiec kraka,zamek przegorza??y,sesja zdj??ciowa kryspin??w"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow"}
                    entryContentP1={
                        "Natalia i Tomasz na plener ??lubny wybrali Kopiec Krakusa na Krakowskim Podg??rzu, Zamek w Przegorza??ach i zach??d s??o??ca nad jeziorem w Kryspinowie. Pomimo, ??e miejsca te odwiedza??em nie pierwszy raz to stara??em si?? wymaza?? z mojej pami??ci istniej??ce ju?? kadry i skupi?? si?? na poszukiwaniu nowych, jeszcze nie odkrytych miejsc. W pobli??u Kopca znajduje si?? r??wnie?? kamienio??om Liban, kt??ry by?? niegdy?? karnym obozem pracy. Miejsce dobre na industrialn?? sesj?? narzecze??sk??, ale kompletnie nieu??yteczne dla Panny M??odej w bia??ej sukni ??lubnej."
                    }
                    entryContentP2={
                        "Pogoda tego dnia by??a ??wietna, niebieskie niebo i bia??e chmurki bardzo pomaga??y. Restauracja u Ziyada by??a pe??na go??ci, kt??rzy popijaj??c kawk?? podziwiali pi??kne widoki z restauracyjnego tarasu. Wpad?? nowy kadr w tym miejscu, z kt??rego jestem bardzo zadowolony. Plener doko??czyli??my w Kryspinowie delektuj??c si?? ostatnimi promieniami zachodz??cego s??o??ca. My??l??, ??e wszyscy sp??dzili??my mi??e popo??udnie w fajnych miejscach, dobrych humorach i przy ??wietnej pogodzie. Zapraszam na zdj??cia z tej wyprawy plenerowej i ??ycz?? mi??ego ogl??dania."
                    }
                    slug={"sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow"}
                    title={"SESJA ZDJ??CIOWA KOPIEC KRAKA, PRZEGORZA??Y, KRYSPIN??W - NATALIA i TOMASZ"}
                    tags={"kopiec kraka,zamek przegorza??y,sesja zdj??ciowa kryspin??w"}
                    date={"14 czerwca 2017"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"SESJA ZDJ??CIOWA KOPIEC KRAKA, PRZEGORZA??Y, KRYSPIN??W"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
