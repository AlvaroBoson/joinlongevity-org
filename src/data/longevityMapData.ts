export const graphData = {
  "nodes": [
    // --- Conferences ---
    { "id": "ARDD 2025", "group": "Conference", "val": 10, "color": "#64BC6E" },
    { "id": "Longevity Summit Dublin", "group": "Conference", "val": 5, "color": "#64BC6E" },
    { "id": "RAAD Festival", "group": "Conference", "val": 5, "color": "#64BC6E" },
    { "id": "SEMAL", "group": "Conference", "val": 4, "color": "#64BC6E" },

    // --- Orgs / Foundations / Companies ---
    { "id": "LEV Foundation", "group": "Organization", "val": 5, "color": "#3B82F6" },
    { "id": "Hevolution", "group": "Organization", "val": 8, "color": "#3B82F6" },
    { "id": "Altos Labs", "group": "Organization", "val": 8, "color": "#3B82F6" },
    { "id": "Buck Institute", "group": "Organization", "val": 5, "color": "#3B82F6" },
    { "id": "SENS Research Foundation", "group": "Organization", "val": 5, "color": "#3B82F6" },
    { "id": "Open Longevity", "group": "Organization", "val": 5, "color": "#3B82F6" },
    { "id": "SAY FOREVER!", "group": "Organization", "val": 4, "color": "#3B82F6" },
    { "id": "VitaDAO", "group": "Organization", "val": 5, "color": "#3B82F6" },
    { "id": "TransVision", "group": "Organization", "val": 5, "color": "#3B82F6" },
    { "id": "HealthGevity", "group": "Organization", "val": 4, "color": "#3B82F6" },
    { "id": "Biohackers Magazine", "group": "Organization", "val": 3, "color": "#3B82F6" },

    // --- Communities / Fellowships ---
    { "id": "Vitalism", "group": "Community", "val": 5, "color": "#A855F7" },
    { "id": "Longevity Biotech Fellowship", "group": "Community", "val": 5, "color": "#A855F7" },
    { "id": "LongX", "group": "Community", "val": 5, "color": "#A855F7" },

    // --- People ---
    { "id": "David Sinclair", "group": "Person", "val": 5, "color": "#F97316" }
  ],
  "links": [
    // --- Formal Links (Partnerships, Funding, Sponsorship) ---
    { "source": "Hevolution", "target": "Buck Institute", "type": "formal" },
    { "source": "Hevolution", "target": "VitaDAO", "type": "formal" },
    { "source": "LEV Foundation", "target": "Longevity Biotech Fellowship", "type": "formal" },
    { "source": "Open Longevity", "target": "SAY FOREVER!", "type": "formal" }, // Shared key person
    { "source": "TransVision", "target": "HealthGevity", "type": "formal" }, // Listed as partner/sponsor

    // --- Social Links (Shared People, Communication, Ideology) ---
    { "source": "LEV Foundation", "target": "Vitalism", "type": "social" },
    { "source": "Vitalism", "target": "LongX", "type": "social" },
    { "source": "Longevity Biotech Fellowship", "target": "LongX", "type": "social" },
    { "source": "VitaDAO", "target": "Vitalism", "type": "social" }, // Via Laurence Ion
    { "source": "SAY FOREVER!", "target": "Longevity Biotech Fellowship", "type": "social" }, // Via Anastasia & Mark

    // --- Ecosystem Links (Conference Hubs, Community Presence) ---
    { "source": "ARDD 2025", "target": "LEV Foundation", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "Longevity Summit Dublin", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "Hevolution", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "Altos Labs", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "Buck Institute", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "SENS Research Foundation", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "Vitalism", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "LongX", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "Longevity Biotech Fellowship", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "Open Longevity", "type": "ecosystem" },
    { "source": "ARDD 2025", "target": "David Sinclair", "type": "ecosystem" },
    { "source": "RAAD Festival", "target": "Altos Labs", "type": "ecosystem" },
    { "source": "RAAD Festival", "target": "Biohackers Magazine", "type": "ecosystem" },
    { "source": "TransVision", "target": "SEMAL", "type": "ecosystem" } // Jose speaks at SEMAL
  ]
};

export const legendData = [
  { group: 'Conference', color: '#64BC6E' },
  { group: 'Organization', color: '#3B82F6' },
  { group: 'Community', color: '#A855F7' },
  { group: 'Person', color: '#F97316' },
]; 