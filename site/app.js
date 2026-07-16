import {
  FORMATION_GROUPS,
  FORMATIONS,
  ROLE_ORDER,
  ROLES,
} from "./formations-data.js";
import { REGIONAL_CONTACTS } from "./regions-data.js";

const unique = (values) => [...new Set(values)];

const elements = {
  form: document.querySelector("#selection-form"),
  region: document.querySelector("#region"),
  hockey: document.querySelector("#hockey"),
  division: document.querySelector("#division"),
  classe: document.querySelector("#classe"),
  role: document.querySelector("#role"),
  emptyState: document.querySelector("#empty-state"),
  resultsCard: document.querySelector("#results-card"),
  resultsTitle: document.querySelector("#results-title"),
  roleSummary: document.querySelector("#role-summary"),
  trainingGrid: document.querySelector("#training-grid"),
  contactLink: document.querySelector("#contact-link"),
  contactRegion: document.querySelector("#contact-region"),
  resetButton: document.querySelector("#reset-button"),
};

function setOptions(select, placeholder, options) {
  select.replaceChildren();
  select.add(new Option(placeholder, ""));
  options.forEach(({ value, label = value }) => select.add(new Option(label, value)));
}

function selectedGroup() {
  const { hockey, division, classe } = elements;
  if (!hockey.value || !division.value || !classe.value) return undefined;

  return FORMATION_GROUPS.find(
    (group) =>
      group.hockey === hockey.value &&
      group.entries.some(
        (entry) =>
          entry.division === division.value && entry.classes.includes(classe.value),
      ),
  );
}

function clearResults() {
  elements.resultsCard.hidden = true;
  elements.emptyState.hidden = false;
}

function renderResults() {
  const group = selectedGroup();
  const contact = REGIONAL_CONTACTS.find(
    (item) => item.region === elements.region.value,
  );
  const formationKeys = group?.roles[elements.role.value] ?? [];

  if (!contact || !group || !elements.role.value || formationKeys.length === 0) {
    clearResults();
    return;
  }

  elements.resultsTitle.textContent = `Hockey ${elements.hockey.value} · ${elements.division.value} ${elements.classe.value}`;
  elements.roleSummary.textContent = ROLES[elements.role.value];
  elements.trainingGrid.replaceChildren();

  formationKeys.forEach((key, index) => {
    const item = document.createElement("li");
    item.className = "training-item";

    const number = document.createElement("span");
    number.className = "training-number";
    number.setAttribute("aria-hidden", "true");
    number.textContent = String(index + 1);

    const label = document.createElement("span");
    label.textContent = FORMATIONS[key];

    item.append(number, label);
    elements.trainingGrid.append(item);
  });

  elements.contactLink.textContent = contact.name;
  elements.contactLink.href = `mailto:${contact.email}`;
  elements.contactLink.title = contact.email;
  elements.contactLink.setAttribute(
    "aria-label",
    `Écrire à ${contact.name} à l'adresse ${contact.email}`,
  );
  elements.contactRegion.textContent = contact.region;

  elements.emptyState.hidden = true;
  elements.resultsCard.hidden = false;
}

setOptions(
  elements.region,
  "Sélectionnez votre région",
  REGIONAL_CONTACTS.map((contact) => ({ value: contact.region })),
);

elements.hockey.addEventListener("change", () => {
  const divisions = elements.hockey.value
    ? unique(
        FORMATION_GROUPS.filter(
          (group) => group.hockey === elements.hockey.value,
        ).flatMap((group) => group.entries.map((entry) => entry.division)),
      )
    : [];

  setOptions(
    elements.division,
    "Sélectionnez une division",
    divisions.map((value) => ({ value })),
  );
  elements.division.disabled = !elements.hockey.value;
  setOptions(elements.classe, "Sélectionnez une classe", []);
  elements.classe.disabled = true;
  setOptions(elements.role, "Sélectionnez un rôle", []);
  elements.role.disabled = true;
  clearResults();
});

elements.division.addEventListener("change", () => {
  const classes = elements.division.value
    ? unique(
        FORMATION_GROUPS.filter(
          (group) => group.hockey === elements.hockey.value,
        ).flatMap((group) =>
          group.entries
            .filter((entry) => entry.division === elements.division.value)
            .flatMap((entry) => entry.classes),
        ),
      )
    : [];

  setOptions(
    elements.classe,
    "Sélectionnez une classe",
    classes.map((value) => ({ value })),
  );
  elements.classe.disabled = !elements.division.value;
  setOptions(elements.role, "Sélectionnez un rôle", []);
  elements.role.disabled = true;
  clearResults();
});

elements.classe.addEventListener("change", () => {
  const group = selectedGroup();
  const roles = group
    ? ROLE_ORDER.filter((key) => group.roles[key]).map((key) => ({
        value: key,
        label: ROLES[key],
      }))
    : [];

  setOptions(elements.role, "Sélectionnez un rôle", roles);
  elements.role.disabled = !elements.classe.value;
  clearResults();
});

elements.region.addEventListener("change", renderResults);
elements.role.addEventListener("change", renderResults);

elements.resetButton.addEventListener("click", () => {
  elements.form.reset();
  setOptions(elements.division, "Sélectionnez une division", []);
  setOptions(elements.classe, "Sélectionnez une classe", []);
  setOptions(elements.role, "Sélectionnez un rôle", []);
  elements.division.disabled = true;
  elements.classe.disabled = true;
  elements.role.disabled = true;
  clearResults();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function notifyParent() {
  window.parent.postMessage(
    {
      type: "hockey-quebec-form-height",
      height: document.documentElement.scrollHeight,
    },
    "*",
  );
}

notifyParent();
new ResizeObserver(notifyParent).observe(document.body);
