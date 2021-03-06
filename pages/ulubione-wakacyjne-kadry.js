import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0000.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0002.jpg", height: 790 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2014/09/ulubione_wakacyjne_kadry_0038.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "ulubione_wakacyjne_kadry_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia rodzinne Krak??w"}
                    headDescription={"Kilka zdj???? z wakacji, na kt??re w tym roku udali??my si?? do Wroc??awia. Pi??kne miasto i m??j ulubiony Ostr??w Tumski oraz Ogr??d Japo??ski. Mi??ego ogl??dania."}
                    headKeywords={"fotograf rodzinny krak??w, zdj??cia z wakacji"}
                    headUrl={"https://99foto.pl/ulubione-wakacyjne-kadry"}
                    entryContentP1={
                        "Pierwszy etap naszej wyprawy to Wroc??aw. Przez moment mieli??my ju?? nie jecha?? dalej, gdy?? wujek zorganizowa?? pla???? w pokoju jadalnym &#8211; by?? namiot, woda i nawet s??o??ce. Misio zmieni?? fryzur??, a my zwiedzili??my Hal?? Ludow??, gdzie trwa??y przygotowania do koncertu M??skie Granie, Politechnik?? i Plac Grunwaldzki. Pierwszy przystanek kolejnego etapu podr????y to Malta (ta w Poznaniu). Dalej pojechali??my na Stare Drawsko podziwia?? jeziora, kt??re wcze??niej ogl??da??em na google i zapowiada??y si?? very nice. Do D??bek wjechali??my o 19:30 prosto na pla???? i prosto na zach??d s??o??ca."
                    }
                    entryContentP2={
                        "Natomiast po ponad tygodniu poza domem, wyruszyli??my lizn???? wisienki na torcie, wydarzenia roku, ??lubu Karoliny i Marka z wielk?? czekoladow?? fontann??. Po drodze, zatrzymali??my si?? w Borsku w restauracji Largo po??o??onej nad brzegiem jeziora w lesie pe??nym grzyb??w i prostych jak drut drzew. Wzruszenia, Micha?? ??wieczki w oczach non stop, du??o dobrej zabawy i dobrego mas??a z pierwszej r??ki. I to ju?? wszystkie zdj??cia z wakacji, dopiero za rok b??dzie wi??cej. Mi??ego ogl??dania."
                    }
                    slug={"ulubione-wakacyjne-kadry"}
                    title={"ULUBIONE WAKACYJNE KADRY - MICHA?? i MARTUSIA"}
                    tags={"fotograf rodzinny krak??w, zdj??cia z wakacji"}
                    date={"3 listopada 2017"}
                    menuNames={"MICHA?? i MARTUSIA"}
                    menuTitle={"ULUBIONE WAKACYJNE KADRY"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
