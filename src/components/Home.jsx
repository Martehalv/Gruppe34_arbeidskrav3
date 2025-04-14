import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityCli from "../ressurser";

export default function Home() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    sanityCli
      .fetch(
        `*[_type == "name"]{
          name,
          email,
          "imageUrl": image.asset->url,
          slug
        }`
      )
      .then((data) => setMembers(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <h2>Gruppemedlemmer</h2>
      <section id="groupmembers">
        {members.map((member, index) => (
          <article key={index}>
            <Link to={`/member/${member.slug.current}`}>
              <img src={member.imageUrl} alt={member.name} />
              <p>{member.name}</p>
              <p>{member.email}</p>
            </Link>
          </article>
        ))}
      </section>
      <h2>Arbeidslogg</h2>
      <section></section>
    </main>
  );
}
