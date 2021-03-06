import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/09/natalia.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0009.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0015.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0020.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0023.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0031.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0038.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0040.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0042.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0048.jpg", height: 439 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0049.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0064.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0066.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0078.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0084.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0089.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0098.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0104.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0121.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0127.jpg", height: 764 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0131.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0140.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0143.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0144.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0151.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0153.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0156.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0157.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0158.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0159.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_slubny_krakow_0160.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "natalia_marcin_i_maja_reportaz_slubny_gosciniec_branicki_start.jpg"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Go??ciniec Branicki, Krak??w"}
                    headDescription={"Krak??w Nowa Huta, Wzg??rza Krzes??awickie i Branice, miejsca kt??re odwiedzi??em fotografuj??c ??lub Natalii i Marcina. Du??o, du??o fajnych kadr??w."}
                    headKeywords={"reporta?? ??lubny krak??w,zdj??cia ??lubne go??ciniec branicki"}
                    headUrl={"https://99foto.pl/natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki"}
                    entryContentP1={
                        'Krak??w Nowa Huta, Wzg??rza Krzes??awickie i Branice, miejsca te mog??em odwiedzi?? fotografuj??c wa??ny dzie?? w ??yciu Natalii, Marcina i ich ma??ej c??reczki Mai. Przygotowania rozpocz??li??my ju?? przed po??udniem. Wiza??ystka w pierwszej kolejno??ci zaj????a si?? fryzurami i makija??em druhen Karoliny i Moniki.  Kiedy dziewczyny potwierdzi??y, ??e wygl??daj?? ??wietnie w fotelu usiad??a Natalia. Maja, przychodz??c co kilka minut, sprawdza??a czy fryzura i makija?? mamy s?? ju?? gotowe. Po godzinie uk??adania i malowania nadszed?? czas na ubieranie sukni ??lubnej, a nast??pnie na pe??ne wzrusze?? b??ogos??awie??stwo. W ??wietnych humorach wyruszyli??my do <a href="https://www.wzgorza.diecezja.krakow.pl/" target="_blank" rel="nofollow">Ko??cio??a Mi??osierdzia Bo??ego w Krakowie na Wzg??rzach Krzes??awickich</a>.'
                    }
                    entryContentP2={
                        'Ksi??dz przywita?? Natali?? i Marcina w zachrystii, udzieli?? kilku rad i rozpocz????a si?? wzruszaj??ca ceremonia, podczas kt??rej m??odzi wypowiedzieli sakramentalne TAK. Przywitanie chlebem i sol?? oraz ??yczenia odby??y si?? w <a href="https://gosciniec-branicki.pl" target="_blank" rel="nofollow">Domu Weselnym Go??ciniec Branicki</a>. Kieliszki z szampanem uleg??y planowanemu zniszczeniu gwarantuj??c du??o szcz????cia w przysz??o??ci. Po obiedzie m??odzi zata??czyli pierwszy taniec i zaprosili go??ci do wsp??lnej zabawy. ??wietny klimat, szalona zabawa i weso??a ekipa. <a href="https://www.planujemywesele.pl/35133-zespol-muzyczny-prospect" target="_blank" rel="nofollow">Zesp???? Muzyczny Prospect</a> dba?? o frekwencj?? na parkiecie do bia??ego rana. Wielkie, wielkie dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i genialn?? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki"}
                    title={"REPORTA?? ??LUBNY GO??CINIEC BRANICKI - NATALIA, MARCIN i MAJA"}
                    tags={"reporta?? ??lubny krak??w,zdj??cia ??lubne go??ciniec branicki"}
                    date={"29 wrze??nia 2016"}
                    menuNames={"NATALIA, MARCIN i MAJA"}
                    menuTitle={"REPORTA?? ??LUBNY GO??CINIEC BRANICKI"}
                    leadNames={"JULITA i PAWE??"}
                    leadTitle={"REPORTA?? ??LUBNY KO??CI???? NA SKA??CE KRAK??W"}
                    leadUrl={"/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow"}
                    leadImage={process.env.staticImagesPath + "julita_i_pawel_reportaz_slubny_kosciol_na_skalce_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
