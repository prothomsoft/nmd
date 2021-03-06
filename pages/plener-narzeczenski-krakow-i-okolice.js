import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0002.jpg", height: 851 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0004.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0006.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0011.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0013.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0016.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0017.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0022.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/plener_narzeczenski_krakow_i_okolice_0023.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "plener_narzeczenski_krakow_i_okolice_start.jpg"}
                    images={images}
                    headTitle={"Plener narzecze??ski Krak??w"}
                    headDescription={"Plener narzecze??ski staje si?? integraln?? cze??ci?? planowanego ??lubu. Serdecznie zapraszam na zdj??cia Aliny i Micha??a, kt??rzy zabrali ze sob?? Bruna."}
                    headKeywords={"plener narzecze??ski krak??w,sesja narzecze??ska ojc??w"}
                    headUrl={"https://99foto.pl/plener-narzeczenski-krakow-i-okolice"}
                    entryContentP1={
                        "Plener narzecze??ski bardzo cz??sto staje si?? integraln?? cze??ci?? planowanego ??lubu. Spotkanie z fotografem przed ??lubem pozwala oswoi?? si?? z aparatem i zdoby?? troch?? do??wiadczenia w pozowaniu przed obiektywem. Sesja narzecze????ka jest te?? ??wietn?? okazj?? do poznania fotografa jako cz??owieka, prze??amania pierwszych lod??w w tej znajomo??ci. Osobi??cie mo??ecie przekona?? si?? w jakiej atmosferze powsta?? b??d?? Wasze zdj??cia ??lubne, a obecno???? fotografa w Waszym domu nie b??dzie stresuj??ca, poniewa?? b??dzie to osoba, kt??r?? mieli??cie okazj?? pozna?? osobi??cie."
                    }
                    entryContentP2={
                        'Zdj??cia w plenerze s?? okazj?? do pokazanie innej strony Waszego zwi??zku. Mo??ecie zabra?? ze sob?? psa tak jak zrobili to Alina i Micha??, gitar?? i zapali?? ognisko, lista pomys????w jest nieograniczona. Sesja narzecze??ska mo??e mie?? miejsce w mie??cie, w lesie, w domu, w parku ??? wszystko zale??y od Waszych preferencji. Zdj??cia, kt??re s?? wynikiem sesji mog?? by?? pomocne przy przygotowywaniu zaprosze?? ??lubnych lub dekoracji sali. Mog?? te?? by?? super dodatkiem do prezentu dla rodzic??w. Bardzo cz??sto jedno ze zdj???? sesji narzecze??skiej staje si?? zdj??ciem profilowym na Facebook czy Google+. Sesja narzecze??ska jest tylko dla Was i w??a??nie z tego powodu jest wyj??tkowa. Mam nadziej??, ??e Was przekona??em, a tymczasem zapraszam na zdj??cia Aliny, Micha??a i Bruna, kt??re zrobili??my w jedno s??oneczne popo??udnie w <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamku Korzkiew</a> i <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Pieskowej Skale</a>. Mi??ego ogl??dania.'
                    }
                    slug={"plener-narzeczenski-krakow-i-okolice"}
                    title={"PLENER NARZECZE??SKI KRAK??W I OKOLICE - ALINA, MICHA?? i RUDI"}
                    tags={"plener narzecze??ski krak??w,sesja narzecze??ska ojc??w"}
                    date={"7 sierpnia 2017"}
                    menuNames={"ALINA, MICHA?? i RUDI"}
                    menuTitle={"PLENER NARZECZE??SKI KRAK??W i OKOLICE"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZ????TOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={process.env.staticImagesPath + "wesele_na_polu_golfowym_w_paczoltowicach_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
