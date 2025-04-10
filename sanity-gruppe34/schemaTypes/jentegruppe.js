export const jentegruppe = {
    name: "name",
    title: "Group member",
    type:"document",
    fields: [
        { 
        name:"name",
        title: "tittel",
        type: "string"
        },  
        {
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
              source: 'name',
              slugify: input =>
                input
                  .toLowerCase()
                  .replace(/\s+/g, '-')       // mellomrom → bindestrek
                  .replace(/[åæø]/g, char => (  // æøå → ae oe aa
                    { 'å': 'a', 'ø': 'o', 'æ': 'e' }[char] || char
                  ))
                  .replace(/[^a-z0-9-]/g, '')   // fjern rare tegn
                  .slice(0, 50),
              maxLength: 50,
            },
          },
          {
            name: 'email',
            type: 'string',
            title: 'Email',
          },
          {
            name: 'image',
            type: 'image',
            title: 'Image',
          },
          {
            name: 'bio',
            type: 'text',
            title: 'Biography',
          },
          {
            name: 'interests',
            type: 'array',
            title: 'Interests',
            of: [{ type: 'string' }],
          },
    ]
}