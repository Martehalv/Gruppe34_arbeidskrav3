import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import "../styles/Layout.scss";

export default function Header() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const query = `*[_type == "teamMember"]{
      name,
      "slug": slug.current
    }`;

    client.fetch(query).then((data) => {
      setMembers(data);
    });
  }, []);

  return (
    <header className="menu">
      <Link to="/" className="team">TEAM 34</Link>
      <nav className="navList">
        <Link to="/">Hjem</Link>
        <span>|</span>
        {members.map((member, index) => (
          <span key={member.slug}>
            <Link to={`/team/${member.slug}`}>{member.name}</Link>
            {index < members.length - 1 && <span> | </span>}
          </span>
        ))}
      </nav>
    </header>
  );
}
