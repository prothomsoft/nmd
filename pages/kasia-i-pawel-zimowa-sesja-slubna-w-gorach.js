import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0001.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0004.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0005.jpg", height: 335 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0006.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0009.jpg", height: 852 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0010.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0015.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0022.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0023.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0024.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/01/zimowa_sesja_slubna_w_gorach_0017.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "kasia_i_pawel_zimowa_sesja_slubna_w_gorach_start.jpg"}
                    images={images}
                    headTitle={"Zimowa sesja ??lubna w g??rach"}
                    headDescription={"Troch?? nam wczoraj ty??ki zmarz??y, ale warto by??o, ??eby odetchn???? ??wie??ym powietrzem i zrobi?? kilka niezapomnianych zdj????. Mi??ego ogl??dania."}
                    headKeywords={"zimowa sesja ??lubna w g??rach,plener ??lubny czarna g??ra"}
                    headUrl={"https://99foto.pl/kasia-i-pawel-zimowa-sesja-slubna-w-gorach"}
                    entryContentP1={
                        "Minus trzydzie??ci na termometrach w g??rach, pe??no ??niegu, czyste niebo i ??wiec??ce s??o??ce. Stok na Czarnej G??rze pe??ny narciarzy. Po drugiej stronie tego wzniesienia fajowa panorama tatr i bielutki, zupe??nie niewydeptany ??nieg. Troch?? nam ty??ki zmarz??y tego dnia, ale warto by??o, ??eby odetchn???? ??wie??ym powietrzem i zrobi?? kilka niezapomnianych zdj????."
                    }
                    entryContentP2={
                        "Na plener wyjechali??my o godzinie ??smej rano z Krakowa. Po drodze zabrali??my dr????k?? Ani??, kt??rej za pomoc przy zdj??ciach bardzo dzi??kuj??. Pawe?? dzielnie przemierza?? ??nieg w butach ??lubnych bez czapki. Natomiast wszystkie Panie mog?? bra?? przyk??ad z Kasi, bo rok po ??lubie, a suknia wci???? pasuje. Mi??ego ogl??dania."
                    }
                    slug={"kasia-i-pawel-zimowa-sesja-slubna-w-gorach"}
                    title={"ZIMOWA SESJA ??LUBNA W G??RACH - KASIA i PAWE??"}
                    tags={"zimowa sesja ??lubna w g??rach,plener ??lubny czarna g??ra"}
                    date={"8 stycznia 2017"}
                    menuNames={"KASIA i PAWE??"}
                    menuTitle={"ZIMOWA SESJA ??LUBNA W G??RACH"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"DW??R SZLACHECKI SIECIECHOWICE, REPORTA?? ??LUBNY MIECH??W"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
