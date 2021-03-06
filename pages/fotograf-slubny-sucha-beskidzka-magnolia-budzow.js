import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0005.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0009.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0011.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0020.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0024.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0022.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0023.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0025.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0029.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0041.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0058.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0065.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0067.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0078.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0079.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0086.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0090.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0101.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0104.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0109.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0113.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0116.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0117.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0119.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_magnolia_budzow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0007.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/sesja_zdjeciowa_w_tatrach_0009.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "fotograf-slubny-magnolia-budzow-start.jpg"}
                    images={images}
                    headTitle={"Fotograf ??lubny Sucha Beskidzka, Restauracja Magnolia Budz??w"}
                    headDescription={"Reporta?? ??lubny Kingi i Mateusza w Suchej Beskidzkiej i plener ??lubny w Tatrach. Serdecznie zapraszam na kilka zdj???? na moim blogu. Mi??ego ogl??dania."}
                    headKeywords={"fotograf ??lubny sucha beskidzka, restauracja magnolia budz??w, sesja zdj??ciowa tatry"}
                    headUrl={"https://99foto.pl/fotograf-slubny-sucha-beskidzka-magnolia-budzow"}
                    entryContentP1={
                        'W tym roku most w Zembrzycach nad rzek?? Skaw?? przekroczy??em po raz kolejny, tym razem w drodze do <a href="https://www.facebook.com/paulinaficekmakeup/" target="_blank" rel="nofollow">Studia Makija??u Pauliny Ficek</a> w samym centrum Suchej Beskidzkiej. To w??a??nie tam um??wili??my si?? z King?? na pocz??tek reporta??u ??lubnego. Do????czy?? do nas mega kamerzysta Adam, kt??ry filmowa?? w imieniu <a href="https://www.facebook.com/videoartstudiopl/" target="_blank" rel="nofollow">Video Art Studio</a> i dzie?? wystartowa?? na dobre. Gdy makija?? by?? gotowy udali??my si?? do domu rodzinnego Panny M??odej, gdzie mama z siostr?? pomog??y Kindze w przygotowaniach. Nast??pnie odwiedzili??my Zembrzyce jad??c do Mateusza sfotografowa?? wpinanie spinek i poprawienie muchy. W mi??dzyczasie znale??li??my chwil?? na obowi??zkowe portrety Pana M??odego i Panny M??odej. Odby??o si?? te?? pe??ne wzrusze?? b??ogos??awie??stwo po kt??rym wszyscy udali??my si?? do <a href="https://parafiasucha.pl/" target="_blank" rel="nofollow">Ko??cio??a pw. Nawiedzenia Naj??wi??tszej Maryi Panny</a> w Suchej Beskidzkiej. Ko??ci???? przepi??kny, a pod wzgl??dem fotograficznym idealny.'
                    }
                    entryContentP2={
                        '??wietne ??wiat??o, ogrom przestrzeni i mo??liwo???? stworzenia wspania??ych kadr??w w zwykle niedost??pnych perspektywach. Po sakramentalnym tak go??cie weselni ustawili si?? do zdj??cia grupowego, a nast??pnie wszyscy zostali zaproszeniu do <a href="https://magnolia-restauracja.pl/wesela" target="_blank" rel="nofollow">Restauracji Magnolia</a> w Budzowie. Przywitanie chleblem i sol??, ??yczenia i pierwszy taniec, kt??ry otworzy?? parkiet tego dnia. Pawe?? z <a href="https://www.facebook.com/zespolselavi/" target="_blank" rel="nofollow">Zesp????u SeLaVi</a> dla kt??rego scena jest drugim domem, a z mikrofonem czuje si?? jak Krzysztof Ibisz, nie pozwala?? go??ciom nudzi?? si?? ani przez chwilk??, przenosz??c cz?????? tradycji rodem z Lubelszczyzny w nasze krakowskie strony. Tort weselny, zabawy oczepinowe, poci??g i kilka innych atrakcji sprawi??y, ??e czas mija?? b??yskawicznie. Impreza trwa??a do bia??ego rana i by??o rewelacyjnie. Kilka dni p????niej udali??my si?? na plener ??lubny w Tatry, stawiaj??c w ten spos??b kropk?? nad i. Odwiedzili??my Rezerwat przyrody Prze??om Bia??ki pod Krempachami, Lotnisko w Nowym Targu i punkt widokowy Grapa Litwinka w Czarnej G??rze. Kilka zdj???? z naszej wyprawy znajdziecie poni??ej. Zapraszam ju?? na zdj??cia, a po wi??cej do strefy klienta. Mi??ego ogl??dania.'
                    }
                    slug={"fotograf-slubny-sucha-beskidzka-magnolia-budzow"}
                    title={"FOTOGRAF ??LUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZ??W - KINGA i MATEUSZ"}
                    tags={"fotograf ??lubny sucha beskidzka, restauracja magnolia budz??w, sesja zdj??ciowa tatry"}
                    date={"23 czerwca 2018"}
                    menuNames={"KINGA i MATEUSZ"}
                    menuTitle={"FOTOGRAF ??LUBNY SUCHA BESKIDZKA, MAGNOLIA BUDZ??W"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"FOTOGRAF ??LUBNY KALWARIA ZEBRZYDOWSKA, ARKADIA WADOWICE"}
                    leadUrl={"/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    leadImage={process.env.staticImagesPath + "fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
