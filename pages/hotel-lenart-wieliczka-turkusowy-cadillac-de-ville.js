import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_002.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_012.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_010.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_017.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_018.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_020.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_022.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_023.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_025.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_029.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_031.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_034.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_038.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_040.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_041.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_043.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_045.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_046.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_048.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_049.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_052.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_055.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_060.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_063.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_065.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_069.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_071.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_074.jpg", height: 526 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_076.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_078.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_079.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_084.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_086.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_088.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_090.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_097.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_099.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_101.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_103.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_105.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_109.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_111.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_115.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_121.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_124.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_126.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_127.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/hotel_lenart_wieliczka_128.jpg", height: 383 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "hotel_lenart_wieliczka_zdjecia_slubne.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Hotel Lenart Wieliczka, fotograf ??lubny"}
                    headDescription={"Reporta?? ze ??lubu Moniki i Mariusza w Hotelu Lenart w Wieliczce. Uroczysto???? za??lubin w Ko??ciele ??w. Sebastiana w Wieliczce. Zapraszam do ogl??dania."}
                    headKeywords={"fotograf ??lubny wieliczka, zdj??cia ??lubne hotel lenart w wieliczce"}
                    headUrl={"https://99foto.pl/hotel-lenart-wieliczka-turkusowy-cadillac-de-ville"}
                    entryContentP1={
                        'Zapowiada??a si?? bardzo ciep??a s??oneczna sobota, bez najmniejszej kropelki deszczu i rzeczywi??cie tak by??o. Po??udniowe s??o??ce podgrza??o atmosfer?? do blisko trzydziestu stopni. Gdy dodamy do tego temperatur?? wywo??an?? przez emocje najwa??niejszego i jak napisa??a Monika ju?? po ??lubie najpi??kniejszego dnia w jej ??yciu, to mo??ecie wyobrazi?? sobie jak by??o gor??co. Kr??tko wi??c od pocz??tku, czyli od przygotowa?? Panny M??odej, kt??re odby??y si?? w <a href="https://www.facebook.com/Gabinet-Hibiskus-Wieliczka-152566164795487/" target="_blank" rel="nofollow">Gabinecie Kosmetycznym Hibiskus w Wieliczce</a>. Dziewczyny pracowa??y od godziny dziewi??tej rano nad fryzur??, malowa??y i utrwala??y paznokcie, a na koniec tych przygotowa?? mistrzowski makija?? wykona??a Ola. Nie mog??o zabrakn???? kilku minut na przygotowania Mariusza. Podjechali??my wi??c odnale???? si?? w totalnie Krakowskich klimatach, mieszkaniu rodzic??w Pana M??odego w samym centrum naszego pi??knego miasta. W ubieraniu spinek, muchy i garnituru ??lubnego asystowa?? Wujek Mariusza. Zielony Cadillac de Ville zaparkowa?? przed domem Moniki w Wieliczce. Mariusz szcz????liwy ujrza?? Monik?? po raz pierwszy tego dnia. Widzia??em w jego oczach, ??e chcia??, by chwila ta trwa??a wiecznie. W domu odby??o si?? b??ogos??awie??stwo, a Para M??oda podzi??kowa??a rodzicom. Nadszed?? czas by uda?? si?? do kameralnego <a href="https://kosciol-sebastian.pl/" target="_blank" rel="nofollow">Ko??cio??a ??w. Sebastiana w Wieliczce</a>.'
                    }
                    entryContentP2={
                        'Meczu o szesnastej tym razem nie by??o, pomimo tego wyg??oszone kazanie by??o tak kr??tkie, jakby Niemcy grali w p????finale. Sakramentalne TAK, zdj??cie grupowe, moc gor??cych ??ycze?? przed Ko??cio??em, a dos??ownie chwilk?? p????niej Monika i Mariusz wyl??dowali na czerwonym dywanie w <a href="https://hotellenart.pl/" target="_blank" rel="nofollow">Hotelu Lenart w Wieliczce</a>. Rodzice tradycyjnie przywitali Par?? M??od?? chlebem i sol??, a kieliszki uderzaj??c o ziemi?? przesz??y do historii. Razem z Krzy??kiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CamDesign - Pracownia Filmu ??lubnego</a> rejestrowali??my ka??d?? minut?? wydarze?? na parkiecie, oraz wszystkie mo??liwe zabawy. Go??cie ch??tnie korzystali z foto budki, tworz??c pami??tkowe wpisy w ksi??dze go??ci M??odej Pary. Zabawa trwa??a do bia??ego rana. Moniko i Mariuszu, dzi??kuj??, ??e mog??em by?? tam z Wami i zapraszam na zdj??cia. Mi??ego ogl??dania. Grubo ponad pi????set zdj???? jak zwykle w strefie klienta, do kt??rej has??o znajdziecie na mojej wizyt??wce.'
                    }
                    slug={"hotel-lenart-wieliczka-turkusowy-cadillac-de-ville"}
                    title={"HOTEL LENART WIELICZKA, TURKUSOWY CADILLAC DE VILLE - MONIKA i MARIUSZ"}
                    tags={"fotograf ??lubny wieliczka, zdj??cia ??lubne hotel lenart w wieliczce"}
                    date={"28 lipca 2018"}
                    menuNames={"MONIKA i MARIUSZ"}
                    menuTitle={"HOTEL LENART WIELICZKA, TURKUSOWY CADILLAC DE VILLE"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ??LUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
