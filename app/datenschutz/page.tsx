import React from 'react';

interface DatenSchutzProps {
  // Define your DatenSchutzProps here
}

const DatenSchutz: React.FC<DatenSchutzProps> = ({}) => {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 text-center">
        {/* Datenschutzerklärung für Google Maps */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Datenschutzerklärung für die Nutzung von Google Maps</h2>
          <p className="mb-4">
            Diese Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen.
            Bei der Nutzung von Google Maps werden von Google (Google Inc., 1600 Amphitheatre Parkway,
            Mountain View, California, 94043) auch Daten über die Nutzung der Maps-Funktionen durch
            Besucher der Webseiten erhoben, verarbeitet und genutzt.
          </p>
          <p className="mb-4">
            Durch die Nutzung dieser Webseite erklären Sie sich mit der Erfassung, Bearbeitung sowie der Nutzung
            der automatisiert erhobenen Daten durch Google, einen seiner Vertreter oder Drittanbieter einverstanden.
            Die Nutzungsbedingungen von Google Maps finden Sie unter folgendem Link:{" "}
            <a
              href="https://www.google.com/intl/de_de/help/terms_maps.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Nutzungsbedingungen für Google Maps
            </a>.
          </p>
          <p className="mb-4">
            Weitere Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Datenschutzerklärung
            </a>.
          </p>
          <p>
            Wenn Sie nicht möchten, dass Google über diese Webseite Daten über Sie erhebt, verarbeitet oder nutzt,
            können Sie in den Einstellungen Ihres Browsers JavaScript deaktivieren. In diesem Fall kann die
            Kartenanzeige jedoch nicht genutzt werden.
          </p>
        </section>

       
      </div>
    </div>
  );
};

export default DatenSchutz;