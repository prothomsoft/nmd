import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_002.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_003.jpg", height: 852 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_004.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_006.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_007.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_008.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_010.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_011.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_012.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_013.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_016.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_017.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_018.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_019.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_020.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/sesja_poslubna_krakow_kazimierz_021.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "krakowska_sesja_poslubna_renaty_i_jacka_start.jpg"}
                    images={images}
                    headTitle={"Krakowska sesja ??lubna Renaty i Jacka"}
                    headDescription={"Wszystkich, kt??rym debata przedwyborcza podnios??a ci??nienia , serdecznie zapraszam na mojego bloga i wpis plenerowy Renaty i Jacka."}
                    headKeywords={"sesja ??lubna kazimierz,plener ??lubny w krakowie"}
                    headUrl={"https://99foto.pl/krakowska-sesja-poslubna-renaty-i-jacka"}
                    entryContentP1={
                        "Trzy dni po udanej zabawie w Pa??acu ??mi??owice spotkali??my si?? ponownie, tym razem w Krakowie na ??lubnej sesji plenerowej. Padaj??cy poniedzia??kowy ??nieg, kt??rego nikt nie spodziewa?? si?? na pocz??tku pa??dziernika przekre??li?? nasz pocz??tkowy plan na poniedzia??kowy spacer po Rynku i Kazimierzu. Pogoda we wtorek okaza??a si?? na nasze szcz????cie o niebo lepsza i szybk?? decyzj?? postanowili??my zrealizowa?? plan na sesj?? w??a??nie tego dnia. Spotkali??my si?? pod Teatrem S??owackiego."
                    }
                    entryContentP2={
                        "Po kr??tkim wprowadzeniu z pozowania, w??druj??c przez Rynek dotarli??my na Kazimierz, a?? do K??adki Bernatki. Spaceruj??c rozmawiali??my o rzeczach mniej i bardziej technicznych (bo Jacek okaza?? si?? by?? moim koleg?? po fachu). Mam nadziej??, ??e Renata i Jacek b??d?? dobrze wspomina?? ten dzie??. Mi??ego ogl??dania i po wi??cej zapraszam do strefy klienta."
                    }
                    slug={"krakowska-sesja-poslubna-renaty-i-jacka"}
                    title={"KRAKOWSKA SESJA ??LUBNA - RENATA i JACEK"}
                    tags={"sesja ??lubna kazimierz,plener ??lubny w krakowie"}
                    date={"20 pa??dziernika 2015"}
                    menuNames={"RENATA i JACEK"}
                    menuTitle={"KRAKOWSKA SESJA ??LUBNA"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
