import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0005.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0011.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0012.jpg", height: 567 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0019.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0041.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0045.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0050.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0059.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0062.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0063.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0071.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0079.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0106.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0090.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0096.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0100.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0105.jpg", height: 762 },
            ,
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0112.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0114.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0115.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0117.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0122.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0124.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0131.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0137.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0141.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0144.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_skawina_0145.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "reportaz-slubny-hotel-junior-krakow-balonowy-szal-start.jpg"}
                    images={images}
                    headTitle={"Hotel Junior Krak??w ?????? Reporta?? ??lubny"}
                    headDescription={
                        "Czy widzieli??cie kiedy?? ponad sto wype??nionych helem, ??wiec??cych ledowych serduchowych balonik??w wystrzelonych w kosmos kilka minut po p????nocy? Je??eli nie to zapraszam do wklikni??cia w reporta?? ze ??lubu Magdy i Piotrka. Mi??ego ogl??dania."
                    }
                    headKeywords={"Reporta?? ??lubny Hotel Junior Krak??w, balonowy sza??"}
                    headUrl={"https://99foto.pl/reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    entryContentP1={
                        'Du??y dom, profesjonalna fryzjerka i makija??ystka oraz niezast??pieni pomocnicy pe??ni humoru, plus kilka czelend??ing task??w i klimat pod przygotowania mamy zapewniony. Tak w du??ym skr??cie m??g??bym przedstawi?? pocz??tek pi??tkowych przygotowa?? Magdy, kt??re mia??y miejsce w Skawinie. Przed dwunast?? kiedy ju?? fryzura i makija?? by??y gotowe, a na mojej karcie pami??ci w aparacie zapisany finalny look, wybrali??my si?? do Piotrka. Mia??o by?? tam kilku ziomk??w i spoko klimat... i tak w??a??nie by??o. Dru??bowie w liczno??ci po??owy przeci??tnej klasy w szkole podstawowej za??o??yli takie same muchy, a kiedy wbili si?? w garnitury to wygl??dali lepiej ni?? reprezentacja Polski na plakacie Vistuli. Nie zabrak??o te?? kr??tkiego b??ogos??awie??stwa i kilku tradycyjnych przy??piewek zaserwowanych przez S??awka, kt??ry z zawodow?? ta??m?? kr??ci?? imprez?? do przodu. Kolor r????owy zdominowa?? mieszkanie rodzic??w Magdy. Dziewczyny sprawnie przypie??y welon, butonierki i po kr??tkim b??ogos??awie??stwie udali??my si?? do <a href="https://www.szymonijuda.pl/" target="_blank" rel="nofollow">Ko??cio??a ??wi??tych Aposto????w Szymona i Judy Tadeusza w Skawinie</a>.'
                    }
                    entryContentP2={
                        'Ksi????a przywitali Par?? M??od?? w zachrystii, dope??niono formalno??ci i ceremonia za??lubin wystartowa??a. Po sakramentanym TAK nadesz??a pora na klasyczne wyj??cie z ko??cio??a przez szpaler starannie u??o??ony przez druhny i dru??b??w ??lubnych. Nast??pnie czerwony Mustang przewi??z?? Magd?? i Piotra do <a href="https://junior.krakow.pl/">Hotel Junior w Krakowie</a>, rodzice przywitali Par?? M??od?? chlebem i sol??, brat Piotrka mocno powalczy?? z petard?? i rozpocz????y si?? ??yczenia. By??y gor??ce, jak atmosfera ca??ego ??lubu i bez nawet 10 sekund nieprzerwanych salw?? ??miechu. Pierwszy taniec otworzy?? parkiet, na kt??rym swoje instrumenty roz??o??y?? <a href="https://www.primaband.pl" target="_blank" rel="nofollow">Zesp???? muzyczny Prima Band</a>. Minutk?? przed burz??, kt??rej jednak nie by??o, wyskoczyli??my na zdj??cia grupowe i plenerowe. Dalej by??y ju?? same atrakcje, tort weselny, zabawy oczepinowe i wi??nia na torcie, dmuchane helem i pod??wietlane ledami baloniki, kt??re polecia??y wysoko, wysoko, bardzo wysoko. By??y osoby, kt??ry widzia??y, ??e u??o??y??y si?? w powietrzu w krza??t serca... no c???? m??j aparat nie by??, a?? tak spostrzegawczy. Nie mog?? zapomnie?? doda??, ??e ka??d?? minut?? tych niezwyk??ych wydarze?? filmowa?? m??j dobry kolega Krzysiek z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Pracowni Filmu ??lubnego CAMDESIGN</a>, kt??rego bardzo wszystkim przysz??ym param m??odym polecam. Magdo i Piotrze, dzi??kuj??, ??e mog??em by?? tam z Wami i zapraszam na zdj??cia. Tym razem dzia??o si?? tak du??o, ??e blisko 600 zdj???? znajdziecie w strefie klienta wpisuj??c has??o z mojej wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    title={"REPORTA?? ??LUBNY HOTEL JUNIOR KRAK??W, BALONOWY SZA?? - MAGDALENA i PIOTR"}
                    tags={"Reporta?? ??lubny Hotel Junior Krak??w, fotograf na wesele Skawina"}
                    date={"2 czerwca 2018"}
                    menuNames={"MAGDALENA i PIOTR"}
                    menuTitle={"REPORTA?? ??LUBNY HOTEL JUNIOR KRAK??W, BALONOWY SZA??"}
                    leadNames={"MA??GORZATA I RAFA??"}
                    leadTitle={"PLENER ??LUBNY S??OWACJA, ??OMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"}
                />
            
        );
};

export default BlogPageComponent;
