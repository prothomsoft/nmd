import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0002.jpg", height: 382 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0009.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0019.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0021.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0024.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0023.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0026.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0031.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0028.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0035.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0037.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0040.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0042.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0044.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0048.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0049.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0050.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0054.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0056.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0055.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0057.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0062.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0064.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0068.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0069.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0074.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0078.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0084.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0087.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0089.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0090.jpg", height: 731 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0093.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0095.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0097.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0098.jpg", height: 805 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0102.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0103.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0107.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0111.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0104.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0114.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0105.jpg", height: 382 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0117.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0120.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0121.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0124.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0118.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0127.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0129.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0131.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0141.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0134.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0135.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0142.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0136.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0143.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0144.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0146.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0147.jpg", height: 762 },            
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0149.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0150.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0151.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0148.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0139.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/05/hotel_zywiecki_przylekowka_wesele_w_beskidach_0140.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "nicola_rafal_start.jpg"}
                    images={images}
                    headTitle={"Hotel ??ywiecki, Sala weselna Przy????k??wka, Wesele w Beskidach"}
                    headDescription={"Hotel ??ywiecki, sala weselna Przy????k??wka. Wesele w beskidach i kwitn??ce magnolie. Nicole i Rafa??. Serdecznie zapraszam."}
                    headKeywords={"Hotel ??ywiecki, sala weselna Przy????k??wka, wesele w Beskidach"}
                    headUrl={"https://99foto.pl/hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"}
                    entryContentP1={
                        'D??ugi weekend majowy, ma??a wyprawa w Beskidy i okolice ??ywca na ??lub Nicoli i Rafa??a w Gilowicach. Pierwsze zdj??cie to Jezioro ??ywieckie, nad kt??rym odbywa??y si?? od rana zawody w??dkarskie. Nast??pnie makija??, w mieszkaniu babci Nicoli. Fachowe dyskusje w trakcie poniewa?? Nicola jest zawodow?? wiza??ystk?? i sama wykonuje makija??e ??lubne pod mark??  <a href="https://www.instagram.com/nicolekobza.style" target="_blank" rel="nofollow noopener noreferrer">Nicola Kobza Style</a>. Oczywi??cie nie oby??o si?? bez ciasteczka i kawy, jak to u babci. Nast??pnie pojechali??my do Gilowic, gdzie ju?? razem z Krzy??kiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow noopener noreferrer">Camdesign - Nowoczesny film ??lubny</a> rejestrowali??my ten wa??ny dzie??. Domek ??wietny, magnolie, kt??re okresem kwitnienia wstrzeli??y si?? w dat?? ??lubu Nicoli i Rafa??a, doda??y temu miejscu niezwyk??ego uroku. Druhny dzielnie pomaga??y nie tylko z sukni?? ??lubn??, kolczykami, branzoletkami, ale te?? z szampanem, kt??ry wyl??dowa?? w stylowych kieliszkach. Wesele w Beskidach to ??wietny pomys??.'
                    }
                    entryContentP2={
                        'Odwiedzili??my te?? dom Rafa??a, przed kt??rym czeka?? mercedes ??lubny i taki ma??y pilot, w??z stra??acki. Tiger ogarna?? ubieranie Rafa??a, rozla?? Dzik?? Ge?? wszystkim ch??tnym, sprawdzi?? czy obr??czki s?? na miejscu. Wystartowali??my na wsp??lne b??ogos??awie??stwo. Pierwszy poca??unek, emocje, u??miechy, ??zy rado??ci. Pokonuj??c przygotowan?? przez s??siad??w bram??, przez stra??ak??w i pi??karzy gilowickiego klubu sportowego dojechali??my do <a href="http://gilowice.duszpasterstwa.bielsko.pl/" target="_blank" rel="nofollow noopener noreferrer">Ko??cio??a ??w. Andrzeja Apostto??a w Gilowicach</a>. Ceremoni?? poprowadzi?? zaprzyja??niony ksi??dz, wi??c sakramentalne TAK nabra??o rodzinnego charakteru. Po zdj??ciu grupowym, korzystaj??c z pi??knej pogody zostali??my na ??yczeniach pod Ko??cio??em. Nie wiem czy mo??na napisa??, ??e orkiestra stra??acka podgrywa??a w tle, ale tak w??asnie by??o. Nast??pnie udali??my si?? do Hotelu ??ywieckiego i jego <a href="http://weselewbeskidach.pl/" target="_blank" rel="nofollow noopener noreferrer">sali weselnej Przy????k??wka</a>. Go??ci na parkiecie przywita?? Sebastian z <a href="https://www.facebook.com/GOREST.S" target="_blank" rel="nofollow noopener noreferrer">Gorest S</a> i impreza wystartowa??a. Du??o atrakcji, kt??re sami sprawd??cie na zdj??ciach. Nicola i Rafa?? dzi??kuj?? za zaufanie i zapraszam na zdj??cia. Pami??tajcie by klikn???? lajka na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">insta</a> lub <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">facebook</a> je??li wpis si?? podoba i do zobaczenia na kolejnym weselu.'
                    }
                    slug={"hotel-zywiecki-sala-przylekowka-wesele-w-beskidach"}
                    title={"HOTEL ??YWIECKI, SALA PRZY????K??WKA, WESELE W BESKIDACH - NICOLA i RAFA??"}
                    tags={"Hotel ??ywiecki, sala weselna Przy????k??wka, wesele w Beskidach"}
                    date={"3 maja 2022"}
                    menuNames={"NICOLA i RAFA??"}
                    menuTitle={"HOTEL ??YWIECKI, SALA PRZY????K??WKA, WESELE W BESKIDACH"}
                    leadNames={"KLAUDIA i PRZEMYS??AW"}
                    leadTitle={"KAROLINKA BYSTRA PODHALA??SKA, WESELE STRA??ACKIE"}
                    leadUrl={"/sala-weselna-karolinka-bystra-podhalanska"}
                    leadImage={process.env.staticImagesPath + "klaudia_przemek_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;