import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importere Link fra react-router-dom
import { client } from "../sanityClient"; // Importere Sanity-klienten

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
      },
      slug // Vi henter slug for å lage en rute til hver profil
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
              <Link to={`/team/${member.slug.current}`}>
                <img
                  src={member.image?.asset?.url || "path/to/default.jpg"}
                  alt={member.name}
                />
                <p>{member.name}</p>
                <p>{member.email}</p>
              </Link>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
