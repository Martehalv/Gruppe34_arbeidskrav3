import { useParams } from "react-router-dom";

export default function Resources() {
  const { category } = useParams();

  return (
    <section className="resources">
      <h2>{category}</h2>
      <p>Her kan du hente data fra Sanity basert på kategorien "{category}".</p>
    </section>
  );
}
