import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../sanityClient"; 
import "../styles/memberDetail.css"; // Importere den nye CSS-filen fra 'src/styles'


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
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-left">
          <img
            src={member.image?.asset?.url || "path/to/default.jpg"}
            alt={member.name}
            className="profile-image"
          />
        </div>
  
        <div className="profile-right">
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p className="bio">{member.bio}</p>
  
          <div className="interests">
            <h3>Interesser</h3>
            <ul>
              {member.interests?.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  
      <div className="log-entry">
        <h3>Arbeidslogg</h3>
        {logs.length === 0 ? (
          <p>Ingen arbeidslogg tilgjengelig</p>
        ) : (
          <ul>
            {logs.map((log) => (
              <li key={log.dato}>
                <strong>{log.dato}</strong>: {log.beskrivelse}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )};