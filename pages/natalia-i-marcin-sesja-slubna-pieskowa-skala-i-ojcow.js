import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0001.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0003.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0005.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0007.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0009.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0010.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0011.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0014.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0020.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0018.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/sesja_slubna_pieskowa_skala_ojcow_0021.jpg", height: 851 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "natalia_i_marcin_sesja_slubna_pieskowa_skala_i_ojcow_start.jpg"}
                    images={images}
                    headTitle={"Sesja ??lubna Pieskowa Ska??a i Ojc??w"}
                    headDescription={"Kolejna ods??ona pi??knej jesieni. Tym razem w imieniu Natalii i Marcina zapraszam do Pieskowej Ska??y i Ojcowa."}
                    headKeywords={"sesja ??lubna pieskowa ska??a,plener ojc??w"}
                    headUrl={"https://99foto.pl/natalia-i-marcin-sesja-slubna-pieskowa-skala-i-ojcow"}
                    entryContentP1={
                        "Od ??lubu Natalii i Marcina min????o ju?? troch?? czasu. Mo??na by??oby powiedzie??, ??e d??ugo czekali??my na r????nokolorowe li??cie i jesienn?? aur?? w Ojcowskim Parku Narodowym i Pieskowej Skale, jednak nie by??aby to stuprocentowa prawda. Jak si?? pewnie domy??lacie powstrzyma??a nas jesienna pogoda, kt??ra opr??cz deszczu serwowa??a temperatur?? zwykle poni??ej 10 kresek na termometrze. Ale w ko??cu prognozy sprawdzi??y si?? i w mo??e nie najbardziej s??oneczny, ale bezdeszczowy i ciep??y dzie?? wybrali??my si?? w zaplanowane miejsce."
                    }
                    entryContentP2={
                        "Pracowali??my razem z Przemkiem, filmowcem na ??lubie Natalii i Marcina, kt??ry pracowicie zbiera?? materia??y na teledysk ??lubny. Marcin pozowa?? z wrodzonym luzem, a Natalia dzielnie pokonywa??a trudno??ci w terenie ze szpilkami w r??kach. Bardzo udany dzie??, po kt??rym po raz kolejny stwierdzam, ??e Pieskowa Ska??a to ??wietne miejsce na plener ??lubny. Mi??ego ogl??dania."
                    }
                    slug={"natalia-i-marcin-sesja-slubna-pieskowa-skala-i-ojcow"}
                    title={"SESJA ??LUBNA PIESKOWA SKA??A I OJC??W - NATALIA i MARCIN"}
                    tags={"sesja ??lubna pieskowa ska??a,plener ojc??w"}
                    date={"31 pa??dziernika 2016"}
                    menuNames={"NATALIA i MARCIN"}
                    menuTitle={"SESJA ??LUBNA PIESKOWA SKA??A I OJC??W"}
                    leadNames={"SABINA i WIESIEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE DWOREK FANTAZJA SKOMIELNA BIA??A"}
                    leadUrl={"/sabina-i-wiesiek-zdjecia-slubne-dworek-fantazja-skomielna-biala"}
                    leadImage={process.env.staticImagesPath + "sabina_i_wiesiek_zdjecia_slubne_dworek_fantazja_skomielna_biala_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
