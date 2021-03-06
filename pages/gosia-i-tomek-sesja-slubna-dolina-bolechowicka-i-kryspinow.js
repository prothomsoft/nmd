import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0003.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0006.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0008.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0013.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0014.jpg", height: 804 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0016.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0018.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0020.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0023.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/plener_slubny_krakow_0025.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "gosia_i_tomek_sesja_slubna_dolina_bolechowicka_i_kryspinow_start.jpg"}
                    images={images}
                    headTitle={"Sesja ??lubna Dolina Bolechowicka i Kryspin??w"}
                    headDescription={"Serdecznie zapraszam do Doliny Bolechowickiej i Kryspinowa. Gdyby kto?? poszukiwa?? miejsc na weekendowy spacer to polecam zajrze??. Mi??ego ogl??dania."}
                    headKeywords={"sesja ??lubna krak??w,plener ??lubny kryspin??w"}
                    headUrl={"https://99foto.pl/gosia-i-tomek-sesja-slubna-dolina-bolechowicka-i-kryspinow"}
                    entryContentP1={
                        "Wiele m??odych par my??li, ??e zrobienie fajnych zdj???? do sesji ??lubnej wymaga wyjazdu z Krakowa i okolic, pozostawienia za sob?? mi??c oklepanych i nowe poszukiwania. Mam nadziej??, ??e po raz kolejny razem z Gosi?? i Tomkiem udowodnimy, ??e to nie prawda. Gosia mieszka w Bolechowicach i doskonale zna okolic??, Dolina Bolechowicka to te?? wspomnienia, chocia??by d??ugie treningi pierwszego ta??ca z Tomkiem, dlatego te?? zdecydowali??my si?? rozpocz???? zdj??cia w tym miejscu. W Dolinie Bolechowickiej doszli??my do wodospadu, co w sukni ??lubnej by??o do???? trudne."
                    }
                    entryContentP2={
                        "Nast??pnie poniewa?? do zachodu s??o??ca w Kryspinowie czasu by??o jeszcze troch?? wybrali??my si?? na punkt widokowy w Karniowicach. Widok na panoram?? Krakowa i chyl??ce si?? ju?? ku zachodowi s??o??ce, sprzyja??o zdj??ciom. Ostanim punktem pleneru by?? Kryspin??w, kt??ry zaskoczy?? mnie nowym pomostem. Gosia pomog??a graj??cym w siatk??wk?? zaserwowa??, poprzytula??a si?? do Tomka na piasku i w promieniach zach??dz??cego s??o??ca. Czas szybko nam min????, bo wszystko co dobre szybko si?? ko??czy. Mi??ego ogl??dania."
                    }
                    slug={"gosia-i-tomek-sesja-slubna-dolina-bolechowicka-i-kryspinow"}
                    title={"SESJA ??LUBNA DOLINA BOLECHOWICKA i KRYSPIN??W - GOSIA i TOMEK"}
                    tags={"sesja ??lubna krak??w,plener ??lubny kryspin??w"}
                    date={"5 lipca 2016"}
                    menuNames={"GOSIA i TOMEK"}
                    menuTitle={"SESJA ??LUBNA DOLINA BOLECHOWICKA i KRYSPIN??W"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
