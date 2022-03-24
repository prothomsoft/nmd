import SinglePage from '../components/singlePage';

const HistoriaPageComponent = () => {

      return <SinglePage
          headTitle={"Reportaż ślubny i sesja plenerowa, portfolio fotografa ślubnego"}
          headDescription={"Portfolio fotografa ślubnego, w którym zobaczycie wybrane reportaże ślubne i sesje plenerowe. Zapraszam."}
          headKeywords={"reportaże ślubne i sesje plenerowe, portfolio fotografa ślubnego"}
          headUrl={"https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich/"}
          componentContentName={"historia"}
          backgroundImage={"url(" + process.env.staticImagesPath + "sesja_slubna_jesienia.jpg)"}
          leadNames={"IZABELA i ARKADIUSZ"}
          leadTitle={"SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW"}
          leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
          leadImage={"url(" + process.env.staticImagesPath + "sesja_slubna_jesienia.jpg)"}
      />  
}

export default HistoriaPageComponent;