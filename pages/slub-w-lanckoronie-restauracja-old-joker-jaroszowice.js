import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0009.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0015.jpg", height: 530 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0018.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0024.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0041.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0045.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0049.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0054.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0055.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0056.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0058.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0062.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0067.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0072.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0076.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0078.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0089.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0093.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0096.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0098.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0110.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0112.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0114.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/restauracja_old_joker_jaroszowice_0125.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "slub-w-lanckoronie-restauracja-old-joker-jaroszowice-start.jpg"}
                    images={images}
                    headTitle={"??lub w Lanckoronie, Restauracja Old Joker Jaroszowice"}
                    headDescription={
                        "Ton??cy w wielu odcieniach zieleni pi??kny ??lub w Lanckoronie. Eleganckie wn??trza Restauracji Old Joker w Jaroszowicach. Serdecznie zapraszam na reporta?? Alicji i Grzegorza. Mi??ego ogl??dania."
                    }
                    headKeywords={"??lub w Lanckoronie, Restauracja Old Joker Jaroszowice"}
                    headUrl={"https://99foto.pl/slub-w-lanckoronie-restauracja-old-joker-jaroszowice"}
                    entryContentP1={
                        'Ten reporta?? rozpoczynam od zdj??cia pe??nego s??o??ca i soczystej zieleni, kt??rego celem jest wprowadzenie Was w typowy dla Lanckorony klimat, kt??ry towarzyszy?? nam przez ca??y ??lubny dzie??. Alicja i Grzesiek mieszkaj?? teraz w Anglii, jednak nie wyobra??aj?? sobie ??ycia w miejscu innym ni?? ich ukochane rodzinne miasto. Obiecali, ??e na pewno kiedy?? wr??c?? do Lanckorony na d??u??ej do Polski. Podczas pleneru, na kt??ry wybrali??my si?? do <a href="https://www.wawel.krakow.pl/pl/" target="_blank" rel="nofollow">Zamku Kr??lewskiego na Wawelu</a> i na podziwianie zachodu s??o??ca z <a href="https://podgorze.pl/kopiec-krakusa/" target="_blank" rel="nofollow">Kopca Krakusa</a> dowiedzia??em si??, ??e ich wsp??lna historia pisze si?? ju?? bardzo d??ugo. W jednym z jej punkt??w pewnego pi??knego dnia Grzegorz przygotowa?? niespodziank?? i o??wiadczy?? si?? Alicji w <a href="https://restauracja-padre.pl/padre-krakow/" target="_blank" rel="nofollow">Restauracji Padre</a> na Krakowskim Rynku. W ubieg???? sobot?? dotarli??my do kolejnego wa??nego etapu, do dnia ??lubu, kt??ry po????czy?? Alicj?? i Grzegorza na zawsze. Dzie?? ten rozpocz???? si?? w Salonie Kosmetycznym i Fryzjerskim w Su??kowicach. Makija?? wykona??a bardzo mi??a Pani Ula. Chwil?? p????niej miejsce Alicji zaj????a jej siostra Sabina i salon kosmetyczny zacz???? ??y?? w??asnym ??yciem. Ubieranie sukni ??lubnej, przygotowania u Grzegorza, pe??ne emocji b??ogos??awie??stwa i wsp??lne zdj??cia grupowe to preludium do najwa??niejszego momentu, sakramentalnego TAK, kt??re Para M??oda wypowiedzia??a w <a href="https://www.parafia.lanckorona.pl/" target="_blank" rel="nofollow">Ko??ciele narodzenia ??w. Jana Chrzciciela w Lanckoronie</a>.'
                    }
                    entryContentP2={
                        'Dodatkow?? atrakcj?? by??y utwory wykonywane przez Ani?? z <a href="https://www.facebook.com/aniaspiewaigra/" target="_blank" rel="nofollow">Oprawa Muzyczna ??lub??w Krak??w</a>, gitarka i ??piew brzmia??y bosko. Lawina kwiat??w przy wyj??ciu z ko??cio??a i Alicja zaprosi??a go??ci do <a href="https://www.oldjoker.pl/" target="_blank" rel="nofollow">Restauracji Old Joker</a> w Jaroszowicach pod Wadowicami. Zdj??cie grupowe, moc gor??cych ??ycze?? i minut?? po obiedzie Para M??oda otworzy??a parkiet pierwszym ta??cem. <a href="https://www.facebook.com/zespolmuzycznypokusa/" target="_blank" rel="nofollow">Zesp???? muzyczny Pokusa</a>, kt??ry pozdrawiam, stan???? na wysoko??ci zadania i dba?? o dobry nastr??j go??ci. Taniec sta?? si?? motywem przewodnim oczepin, a jak si?? pewnie domy??lacie nie zabrak??o pysznego torta i innych atrakcji, kt??re z pewno??ci?? pozwoli??y go??ciom weselnym zapami??ta?? ten ??lub na d??ugo. Alicjo i Grzegorzu, dzi??ki za zaufanie i umo??liwienie mi fotografowania Waszego ??lubu. Kilka zdj???? z tego dnia i kilka fotek ze wspomnianego ju?? krakowskiego pleneru poni??ej. Mi??ego ogl??dania. Wi??cej zdj???? jak zwykle w strefie klienta, do kt??rej has??o znajdziecie na mojej wizyt??wce.'
                    }
                    slug={"slub-w-lanckoronie-restauracja-old-joker-jaroszowice"}
                    title={"??LUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE - ALICJA i GRZEGORZ"}
                    tags={"??lub w Lanckoronie, Restauracja Old Joker Jaroszowice, fotograf na wesele Wadowice"}
                    date={"26 maja 2018"}
                    menuNames={"ALICJA i GRZEGORZ"}
                    menuTitle={"??LUB W LANCKORONIE, RESTAURACJA OLD JOKER JAROSZOWICE"}
                    leadNames={"MA??GORZATA I RAFA??"}
                    leadTitle={"PLENER ??LUBNY S??OWACJA, ??OMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"}
                />
            
        );
};

export default BlogPageComponent;
