import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0002.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0014.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0017.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0023.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0026.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0039.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0041.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0044.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0066.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0067.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0080.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0087.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0095.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0104.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0107.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0109.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0113.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0129.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0122.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0121.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0150.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/dom_weselny_przystan_w_kabanosie_spytkowice_reportaz_slubny_0148.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow-start.jpg"}
                    images={images}
                    headTitle={"Przysta?? w Kabanosie Spytkowice, zdj??cia ??lubne Jordan??w"}
                    headDescription={
                        "Przysta?? w Kabanosie Spytkowice i g??ralski klimat. Energia z g??r, rodzinna atmosfera i zakochani w sobie bardzo Krystyna i Piotr. Serdecznie zapraszam na kilka zdj???? z tego dnia. Mi??ego ogl??dania."
                    }
                    headKeywords={"Przysta?? w Kabanosie Spytkowice, zdj??cia ??lubne Jordan??w, Dom Weselny Spytkowice"}
                    headUrl={"https://99foto.pl/przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow"}
                    entryContentP1={
                        'Jeden z pa??dziernikowych weekend??w w ubieg??ym roku mi??o sp??dzi??em na fotografowaniu ??lubu Iwony i Marcina w Naprawie. By??oby to ma??o istotne w kontek??cie tej opowie??ci gdyby nie fakt, ??e Piotr, kt??ry z pewno??ci?? w ubieg??y weekend odmieni?? swoje ??ycie, jest bratem Marcina. Wybrank?? Piotra zosta??a Krystyna, kt??r?? r??wnie?? mia??em przyjemno???? pozna?? podczas tamtej pami??tnej imprezy. Dlatego od razu napisa??em, ??e tym razem by??o nie tylko po g??ralsku, ale te?? bardzo rodzinnie. Zacznijmy wi??c od pocz??tku. Przygotowania odby??y si?? w dw??ch miejscach. Pierwsze z nich mocno zwi??zane z postaci?? Marylin Monroe to <a href="https://www.facebook.com/pg/salonpieknosciBC/about/" target="blank">Salon Beauty Center</a> w Nowym Targu, gdzie powsta??a fryzura. Drugie natomiast to gwiazdorski <a href="https://www.facebook.com/glossy.marzena.balara/" target="_blank" rel="nofollow">Salon Urody Glossy</a>, gdzie urod?? Krystyny podkre??la??a Marzena. W??a??ciwe przygotowania odby??y si?? w domu rodzinnym Krystyny w Skawie. Dziewczyny pomog??y ubra?? sukni??, brat otworzy?? winko i tak w oka mgnieniu min????a godzinka, po kt??rej uda??em si?? do Naprawy do Piotrka. Piotrek nic a nic si?? przez te kilka miesi??cy nie zmieni?? i jak by?? dusz?? towarzystwa na ??lubie Marcina, tak zosta??o. Jego wrodzony w??oski temperament skierowa?? przygotowania na w??a??ciwe tory. Przywitanie Pana m??odego, b??ogos??awie??stwo i brama urz??dzona przez ??mia??e dzieciaki wype??ni??y nam czas oczekiwania na sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Tym razem zosta??o ono wypowiedziane w <a href="https://skawa.sdb.org.pl/" target="_blank" rel="nofollow">Ko??ciele NMP Wspomo??enia Wiernych</a> w Skawie. Ko??ci???? bardzo ciekawy, pozwalaj??cy zrobi?? zdj??cia z perspektywy drona bez drona. Po zdj??ciu grupowym i ??yczeniach Para M??oda zaprosi??a go??ci do Domu Weselnego <a href="https://przystanwkabanosie.pl/pl/page/6/Restauracja_Spytkowice/" target="_blank">Przysta?? w Kabanosie</a> w Spytkowicach. Parkiet zosta?? otworzony brawurowym pierwszym ta??cem, pyszne s??odko??ci z mini karety znikn????y momentalnie i <a href="https://edenzespol.pl" target="_blank" rel="nofollow">zesp???? muzyczny Eden</a> przej???? pa??eczk?? dbaj??c o to, by go??cie nie sp??dzali za du??o czasu przy stolikach. Atrakcje tego wieczoru mo??na wylicza?? d??ugo, by?? tort podany w chmurach ciek??ego azotu, pieczony ??winiak, fotobudka, poci??g, chusteczka, kaczuszki i pe??ny zestaw zabaw oczepinowych. Ka??d?? minut?? imprezy skrz??tnie filmowa?? Mateusz z <a href="https://www.planujemywesele.pl/2048-f-h-u-viva" target="_blank" rel="nofollow">Viva Film</a>. By??o naprawd?? re-we-la-cyj-nie. Zapraszam na reporta?? ??lubny z tego dnia, a po wi??cej do strefy klienta (przyda si?? has??o z mojej wizyt??wki). Mi??ego ogl??dania.'
                    }
                    slug={"przystan-w-kabanosie-spytkowice-zdjecia-slubne-jordanow"}
                    title={"PRZYSTA?? W KABANOSIE SPYTKOWICE, ZDJ??CIA ??LUBNE JORDAN??W - KRYSIA i PIOTR"}
                    tags={"Przysta?? w Kabanosie Spytkowice, zdj??cia ??lubne Jordan??w, Dom Weselny Spytkowice"}
                    date={"5 maja 2018"}
                    menuNames={"KRYSIA i PIOTR"}
                    menuTitle={"PRZYSTA?? W KABANOSIE SPYTKOWICE, ZDJ??CIA ??LUBNE JORDAN??W"}
                    leadNames={"MA??GORZATA I RAFA??"}
                    leadTitle={"PLENER ??LUBNY S??OWACJA, ??OMNICKI STAW"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"}
                />
            
        );
};

export default BlogPageComponent;
