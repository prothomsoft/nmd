import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
    let images = [
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_001.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_002.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_003.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_020.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_012.jpg", height: 851 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_008.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_016.jpg", height: 805 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_006.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_024.jpg", height: 594 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_011.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_014.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_017.jpg", height: 526 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_018.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_015.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_023.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_009.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_022.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_005.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_004.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_007.jpg", height: 763 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_013.jpg", height: 762 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_021.jpg", height: 527 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_019.jpg", height: 762 },
        { imageSrc: "/static/blog/2021/03/palac_goetz_sesja_slubna_010.jpg", height: 763 },
    ];

    return (
        <BlogPageComponentNew
            slide={process.env.staticImagesPath + "sesja_slubna_palac_goetza.jpg"}
            images={images}
            headTitle={"Pa??ac Goetz, miejsce na wesele i plener ??lubny marze??"}
            headDescription={"Zapraszam Was do Brzeska. Pa??ac Goetz, miejsce na eleganckie wesele i plener ??lubny marze??. Serdecznie zapraszam na bloga..."}
            headKeywords={"Pa??ac Goetz Brzesko, eleganckie wesele w pa??acu, plener ??lubny marze??"}
            headUrl={"https://99foto.pl/palac-goetz-wesele-plener-slubny"}
            entryContentP1={
                "Zapraszam Was do Brzeska. Pa??ac Goetz to miejsce niecodzienne i idealne na plener ??lubny. Nie wiem czy filantrop i mecenas sztuki Albin Goetz planowa??, ??e wzniesiony przez niego okaza??y pa??ac w przysz??o??ci b??dzie pe??ni?? rol?? liceum og??lnokszta??c??cego, doprowadzony do ruiny przetrwa trudne czasy i w ko??cu odzyska dawny blask, staj??c si?? miejscem idealnym na wesele czy plener ??lubny. Jest to bez w??tpienie jedno z najbardziej popularnych miejsc plenerowych w Ma??opolsce. Koszt zwi??zany z mo??liwo??ci?? wykonania zdj???? ??lubnych w pa??acu gwarantuje wzgl??dny spok??j tego miejsca. Gdyby nie to kolejka ch??tnych do zdj???? par m??odych i towarzysz??cych im fotograf??w ??lubnych by??aby nie kr??tsza od tej na Kasprowy Wierch w Zakopanem."
            }
            entryContentP2={
                "Pa??ac Goetz jest miejscem niezwyk??ym. Znajdziemy tam nie tylko monumentalne schody, ale te?? wytworn?? czytelni?? wykorzystywan?? w produkcjach filmowych, przepi??kny ogr??d i kaplic??, w kt??rej ka??dego roku kilka par m??odych przyrzeka sobie mi??o???? na zawsze. Sesja ??lubna, kt??r?? za moment obejrzycie spe??nia marzenia Anny i Paw??a. Przegl??daj??c internet trafili oni na mojego bloga i jeden z wpis??w o sesji ??lubnej w Pa??acu Goetz. Pomimo, ??e nie fotografowa??em ich ??lubu blogowe zdj??cia podpowiedzia??y im, ??e dam rad?? i zatrzymamy czas na ponadczasowych fotografiach. Serdecznie zapraszam na kilka zdj???? z tego pleneru i jak zwykle ??ycz?? mi??ego ogl??dania."
            }
            slug={"palac-goetz-wesele-plener-slubny"}
            title={"PA??AC GOETZ MIEJSCE NA WESELE i PLENER ??LUBNY MARZE?? - ANNA i PAWE??"}
            tags={"Pa??ac Goetz Brzesko, eleganckie wesele w pa??acu, plener ??lubny marze??"}
            date={"14 marca 2021"}
            menuNames={"ANNA i PAWE??"}
            menuTitle={"PA??AC GOETZ MIEJSCE NA WESELE i PLENER ??LUBNY MARZE??"}
            leadNames={"TERESA i ANDRZEJ"}
            leadTitle={"PLENER ??LUBNY W KRAKOWSKIM OGRODZIE BOTANICZNYM"}
            leadUrl={"/plener-slubny-w-krakowskim-ogrodzie-botanicznym"}
            leadImage={process.env.staticImagesPath + "plener_slubny_krakowski_ogrod_botaniczny.jpg"}
        />
    );
};

export default BlogPageComponent;
