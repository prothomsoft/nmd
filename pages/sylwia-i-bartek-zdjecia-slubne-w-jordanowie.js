import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0005.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0007.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0009.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0014.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0019.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0021.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0024.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0034.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0039.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0042.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0046.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0050.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0057.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0060.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0062.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0065.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0069.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0073.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0074.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0080.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0085.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0087.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0091.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0093.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0095.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0105.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0109.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0111.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0113.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0119.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0124.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0129.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_na_wesele_krakow_0104.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sylwia_i_bartek_zdjecia_slubne_w_jordanowie_start.jpg"}
                    images={images}
                    headTitle={"Fotograf ??lubny Jordan??w ?????? Tomasz Prokop Fotograf ??lubny"}
                    headDescription={"Twarz Marilyn Monroe podpisan?? Dzi??kuj??, ??e jeste?? w dalekim Trondheim wyklika?? Bartek dla ukochanej Sylwii. Kilka ??ez polecia??o... Zapraszam na reporta??."}
                    headKeywords={"fotograf na wesele krak??w,reporta?? ??lubny krak??w,zdj??cia ??lubne dom weselny karolinka"}
                    headUrl={"https://99foto.pl/sylwia-i-bartek-zdjecia-slubne-w-jordanowie"}
                    entryContentP1={
                        "W Jordanowie fotografowa??em ju?? kilka razy. Zawsze spotykam si?? tam z niezwyk???? otwarto??ci?? ludzi i podziwiam ich umiej??tno???? odstresowania i oddania si?? szalonej zabawie. Tym razem nie mog??o by?? inaczej &#8211; udowodnili to Sylwia i Bartek. Przygotowania odby??y si?? w domu rodzinnym Sylwii. Panna m??oda zastosowa??a jedno z moich ulubionych powiedze?? &#8211; je??li chcesz co?? mie?? zrobione dobrze, zr??b to sam &#8211; i jako znana ju?? w okolicach Trondheim wiza??ystka makija?? wykona??a samodzielnie. Mocno trzymali??my kciuki za pogod??, kt??ra pewnie dlatego wytrzyma??a do samego ko??ca. Uda??o mi si?? te?? tym razem zrobi?? jedno z moich ulubionych zdj???? z przygotowa?? Pana M??odego. Ciekawe czy ogl??daj??c reporta?? zgadniecie, kt??re to zdj??cie."
                    }
                    entryContentP2={
                        "Po rodzinnym b??ogos??awie??stwie udali??my si?? do ko??cio??a ??wi??tej Siostry Faustyny Kowalskiej w Naprawie, gdzie wys??uchali??my pi??knie przygotowanego kazania. W trakcie ceremonii zesp???? specjalny, na zam??wienie te?? specjalne, zmontowa?? zestaw nag??o??nieniowy i us??yszeli??my piosenk?? Elvisa. ??apy m??odych posz??y w g??r?? w ge??cie YEAH !!! Nast??pnie udali??my si?? do pi??knej sali w Domu Weselnym Karolinka w Bystrej Podhala??skiej. Sylwia i Bartek otworzyli parkiet w pi??knym stylu i towarzystwie najm??odszych go??ci, a po ich pierwszym ta??cu zacz????y si?? taneczne szale??stwa.  Zabawa by??a przednia. Przed p????noc?? Bartek przygotowa?? specjaln?? niespodziank?? &#8211; obraz Marylin Monroe z napisem &#8222;Dzi??kuj??, ??e jeste??&#8221;. Wr??czenie tej pami??tki poprzedzone prezentacj?? filmow?? jak to arcydzie??o powstawa??o wycisn????o kilka ??ez z oczu zebranych go??ci. Nie zabrak??o te?? podzi??kowania dla rodzic??w. To by?? zdecydowanie pi??kny dzie??! Zapraszam do obejrzenia historii Sylwii i Bartka, a po wi??cej zdj???? do strefy klienta z has??em z mojej wizyt??wki."
                    }
                    slug={"sylwia-i-bartek-zdjecia-slubne-w-jordanowie"}
                    title={"ZDJ??CIA ??LUBNE W JORDANOWIE - SYLWIA i BARTEK"}
                    tags={"fotograf na wesele krak??w,reporta?? ??lubny krak??w,zdj??cia ??lubne dom weselny karolinka"}
                    date={"3 czerwca 2016"}
                    menuNames={"SYLWIA i BARTEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W JORDANOWIE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
