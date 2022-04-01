import React from 'react';
import hotel_mercure_kasprowy_zakopane from "../public/static/portfolio/hotel_mercure_kasprowy_zakopane.jpg";
import bazylika_bozego_ciala_krakow_fotoreportaz_slubny from "../public/static/portfolio/bazylika_bozego_ciala_krakow_fotoreportaz_slubny.jpg";
import plener_slubny_slowacja from "../public/static/portfolio/plener_slubny_slowacja.jpg";
import dworzyszcze_wola_reportaz_slubny_pod_krakowem from "../public/static/portfolio/dworzyszcze_wola_reportaz_slubny_pod_krakowem.jpg";
import plener_slubny_palac_goetzow_brzesko from "../public/static/portfolio/plener_slubny_palac_goetzow_brzesko.jpg";
import dworek_fantazja_skomielna_biala_fotograf from "../public/static/portfolio/dworek_fantazja_skomielna_biala_fotograf.jpg";
import ogrod_botaniczny from "../public/static/portfolio/ogrod_botaniczny.jpg";
import sesja_narzeczenska_klasztor_w_tyncu from "../public/static/portfolio/sesja_narzeczenska_klasztor_w_tyncu.jpg";
import sala_weselna_biala_wilczyca_kocmyrzow from "../public/static/portfolio/sala_weselna_biala_wilczyca_kocmyrzow.jpg";
import Grid from "@mui/material/Grid";
import ImageCard from "../components/imageCard";

const ImageCardGrid = () => {
    return (
        <Grid container direction="row" alignItems="center">
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={hotel_mercure_kasprowy_zakopane}
              imgalt="wesele w zakopanem, hotel mercury kasprowy, zespół ich troje na weselu"
              linkhref="wesele-w-zakopanem-hotel-mercure-kasprowy-ich-troje"
              title="WESELE W ZAKOPANEM"
              names="PATRYCJA i TOMASZ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={bazylika_bozego_ciala_krakow_fotoreportaz_slubny}
              imgalt="bazylika bożego ciała kraków fotoreportaż ślubny"
              linkhref="bazylika-bozego-ciala-krakow-fotoreportaz-slubny"
              title="REPORTAŻ ŚLUBNY KRAKÓW"
              names="ANNA i PIOTR"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={plener_slubny_slowacja}
              imgalt="sesja zdjęciowa w górach"
              linkhref="plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"
              title="SESJA ZDJĘCIOWA W GÓRACH"
              names="MAŁGORZATA i RAFAŁ"
            />
          </Grid>

          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={dworzyszcze_wola_reportaz_slubny_pod_krakowem}
              imgalt="wesele w stylu boho i rustykalnym"
              linkhref="wesele-w-stylu-boho-sala-dworzyszcze-wola-krakow"
              title="WESELE W STYLU RUSTYKALNYM"
              names="SYLWIA i MICHAŁ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={plener_slubny_palac_goetzow_brzesko}
              imgalt="sesja zdjęciowa pałac goetzów brzesko"
              linkhref="sesja-slubna-jesienia-palac-goetzow-okocimskich"
              title="SESJA ŚLUBNA PAŁAC GOETZÓW"
              names="IZABELA i ARKADIUSZ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={dworek_fantazja_skomielna_biala_fotograf}
              imgalt="ślub w stylu glamour"
              linkhref="dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"
              title="ŚLUB W STYLU GLAMOUR"
              names="PATRYCJA i KRZYSZTOF"
            />
          </Grid>

          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={ogrod_botaniczny}
              imgalt="fotograf na wesele kraków"
              linkhref="ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"
              title="FOTOGRAF NA WESELE KRAKÓW"
              names="DAJANA i SYLWESTER"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={sesja_narzeczenska_klasztor_w_tyncu}
              imgalt="sesja ślubna kraków"
              linkhref="park-mogilany-i-moc-buziakow-skapanych-w-promieniach-slonca"
              title="SESJA ŚLUBNA KRAKÓW"
              names="TERESA i ANDRZEJ"
            />
          </Grid>
          <Grid item lg={4} p={1}>
            <ImageCard
              imgsrc={sala_weselna_biala_wilczyca_kocmyrzow}
              imgalt="wesele międzynarodowe, polskie tradycje weselne"
              linkhref="wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"
              title="WESELE MIĘDZYNARODOWE KRAKÓW"
              names="MONIKA i MARTIN"
            />
          </Grid>
        </Grid>
    );
};

export default ImageCardGrid;