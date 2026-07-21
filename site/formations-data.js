const FORMATIONS = {
  RES: "La Relance - Hockey Canada",
  HUSS: "Soigneur / PSSH - Programme de sécurité de Hockey Canada niveau 1",
  SS: "Sant\xE9 et s\xE9curit\xE9",
  E1: "Formation Entra\xEEneur 1",
  E2: "Formation Entra\xEEneur 2",
  DEVF: "Formation D\xE9veloppement 1",
  DEVC: "Certification D\xE9veloppement 1",
  HPF: "Formation HP 1",
  HPC: "Certification HP 1",
  MEC1: "Entraîneur - Compétences de Hockey Canada Mise en échec - FRANÇAIS",
  MEC2: "Entraîneur - Compétences de Hockey Canada Mise en échec - FRANÇAIS"
};
const ROLES = {
  HC: "Entra\xEEneur-chef",
  AS: "Entra\xEEneur-adjoint",
  FIRST: "Premier entra\xEEneur-adjoint",
  OTHER: "Autre entra\xEEneur-adjoint",
  THER: "Th\xE9rapeute sportif",
  EQUIP: "Pr\xE9pos\xE9 \xE0 l\u2019\xE9quipement",
  PSS: "Pr\xE9pos\xE9 \xE0 la sant\xE9 et \xE0 la s\xE9curit\xE9",
  MGR: "G\xE9rant"
};
const standard = (safety, headCoach, assistantCoach) => ({
  HC: headCoach,
  AS: assistantCoach,
  PSS: ["RES", safety],
  MGR: ["RES"]
});
const entry = (division, classes) => ({ division, classes });
const FORMATION_GROUPS = [
  {
    hockey: "Masculin",
    entries: [entry("M7", ["1", "2", "3", "4"]), entry("M9", ["A", "B", "C", "D"])],
    roles: standard("HUSS", ["RES", "HUSS", "E1"], ["RES", "E1"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M11", ["AA", "BB"])],
    roles: standard("HUSS", ["RES", "HUSS", "DEVF"], ["RES", "E2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M11", ["A", "B", "C"])],
    roles: standard("HUSS", ["RES", "HUSS", "E2"], ["RES", "E2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M12", ["D1"])],
    roles: standard("HUSS", ["RES", "HUSS", "DEVF"], ["RES", "E2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M13", ["AAA \xC9lite", "AAA"])],
    roles: {
      ...standard("HUSS", ["RES", "HUSS", "DEVF", "DEVC", "MEC1"], ["RES", "DEVF", "MEC1"]),
      THER: ["RES"]
    }
  },
  {
    hockey: "Masculin",
    entries: [entry("M13", ["AA", "BB", "D1", "D1R"])],
    roles: standard("HUSS", ["RES", "HUSS", "DEVF", "MEC1"], ["RES", "E2", "MEC1"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M13", ["A", "B", "C", "D2", "D3"])],
    roles: standard("HUSS", ["RES", "HUSS", "E2"], ["RES", "E2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M15", ["AAA \xC9lite", "AAA"])],
    roles: {
      ...standard("HUSS", ["RES", "HUSS", "HPF", "HPC", "MEC2"], ["RES", "DEVF", "DEVC", "MEC2"]),
      THER: ["RES"]
    }
  },
  {
    hockey: "Masculin",
    entries: [entry("M15", ["AA", "D1", "D1R"])],
    roles: standard("HUSS", ["RES", "HUSS", "DEVF", "DEVC", "MEC2"], ["RES", "DEVF", "MEC2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M15", ["BB", "D2"])],
    roles: standard("HUSS", ["RES", "HUSS", "DEVF", "MEC2"], ["RES", "E2", "MEC2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M15", ["A", "B", "C", "D3", "D4"])],
    roles: standard("HUSS", ["RES", "HUSS", "E2", "MEC1"], ["RES", "E2", "MEC1"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M17", ["AAA"])],
    roles: {
      ...standard("HUSS", ["RES", "HUSS", "HPF", "HPC", "MEC2"], ["RES", "DEVF", "DEVC", "MEC2"]),
      THER: ["RES"]
    }
  },
  {
    hockey: "Masculin",
    entries: [entry("M18", ["D1"])],
    roles: standard("HUSS", ["RES", "HUSS", "HPF", "HPC", "MEC2"], ["RES", "DEVF", "DEVC", "MEC2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M18", ["AA", "BB", "D1R", "D2"])],
    roles: standard("HUSS", ["RES", "HUSS", "DEVF", "DEVC", "MEC2"], ["RES", "E2", "MEC2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("M18", ["A", "B", "D3", "D4"])],
    roles: standard("HUSS", ["RES", "HUSS", "E2", "MEC1"], ["RES", "E2", "MEC1"])
  },
  {
    hockey: "Masculin",
    entries: [entry("CSSHL", ["Varsity"])],
    roles: standard("HUSS", ["RES", "HUSS", "HPF", "HPC", "MEC2"], ["RES", "DEVF", "DEVC", "MEC2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("Junior", ["B (AA)"]), entry("Senior", ["AA"])],
    roles: standard("HUSS", ["RES", "HUSS", "DEVF", "MEC2"], ["RES", "E2", "MEC2"])
  },
  {
    hockey: "Masculin",
    entries: [entry("Junior", ["C (A)", "D (B)"]), entry("Senior", ["A", "B"])],
    roles: standard("HUSS", ["RES", "HUSS", "E2", "MEC1"], ["RES", "E2", "MEC1"])
  },
  {
    hockey: "Masculin",
    entries: [entry("Coll\xE9gial \u2013 U Sports", ["D1"])],
    roles: {
      HC: ["RES", "HUSS", "HPF", "HPC"],
      FIRST: ["RES", "HUSS", "HPF", "HPC"],
      OTHER: ["RES", "DEVF", "DEVC"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "HUSS"],
      MGR: ["RES"]
    }
  },
  {
    hockey: "Masculin",
    entries: [entry("Coll\xE9gial \u2013 U Sports", ["D2"])],
    roles: {
      HC: ["RES", "HUSS", "HPF", "HPC"],
      AS: ["RES", "DEVF", "DEVC"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "HUSS"],
      MGR: ["RES"]
    }
  },
  {
    hockey: "Masculin",
    entries: [entry("LHJMQ", ["Sans objet"]), entry("LHJAAAQ", ["Sans objet"]), entry("M18 AAA", ["Sans objet"])],
    roles: {
      HC: ["RES", "HUSS", "HPF", "HPC"],
      FIRST: ["RES", "HUSS", "HPF", "HPC"],
      OTHER: ["RES", "HUSS", "HPF", "HPC"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "HUSS"],
      MGR: ["RES"]
    }
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M7", ["1", "2", "3", "4"]), entry("M9", ["A", "B", "C"])],
    roles: standard("SS", ["RES", "SS", "E1"], ["RES", "E1"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M12", ["AA"])],
    roles: standard("SS", ["RES", "SS", "DEVF"], ["RES", "E2"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M12", ["A", "B"])],
    roles: standard("SS", ["RES", "SS", "E2"], ["RES", "E2"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M13", ["AAA"])],
    roles: standard("SS", ["RES", "SS", "DEVF", "MEC1"], ["RES", "DEVF", "MEC1"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M15", ["AAA"])],
    roles: standard("SS", ["RES", "SS", "DEVF", "DEVC", "MEC1"], ["RES", "DEVF", "MEC1"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M15", ["AA"])],
    roles: standard("SS", ["RES", "SS", "DEVF"], ["RES", "E2"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M15", ["A", "B"])],
    roles: standard("SS", ["RES", "SS", "E2"], ["RES", "E2"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M18", ["AAA"])],
    roles: {
      HC: ["RES", "SS", "HPF", "HPC", "MEC1"],
      FIRST: ["RES", "DEVF", "DEVC", "MEC1"],
      OTHER: ["RES", "DEVF", "MEC1"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "SS"],
      MGR: ["RES"]
    }
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M18", ["AA"])],
    roles: standard("SS", ["RES", "SS", "DEVF"], ["RES", "E2"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("M18", ["A", "B"])],
    roles: standard("SS", ["RES", "SS", "E2"], ["RES", "E2"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("Junior", ["A"])],
    roles: standard("SS", ["RES", "SS", "DEVF"], ["RES", "E2"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("Junior", ["B"])],
    roles: standard("SS", ["RES", "SS", "E2"], ["RES", "E2"])
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("Coll\xE9gial \u2013 U Sports", ["D1"])],
    roles: {
      HC: ["RES", "SS", "HPF", "HPC", "MEC1"],
      FIRST: ["RES", "HPF", "HPC", "MEC1"],
      OTHER: ["RES", "DEVF", "DEVC", "MEC1"],
      THER: ["RES"],
      EQUIP: ["RES"],
      PSS: ["RES", "SS"],
      MGR: ["RES"]
    }
  },
  {
    hockey: "F\xE9minin",
    entries: [entry("Coll\xE9gial \u2013 U Sports", ["D2"])],
    roles: {
      HC: ["RES", "SS", "HPF", "HPC", "MEC1"],
      FIRST: ["RES", "DEVF", "DEVC", "MEC1"],
      OTHER: ["RES", "E2", "MEC1"],
      THER: ["RES"],
      PSS: ["RES", "SS"],
      MGR: ["RES"]
    }
  }
];
const ROLE_ORDER = [
  "HC",
  "AS",
  "FIRST",
  "OTHER",
  "THER",
  "EQUIP",
  "PSS",
  "MGR"
];
export {
  FORMATIONS,
  FORMATION_GROUPS,
  ROLES,
  ROLE_ORDER
};
