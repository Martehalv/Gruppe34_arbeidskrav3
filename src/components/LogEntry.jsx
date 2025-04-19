import { useEffect, useState } from "react";
import { client } from "../sanityClient"; // Importere Sanity-klienten

export default function LogEntry() {
  const [logs, setLogs] = useState([]); // State for å lagre loggene

  useEffect(() => {
    const logQuery = `*[_type == "logg"]{
      dato,
      navn,
      beskrivelse
    }`;

    const fetchLogs = async () => {
      const data = await client.fetch(logQuery); // Hente loggdata fra Sanity
      console.log(data); // Logg dataene for feilsøking
      setLogs(data); // Sett loggene i state
    };

    fetchLogs(); // Kall funksjonen for å hente loggene
  }, []); // useEffect kjøres kun én gang ved første render

  return (
    <section>
      <h2>Arbeidslogg</h2>
      <ul>
        {logs.length === 0 ? (
          <p>Ingen loggdata tilgjengelig</p>
        ) : (
          logs.map((log) => (
            <li key={log.dato}>
              <strong>{log.navn}</strong> - {log.dato}: {log.beskrivelse}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
