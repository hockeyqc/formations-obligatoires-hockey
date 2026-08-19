const FORMATIONS = {
  RES: "La Relance - Hockey Canada",
  PSSH: "Soigneur / PSSH - Programme de sécurité de Hockey Canada niveau 1",
  E1: "Formation Entraîneur 1",
  E2: "Formation Entraîneur 2",
  DEVF: "Formation Développement 1",
  DEVC: "Certification Développement 1",
  HPF: "Formation HP 1",
  HPC: "Certification HP 1",
  MEC: "Entraîneur - Compétences de Hockey Canada Mise en échec",
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
  {
    hockey: "Mixte",
    entries: [entry("D4", ["Personne responsable (animateur de groupe)"])],
    roles: {
      TEACHER: ["VCJ", "RES", "PSSH"],
      SCHOOL_STAFF: ["VCJ", "RES", "PSSH", "E2"],
      MANDATEE: ["VCJ", "RES", "PSSH", "E2"],
    },
    formationNotes: {
      SCHOOL_STAFF: {
        E2: "Toute formation de base de Hockey Canada est acceptée (E1 ou D1).",
      },
      MANDATEE: {
        E2: "Toute formation de base de Hockey Canada est acceptée (E1 ou D1).",
      },
    },
  },
  {
    hockey: "Mixte",
    entries: [entry("D4", ["Autres accompagnateurs/animateurs"])],
    roles: {
      TEACHER: ["VCJ", "RES"],
      SCHOOL_STAFF: ["VCJ", "RES"],
      MANDATEE: ["VCJ", "RES"],
    },
  },

  // Hockey féminin
  {
    hockey: "Féminin",
    entries: [
      entry("M7", ["A", "B", "C"]),
      entry("M9", ["A", "B", "C"]),
    ],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E1"],
      ["RES", "E1"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M12", ["AA"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M12", ["A", "B"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M13", ["AAA"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "DEVC", "MEC"],
      ["RES", "DEVF"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M15", ["AAA"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "HPF", "HPC", "MEC"],
      ["RES", "DEVF", "DEVC"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M15", ["AA"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "DEVC"],
      ["RES", "DEVF"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M15", ["D1 - Relève"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "DEVC"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M15", ["A", "B"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M18", ["AAA"])],
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
    hockey: "Féminin",
    entries: [entry("M18", ["AA"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF", "DEVC"],
      ["RES", "DEVF"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("M18", ["A", "B"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "E2"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("Scolaire canadien", ["Prep-Varsity"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "HPF", "HPC", "MEC"],
      ["RES", "DEVF", "DEVC"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("Junior", ["A", "B"])],
    roles: standard(
      "PSSH",
      ["RES", "PSSH", "DEVF"],
      ["RES", "E2"],
    ),
  },
  {
    hockey: "Féminin",
    entries: [entry("Collégial - Universitaire", ["D1 - U Sports"])],
    roles: {
      HC: ["RES", "PSSH", "HPF", "HPC", "MEC"],
      FIRST: ["RES", "HPF", "HPC"],
      OTHER: ["RES", "DEVF", "DEVC"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "PSSH"],
      MGR: ["RES"],
    },
  },
  {
    hockey: "Féminin",
    entries: [entry("Collégial - Universitaire", ["D2"])],
    roles: {
      HC: ["RES", "PSSH", "HPF", "HPC", "MEC"],
      AS: ["RES", "DEVF", "DEVC"],
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
