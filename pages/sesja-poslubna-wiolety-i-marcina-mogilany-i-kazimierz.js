import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0001.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0004.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0009.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0016.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/sesja_poslubna_mogilany_kazimierz_krakow_0027.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_poslubna_wiolety_i_marcina_mogilany_i_kazimierz_start.jpg"}
                    images={images}
                    headTitle={"Sesja ??lubna Wiolety i Marcina - Mogilany Kazimierz"}
                    headDescription={"Mega wpis pi??knej pary Wiolety i Marcina. Zdj??cia zrobili??my w parku Mogilanach i na Krakowskim Kazimierzu. Zapraszam do ogl??dania !!!"}
                    headKeywords={"sesja ??lubna krak??w,plener ??lubny krak??w"}
                    headUrl={"https://99foto.pl/sesja-poslubna-wiolety-i-marcina-mogilany-i-kazimierz"}
                    entryContentP1={
                        'Z Wiolet?? i Marcinem spotkali??my si?? ju?? w ich <a href="https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj" target="_blank" rel="nofollow">reporta??owym wpisie</a>, dzisiaj przyszed?? czas na plener! Obiecuj??co wygl??daj??ca alejka drzew w po??o??onym niedaleko Krakowa Parku w Mogilanach oraz du??a ilo???? bezcennego podczas s??onecznej pogody cienia, przekona??y nas do odwiedzenia tego miejsca i wykonania w??a??nie tam sesji ??lubnej.'
                    }
                    entryContentP2={
                        'Po dw??ch godzinach w parku przenie??li??my si?? w miejskie klimaty odwiedzaj??c Kazimierz w okolicach obleganej przez turyst??w K??adki Bernatki. W trakcie spaceru odwiedzili??my te?? <a href="https://www.starazajezdniakrakow.pl/" target="_blank" rel="nofollow">Star?? Zajezdni??</a> i <a href="https://www.studioqulinarne.pl/" target="_blank" rel="nofollow">Studio Kulinarne</a> &#8211; oba miejsca &#8222;image friendly&#8221;. Kilka plenerowych godzin sp??dzili??my w bardzo mi??ej atmosferze i ciekawych rozmowach na r????ne tematy. Wioli i Marcinowi dzi??kuj?? za wsp????prac?? i zapraszam na kilka klatek z tego pleneru. Wi??cej zdj???? jak zwykle w strefie klienta po wpisaniu has??a z mojej wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-poslubna-wiolety-i-marcina-mogilany-i-kazimierz"}
                    title={"SESJA ??LUBNA PARK W MOGILANACH i KAZIMIERZ - WIOLETA i MARCIN"}
                    tags={"sesja ??lubna krak??w,plener ??lubny krak??w"}
                    date={"15 czerwca 2015"}
                    menuNames={"WIOLETA i MARCIN"}
                    menuTitle={"SESJA ??LUBNA PARK W MOGILANACH i KAZIMIERZ"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
