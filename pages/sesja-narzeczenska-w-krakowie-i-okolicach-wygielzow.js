import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0001.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0010.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0002.jpg", height: 851 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0032.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0033.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0035.jpg", height: 377 },
            { imageSrc: "/static/blog/2018/07/sesja_narzeczenska_w_krakowie_0034.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow-start.jpg"}
                    images={images}
                    headTitle={"Sesja narzecze??ska w Krakowie i okolicach"}
                    headDescription={"Sesja narzecze??ska w Krakowie, Nadwi??la??ski Park Etnograficzny Wygie??z??w, Zamek Lipowiec"}
                    headKeywords={"sesja narzecze??ska w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow"}
                    entryContentP1={
                        'Magde i Damiana pozna??em rok temu. Ju?? wtedy podczas naszego pierwszego spotkania pomy??leli??my, ??e sesja narzecze??ska przed ??lubem to ??wietny pomys??.  Uda??o nam si?? znale???? czas i trafi?? odpowiedni?? pogod??, wi??c spontanicznie um??wili??my si?? na zdj??cia. ??eby dotrze?? do miejsca naszego pleneru trzeba min???? Zalew w Kryspinowie, Kasztel Kajas??wka, Cztery Pory Roku by jad??c dalej w stron?? O??wi??cimia w ko??cu trafi?? do <a href="https://mnpe.pl/" target="_blank" rel="nofollow">Nadwi??la??skiego Parku Etnograficznego</a> w Wygie??zowie. Miejsce to jest szczeg??lne dla Magdy i Damiana poniewa?? ju?? pod koniec wrze??nia tego roku w Ko??ciele z Ryczowa, kt??ry jest cz????ci?? skansenu wypowiedz?? sakramentalne TAK. Na naszej sesji narzecze??skiej nie brakowa??o ??wietnego ??wiat??a, kt??re to malowa??o wszystko ciep??ymi barwami.'
                    }
                    entryContentP2={
                        "W??dkowanie pasja Damiana zaprowadzi??y nas nad pi??kne jezioro, gdzie w ciszy i spokoju mo??na by??o podziwia?? widok k??ad??cego si?? na tafli wody s??o??ca, smakuj??c czerwone p????wytrawne winko. Ostatnie promienie zachodz??cego s??o??ca ogl??dali??my w okolicach Chrzanowa wdrapuj??c si?? na po??o??ony w tej okolicy punkt widokowy. Magda nie tylko rewelacyjnie wygl??da??a, ale r??wnie?? mega profesjonalnie pozowa??a do zdj????. Pami??tajcie, ??e sesja narzecze??ska w Krakowie lub najbli??szych okolicach to nie strata czasu, ale ??wietna okazja na mile sp??dzone chwile i kilka pami??tkowych zdj????. Life isn't perfect but it has perfect moments... Poznajcie Magd?? i Damiana, kt??rzy na pewno na moim blogu pojawi?? si?? ponownie ju?? wkr??tce. Mi??ego ogl??dania."
                    }
                    slug={"sesja-narzeczenska-w-krakowie-i-okolicach-wygielzow"}
                    title={"SESJA NARZECZE??SKA W KRAKOWIE ??? WYGIE??Z??W - MAGDALENA I DAMIAN"}
                    tags={"Sesja narzecze??ska w Krakowie, Nadwi??la??ski Park Etnograficzny Wygie??z??w, Zamek Lipowiec"}
                    date={"9 lipca 2018"}
                    menuNames={"MAGDALENA i DAMIAN"}
                    menuTitle={"SESJA NARZECZE??SKA W KRAKOWIE ??? WYGIE??Z??W"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ??LUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
