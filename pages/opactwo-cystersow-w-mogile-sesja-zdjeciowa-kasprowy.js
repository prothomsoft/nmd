import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0004.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0006.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0020.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0022.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0039.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0040.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0062.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0073.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0075.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0078.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0085.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0089.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0092.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0096.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0104.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0105.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0107.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0108.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0109.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0112.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0115.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0155.jpg", height: 295 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0134.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0156.jpg", height: 332 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0146.jpg", height: 851 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0147.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/09/opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_wierch_0154.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_start.jpg"}
                    images={images}
                    headTitle={"Opactwo Cysters??w w Mogile i sesja zdj??ciowa Kasprowy Wierch"}
                    headDescription={"Kasprowy Wierch, Czarny Staw G??sienicowy i ceremonia w Klasztorze Opactwa Cysters??w w Mogile. W imieniu Anety i Damiana serdecznie zapraszam na mojego bloga."}
                    headKeywords={"opactwo cysters??w mogi??a,sesja zdj??ciowa kasprowy wierch,plener ??lubny czarny staw g??sienicowy"}
                    headUrl={"https://99foto.pl/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    entryContentP1={
                        "Tak, to by?? w??a??nie ten tydzie??, d??ugo zapowiadana pogoda, temperatura i odpowiednio pokolorowane li??cie. Wszystko tego dnia zapowiada??o ??wietny plener w g??rach S??owacji. Zainspirowani zdj??ciami koleg??w fotograf??w, wybrali??my si?? wszyscy po raz pierwszy w pi??kne miejsca, kt??rymi by??y Popradzki Staw i Strbskie Pleso. Pierwsza miejsc??wka, w kt??rej nasz plan dnia podyktowa?? nam post??j to rzeka Poprad, kt??ra przeci????a nasz?? drog?? dojazdow?? do jeziora. Chwila niepewno??ci i ??wietny widok z pewno??ci?? nie do powt??rzenia ju?? nawet nast??pnego dnia, a co dopiero tydzie?? p????niej. Poniewa?? czasu do zachodu s??o??ca by??o du??o, wdrapywali??my si?? przez godzink?? asfaltow?? drog?? w miejsce, kt??re zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne g??ry, du??o ??wietnych kadr??w do wypatrzenia. W drodze powrotnej zrobili??my te?? kilka zdj???? w lesie. Ko??c??wka to szukanie dw??ch kamieni z kadru <a href="https://www.marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina So??nickiego</a> i zachwyt nad jesieni?? o??wietlon?? promieniami zachodz??cego s??o??ca. Na koniec zjedli??my pyszny obiadek w Tatrza??skiej ??omnicy, zrelaksowani i zadowoleni wr??cili??my do naszych dom??w. Polecam to miejsce na plenery i mam nadziej??, ??e ka??dego roku znajdzie si?? jedna para, kt??ra mnie tam zabierze. Mi??ego ogl??dania.'
                    }
                    slug={"opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    title={"OPACTWO CYSTERS??W W MOGILE, SESJA ZDJ??CIOWA KASPROWY - ANETA i DAMIAN"}
                    tags={"Opactwo Cysters??w Mogi??a, Plener ??lubny Czarny Staw G??sienicowy, Sesja zdj??ciowa Kasprowy Wierch"}
                    date={"16 wrze??nia 2017"}
                    menuNames={"ANETA i DAMIAN"}
                    menuTitle={"OPACTWO CYSTERS??W W MOGILE, SESJA ZDJ??CIOWA KASPROWY"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-w-plenerze-park-krajobrazowy-w-ojcowie-i-okolice"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_w_plenerze_park_krajobrazowy_w_ojcowie_i_okolice_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
