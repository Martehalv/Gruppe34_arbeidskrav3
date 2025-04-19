import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For å hente slug fra URL
import { client } from "../sanityClient"; // Importere Sanity-klienten

export default function MemberDetail() {
  const { slug } = useParams(); // Hent slug fra URL
  const [member, setMember] = useState(null); // State for å lagre medlemmet
  const [logs, setLogs] = useState([]); // State for å lagre arbeidsloggen

  useEffect(() => {
    const memberQuery = `*[_type == "teamMember" && slug.current == $slug][0]{
      name,
      email,
      image {
        asset -> {
          url
        }
      },
      bio,
      interests
    }`;

    const logQuery = `*[_type == "logg" && navn == $slug]{
      dato,
      beskrivelse
    }`;

    const fetchMemberData = async () => {
      const memberData = await client.fetch(memberQuery, { slug });
      const logData = await client.fetch(logQuery, { slug });
      setMember(memberData);
      setLogs(logData);
    };

    fetchMemberData();
  }, [slug]);

  if (!member) return <p>Loading...</p>;

  return (
    <div>
      <h2>{member.name}</h2>
      <img src={member.image?.asset?.url || "path/to/default.jpg"} alt={member.name} />
      <p>{member.email}</p>
      <p>{member.bio}</p>
      <h3>Interesser</h3>
      <ul>
        {member.interests?.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>

      <h3>Arbeidslogg</h3>
      <ul>
        {logs.length === 0 ? (
          <p>Ingen arbeidslogg tilgjengelig</p>
        ) : (
          logs.map((log) => (
            <li key={log.dato}>
              <strong>{log.dato}</strong>: {log.beskrivelse}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
