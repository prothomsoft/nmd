import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0003.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0021.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0029.jpg", height: 419 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0026.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0028.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0030.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0031.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0040.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0051.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0053.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0057.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0064.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0065.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0071.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0077.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0085.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0087.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0092.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0093.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0101.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0104.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0108.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0112.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0114.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0123.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0129.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0130.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0134.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0138.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0143.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0145.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0146.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0147.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/restauracja_tiffany_wola_filpowska_0151.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "restauracja_tiffany_wola_filpowska.jpg"}
                    images={images}
                    headTitle={"Restauracja Tiffany Wola Filipowska, fotograf na ??lub Krzeszowice"}
                    headDescription={
                        "Restauracja Tiffany Wola Filipowska i reporta?? ze ??lubu Marty i Marcina w Krzeszowicach. First look na jednym z najwy??szych wie??owc??w w Krakowie. Zapraszam do ogl??dania."
                    }
                    headKeywords={"restauracja tiffany wola filipowska, fotograf na ??lub krzeszowice, first look na dachu wie??owca"}
                    headUrl={"https://99foto.pl/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    entryContentP1={
                        '??lub Marty i Marcina to wydarzenie od pocz??tku owiane aur?? tajemniczo??ci. Marta zaplanowa??a first look na jednym z najwy??szych wie??owc??w w Krakowie, z genialnym widokiem na lini?? wytyczon?? przebiegiem Zakopianki, wie??ami Sanktuarium w ??agiewnikach, Zamkiem na Wawelu czy Klasztorem Kamedu????w na Bielanach wyr????niaj??cymi si?? na mapie tej panoramy. Oczywi??cie by??a to niespodzianka dla Marcina, kt??ry do ko??ca nie m??g?? zrozumie?? dlaczego w tak pi??kny i wa??ny dzie?? ma ??azi?? po dachach. Domy??lam si?? jednak, ??e w momencie pierwszego spotkania u??miech Marty przys??oni?? mu ca??y ??wiat i ca??y ten panoramiczny widok. Przygotowania rozpocz????y si?? o godzinie jedenastej blisko ronda Mogilskiego w Salonie Kosmetycznym, gdzie nad delikatnym, maj??cym na celu tylko delikatnie podkre??li?? niezwyk???? urod?? Marty pracowa??a Agnieszka. ??wietnie urz??dzone miejsce z klimatem, kt??ry stara??em si?? odda?? na zdj??ciach. Po wspomnianym ju?? przywitaniu Pary M??odej i b??ogos??awie??stwie rodzic??w wszyscy p??dz??c obwodnic?? Krakowa w mniej ni?? godzink?? udali??my si?? do <a href="https://marcinkrzeszowice.pl/" target="_blank" rel="nofollow">Ko??ci????a ??w. Marcina z Tours w Krzeszowicach</a>. Tym razem temat z organist?? by?? dogadany i drzwi na ch??r sta??y otworem. Pe??ne u??miech??w przywitanie go??ci, kt??rzy z uwagi na temperatur?? zjawili si?? pod ko??cio??em kilka minut przed ceremoni??. Ksi??dz, kt??ry wyg??osi?? ??wietne kazanie i przeprowadzi?? ceremoni?? z humorem. Wreszcie moment najwa??niejszy i sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Obserwowa??em Mart?? przez ca??y ten d??ugi dzie?? i mam wra??enie, ??e w odr????nieniu od wi??kszo??ci kobiet, jest ma??o rzeczy, kt??re potrafi?? wyprowadzi?? j?? z r??wnowagi. Trzymam kciuki, ??eby tak pozosta??o. Po zdj??ciu grupowym pod ko??cio??em Para M??oda zaprosi??a go??ci do <a href="https://restauracja-tiffany.business.site/" target="_blank" rel="nofollow">Restauracji Tiffany w Woli Filipowskiej</a>. Rzut kieliszkami i moc gor??cych ??ycze?? przyj??tych krok przed napisem LOVE. Zesp???? Muzyczny <a href="https://www.easyband.pl" target="_blank" rel="nofollow">Easy Band</a> z dw??jk?? charyzmatycznych wokalist??w gra?? na granicy rocka szerokim ??ukiem omijaj??c szlagierowe przeboje disco polo. By?? pokaz filmowy, tort i fotobudka <a href="https://www.foto4fun.com.pl/" target="_blank" rel="nofollow">Foto4Fun</a>. Ka??d?? minut?? tego wa??nego dnia rejestrowa?? Grzegorz z <a href="https://www.facebook.com/gemcofilms/" target="_blank" rel="nofollow">Gemco films</a>, kt??rego ceni?? za profesjonalizm i Dominik, kt??rego zapami??tam z uwagi na poczucie humoru. Super dzie?? i ??wietna impreza. Marto i Marcinie, dzi??kuj?? za zaufanie i widzimy si?? nied??ugo w g??rach. Zapraszam na zdj??cia, a po wi??cej do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    title={"TIFFANY WOLA FILIPOWSKA, FIRST LOOK NA DACHU WIE??OWCA - MARTA i MARCIN"}
                    tags={"restauracja tiffany wola filipowska, fotograf na ??lub krzeszowice, first look na dachu wie??owca"}
                    date={"3 sierpnia 2018"}
                    menuNames={"MARTA i MARCIN"}
                    menuTitle={"TIFFANY WOLA FILIPOWSKA, FIRST LOOK NA DACHU WIE??OWCA"}
                    leadNames={"NATALIA i KAMIL"}
                    leadTitle={"SALA WESELNA WILLA ORCHIDEA WAKSMUND - ??LUB NA PODHALU"}
                    leadUrl={"/sala-weselna-willa-orchidea-waksmund-slub-w-pieninach"}
                    leadImage={process.env.staticImagesPath + "sala-weselna-willa-orchidea-waksmund-slub-w-pieninach-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
