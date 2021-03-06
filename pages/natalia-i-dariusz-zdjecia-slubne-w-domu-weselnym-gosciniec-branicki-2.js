import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0017.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0019.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0022.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0025.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0027.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0039.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0040.jpg", height: 850 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0042.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0051.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0055.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0072.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0074.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0076.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0080.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0086.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0094.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0095.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0097.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0102.jpg", height: 850 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_goscieniec_branicki_krakow_0107.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "natalia_i_dariusz_zdjecia_slubne_w_domu_weselnym_gosciniec_branicki_2_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne w Domu weselnym Go??ciniec Branicki"}
                    headDescription={"Serdecznie zapraszam na otwarcie sezonu 2k16 do Domu weselnego Go??ciniec Branicki na wspania??y ??lub Natalii i Darka. Du??o fajnego dzia??o si?? tego dnia."}
                    headKeywords={"zdj??cia ??lubne go??ciniec branicki, fotograf na wesele krak??w, reporta?? ??lubny krak??w"}
                    headUrl={"https://99foto.pl/natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2"}
                    entryContentP1={
                        'Po??owa kwietnia i niezwykle udany pocz??tek nowego sezonu ??lubnego. Wszystko to dzi??ki Natalii i Darkowi, kt??rzy w ubieg???? sobot?? powiedzieli sobie TAK. Tego dnia wsta??em i wiedzia??em, ??e b??dzie to wspania??y dzie??. Przygotowania zacz??li??my od zaledwie podkre??lenia urody Natalii w jej domu rodzinnym. ??adnych oznak stresu, ??wietny humor i u??miech na twarzy. Darek przyjecha?? planowo, a razem z nim przybyli jego rodzice. Ropocz????o si?? b??ogos??awie??stwo po kt??rym udali??my si?? do <a href="https://www.wzgorza.diecezja.krakow.pl" target="_blank" rel="nofollow">Ko??cio??a Mi??osierdzia Bo??ego na Wzg??rzach Krzes??awickich</a>, gdzie odby?? si?? ??lub.'
                    }
                    entryContentP2={
                        'Pomimo wynios??ej atmosfery i ca??ej powagi sytuacji, u??miech??w nie zabrak??o. Po ??yczeniach i zdj??ciu grupowym udali??my si?? na sal?? weseln?? w <a href="https://gosciniec-branicki.pl/" target="_blank" rel="nofollow">Domu weselnym &#8211; Go??cieniec Branicki</a>, gdzie na m??odych czekali ju?? rodzice, witaj??c ich chlebem i sol??. Wesele&#8230; istne szale??stwo, od pierwszych utwor??w. Doskona??a ekipa, wspaniali go??cie, naprawd?? rewelacyjny wiecz??r, kt??ry chyba nie tylko ja wspominam najlepiej. Bardzo dzi??kuj?? Natalii i Darkowi, za to, ??e mog??em towarzyszy?? im w tym szczeg??lnym dniu, naprawd?? by??a to dla mnie przyjemno????. Na szcz????cie to nie koniec przyg??d i czeka nas jeszcze sesja plenerowa&#8230; Tymczasem zapraszam na reporta?? i do strefy klienta po wi??cej zdj???? z tego dnia!'
                    }
                    slug={"natalia-i-dariusz-zdjecia-slubne-w-domu-weselnym-gosciniec-branicki-2"}
                    title={"ZDJ??CIA ??LUBNE W DOMU WESELNYM GO??CINIEC BRANICKI - NATALIA i DAREK"}
                    tags={"zdj??cia ??lubne go??ciniec branicki, fotograf na wesele krak??w, reporta?? ??lubny krak??w"}
                    date={"21 kwietnia 2016"}
                    menuNames={"NATALIA i DAREK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W DOMU WESELNYM GO??CINIEC BRANICKI"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
