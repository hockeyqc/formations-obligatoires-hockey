const FORMATIONS = {
  RES: "La Relance - Hockey Canada",
  PSSH: "Soigneur / PSSH - Programme de sécurité de Hockey Canada niveau 1",
  SS: "Santé et sécurité",
  E1: "Formation Entraîneur 1",
  E2: "Formation Entraîneur 2",
  DEVF: "Formation Développement 1",
  DEVC: "Certification Développement 1",
  HPF: "Formation HP 1",
  HPC: "Certification HP 1",
  MEC: "Entraîneur - Compétences de Hockey Canada Mise en échec - FRANÇAIS",
  BASE: "Toute formation de base de Hockey Canada est acceptée (E1 ou D1)",
  VCJ: "Vérification d’antécédents judiciaires (VCJ)",
};

const ADMIN_REQUIREMENT_KEYS = ["VCJ"];

const ROLES = {
  HC: "Entraîneur-chef",
  AS: "Entraîneur-adjoint",
  FIRST: "1er entraîneur-adjoint",
  OTHER: "Autres entraîneurs-adjoints",
  THER: "Thérapeute sportif",
  EQUIP: "Préposé à l’équipement",
  PSS: "Préposé à la santé et à la sécurité",
  MGR: "Gérant",
  ADAPT_OTHER: "Autres intervenants",
  PLAYER_COMPANION: "Accompagnateur de joueur",
  MGR_RESP: "Gérant - Responsable",
  TEACHER: "Personnel enseignant",
  SCHOOL_STAFF: "Autre personnel de l’école",
  MANDATEE: "Mandataire",
};

const ROLE_ORDER = [
  "HC",
  "AS",
  "FIRST",
  "OTHER",
  "THER",
  "EQUIP",
  "PSS",
  "MGR",
  "ADAPT_OTHER",
  "PLAYER_COMPANION",
  "MGR_RESP",
  "TEACHER",
  "SCHOOL_STAFF",
  "MANDATEE",
];

const standard = (safety, headCoach, assistantCoach) => ({
  HC: headCoach,
  AS: assistantCoach,
  PSS: ["RES", safety],
  MGR: ["RES"],
});

const fiveRoles = (headCoach, assistantCoach) => ({
  HC: headCoach,
  AS: assistantCoach,
  THER: ["RES"],
  PSS: ["RES", "PSSH"],
  MGR: ["RES"],
});

const entry = (division, classes) => ({ division, classes });

