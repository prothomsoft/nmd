import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0001.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0004.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0007.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0009.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0011.jpg", height: 402 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0013.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0015.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0017.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0137.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0021.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0022.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0025.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0026.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0035.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0037.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0043.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0049.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0054.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0050.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0058.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0060.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0067.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0069.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0071.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0073.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0075.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0079.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0084.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0090.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0092.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0096.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0106.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0107.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0114.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0120.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0121.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0129.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0131.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0133.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/fotograf_slubny_krzeszowice_0135.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "fotograf_slubny_krzeszowice_start.jpg"}
                    images={images}
                    headTitle={"Fotograf ??lubny Krzeszowice, Cztery Pory Roku Alwernia"}
                    headDescription={
                        "Reporta?? ze ??lubu Oli i Grzegorza w Restauracji Cztery Pory Roku w Alwerni. Uroczysto???? za??lubin w Ko??ciele pw. ??w. Marcina z Tours w Krzeszowicach. Fotograf ??lubny zaprasza do ogl??dania."
                    }
                    headKeywords={"fotograf ??lubny Krzeszowice, cztery pory roku Alwernia"}
                    headUrl={"https://99foto.pl/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia"}
                    entryContentP1={
                        'Nasza znajomo???? z Ol?? i Grze??kiem rozpocz????a si?? wsp??ln?? wypraw?? do Ogrodu Pe??nego Lawendy w Ostrowie na ich sesj?? narzecze??sk??. Podczas sesji towarzyszy?? nam piesek Sako. Czas p??ynie szybko, wi??c ten wa??ny dzie??, ??lubna sobota nadesz??a jeszcze szybciej. Makija?? Oli wykona??a Kasia w swoim salonie makija??u <a href="https://www.facebook.com/Kasia-Kardas-Make-Up-155460148296115" target="_blank" rel="nofollow">Katarzyna Kardas Make-Up</a> w Nawojowej G??rze. By??o weso??o i mega profesjonalnie. Nast??pnie ju?? razem z Darkiem z <a href="https://dbfilm.pl/" target="_blank" rel="nofollow">Filmy i Teledyski ??lubne Krak??w DBFILM</a>, kt??ry filmowo dokumentowa?? przygotowania, ceremonie i zabaw?? weseln?? udali??my si?? do Grzegorza. Nieca??e pi??tna??cie minut wystarczy??o nam na wpi??cie spinek do mankiet??w, poprawienie muszki, za??o??enie marynarki i zawi??zanie but??w. W przygotowaniach Oli pomaga??a jej mama, pi??knie dobrane detale w moim ulubionym b????kitnym kolorze wygl??da??y niesamowicie.  Pe??ne emocji b??ogos??awie??stwo rozpocz????o si?? kr??tko po przyje??dzie Grzegorza, kt??ry nast??pnie porwa?? Ol?? do <a href="https://marcinkrzeszowice.pl/" target="_blank" rel="nofollow">Ko??ci????a pw. ??w. Marcina z Tours</a> w Krzeszowicach. Dodam jeszcze, ??e za ka??dym razem, gdy kto?? z go??ci pr??bowa?? otworzy?? parasol, deszcz przestawa?? pada??, wi??c na zdj??ciach nie ma go wcale.'
                    }
                    entryContentP2={
                        'Pi??kny, jasny ko??ci????, wspania??a ceremonia ??lubna i wypowiedziane pewnie z u??miechem na ustach sakramentalne TAK. Po wyj??ciu z ko??cio??a zrobili??my zdj??cie grupowe, a Para m??oda przyj????a gor??ce ??yczenia od swoich go??ci. Dalsza cz?????? imprezy czyli szalona zabawa weselna odby??a si?? <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a>. Wspania??a sala weselna i super ogr??d z ??atwo??ci?? pomie??ci?? wszystkich go??ci. Muzycznie by??o ambitnie bo gra?? jeden z moich ulubionych zesp??????w - <a href="https://www.somgorsy.pl/" target="_blank" rel="nofollow">Zesp???? muzyczny Somgorsy</a>. Gabrysia jak zwykle nie tylko ??piewa??a ??wietnie, ale r??wnie dobrze prowadzi??a zabawy weselne. Atrakcj?? by??a fotobudka, poci??g, tort weselny i wiadomo o p????nocy oczepiny. ??wietnie zorganizowana impreza, wspaniali otwarci ludzie, kt??rych fotografowanie by??o czyst?? przyjemno??ci??. Olu i Grze??ku dzi??kuj?? za zaufanie i zapraszam na zdj??cia. Mi??ego ogl??dania.'
                    }
                    slug={"fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia"}
                    title={"FOTOGRAF ??LUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA - OLA i GRZEGORZ"}
                    tags={"fotograf ??lubny Krzeszowice, cztery pory roku Alwernia"}
                    date={"14 lipca 2018"}
                    menuNames={"OLA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF ??LUBNY KRZESZOWICE, CZTERY PORY ROKU ALWERNIA"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ??LUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
