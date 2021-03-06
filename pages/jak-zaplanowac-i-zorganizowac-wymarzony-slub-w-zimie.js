import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
        { imageSrc: "/static/blog/2019/02/slub_zima_0001.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0010.jpg", height: 806 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0004.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0002.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0012.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0003.jpg", height: 806 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0007.jpg", height: 763 },                
        { imageSrc: "/static/blog/2019/02/slub_zima_0011.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0006.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0005.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0009.jpg", height: 763 },                        
        { imageSrc: "/static/blog/2019/02/slub_zima_0008.jpg", height: 762 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0014.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0015.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0016.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0017.jpg", height: 566 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0019.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0020.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0018.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0021.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0022.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0024.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0023.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0027.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0026.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0028.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0025.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0029.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0030.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0031.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0032.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0033.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0034.jpg", height: 527 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0035.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0036.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0037.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0038.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0042.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0039.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0040.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0041.jpg", height: 527 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0043.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0044.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0045.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0046.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0047.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0049.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0048.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0050.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0051.jpg", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0052.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0053.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0054.jpg", height: 763 },                
        { imageSrc: "/static/blog/2019/02/slub_zima_0057.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0058.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0059.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0060.jpg", height: 526 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0061.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0062.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0063.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0064.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0065.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0066.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0067.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0068.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0069.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0070.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0071.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0072.jpg", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0073.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0074.jpg", height: 566 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0075.jpg", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0076.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0077.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0078.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0079.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0080.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0081.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0082.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0083.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0084.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0086.jpg", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0085.jpg", height: 763 },     
        { imageSrc: "/static/blog/2019/02/slub_zima_0087.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0089.jpg", height: 850 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0088.jpg", height: 763 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0090.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0091.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0092.jpg", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0093.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0094.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0095.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0096.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0097.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0098.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0099.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0100.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0101.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0102.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0103.jpg", height: 851 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0104.jpg", height: 382 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0105.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0106.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0107.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0108.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0109.jpg", height: 762 },        
        { imageSrc: "/static/blog/2019/02/slub_zima_0111.jpg", height: 762 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0112.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0113.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0114.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0115.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0116.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0117.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0118.jpg", height: 383 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0119.jpg", height: 763 },
        { imageSrc: "/static/blog/2019/02/slub_zima_0110.jpg", height: 763 }];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "slub_zima.jpg"}
                    images={images}
                    headTitle={"Jak zaplanowa?? i zorganizowa?? wymarzony ??lub w zimie"}
                    headDescription={"Odpowiedzi na pytania jak zaplanowa?? ??lub w zimie i jak taki wymarzony ??lub zorganizowa?? znajdziesz zagl??daj??c na bloga. Zimowy ??lub Marty i Micha??a. Zapraszam."}
                    headKeywords={"zdjecia slubne zima, zimowa suknia ??lubna, zimowe dekoracje weselne, ??lub w lutym"}
                    headUrl={"https://99foto.pl/jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    entryContentP1={
                        'Perfekcyjnie zorganizowany ??lub Marty i Micha??a, kt??ry mia??em przyjemno???? fotografowa?? w ubieg???? sobot?? w miejscu do???? odleg??ym od Krakowa zainspirowa?? mnie do zanotowania kilku spostrze??e?? w temacie jak zaplanowa?? ??lub w zimie i jak taki wymarzony ??lub zorganizowa??. Obserwuj??c bran??e ??lubn?? w Polsce zauwa??ymy, ??e ??lub w styczniu czy te?? ??lub w lutym nie jest ju?? niczym niezwyk??ym. Rosn??ca liczba nowo??e??c??w, kt??rzy chc?? powiedzie?? sakramentalne "TAK" korzystaj??c z zimowej i ??wi??tecznej aury coraz cz????ciej powoduje konieczno???? organizacji ??lub??w nawet w miesi??cu grudniu. ??lub Marty i Micha??a jako jeden z wielu udowadnia, ??e ??lub zim?? odpowiednio przygotowany mo??e by?? fantastycznym prze??yciem, kt??rego opraw?? tworz?? pe??ne ??wi??tecznych ozd??b i ciep??ych ??wiate??ek choinki, bia??y puszysty ??nieg, sople lodu mieni??ce si?? w s??o??cu tysi??cem kolor??w, a nawet mr??z kt??ry maluje policzki zaproszonych go??ci.'
                    }
                    entryContentP2={
                        "D??ugo mo??na wymienia?? argumenty, kt??re powinny przekona?? ka??dego z Was do organizacji wymarzonego ??lubu w zimie. B??d?? to oszcz??dno??ci w Waszej kieszeni, bo przecie?? sala, zesp???? i fotograf oferuj?? swoje us??ugi w znacznie ni??szych cenach. Kilka kresek poni??ej zera pomo??e zatrzyma?? go??ci weselnych na parkiecie i skr??ci?? czas przerw na papieroska. Nie bez znaczenia jest te?? mo??liwo???? zorganizowania ekstra atrakcji takich jak ognisko w lesie, kulig saniami czy te?? sztuczne ognie - takie tam odniesienie do g??ralskich klimat??w. Pozostaj?? jeszcze pytania z cyklu - wesele zim?? jak mam si?? ubra??? Ot???? planuj??c stylizacje na wesele zim?? Pan M??ody nie powinien zapomnie?? o p??aszczu,  kt??ry mog??yby by?? we??niany do kolan i oczywi??cie odpowiednio ciep??ych butach. Podobne wymagania obowi??zuj?? podczas zimowych plener??w ??lubnych. Sukienka na zimowe wesele to r??wnie?? d??ugi temat, kt??ry z uwagi na jego z??o??ono???? pozostawi?? bez odpowiedzi. Warto na pewno pomy??le?? o bolerku ??lubnym na zim?? i parze szpilek na zmian??, szpilek w kt??rych b??dziecie mog??y przeta??czy?? ca???? noc.  Nie zapomnijcie te?? zadba?? o zimowy wystr??j sali weselnej, pami??tajcie o bukietach z kolorowych kwiat??w i unikalnych dekoracjach na sto??ach przy kt??rych b??d?? si?? bawi?? Wasi go??ci. Mam nadziej??, ??e Was przekona??em i spotkamy si?? na zimowym ??lubie ju?? w nadchodz??cym sezonie. Tymczasem zapraszam do obejrzenia kilku zdj???? z zimowego ??lubu Marty i Micha??a. Mi??ego ogl??dania."
                    }
                    slug={"jak-zaplanowac-i-zorganizowac-wymarzony-slub-w-zimie"}
                    title={"JAK ZAPLANOWA?? I ZORGANIZOWA?? WYMARZONY ??LUB W ZIMIE - MARTA i MICHA??"}
                    tags={"zdjecia slubne zima, zimowa suknia ??lubna, zimowe dekoracje weselne, ??lub w lutym"}
                    date={"6 lutego 2019"}
                    menuNames={"MARTA i MICHA??"}
                    menuTitle={"JAK ZAPLANOWA?? I ZORGANIZOWA?? WYMARZONY ??LUB W ZIMIE"}
                    leadNames={"NATALIA i ??UKASZ"}
                    leadTitle={"POMYS?? NA SESJ?? ZIMOW?? W KRAKOWIE - DW??R JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={process.env.staticImagesPath + "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"}
                />
            
        );
};

export default BlogPageComponent;
