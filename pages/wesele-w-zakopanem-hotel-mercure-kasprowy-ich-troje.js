import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0002.jpg", height: 852 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0004.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0008.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0011.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0015.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0019.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0024.jpg", height: 764 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0038.jpg", height: 957 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0033.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0039.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0044.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0049.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0070.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0073.jpg", height: 526 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0074.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0076.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0079.jpg", height: 566 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0086.jpg", height: 566 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0089.jpg", height: 764 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0084.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0103.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0105.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0106.jpg", height: 805 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0110.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0112.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0116.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0119.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0123.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0131.jpg", height: 382 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0133.jpg", height: 764 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0125.jpg", height: 764 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0138.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/wesele_w_zakopanem_hotel_mercure_kasprowy_0136.jpg", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wesele_w_zakopanem_hotel_mercure_kasprowy.jpg"}
                    images={images}
                    headTitle={"Wesele w Zakopanem, Hotel Mercure Kasprowy, Zesp???? Ich Troje na weselu"}
                    headDescription={"Wesele w Zakopanem, Hotel Mercure Kasprowy, Zesp???? Ich Troje, Micha?? Wi??niewski koncert na weselu. ??lub glamour na podhalu. Serdecznie zaprasam na bloga."}
                    headKeywords={"Wesele w Zakopanem, Hotel Mercure Kasprowy, Zesp???? Ich Troje, Micha?? Wi??niewski koncert na weselu"}
                    headUrl={"https://99foto.pl/wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"}
                    entryContentP1={
                        "Historia ta zaczyna si?? cztery lata temu, gdy podczas ??lubu Iwony i Marcina po raz pierwszy pojawi??em si?? z moim aparatem w Studio Makija??u Patrycji Antosz. Wpis z tego ??lubu by?? tak dobry, ??e do dzisiaj odnajdziecie go na moim blogu. Od tego czasu pojawia??em si?? w Jordanowie na makija??ach od czasu do czasu fotografuj??c metamorfozy Panien M??odych. Jest mi wi??c bardzo mi??o, ??e po tylu latach znajomo??ci i setkach obejrzanych zdj???? Patrycja zdecydowa??a, ??e to ja b??d?? jej fotografem ??lubnym. Od pocz??tku by??o jasne, ??e ??lub ten b??dzie wyj??tkowy, zorganizowany perfekcyjnie z dba??o??ci?? o najmniejszy detal i pe??en atrakcji. Mia??a by?? petarda i by??a prosz?? Pani - w??a??nie tak si?? tworzy historie. D??ugo mo??na by??oby pisa??, ale wspomn?? tylko, ??e ceremonia ??lubna odby??a si?? w zabytkowym ko??ciele ??w. Kazimierza Kr??lewicza w Ko??cielisku. Klatka z drona, kt??r?? odnajdziecie poni??ej  doskonale ukazuje usytuowanie tego niezwyklego miejsca."
                    }
                    entryContentP2={
                        "Pi??kna ceremonia, po kt??rej go??cie zostali zaproszeni do usytuowanego u podn????a Tatr na zboczu Polany Szymoszkowej Hotelu Mercure Kasprowy w Zakopanem. Specjalnie zaprojektowane o??wietlenie sali weselnej, wybrane podczas degustacji s??odko??ci, zesp???? muzyczny pe??en g??ralskiej krwi, barman, kt??ry czarowa?? nie tylko za barem... setki atrakcji po??r??d kt??rych o ma??y w??os mo??na by??oby przeoczy?? mega energetyczny wyst??p zespo??u Ich Troje czyli Micha??a Wi??niewskiego i Ani ??wi??tczak. Powiem Wam, ??e tak du??o nie dzia??o si?? ju?? dawno. Wspania??a atmosfera i niezwykle serdeczni ludzie. Pozdrowienia dla Taty Patrycji, kt??ry przez ca???? imprez?? trzyma?? r??k?? na pulsie. Dzi??kuj?? za zaufanie i ??wietn?? imprez??. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania."
                    }
                    slug={"wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"}
                    title={"WESELE W ZAKOPANEM, HOTEL MERCURE KASPROWY, ICH TROJE - PATRYCJA i TOMASZ"}
                    tags={"Wesele w Zakopanem, Hotel Mercure Kasprowy, Zesp???? Ich Troje, Micha?? Wi??niewski koncert na weselu"}
                    date={"6 sierpnia 2020"}
                    menuNames={"PATRYCJA i TOMASZ"}
                    menuTitle={"WESELE W ZAKOPANEM, HOTEL MERCURE KASPROWY, ICH TROJE"}
                    leadNames={"PAULA i WOJTEK"}
                    leadTitle={"FOLWARK WI??ZY MARSZOWICE i RUSTYKALNE WESELE POD KRAKOWEM"}
                    leadUrl={"/folwark-wiazy-marszowice-i-rustykalne-wesele-pod-krakowem"}
                    leadImage={process.env.staticImagesPath + "wesele_folwark_wiazy_marszowice.jpg"}
                />
            
        );
};

export default BlogPageComponent;
