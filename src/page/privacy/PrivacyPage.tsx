import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const PrivacyPage: FC = () => (
  <PrivacyWrapper>
    <Typography variant="h4">Datenschutzerklärung</Typography>

    <Typography variant="h5">1. Datenschutz auf einen Blick</Typography>
    <section>
      <Typography variant="h6" gutterBottom>
        Allgemeine Hinweise
      </Typography>
      <Typography gutterBottom>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </Typography>
    </section>
    <FaqWrapper>
      <Typography variant="h6" gutterBottom>
        Datenerfassung auf dieser Website
      </Typography>
      <section>
        <Typography gutterBottom>
          <strong>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </strong>
        </Typography>
        <Typography gutterBottom>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
        </Typography>
      </section>
      <section>
        <Typography gutterBottom>
          <strong>Wie erfassen wir Ihre Daten?</strong>
        </Typography>
        <Typography gutterBottom>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </Typography>
        <Typography gutterBottom>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie diese Website betreten.
        </Typography>
      </section>
      <section>
        <Typography gutterBottom>
          <strong>Wofür nutzen wir Ihre Daten?</strong>
        </Typography>
        <Typography gutterBottom>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </Typography>
      </section>
      <section>
        <Typography gutterBottom>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
        </Typography>
        <Typography gutterBottom>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </Typography>
        <Typography gutterBottom>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
        </Typography>
      </section>
    </FaqWrapper>
    <section>
      <Typography variant="h6" gutterBottom>
        Analyse-Tools und Tools von Drittanbietern
      </Typography>
      <Typography gutterBottom>
        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
        ausgewertet werden. Das geschieht vor allem mit Cookies und mit
        sogenannten Analyseprogrammen.
      </Typography>
      <Typography gutterBottom>
        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der
        folgenden Datenschutzerklärung.
      </Typography>
    </section>

    <Typography variant="h5">
      2. Hosting und Content Delivery Networks (CDN)
    </Typography>
    <section>
      <Typography variant="h6" gutterBottom>
        Externes Hosting
      </Typography>
      <Typography gutterBottom>
        Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
        Die personenbezogenen Daten, die auf dieser Website erfasst werden,
        werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
        v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
        Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige
        Daten, die über eine Website generiert werden, handeln.
      </Typography>
      <Typography gutterBottom>
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
        gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
        lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
        Bereitstellung unseres Online-Angebots durch einen professionellen
        Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
      </Typography>
      <Typography gutterBottom>
        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
        Erfüllung seiner Leistungspflichten erforderlich ist und unsere
        Weisungen in Bezug auf diese Daten befolgen.
      </Typography>
    </section>

    <Typography variant="h5">
      3. Allgemeine Hinweise und Pflichtinformationen
    </Typography>
    <section>
      <Typography variant="h6" gutterBottom>
        Datenschutz
      </Typography>
      <Typography gutterBottom>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </Typography>
      <Typography gutterBottom>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </Typography>
      <Typography gutterBottom>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </Typography>
    </section>
    {/*TODO: richtige Daten angeben */}
    <section>
      <Typography variant="h6" gutterBottom>
        Hinweis zur verantwortlichen Stelle
      </Typography>
      <Typography gutterBottom>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </Typography>
      <Typography gutterBottom>
        Beispielfirma
        <br />
        Musterweg 10
        <br />
        90210 Musterstadt
      </Typography>
      <Typography gutterBottom>
        Telefon: +49 (0) 123 44 55 66
        <br />
        E-Mail: info@beispielfirma.de
      </Typography>
      <Typography gutterBottom>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
        Ä.) entscheidet.
      </Typography>
    </section>
    <section>
      <Typography variant="h6" gutterBottom>
        Widerruf Ihrer Einwilligung zur Datenverarbeitung
      </Typography>
      <Typography gutterBottom>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
        Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
        jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an
        uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
        bleibt vom Widerruf unberührt.
      </Typography>
    </section>
    <section>
      <Typography variant="h6" gutterBottom>
        Beschwerderecht bei der zuständigen Aufsichtsbehörde
      </Typography>
      <Typography gutterBottom>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
        Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
        Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
        des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
        Rechtsbehelfe.
      </Typography>
    </section>
    <section>
      <Typography variant="h6" gutterBottom>
        Recht auf Datenübertragbarkeit
      </Typography>
      <Typography gutterBottom>
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
        oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
        an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
        Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </Typography>
    </section>
    <section>
      <Typography variant="h6" gutterBottom>
        SSL- bzw. TLS-Verschlüsselung
      </Typography>
      <Typography gutterBottom>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers von "http://" auf "https://" wechselt
        und an dem Schloss-Symbol in Ihrer Browserzeile.
      </Typography>
      <Typography gutterBottom>
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
        die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </Typography>
    </section>
    <section>
      <Typography variant="h6" gutterBottom>
        Auskunft, Löschung und Berichtigung
      </Typography>
      <Typography gutterBottom>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
        dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
        Daten können Sie sich jederzeit unter der im Impressum angegebenen
        Adresse an uns wenden.
      </Typography>
    </section>
    <section>
      <Typography variant="h6" gutterBottom>
        Recht auf Einschränkung der Verarbeitung
      </Typography>
      <Typography gutterBottom>
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
        unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf
        Einschränkung der Verarbeitung besteht in folgenden Fällen:
      </Typography>
      <ul>
        <li>
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
          Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
          überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>
        <li>
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
          geschah/geschieht, können Sie statt der Löschung die Einschränkung der
          Datenverarbeitung verlangen.
        </li>
        <li>
          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
          jedoch zur Ausübung, Verteidigung oder Geltendmachung von
          Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>
        <li>
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
          muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
          werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
          haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </li>
      </ul>
      <Typography gutterBottom>
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
        haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
        Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
        natürlichen oder juristischen Person oder aus Gründen eines wichtigen
        öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
        verarbeitet werden.
      </Typography>
    </section>

    <Typography variant="h5">4. Datenerfassung auf dieser Website</Typography>
    <section>
      <Typography variant="h6" gutterBottom>
        Server-Log-Dateien
      </Typography>
      <Typography gutterBottom>
        Der Provider der Seiten erhebt und speichert automatisch Informationen
        in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
        übermittelt. Dies sind:
      </Typography>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <Typography gutterBottom>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen.
      </Typography>
      <Typography gutterBottom>
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
        f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        technisch fehlerfreien Darstellung und der Optimierung seiner Website –
        hierzu müssen die Server-Log-Files erfasst werden.
      </Typography>
    </section>

    <Typography variant="h5">5. Plugins und Tools</Typography>
    <section>
      <Typography variant="h6" gutterBottom>
        Google Web Fonts
      </Typography>
      <Typography gutterBottom>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
        genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf
        einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
        Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
      </Typography>
      <Typography gutterBottom>
        Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den
        Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber,
        dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung
        von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
        DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der
        einheitlichen Darstellung des Schriftbildes auf seiner Webseite. Sofern
        eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung
        zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich
        auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
        jederzeit widerrufbar.
      </Typography>
      <Typography gutterBottom>
        Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift
        von Ihrem Computer genutzt.
      </Typography>
      <Typography gutterBottom>
        Weitere Informationen zu Google Web Fonts finden Sie unter{' '}
        <StyledLink
          href="https://developers.google.com/fonts/faq"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://developers.google.com/fonts/faq
        </StyledLink>{' '}
        und in der Datenschutzerklärung von Google:{' '}
        <StyledLink
          href="https://policies.google.com/privacy?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/privacy?hl=de
        </StyledLink>
        .
      </Typography>
    </section>
  </PrivacyWrapper>
);

const PrivacyWrapper = styled.main`
  max-width: 800px;
  padding: 3rem;
  justify-self: center;
  display: grid;
  gap: 1.5rem;
  @media (max-width: 400px) {
    padding: 3rem 2rem;
  }
`;

const FaqWrapper = styled.section`
  display: grid;
  gap: 0.5rem;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
