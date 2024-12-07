import Cola from "../../assets/evanscola.png";
import Bela from "../../assets/evansbela.png";
import Vita from "../../assets/evansvita.png";
import Calci from "../../assets/evanscalci.png";
import Mila from "../../assets/evansmila.png";

export const PRODUCTS = [
  {
    id: 1,
    name: "Organic Banana Fertilizer",
    description:
      "A natural fertilizer made from organic banana residues, rich in potassium and nitrogen. Ideal for improving soil structure and promoting healthy plant growth.",
    image: Cola,
    nutrients: [
      { symbol: "K", name: "Potassium" },
      { symbol: "N", name: "Nitrogen" },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Organic Moringa Compost",
        description:
          "Moringa leaves, known for their high nutrient content, are turned into a compost that enhances soil fertility and promotes sustainable farming practices.",
        image: Cola, // Replace with actual image path
      },
      {
        id: 2,
        name: "Citrus Peel Organic Fertilizer",
        description:
          "Made from composted citrus peels, this natural fertilizer adds vital minerals to the soil, improving water retention and boosting plant health.",
        image: Bela, // Replace with actual image path
      },
      {
        id: 3,
        name: "Animal Manure Organic Fertilizer",
        description:
          "This slow-release organic fertilizer is made from composted animal manure, offering balanced nutrition for crops and improving soil structure over time.",
        image: Cola, // Replace with actual image path
      },
    ],
  },
  {
    id: 2,
    name: "Moringa Leaf Compost",
    description:
      "An organic compost made from nutrient-dense Moringa leaves, offering balanced nutrition for sustainable farming. Enhances soil fertility and boosts crop resilience.",
    image: Mila,
    nutrients: [
      { symbol: "K", name: "Potassium" },
      { symbol: "N", name: "Nitrogen" },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Organic Moringa Compost",
        description:
          "Moringa leaves, known for their high nutrient content, are turned into a compost that enhances soil fertility and promotes sustainable farming practices.",
        image: Cola, // Replace with actual image path
      },
      {
        id: 2,
        name: "Citrus Peel Organic Fertilizer",
        description:
          "Made from composted citrus peels, this natural fertilizer adds vital minerals to the soil, improving water retention and boosting plant health.",
        image: Bela, // Replace with actual image path
      },
      {
        id: 3,
        name: "Animal Manure Organic Fertilizer",
        description:
          "This slow-release organic fertilizer is made from composted animal manure, offering balanced nutrition for crops and improving soil structure over time.",
        image: Cola, // Replace with actual image path
      },
    ],
  },
  {
    id: 3,
    name: "Citrus-Based Organic Fertilizer",
    description:
      "Derived from orange peels and citrus residues, this fertilizer enriches soil with natural nutrients and supports microbial activity for healthier yields.",
    image: Vita,
    nutrients: [
      { symbol: "K", name: "Potassium" },
      { symbol: "N", name: "Nitrogen" },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Organic Moringa Compost",
        description:
          "Moringa leaves, known for their high nutrient content, are turned into a compost that enhances soil fertility and promotes sustainable farming practices.",
        image: Cola, // Replace with actual image path
      },
      {
        id: 2,
        name: "Citrus Peel Organic Fertilizer",
        description:
          "Made from composted citrus peels, this natural fertilizer adds vital minerals to the soil, improving water retention and boosting plant health.",
        image: Bela, // Replace with actual image path
      },
      {
        id: 3,
        name: "Animal Manure Organic Fertilizer",
        description:
          "This slow-release organic fertilizer is made from composted animal manure, offering balanced nutrition for crops and improving soil structure over time.",
        image: Cola, // Replace with actual image path
      },
    ],
  },
  {
    id: 4,
    name: "Animal Manure Compost",
    description:
      "A traditional organic fertilizer made from composted animal droppings. Provides a slow release of essential nutrients, improving soil texture and fertility naturally.",
    image: Calci,
    nutrients: [
      { symbol: "K", name: "Potassium" },
      { symbol: "N", name: "Nitrogen" },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Organic Moringa Compost",
        description:
          "Moringa leaves, known for their high nutrient content, are turned into a compost that enhances soil fertility and promotes sustainable farming practices.",
        image: Cola, // Replace with actual image path
      },
      {
        id: 2,
        name: "Citrus Peel Organic Fertilizer",
        description:
          "Made from composted citrus peels, this natural fertilizer adds vital minerals to the soil, improving water retention and boosting plant health.",
        image: Bela, // Replace with actual image path
      },
      {
        id: 3,
        name: "Animal Manure Organic Fertilizer",
        description:
          "This slow-release organic fertilizer is made from composted animal manure, offering balanced nutrition for crops and improving soil structure over time.",
        image: Cola, // Replace with actual image path
      },
    ],
  },
];
