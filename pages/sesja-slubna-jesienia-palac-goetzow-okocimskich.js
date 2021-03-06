import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0027.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0010.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0017.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0021.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0023.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0005.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0037.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sesja_slubna_jesienia_palac_goetzow_okocimskich_0026.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_slubna_jesienia.jpg"}
                    images={images}
                    headTitle={"Sesja ??lubna jesieni??, Pa??ac Goetz??w Okocimskich"}
                    headDescription={"Sesj?? ??lubn?? Izy i Arka zaplanowali??my w Gabinecie Kurii Metropolitarnej w Krakowie, gdzie kilka miesi??cy wcze??niej urz??dowa?? Janusz Gajos. Zapraszam na bloga."}
                    headKeywords={"pa??ac goetz??w okocimskich, plener ??lubny pomys??y, sesja ??lubna krak??w gdzie, sesja ??lubna jesieni??"}
                    headUrl={"https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    entryContentP1={
                        'Ostatnio g??o??no o filmie "KLER" Wojciecha Smarzowskiego. Je??eli widzieli??cie film lub jego zapowied?? to pewnie pami??tacie ??wietn?? rol?? Janusza Gajosa, kt??ry w roli biskupa urz??duje w gabinecie Kurii Metropolitarnej w Krakowie. ??eby nie by??o nudno plener ??lubny Izy i Arka rozpocz??li??my dok??adnie w tym samym miejscu, pi??knej pa??acowej bibliotece Pa??acu Goetz??w w Brzesku. <a href="https://www.palacgoetz.pl/" target="_blank" rel="nofollow">Pa??ac Goetz??w Okocimskich w Brzesku</a> to jeden z cenniejszych zabytk??w Ma??opolski. Obiekt wybudowany przez Jana Albina Goetza od 2008 roku sta?? si?? w??asno??ci?? prywatn?? i jak si?? mo??na domy??li?? wygenerowa??o to sporo pozytywnych zmian.  Miejsce to na co dzie?? zamkni??te dla zwiedzaj??cych, okazjonalnie udost??pniane na potrzeby profesjonalnych sesji zdj??ciowych lub przyj???? ??lubnych jest obiektem niezwyk??ym, kt??ry przenosi odwiedzaj??cych w ??wiat pe??en pi??kna i wspania??ej architektury charakteryzuj??cej si?? dba??o??ci?? o najmniejszy detal.'
                    }
                    entryContentP2={
                        'Wynajmuj??c obiekt <a href="https://www.palacgoetz.pl/" target="_blank" rel="nofollow">Pa??acu Goetz??w Okocimskich w Brzesku</a> na sesj?? ??lubn?? jesieni?? mamy do dyspozycji wszystkie pomieszczenia czyli wspomnian?? ju?? pa??acow?? bibliotek??, kaplic??, ogr??d zimowy, palmiarnie, pokoje go??cinne oraz oczywi??cie epickie schody. Nale??y r??wnie?? wspomnie?? o wspaniale zagospodarowanym parku w stylu angielskim z przepi??knym starym drzewostanem, kt??ry o??wietlony promieniami s??o??ca staje si?? bajkow?? sceneri?? dla postaci w strojach ??lubnych. Obecnie w Pa??acu mie??ci si?? luksusowy pi??ciogwiazdkowy hotel i SPA, w kt??rym skorzysta?? mo??na nie tylko z typowych zabieg??w odnowy biologicznej ale r??wnie?? zaserwowa?? sobie jedyn?? w swoim rodzaju k??piel piwn??. Je??eli tylko planujecie sesj?? ??lubn?? jesieni??, chcecie zrobi?? j?? blisko Krakowa w pa??acowych klimatach i bud??et poweselny si?? zgadza to lepszego miejsca nie znajdziecie. Serdecznie zapraszam na zdj??cia. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    title={"SESJA ??LUBNA JESIENI?? - PA??AC GOETZ??W OKOCIMSKICH - IZABELA i ARKADIUSZ"}
                    tags={"pa??ac goetz??w okocimskich, plener ??lubny pomys??y, sesja ??lubna krak??w gdzie, sesja ??lubna jesieni??"}
                    date={"10 pa??dziernika 2018"}
                    menuNames={"IZABELA i ARKADIUSZ"}
                    menuTitle={"SESJA ??LUBNA JESIENI?? - PA??AC GOETZ??W OKOCIMSKICH"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGR??D BOTANICZNY W KRAKOWIE - ??LUBNA SESJA ZDJ??CIOWA - DAJANA i SYLWESTER"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "ogrod_botaniczny.jpg"}
                />
            
        );
};

export default BlogPageComponent;
