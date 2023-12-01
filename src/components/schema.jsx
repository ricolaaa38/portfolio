import { JsonLd } from 'react-schemaorg';

function OnlineSchemaOrg() {
  return (
    <JsonLd>
      item=
      {{
        '@context': 'https://schema.org',
        '@type': 'OnlineBusiness',
        email: 'nicolas.cretton@orange.fr',
        name: 'Nicolas Cretton',
        description: 'développeur web',
        url: 'nicolas-cretton.com',
      }}
    </JsonLd>
  );
}
export default OnlineSchemaOrg;
