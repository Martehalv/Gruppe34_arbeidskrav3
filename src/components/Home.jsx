import React, { useEffect, useState } from "react";
import { client } from "../sanityClient"; // Importere Sanity-klienten
import LogEntry from "./LogEntry"; // Importere LogEntry-komponenten

export default function Home() {
  const [members, setMembers] = useState([]); // State for å lagre medlemmene

  useEffect(() => {
    const query = `*[_type == "teamMember"]{
      name,
      email,
      image {
        asset -> {
          url
        }
      }
    }`;

    const fetchMembers = async () => {
      const data = await client.fetch(query);
      setMembers(data); // Sett medlemmene i state
    };

    fetchMembers();
  }, []);

  return (
    <main>
      <h2>Gruppemedlemmer</h2>
      <section id="groupmembers">
        {members.length === 0 ? (
          <p>Lasting...</p>
        ) : (
          members.map((member) => (
            <article key={member.name}>
              <img
                src={member.image?.asset?.url || "path/to/default.jpg"}
                alt={member.name}
              />
              <p>{member.name}</p>
              <p>{member.email}</p>
            </article>
          ))
        )}
      </section>

      <LogEntry /> {/* Legg til LogEntry-komponenten her for å vise arbeidsloggen */}
    </main>
  );
}
