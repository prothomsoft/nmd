import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2017/07/wakacje_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0001.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/07/wakacje_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0011.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/07/wakacje_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0009.jpg", height: 472 },
            { imageSrc: "/static/blog/2017/07/wakacje_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/07/wakacje_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0024.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/07/wakacje_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0027.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/07/wakacje_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0048.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/07/wakacje_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0055.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/07/wakacje_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0042.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/07/wakacje_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0053.jpg", height: 526 },
            { imageSrc: "/static/blog/2017/07/wakacje_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0046.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/07/wakacje_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0050.jpg", height: 526 },
            { imageSrc: "/static/blog/2017/07/wakacje_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/wakacje_0049.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wakacyjny_test_obiektywu_sigma_50_1_4_art_start.jpg"}
                    images={images}
                    headTitle={"Test obiektywu Sigma 50 1.4 ART"}
                    headDescription={"Tym razem zupe??nie nie ??lubnie. Kilka zdj???? z naszych wakacji i testy obiektywu Sigma 50 1.4 ART. Zapraszam na bloga i ??ycz?? mi??ego ogl??dania."}
                    headKeywords={"test obiektywu sigma 50 1.4 art,sesja zdj??ciowa krak??w"}
                    headUrl={"https://99foto.pl/wakacyjny-test-obiektywu-sigma-50-1-4-art"}
                    entryContentP1={
                        "Tym razem zupe??nie nie ??lubnie. Kilka zdj???? z wakacji, kt??re razem z moim bratem i jego rodzin?? sp??dzili??my w Miszkolcu, Nyiregyhazie, a w drodze powrotnej odwiedzaj??c Tatrza??sk?? ??omnic??. Wakacje to dobry moment, ??eby przetestowa?? nowy obiektyw, sprawdzi?? czy dobrze ostrzy i b??dzie ok m??wi??c kr??tko na ??lubach. Tak si?? te?? sta??o r??wnie?? tym razem. Zabra??em ze sob?? Sigm?? 50 1.4 ART z filtrem polaryzacyjnym Marumi DHG Super. Wi??kszo???? zdj???? jest zrobiona tym obiektywem, kt??ry jak mo??na odnale???? w internecie jest najlepsz?? pi????dziesi??tk?? na rynku."
                    }
                    entryContentP2={
                        "Szersze kadry to Nikkor AF-S 28 mm f/1.8G, kt??rego jeszcze nie zamieni??em na Sigm?? 35 1.4 ART, ale my??l??, ??e jest to kwestia najbli??szych miesi??cy. Testowa??em te?? obudow?? na lustrzank?? do zdj???? podwodnych. Og??lnie warto mie?? takie co?? w przypadku wypraw na zdj??cia do Park??w Wodnych, no i mo??e kiedy?? na sesji zdj??ciowej w g??rach si?? przyda. Mi??ego ogl??dania."
                    }
                    slug={"wakacyjny-test-obiektywu-sigma-50-1-4-art"}
                    title={"WAKACYJNY TEST OBIEKTYWU SIGMA 50 1.4 ART - MARTUSIA i MICHA??"}
                    tags={"test obiektywu sigma 50 1.4 art,sesja zdj??ciowa krak??w"}
                    date={"23 lipca 2017"}
                    menuNames={"MARTUSIA i MICHA??"}
                    menuTitle={"WAKACYJNY TEST OBIEKTYWU SIGMA 50 1.4 ART"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAK??W SESJA ZDJ??CIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
