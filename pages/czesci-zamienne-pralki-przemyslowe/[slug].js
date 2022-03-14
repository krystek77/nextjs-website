import { server } from "../../config";
/*
 * http://localhost:3000/czesci-zamienne-pralki-przemyslowe/MDB-03-RA (now: /ID)
 */
function SparePart({ item }) {
  const { title, tags, image, description, weight, net_price, countryOfOrigin, available } = item;
  return <h1>Spare Part - {title}</h1>;
}

export default SparePart;

export async function getStaticPaths(context) {
  const response = await fetch(`${server}/api/spare-parts`);
  const result = await response.json();
  const paths = result.map((item) => {
    return {
      params: {
        slug: item.partID.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const response = await fetch(`${server}/api/spare-parts/${slug}`);
  const result = await response.json();
  return {
    props: {
      item: result,
    },
  };
}
