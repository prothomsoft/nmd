import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2)
}));

const FaqAccordion = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color="text.secondary">Czy posiadasz zaświadczenie z kurii zezwalające na fotografowanie podczas ślubów?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Tak przeszedłem kurs w kurii i posiadam zaświadczenie zezwalające na wykonanie reportażu z uroczystości ślubnej.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography color="text.secondary">Czy posiadasz zapasowy aparat w przypadku awarii?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Zawsze posiadam drugi aparat na wypadek awarii.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography color="text.secondary">Czy fotoksiążka jest wliczona w cenę pakietu i czy można zobaczyć przykładową książkę przed ślubem?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            Fotoksiążka jest produktem finalnym naszej współpracy i jest wliczona w cenę pakietu. Przykładową książkę możecie zobaczyć na spotkaniu ze mną w Krakowie. Na spotkaniu odpowiem też na
            wszystkie Wasze pytania.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography color="text.secondary">Jakiego sprzętu fotograficznego używasz w swojej pracy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Zdjęcia wykonuję bezlusterkowymi aparatami pełnoklatkowymi systemu Nikon Z i jasnymi obiektywami Nikkor Z.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography color="text.secondary">Do której godziny jesteś na weselu?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Na weselu jestem do godziny pierwszej w nocy. Wszystkie najważniejsze atrakcje wieczoru dzieją się do tej chwili.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography color="text.secondary">Na jakim terenie pracujesz?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Mieszkam w Krakowie. Mogę jednak uwiecznić Waszą uroczystość (lub też wykonać sesję plenerową) w dowolnym miejscu w południowej Polsce.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography color="text.secondary">Ile wynosi dopłata za dojazd?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          W moim pakiecie oferuję dojazd w dniu ślubu GRATIS. Jeżeli natomiast Wasz plener ślubny odbywa się w oddalonym od Krakowa miejscu to musimy doliczyć dopłatę za dojazd 1,22km/1PLN (zawsze jeździmy moim autem).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography color="text.secondary">Czy obrabiasz zdjęcia?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Oczywiście. Każde zdjęcie wykonuję w formacie RAW - traktuję je jako półprodukt, z którego powstanie fotografia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography color="text.secondary">Czy ze zdjęć, które od Ciebie dostaniemy możemy sobie wywołać odbitki o dużym rozmiarze?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Tak, zdjęcia otrzymujecie w dużej rozdzielczości 3520px (300 dpi).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel10"} onChange={handleChange("panel10")}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography color="text.secondary">Kiedy robisz plener ślubny?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Z reguły sesję ślubną robimy w tygodniu po Waszym ślubie, jednak bez problemu przesuniemy ją na termin późniejszy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography color="text.secondary">Jak długo trwa plener? Jak wygląda taka sesja plenerowa?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Na sesję zarezerwujcie sobie minimum trzy godziny - wszystko zależy od tego gdzie jest sesja i czy musimy daleko dojeżdżać.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
        <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography color="text.secondary">Czy mówisz w innych językach, niż polski?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Tak, swobodnie porozumiewam się w języku angielskim. Mam zdany First Certificate in English.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel13"} onChange={handleChange("panel13")}>
        <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
          <Typography color="text.secondary">Czy prowadzisz legalną działalność gospodarczą?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Tak, mam zarejestrowaną działalność gospodarczą i odprowadzam podatki.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel14"} onChange={handleChange("panel14")}>
        <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
          <Typography color="text.secondary">Jak wcześnie trzeba rezerwować termin?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
          Zasada jest prosta, im szybciej tym lepiej, jeżeli jesteście zdecydowani abym to ja uwiecznił Waszą uroczystość - wypełnijcie poniższy formularz i skontaktujcie się ze mną jak najwcześniej. Warunkiem pełnej rezerwacji terminu jest podpisanie umowy.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
