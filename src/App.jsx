import React from 'react';
import styled from 'styled-components';
import Experience from './components/Experience';
import ExperienceList from './components/ExperienceList';
import Presentation from './components/Presentation';

const Main = styled.div`
margin: 0;
padding: 0;
`;

const experiences = [
  {
  date: '2010-2020',
  entreprise: 'Leroux & Lotz',
  poste: 'Technicien préparateur',
  description: "Analyse des plans BE, Lancement d’approvisionnements anticipés, Etablissement des suggestions d’achat et sous-traitance, Validation technique des offres fournisseurs, Lancement de demandes de fabrication atelier, Etablissement des listes de colisage, Suivi des appros atelier et chantier"
},
{
  date: '2006-2009',
  entreprise: 'GEA Btt',
  poste: 'Technicien préparateur',
  description: "Analyse des spécifications clients (EN/FR), Connaissance des codes de construction matière, Rédaction des réquisitions matière, Validation des offres techniques des fournisseurs/sous-traitants, Mise à jour de spécifications"
},
{
  date: '2005-2006',
  entreprise: 'Saunier Duval ECC',
  poste: 'Rédacteur technique',
  description: "Rédaction de notices de kits de changement de gaz, Prise en charge des projets de sous-traitance (impression des notices)"
},
{
  date: '2002-2004',
  entreprise: 'S.A. S.E.M.T. Pielstick',
  poste: 'Rédacteur technique',
  description: "Rédaction de documentation technique de moteurs diesel "
},
{
  date: '2000-2001',
  entreprise: 'S.A. A&G Jallais',
  poste: 'Préparateur',
  description: "Suivi chantier, avancements, approvisionnement matière"
}
]



function App() {
  return (
    <Main className="App">
      <Presentation />
      <ExperienceList />
    </Main>
  );
}

export default App;
