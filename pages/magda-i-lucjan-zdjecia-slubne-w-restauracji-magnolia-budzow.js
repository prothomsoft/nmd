import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0014.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0016.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0039.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0047.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0090.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/restauracja_magnolia_budzow_0125.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "magda_i_lucjan_zdjecia_slubne_w_restauracji_magnolia_budzow_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Restauracja Magnolia Budz??w"}
                    headDescription={"W niedzielne deszczowe popo??udnie zapraszam na nowy wpis na moim blogu. Tym razem historia ??lubna Magdy mamy Kacpra i Lucjana kibica Wis??y Krak??w."}
                    headKeywords={"zdj??cia ??lubne restauracja magnolia budz??w,fotograf na wesele stronie,fotograf na ??lub zakrz??w"}
                    headUrl={"https://99foto.pl/magda-i-lucjan-zdjecia-slubne-w-restauracji-magnolia-budzow"}
                    entryContentP1={
                        'Magd??, Kacpra i Lucjana mieli??cie okazj?? ju?? pozna?? podczas sesji, kt??r?? wykonali??my w Ogrodzie Botanicznym w Krakowie. Dzisiaj cz?????? druga naszej wsp??lnej przygody, a nied??ugo b??dzie te?? i trzecia. Ten oto najwa??niejszy dzie?? rozpocz??li??my w Wadowicach, gdzie <a href="https://www.facebook.com/pages/Lena-Czechowicz-Make-up-Fun/416942605060114" target="_blank" rel="nofollow">Lena Czechowicz</a> wykona??a mistrzowski makija??. Przygotowania do ??lubu i b??ogos??awie??stwo mia??o miejsce w Stroniu, w domu rodzinnym Lucjana. Dalej pierwsza brama, na kt??rej Lucjana zaskoczyli klubowi koledzy. By??y race, ??piewy oraz celny strza?? do bramki.'
                    }
                    entryContentP2={
                        'Ksi??dz z u??miechem na ustach przeprowadzi?? m??odych przez ceremoni?? i wkr??tce potem znale??li??my si?? w <a href="https://magnolia-restauracja.pl/" target="blank">Restauracji Magnolia</a> w miejscowo??ci Budz??w. Zesp???? muzyczny z Rzeszowa dawa?? rad?? i parkiet zape??nia?? si?? bardzo szybko. Humory dopisywa??y, co jak my??l?? uda??o si?? te?? uwieczni?? na zdj??ciach. Pozdrowienia dla Wszystkich go??ci i mi??ego ogl??dania. Pami??tajcie, ??e wi??cej zdj???? znajdziecie w strefie klienta ??? o has??o pytajcie Magd?? lub Lucjana.'
                    }
                    slug={"magda-i-lucjan-zdjecia-slubne-w-restauracji-magnolia-budzow"}
                    title={"ZDJ??CIA ??LUBNE W RESTAURACJI MAGNOLIA BUDZ??W - MAGDA i LUCJAN"}
                    tags={"zdj??cia ??lubne restauracja magnolia budz??w,fotograf na wesele stronie,fotograf na ??lub zakrz??w"}
                    date={"28 czerwca 2015"}
                    menuNames={"MAGDA i LUCJAN"}
                    menuTitle={"ZDJ??CIA ??LUBNE W RESTAURACJI MAGNOLIA BUDZ??W"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
