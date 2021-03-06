import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0032.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0059.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0069.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0078.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0080.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0086.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0090.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0092.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0116.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0129.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0134.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0140.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0148.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/11/fotograf_slubny_jordanow_0153.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "alina_i_janusz_zdjecia_slubne_jordanow_dworek_fantazja_start.jpg"}
                    images={images}
                    headTitle={"Fotograf ??lubny Jordan??w, zdj??cia ??lubne Dworek Fantazja"}
                    headDescription={"Do kr??tkiego streszczenia ich wielkiego dnia najbardziej pasuj?? dwa s??owa: by??o pi??knie! Na moim BLOGu, kr??tka historia opowiedziana wyj??tkowymi momentami."}
                    headKeywords={"reporta?? ??lubny jordan??w,zdj??cia ??lubne restauracja dworek fantazja"}
                    headUrl={"https://99foto.pl/alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    entryContentP1={
                        "Jordan??w po raz kolejny. Za oknami jesie?? w pe??ni. Z pozoru szara sobota, w praktyce dzie?? przepe??niony emocjami i wra??eniami. Reporta?? ??lubny Aliny i Janusza zacz??li??my od makija??u Panny M??odej, kt??ry zosta?? mistrzowsko wykonany przez Iwon??. Spotkali??my si?? z Iwon?? po raz kolejny, tym razem r??wnie?? na sali weselnej. Makija?? jak zwykle doskona??y, wywo??a?? zachwyt wszystkich go??ci i skr??ci?? moj?? prace nad zdj??ciami w Photoshopie o dobre kilka godzin. Kiedy Pani M??oda by??a ju?? gotowa, oczarowywa??a ka??d?? wchodz??c?? do jej pokoju osob??. Po kilku chwilach zabarwionych cieniami i szminkami nadszed?? czas na pojawienie si?? Pana M??odego. Za oknem pojawi??a si?? limuzyna, a Janusz elegancko przywita?? si?? ze swoj?? przysz???? ??on??."
                    }
                    entryContentP2={
                        'Pan m??ody nie wykazywa?? ??adnych oznak stresu, oaza spokoju i dobrego humoru. Pierwsze spotkanie Aliny i Janusza, bezcenne. Po chwilach wzruszenia podczas rodzinnego b??ogos??awie??stwa udali??my si?? do Ko??cio??a Przenaj??wi??tszej Tr??jcy w Jordanowie. By??y ??zy szcz????cia i wznios??e chwile. Sta??o si??! Po og??oszeniu naszej Pary m????em i ??on?? udali??my si?? do domu weselnego <a href="https://www.dworekfantazja.pl/" target="_blank" rel="nofollow">Dworek Fantazja w Skomielnej Bia??ej</a>, gdzie odby??o si?? wesele. Za opraw?? muzyczn?? tego dnia zadba?? <a href="https://www.facebook.com/zespolmelodika" target="_blank" rel="nofollow">Zesp???? Melodika</a>, natomiast filmow?? pami??tk?? tworzy?? Pan Piotr z <a href="https://www.facebook.com/video.foto.sonique" target="_blank" rel="nofollow">Sonique Video &#038; Fotografia</a>.  Po wej??ciu M??odych na sal??, obiedzie i ??yczeniach przyszed?? czas na pierwszy taniec. Parkiet zosta?? otwarty. Dzia??o si?? zdecydowanie bardzo wiele, od szalonych ta??c??w, szerokiego wachlarza zabaw weselnych po szale??stwa w <a href="https://www.facebook.com/FotobudkaWojtasa" target="_blank" rel="nofollow">fotobudce Wojtasa</a>.  Go??cie weselni zdecydowanie dopisali, a nasi tytu??owi bohaterowie mieli co ??wi??towa??. Bardzo dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i wspania???? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"alina-i-janusz-zdjecia-slubne-jordanow-dworek-fantazja"}
                    title={"ZDJ??CIA ??LUBNE JORDAN??W, DWOREK FANTAZJA - ALINA i JANUSZ"}
                    tags={"reporta?? ??lubny jordan??w,zdj??cia ??lubne restauracja dworek fantazja"}
                    date={"11 listopada 2016"}
                    menuNames={"ALINA i JANUSZ"}
                    menuTitle={"ZDJ??CIA ??LUBNE JORDAN??W, DWOREK FANTAZJA"}
                    leadNames={"KINGA i JULIEN"}
                    leadTitle={"??LUB CYWILNY i WESELE W PLENERZE - WITKOWA CHATA KRAK??W"}
                    leadUrl={"/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    leadImage={process.env.staticImagesPath + "slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
