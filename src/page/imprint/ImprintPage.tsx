import React, { FC, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const ImprintPage: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <ImprintWrapper>
      <Typography variant="h3">Impressum</Typography>

      <Typography variant="h4">Angaben gemäß § 5 TGM</Typography>

      <section>
        {/*TODO: richtige Adresse hinterlegen*/}
        <Typography variant="h5" gutterBottom>
          Adresse
        </Typography>
        <Typography variant="body1">Max Mustermann</Typography>
        <Typography variant="body1">Musterstraße 40</Typography>
        <Typography variant="body1">94242 Musterstadt</Typography>
      </section>

      <section>
        {/*TODO: richtige Kontaktdaten hinterlegen*/}
        <Typography variant="h5" gutterBottom>
          Kontakt
        </Typography>
        <ContactWrapper>
          <Typography>Telefon:</Typography>
          <Typography variant="body1">+49 (0) 151 42424242</Typography>
          <Typography variant="body1">E-Mail:</Typography>
          <Typography variant="body1">mustermann@musterfirma.de</Typography>
        </ContactWrapper>
      </section>

      <section>
        <Typography variant="h6" gutterBottom>
          Haftung für Inhalte
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </Typography>
        <Typography variant="body1" align="justify">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </Typography>
      </section>

      <section>
        <Typography variant="h6" gutterBottom>
          Haftung für Links
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </Typography>
        <Typography variant="body1" align="justify">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </Typography>
      </section>

      <section>
        <Typography variant="h6" gutterBottom>
          Urheberrecht
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </Typography>
        <Typography variant="body1" align="justify">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </Typography>
      </section>
    </ImprintWrapper>
  );
};

const ImprintWrapper = styled.main`
  max-width: 800px;
  padding: 3rem;
  justify-self: center;
  display: grid;
  gap: 1.5rem;
  @media (max-width: 400px) {
    padding: 3rem 2rem;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: auto 1fr;
  @media (max-width: 360px) {
    grid-template-columns: auto;
  }
`;
