import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [

            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0011.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0013.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0015.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0021.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0001.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0005.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0008.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0026.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0028.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0030.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0032.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0035.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0042.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0041.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0050.jpg", height: 852 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0052.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0056.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0060.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0062.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0064.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0074.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0078.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0079.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0081.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0084.jpg", height: 805 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0090.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0091.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0094.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0095.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0096.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0098.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0105.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0108.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0106.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/05/szafrantu_niepolomice_reportaz_slubny_0110.jpg", height: 762 }];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sala-bankietowa-szafrantu.jpg"}
                    images={images}
                    headTitle={"Sala bankietowa Szafrantu, fotografia ??lubna Niepo??omice"}
                    headDescription={"Przepi??kne miejsce na ceremoni?? ??lubn??. Wspaniali Karolina i Kamil. Du??a dawka emocji, u??miech??w i pozytywnej energii. Sala bankietowa Szafrantu i impreza do bia??ego rana. Zapraszam."}
                    headKeywords={"Sala bankietowa Szafrantu, fotografia ??lubna Niepo??omice"}
                    headUrl={"https://99foto.pl/sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    entryContentP1={
                        'Tym razem na reporta?? ??lubny zapraszam Was do Niepo??omic gdzie podczas fotografowania ??lubu Karoliny i Kamila odkry??em miejsce niezwyk??e. Krak??w s??ynie z <a href="http://mariacki.com/" target="_blank" rel="nofollow">Bazyliki Mariackiej</a>, czasem wspomina si?? o <a href="http://kolegiata-anna.pl/"  target="_blank" rel="nofollow">Uniwersyteckiej Kolegiacie ??w. Anny</a> zupe??nie natomiast zapominaj??c o <a href="https://www.staniatki.pl/" target="_blank" rel="nofollow">Ko??ciele ??w. Wojciecha Biskupa i M??czennika w Stani??tkach</a>. W??a??nie w tym pi??knym miejscu Karolina ??lubowa??a Kamilowi mi??o????, wierno???? i uczciwo???? ma????e??sk??. Cofnijmy si?? jednak w czasie do przygotowa??, kt??re rozpocz????y si?? pod okiem <a href="https://www.instagram.com/alexandradomagala/" target="_blank" rel="nofollow">Aleksandry Domaga??y</a>. Karolina wybra??a <a href="http://www.hotelnovum.pl/" target="_blank" rel="nofollow">Hotel Novum w Niepo??omicach</a> jako miejsce gdzie musia??y pomie??ci?? si?? kufry, p??dzle i palety cieni skompletowane przez Ol??. W czasie kr??tszym ni?? jedna godzina uroda Panny M??odej zosta??a perfekcyjnie podkre??lona i mogli??my odwiedzi?? Kamila, kt??ry czeka?? w gotowo??ci by rozpocz???? swoje przygotowania i pi??tnastoletni?? whisky. Nast??pnie wr??cili??my do domu rodzinnego Karoliny, na wsp??lne b??ogos??awie??stwo. Wszystkie miejsca odwiedzali??my wsp??lnie z Grze??kiem i Dawidem z <a href="https://manolofilmy.pl/" target="_blank" rel="nofollow">Manolo filmy</a>. By?? z nami jeszcze Filip, kt??ry pilotowa?? drona w momentami ryzykownych warunkach.'
                    }
                    entryContentP2={
                        'Pi??kna ceremonia w jeszcze pi??kniejszym <a href="https://www.staniatki.pl/" target="_blank" rel="nofollow">Ko??ciele ??w. Wojciecha Biskupa i M??czennika w Stani??tkach</a>, zdj??cie grupowe tu?? po wyj??ciu i Para M??oda zaprosi??a swoich go??ci weselnych do <a href="https://www.szafrantu.pl/" target="_blank" rel="nofollow">Sali Bankietowej w Restauracji Szafrantu w Niepo??omicach</a>. Para m??oda zosta??a przywitana chlebem i sol??, przyj????a gor??ce ??yczenia go??ci i pierwszym ta??cem otworzy??a parkiet. Imprez?? z radiowym zaci??ciem poprowadzi?? <a href="http://tomaszjanda.pl/" target="_blank" rel="nofollow">DJ Tomasz Janda</a>. Lista atrakcji tego wieczoru by??a d??u??sza ni?? zwykle. Kr??tki plener z wymarzonym garbusem, tort weselny, podzi??kowania dla rodzic??w wykonane popisowo i z jajem, sztuczne ognie tu?? po zabawach oczepinowych. Dzia??o si?? du??o i z pewno??ci?? by??o co fotografowa??. Karolino i Kamilu, dzi??kuj?? za zaufanie i zapraszam na kilka zdj???? z tego dnia. Wi??cej znajdziecie w strefie klienta wpisuj??c has??o z mojej wizyt??wki. Serdecznie zapraszam i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    title={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ??LUBNA NIEPO??OMICE - KAROLINA i KAMIL"}
                    tags={"Sala bankietowa Szafrantu, fotografia ??lubna Niepo??omice"}
                    date={"8 maja 2019"}
                    menuNames={"KAROLINA i KAMIL"}
                    menuTitle={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ??LUBNA NIEPO??OMICE"}
                    leadNames={"KINGA i PAWE??"}
                    leadTitle={"HOTEL JUNIOR SKOTNICKA, ZDJ??CIA ??LUBNE SKAWINA"}
                    leadUrl={"/hotel-junior-skotnicka-zdjecia-slubne-skawina"}
                    leadImage={process.env.staticImagesPath + "hotel-junior-skotnicka.jpg"}
                />
            
        );
};

export default BlogPageComponent;
