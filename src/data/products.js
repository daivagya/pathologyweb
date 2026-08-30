import productsData from "./products.json";

const categoryMeta = {
  hematology: {
    title: "Hematology",
    description:
      "Advanced 3-part and 5-part differential analyzers for high-throughput labs.",
    blurb:
      "Precision blood counting for CBC, 5-part differentials and NRBC enumeration — engineered for core and reference laboratories.",
  },
  biochemistry: {
    title: "Biochemistry",
    description:
      "Fully automated clinical chemistry systems with precise reagent handling.",
    blurb:
      "Random-access clinical chemistry and serum testing with ISE integration, built for accuracy at every workload.",
  },
  immunology: {
    title: "Immunology",
    description: "High-sensitivity chemiluminescence systems.",
    blurb:
      "Random-access chemiluminescent immunoassay (CLIA) platforms for hormones, tumor markers and cardiac panels.",
  },
};

export const categories = Object.keys(categoryMeta)
  .map((slug) => {
    const models = productsData.filter((product) => product.category === slug);
    if (models.length === 0) return null;
    return {
      slug,
      title: categoryMeta[slug].title,
      count: `${String(models.length).padStart(2, "0")} Models`,
      description: categoryMeta[slug].description,
      blurb: categoryMeta[slug].blurb,
      models,
    };
  })
  .filter(Boolean);

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getCategorySlugs() {
  return categories.map((category) => ({ category: category.slug }));
}