const FORMATION_GROUPS = [
  // Hockey mixte
  {
    hockey: "Mixte",
    entries: [
      entry("M7", ["A", "B", "C", "D"]),
      entry("M9", ["A", "B", "C", "D"]),
    ],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E1"],
      ["RES", "E1"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M11", ["AA", "BB"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M11", ["A", "B", "C"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M12", ["D1"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M13", ["AAA Élite", "AAA"])],
    roles: fiveRoles(
      ["RES", "PSSH", "DEVF", "DEVC", "MEC"],
      ["RES", "DEVF"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M13", ["AA", "D1", "D1R"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "MEC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M13", ["A", "B", "C", "D2", "D3"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M14", ["D3"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M15", ["AAA Élite", "AAA"])],
    roles: fiveRoles(
      ["RES", "PSSH", "HPF", "HPC", "MEC"],
      ["RES", "DEVF", "DEVC"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M15", ["AA", "D1", "D1R", "D2"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "DEVC", "MEC"],
      ["RES", "DEVF"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M15", ["A", "B", "D3"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2", "MEC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M17", ["AAA"])],
    roles: fiveRoles(
      ["RES", "PSSH", "HPF", "HPC", "MEC"],
      ["RES", "DEVF", "DEVC"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M17 / M19", ["AA"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "DEVC", "MEC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M17 / M19", ["A", "B"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2", "MEC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M18", ["D1"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "HPF", "HPC", "MEC"],
      ["RES", "DEVF", "DEVC"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M18", ["D1R", "D2"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "DEVC", "MEC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("M18", ["D3"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2", "MEC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("CSSHL", ["Prep-Varsity"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "HPF", "HPC", "MEC"],
      ["RES", "DEVF", "DEVC"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("Junior - Senior", ["B"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "MEC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("Junior - Senior", ["C", "D"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2", "MEC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Mixte",
    entries: [entry("Collégial - Universitaire", ["D1"])],
    roles: {
      HC: ["RES", "PSSH", "HPF", "HPC", "MEC"],
      FIRST: ["RES", "PSSH", "HPF", "HPC"],
      OTHER: ["RES", "DEVF", "DEVC"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "PSSH"],
      MGR: ["RES"],
    },
  },
  {
    hockey: "Mixte",
    entries: [entry("Collégial - Universitaire", ["D2"])],
    roles: {
      HC: ["RES", "PSSH", "HPF", "HPC", "MEC"],
      AS: ["RES", "DEVF", "DEVC"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "PSSH"],
      MGR: ["RES"],
    },
  },
  {
    hockey: "Mixte",
    entries: [
      entry("LHJMQ - LHJAAAQ - M18 AAA", ["Sans objet"]),
    ],
    roles: {
      HC: ["RES", "PSSH", "HPF", "HPC", "MEC"],
      FIRST: ["RES", "PSSH", "HPF", "HPC"],
      OTHER: ["RES"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "PSSH"],
      MGR: ["RES"],
    },
  },

  // Hockey féminin : logique existante conservée.
  {
    hockey: "Féminin",
    entries: [
      entry("M7", ["1", "2", "3", "4"]),
      entry("M9", ["A", "B", "C"]),
    ],
    roles: standard("SS", ["RES", "SS", "E1"], ["RES", "E1"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("M12", ["AA"])],
    roles: standard("SS", ["RES", "SS", "DEVF"], ["RES", "E2"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("M12", ["A", "B"])],
    roles: standard("SS", ["RES", "SS", "E2"], ["RES", "E2"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("M13", ["AAA"])],
    roles: standard(
      "SS",
      ["RES", "SS", "DEVF", "MEC"],
      ["RES", "DEVF", "MEC"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M15", ["AAA"])],
    roles: standard(
      "SS",
      ["RES", "SS", "DEVF", "DEVC", "MEC"],
      ["RES", "DEVF", "MEC"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M15", ["AA"])],
    roles: standard("SS", ["RES", "SS", "DEVF"], ["RES", "E2"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("M15", ["A", "B"])],
    roles: standard("SS", ["RES", "SS", "E2"], ["RES", "E2"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("M18", ["AAA"])],
    roles: {
      HC: ["RES", "SS", "HPF", "HPC", "MEC"],
      FIRST: ["RES", "DEVF", "DEVC", "MEC"],
      OTHER: ["RES", "DEVF", "MEC"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "SS"],
      MGR: ["RES"],
    },
  },
  {
    hockey: "Féminin",
    entries: [entry("M18", ["AA"])],
    roles: standard("SS", ["RES", "SS", "DEVF"], ["RES", "E2"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("M18", ["A", "B"])],
    roles: standard("SS", ["RES", "SS", "E2"], ["RES", "E2"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("Junior", ["A"])],
    roles: standard("SS", ["RES", "SS", "DEVF"], ["RES", "E2"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("Junior", ["B"])],
    roles: standard("SS", ["RES", "SS", "E2"], ["RES", "E2"]),
  },
  {
    hockey: "Féminin",
    entries: [entry("Collégial - U Sports", ["D1"])],
    roles: {
      HC: ["RES", "SS", "HPF", "HPC", "MEC"],
      FIRST: ["RES", "HPF", "HPC", "MEC"],
      OTHER: ["RES", "DEVF", "DEVC", "MEC"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "SS"],
      MGR: ["RES"],
    },
  },
  {
    hockey: "Féminin",
    entries: [entry("Collégial - U Sports", ["D2"])],
    roles: {
      HC: ["RES", "SS", "HPF", "HPC", "MEC"],
      FIRST: ["RES", "DEVF", "DEVC", "MEC"],
      OTHER: ["RES", "E2", "MEC"],
      THER: ["RES"],
      PSS: ["RES", "SS"],
      MGR: ["RES"],
    },
  },

  // Hockey adapté
  {
    hockey: "Hockey adapté",
    entries: [entry("Hockey local - Hockey adapté", ["Groupe 1"])],
    roles: {
      HC: ["VCJ", "RES", "PSSH", "E1"],
    },
  },
  {
    hockey: "Hockey adapté",
    entries: [
      entry("Hockey local - Hockey adapté", ["Groupe 2", "Groupe 3"]),
    ],
    roles: {
      HC: ["VCJ", "RES", "PSSH", "E2"],
    },
  },
  {
    hockey: "Hockey adapté",
    entries: [entry("Hockey local - Hockey adapté", ["Tous"])],
    roles: {
      ADAPT_OTHER: ["VCJ", "RES"],
      PSS: ["VCJ", "RES", "PSSH"],
      PLAYER_COMPANION: ["VCJ"],
      MGR_RESP: ["VCJ", "RES"],
    },
  },
  {
    hockey: "Hockey adapté",
    entries: [entry("D4", ["Personne responsable (animateur de groupe)"])],
    roles: {
      TEACHER: ["VCJ", "RES", "PSSH"],
      SCHOOL_STAFF: ["VCJ", "RES", "PSSH", "BASE"],
      MANDATEE: ["VCJ", "RES", "PSSH", "BASE"],
    },
  },
  {
    hockey: "Hockey adapté",
    entries: [entry("D4", ["Autres accompagnateurs/animateurs"])],
    roles: {
      TEACHER: ["VCJ", "RES"],
      SCHOOL_STAFF: ["VCJ", "RES"],
      MANDATEE: ["VCJ", "RES"],
    },
  },

  // Parahockey
  {
    hockey: "Parahockey",
    entries: [entry("Parahockey", ["Élite"])],
    roles: {
      HC: ["RES", "PSSH", "HPF", "HPC", "MEC"],
      FIRST: ["RES", "DEVF", "DEVC"],
      OTHER: ["RES"],
      THER: ["RES"],
      EQUIP: ["RES", "PSSH"],
      PSS: ["RES"],
      MGR: ["RES"],
    },
  },
  {
    hockey: "Parahockey",
    entries: [entry("Parahockey", ["Développement - SLAM"])],
    roles: {
      HC: ["RES", "PSSH", "DEVF", "MEC"],
      AS: ["RES", "E2"],
      THER: ["RES"],
      EQUIP: ["RES", "PSSH"],
      PSS: ["RES"],
      MGR: ["RES"],
    },
  },
  {
    hockey: "Parahockey",
    entries: [entry("Parahockey", ["Junior"])],
    roles: {
      HC: ["RES", "PSSH", "E2"],
      AS: ["RES", "E2"],
      THER: ["RES"],
      PSS: ["RES", "PSSH"],
      MGR: ["RES"],
    },
  },
];

export {
  ADMIN_REQUIREMENT_KEYS,
  FORMATIONS,
  FORMATION_GROUPS,
  ROLES,
  ROLE_ORDER,
};
