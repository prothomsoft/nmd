import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0005.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0001.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0007.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0008.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0022.jpg", height: 312 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0039.jpg", height: 805 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0044.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0050.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0056.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0059.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0064.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0066.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0067.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0069.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0071.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0084.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0081.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0083.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0087.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0095.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0101.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0098.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0106.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0110.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0115.jpg", height: 324 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0116.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0119.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0125.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0131.jpg", height: 764 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0135.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/07/wesele_folwark_wiazy_0128.jpg", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wesele_folwark_wiazy_marszowice.jpg"}
                    images={images}
                    headTitle={"Folwark Wi??zy Marszowice, Rustykalne wesele pod Krakowem"}
                    headDescription={"Wesele w stodole. Rustykalne wesele pod Krakowem czyli Folwark Wi??zy w Marszowicach. Miejsce dla os??b, kt??re chc?? zorganizowa?? sw??j ??lub w stylu boho."}
                    headKeywords={"wesele w stodole, rustykalne wesele pod krakowem, folwark wi??zy marszowice, ??lub boho"}
                    headUrl={"https://99foto.pl/folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"}
                    entryContentP1={
                        "Pomy??lcie, gdyby tak zapomnie?? o jasnych salach ??lubnych i pozwoli?? pu??ci?? wodze fantazji i przenie???? si?? w miejsce bliskie natury, pe??ne zieleni i pewnego rodzaju prostoty w pozytywnym tego s??owa znaczeniu. Miejsce gdzie klimat tworzy drewno i wykonane z niego sto??y, ramki, skrzynki, dekoracje, kt??re z ??atwo??ci?? znajdziemy w produkcjach filmowych rodem z Hollywood. Kto?? ju?? to wymy??li?? okre??li?? ??luby tego typu mianem ??lub??w rustykalnych lub boho i dok??adnie zdefiniowa?? natur?? wystroju ??lubnych wn??trz. Rustykalne wesele to nawi??zanie do ??wiat??a, harmonii i natury. Styl rustykalny wywodzi si?? z klimatu wiejskiego, a dominuj??ca biel i przyt??umione ??wiat??o cz??sto prze??amywane s?? bogat?? palet?? przer????nych barw."
                    }
                    entryContentP2={
                        "Nie mam ??adnych w??tpliwo??ci, ??e dla fan??w rustykalnego wystroju Folwark Wi??zy w Marszowicach jest spe??nieniem ??lubnych marze??. Jest to z pewno??ci?? niezwykle urokliwe miejsce, kt??re idealnie wpisuje si?? w klimat boho. Paulina i Wojtek najpierw zakochali si?? w sobie, by nast??pnie pokocha?? to miejsce i bezwzgl??dnie zorganizowa?? w nim sw??j wymarzony ??lub. Przyznaj??, ??e klimat panuj??cy w Folwarku Wi??zy w Marszowicach sprawi??, ??e czu??em si?? tak, jakbym by?? w??r??d ludzi, kt??ry znam od bardzo dawna. Wspania??a Para M??oda, pi??kna druhna Ania i gotowy na ka??de wyzwanie Damian, du??o s??o??ca i zesp???? muzyczny, kt??ry nie tylko repertuarem ale i wizerunkiem wpisa?? si?? w klimat tej imprezy. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania. "
                    }
                    slug={"folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"}
                    title={"FOLWARK WI??ZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM - PAULA i WOJTEK"}
                    tags={"wesele w stodole, rustykalne wesele pod krakowem, folwark wi??zy marszowice, ??lub boho"}
                    date={"14 lipca 2020"}
                    menuNames={"PAULA i WOJTEK"}
                    menuTitle={"FOLWARK WI??ZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM"}
                    leadNames={"NATALIA i TOMASZ"}
                    leadTitle={"WESELE W BYSTREJ I OGR??D PE??EN LAWENDY W KLIMONTOWIE"}
                    leadUrl={"/wesele-w-bystrej-i-ogrod-pelen-lawendy-w-klimontowie"}
                    leadImage={process.env.staticImagesPath + "karolinka_bystra_podhalanska_wesele.jpg"}
                />
            
        );
};

export default BlogPageComponent;
