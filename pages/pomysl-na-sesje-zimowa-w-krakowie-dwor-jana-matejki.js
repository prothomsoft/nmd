import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0003.jpg", height: 850 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0007.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0008.jpg", height: 805 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0010.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0018.jpg", height: 850 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0020.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0022.jpg", height: 805 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0025.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0029.jpg", height: 850 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/pomysl_na_sesje_slubna_zimowa_w_krakowie_0024_1.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"}
                    images={images}
                    headTitle={"Pomys?? na sesj?? zimow?? w Krakowie - Dw??r Jana Matejki"}
                    headDescription={
                        "Co?? dla odwa??nych - sesja ??lubna zim??. Je??eli szukacie pomys??u na sesje zimow?? i miejsca na sesj?? zimow?? w Krakowie to serdecznie zapraszam na bloga, a w przysz??o??ci do Dworu Jana Matejki w Krzes??awicach."
                    }
                    headKeywords={"pomys?? na sesje zimow??, sesja ??lubna zim??, miejsce na sesj?? ??lubn?? w Krakowie"}
                    headUrl={"https://99foto.pl/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    entryContentP1={
                        'Zimowy ??lub w przedsylwestrow?? sobot?? i przysz??e plany Natalii i ??ukasza zmotywowa??y nas do odnalezienia w Krakowie miejsca, w kt??rym zima nie przeszkodzi nam w realizacji ??lubnej sesji zdj??ciowej. Nie by?? to pierwszy raz, gdy pomys??y na zimowe zdj??cia sta??y si?? numerem jeden we frazach wpisywanych do naszych przegl??darek internetowych. Nie by?? to te?? pierwszy raz, kiedy zdj??cia w warunkach zimowych mia??em przyjemno???? i okazj?? zrobi??. Na mojej li??cie sprawdzonych miejsc na sesj?? ??lubn?? w Krakowie od dawna znajduj?? si?? <a href="https://www.gdziewesele.pl/Domy-weselne/Palac-Radziwillow" target="_blank" rel="nofollow">Pa??ac Radziwi??????w w Balicach</a> i <a href="http://palac-sztuki.krakow.pl/muzea/dworek-jana-matejki/" target="_blank" rel="nofollow">Dw??r Jana Matejki w Krzes??awicach</a>. Pa??ac jest ??wietnym miejscem, gdy zimowa sesja zdj??ciowa ma odby?? si?? w weekend. W tygodniu, miejsce to mo??emy rezerwowa?? na sesj?? po godzinie szesnastej.'
                    }
                    entryContentP2={
                        "Dw??r Jana Matejki jest natomiast ??wietnym miejscem r??wnie?? w tygodniu. Przemi??y opiekun obiektu, kt??ry czas sesji plenerowej umila przygrywaj??c na harmoszce, ch??tnie opowiadaj??c histori?? tego miejsca, w spos??b ten doskonale promuje obiekt i zach??ca do odwiedzenia go ot tak po prostu z dzieciakami. Porad dotycz??cych zimowej sesji ??lubnej tym razem nie b??dzie. Pami??tajmy, ??e Krak??w to genialne miejsce i nawet w zimie, bez przemierzania dziesi??tek kilometr??w w Tatry, mo??na na miejscu wyczarowa?? ciekawe kadry. Zapraszam do ogl??dania."
                    }
                    slug={"pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    title={"POMYS?? NA SESJ?? ZIMOW?? W KRAKOWIE - DW??R JANA MATEJKI - NATALIA i ??UKASZ"}
                    tags={"pomys?? na sesje zimow??, sesja ??lubna zim??, miejsce na sesj?? ??lubn?? w Krakowie"}
                    date={"11 stycznia 2019"}
                    menuNames={"NATALIA i ??UKASZ"}
                    menuTitle={"POMYS?? NA SESJ?? ZIMOW?? W KRAKOWIE - DW??R JANA MATEJKI"}
                    leadNames={"KAROLINA i MATEUSZ"}
                    leadTitle={"ZIELONE WZG??RZE KONIUSZA, TAK W PROMIENIACH S??O??CA"}
                    leadUrl={"/zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    leadImage={process.env.staticImagesPath + "zielone_wzgorze_koniusza.jpg"}
                />
            
        );
};

export default BlogPageComponent;
