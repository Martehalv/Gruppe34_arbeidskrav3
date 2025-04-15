import client from '../sanityClient';

export const fetchMemberBySlug = async (slug) => {
  const query = `*[_type == "teamMember" && slug.current == $slug][0] {
    name,
    role,
    bio,
    image {
      asset -> {
        url
      }
    },
    logs[]->{
      date,
      entry
    }
  }`;
  
  return await client.fetch(query, { slug });
};