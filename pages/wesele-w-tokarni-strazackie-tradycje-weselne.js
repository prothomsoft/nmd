import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [

            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0005.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0006.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0007.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0011.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0016.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0023.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0024.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0028.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0030.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0034.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0035.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0036.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0037.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0038.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0151.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0049.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0050.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0056.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0058.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0068.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0079.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0081.jpg", height: 805 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0094.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0096.jpg", height: 567 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0099.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0104.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0110.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0112.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0114.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0121.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0127.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0129.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0143.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0136.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0142.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0150.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/05/restauracja_karolinka_bystra_podhalanska_zdjecia_slubne_0126.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "restauracja_karolinka_bystra_podhalanska.jpg"}
                    images={images}
                    headTitle={"Wesele w Tokarni, stra??acke tradycje weselne"}
                    headDescription={"Wesele w Tokarni i stra??ackie tradycje weselne. ??lub w g??rach i przepi??kne miejsce na ceremoni?? ??lubn??. Marlena i Maciek. Parkiet p??ka?? w szwach. Zapraszam."}
                    headKeywords={"dobry fotograf na wesele, wesele w Tokarni, stra??ackie tradycje weselne"}
                    headUrl={"https://99foto.pl/wesele-w-tokarni-strazackie-tradycje-weselne"}
                    entryContentP1={
                        'Miesi??c maj w tym roku pogodowo nie wygl??da najlepiej i my??l??, ??e tylko rolnicy s?? zadowoleni z tego stanu rzeczy. Na szcz????cie deszczowe dni s?? momentami przerywane przeb??yskami s??o??ca, na kt??re pewnie trzeba zas??u??y??. Tak by??o w sobot?? podczas ??lubu Marleny i Ma??ka, kt??ry odby?? si?? w Skomielnej Czarnej. Trafili w idealny dzie?? z wymarzon?? pogod?? bez najmniejszej kropelki deszczu, pi??knymi bia??ymi chmurami na b????kitnym niebie i zieleni?? w szczytowej formie. Dzie?? rozpocz??li??my w Salonie fryzjerskim Relaks w Tokarni. Upi??cie w??os??w przebieg??o sprawnie i chwil?? p????niej byli??my ju?? na makija??u wykonanym mistrzowsk?? r??k?? wiza??ystki Ewy z <a href="https://www.facebook.com/madebymemakeup/" target="_blank" rel="nofollow">Make By Me Makeup</a>. Poniewa?? Marlena zawodowo zajmuje si?? urod?? wi??c malowaniu towarzyszy??y bran??owe dyskusje. Gdy makija?? by?? niemal??e sko??czony do????czyli do nas Sylwester i Wojtek z <a href="https://www.facebook.com/Studio-Foto-Video-CLIP-348143895304294/" target="_blank" rel="nofollow">Clip Studio</a>, kt??rzy przez ca??y dzie?? kolekcjonowali kadry do filmu ??lubnego. Wojtek w nasze poczynania wnosi?? nutk?? m??odo??ci, Sylwester i ja lata do??wiadczenia, w skr??cie uzupe??niali??my si?? ca??kiem dobrze. Wszyscy znali si?? nie od dzi??, a to zawsze pomaga w zachowaniu dobrego klimatu w trakcie imprezy.'
                    }
                    entryContentP2={
                        'Marlena za??o??y??a sukni??, z pomoc?? siostry ??anety ubra??a bi??uterie i buty, a gdy wszystko by??o gotowe udali??my si?? do Tokarni na przygotowania Ma??ka. Krawat, zegarek, garnitur i buty, klasyczny plan zrealizowali??my do???? szybko. Maciek wsiad?? do wymarzonego przez wielu samochodu i chwil?? p????niej skrad?? Marlenie buziaka. Po b??ogos??awie??stwie rodzic??w na Par?? M??odych czeka??a niespodzianka w postaci bramy przygotowanej przez Stra??ak??w. By?? mi??, konkurs na str??canie puszek sikawk??, gor??ce ??yczenia i ??arciki rzucane mimowolnie przez megafon. W skr??cie brama na wypasie. Ceremonia za??lubin odby??a si?? w <a href="http://skomielnaczarna.kapucyni.pl/" target="_blank" rel="nofollow">Ko??ciele Nawiedzenia NMP w Skomielnej Czarnej</a>. Para m??oda z??o??y??a przyrzeczenie ma????e??skie, obsypana milionem monet z pomp?? opu??ci??a Ko??ci????, a po zdj??ciu grupowym zaprosi??a go??ci do sali weselnej "Karolinka" w Bystrej Podhala??skiej. Po obiedzie odby??y si?? ??yczenia, nast??pnie pierwszy taniec i krojenie torta. Zesp???? Sami Swoi z ????towni wykona?? wszystkie szlagiery weselnych parkiet??w. Zosta?? te?? doceniony przez go??ci weselnych, kt??rzy ogromny parkiet wype??niali szczelnie zupe??nie go nie opuszczaj??c. Bukiet fruwa?? w powietrzu kilkukrotnie i jak to w g??rach zabawa by??a na ca??ego. Serdecznie zapraszam na reporta?? ??lubny z tego dnia i ??ycz?? mi??ego ogl??dania. Zagl??dnijcie te?? do strefy klienta po wi??cej.'
                    }
                    slug={"wesele-w-tokarni-strazackie-tradycje-weselne"}
                    title={"WESELE W TOKARNI, STRA??ACKIE TRADYCJE WESELNE - MARLENA i MACIEK"}
                    tags={"dobry fotograf na wesele, wesele w Tokarni, stra??ackie tradycje weselne"}
                    date={"29 maja 2019"}
                    menuNames={"MARLENA i MACIEK"}
                    menuTitle={"WESELE W TOKARNI, STRA??ACKIE TRADYCJE WESELNE"}
                    leadNames={"KAROLINA i KAMIL"}
                    leadTitle={"SALA BANKIETOWA SZAFRANTU, FOTOGRAFIA ??LUBNA NIEPO??OMICE"}
                    leadUrl={"/sala-bankietowa-szafrantu-fotografia-slubna-niepolomice"}
                    leadImage={process.env.staticImagesPath + "sala-bankietowa-szafrantu.jpg"}
                />
            
        );
};

export default BlogPageComponent;