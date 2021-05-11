module.exports = {
  docs: [
    {
      type: "link",
      label: "Home", // The link label
      href: "/", // The internal path
    },
    {
      type: "doc",
      id: "introduction", // Document id (string).
    },
    {
      type: "category",
      label: "Icebreaker Questions",
      collapsed: false,
      items: ["Q-1", "Q-2", "Q-3"],
    },
    {
      type: "category",
      label: "Short Lectures",
      collapsed: false,
      items: [
        "Kaiser",
        "Aharonov",
        "Raamsdonk",
        "D'Amico",
        "Arvidsson-Shukur",
        "Fraser",
        "Carroll",
        "Wallace",
      ],
    },
    {
      type: "category",
      label: "Roundtable Discussions",
      collapsed: false,
      items: ["R-1", "R-2", "R-3"],
    },
    {
      type: "doc",
      id: "discussions", // Document id (string).
    },
    {
      type: "doc",
      id: "acknowledgements", // Document id (string).
    },
  ],
};
