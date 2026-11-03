const pets = [
  {
    "id": "cat",
    "title": "Cats",
    "match": "A cat",
    "icon": "🐱",
    "description": "A curious companion for someone who enjoys quiet company and short play sessions.",
    "needs": "Daily play, clean litter trays, scratching and climbing spaces, and a quiet retreat. Cats need attention and long-term veterinary care.",
    "preferences": {
      "activity": [
        "calm",
        "play"
      ],
      "company": [
        "gentle"
      ],
      "routine": [
        "flexible",
        "day"
      ],
      "space": [
        "room"
      ],
      "sound": [
        "quiet",
        "some"
      ]
    },
    "spaces": [
      "room"
    ]
  },
  {
    "id": "dog",
    "title": "Dogs",
    "match": "A dog",
    "icon": "🐶",
    "description": "An active companion for someone who enjoys walks, training and sharing a daily routine.",
    "needs": "Daily walks suited to age and health, reward-based training, company and a safe home. Arrange care when you are away; a garden does not replace walks.",
    "preferences": {
      "activity": [
        "outdoor"
      ],
      "company": [
        "training"
      ],
      "routine": [
        "day",
        "flexible"
      ],
      "space": [
        "room"
      ],
      "sound": [
        "some",
        "lively"
      ]
    },
    "spaces": [
      "room"
    ]
  },
  {
    "id": "rabbit",
    "title": "Rabbits",
    "match": "Rabbits",
    "icon": "🐰",
    "description": "Gentle explorers for someone who likes patient, floor-level interaction.",
    "needs": "A suitable bonded rabbit companion, a large safe living and exercise area, plenty of hay, rabbit-proofing and rabbit-experienced veterinary care. Many dislike being picked up.",
    "preferences": {
      "activity": [
        "calm"
      ],
      "company": [
        "ground"
      ],
      "routine": [
        "flexible"
      ],
      "space": [
        "room"
      ],
      "sound": [
        "quiet"
      ]
    },
    "spaces": [
      "room"
    ]
  },
  {
    "id": "hamster",
    "title": "Hamsters",
    "match": "A hamster",
    "icon": "🐹",
    "description": "A small evening explorer for someone who likes quietly observing busy animals.",
    "needs": "A large, well-designed enclosure, deep suitable bedding and an appropriately sized wheel. Let it sleep during the day. Syrian hamsters must live alone; wheel and digging sounds may disturb sleep.",
    "preferences": {
      "activity": [
        "observe"
      ],
      "company": [
        "watch",
        "ground"
      ],
      "routine": [
        "evening"
      ],
      "space": [
        "enclosure"
      ],
      "sound": [
        "some"
      ]
    },
    "spaces": [
      "enclosure",
      "room"
    ]
  },
  {
    "id": "guinea-pig",
    "title": "Guinea pigs",
    "match": "Guinea pigs",
    "icon": "🐹",
    "description": "Social little companions for someone who enjoys gentle interaction and a regular routine.",
    "needs": "A compatible guinea-pig companion, a spacious enclosure and exercise area, hay, suitable vitamin-C-rich food and daily cleaning. They can be vocal and need gentle handling.",
    "preferences": {
      "activity": [
        "play"
      ],
      "company": [
        "gentle"
      ],
      "routine": [
        "day"
      ],
      "space": [
        "enclosure"
      ],
      "sound": [
        "some"
      ]
    },
    "spaces": [
      "enclosure",
      "room"
    ]
  },
  {
    "id": "budgie",
    "title": "Budgies",
    "match": "Budgies",
    "icon": "🐦",
    "description": "Lively birds for someone who enjoys sound, patient training and social interaction.",
    "needs": "Suitable bird companionship, a spacious flight cage and safe daily flight time, enrichment and an avian vet. Budgies are vocal; fumes, unsafe windows and other household hazards need attention.",
    "preferences": {
      "activity": [
        "play"
      ],
      "company": [
        "training"
      ],
      "routine": [
        "day"
      ],
      "space": [
        "room"
      ],
      "sound": [
        "lively"
      ]
    },
    "spaces": [
      "room"
    ]
  },
  {
    "id": "fish",
    "title": "Aquarium fish",
    "match": "Aquarium fish",
    "icon": "🐠",
    "description": "An observation-based hobby for someone who enjoys calm routines and learning about habitats.",
    "needs": "Choose a species first, then a suitably sized, cycled and filtered aquarium. Research temperature and social needs, test water and do regular maintenance. A small bowl is not a suitable shortcut.",
    "preferences": {
      "activity": [
        "observe",
        "calm"
      ],
      "company": [
        "watch"
      ],
      "routine": [
        "day",
        "flexible"
      ],
      "space": [
        "aquarium"
      ],
      "sound": [
        "quiet"
      ]
    },
    "spaces": [
      "aquarium"
    ]
  }
];

// Each matching preference gives one point. Housing is a requirement, not a bonus
// that can be outweighed by personality answers.
const questionNames = ["activity", "company", "routine", "space", "sound", "readiness"];
const allowedAnswers = {
  activity: ["outdoor", "play", "calm", "observe"],
  company: ["gentle", "ground", "training", "watch"],
  routine: ["day", "evening", "flexible"],
  space: ["room", "enclosure", "aquarium", "none"],
  sound: ["quiet", "some", "lively"],
  readiness: ["ready", "learning"]
};

function findMatches(answers) {
  const missing = questionNames.filter((name) => !allowedAnswers[name].includes(answers[name]));
  if (missing.length) return { type: "incomplete", missing };

  if (answers.readiness !== "ready" || answers.space === "none") {
    return { type: "prepare", matches: [] };
  }

  const candidates = pets.filter((pet) =>
    pet.spaces.includes(answers.space) &&
    !(pet.id === "hamster" && answers.routine === "day") &&
    !(pet.id === "budgie" && answers.sound === "quiet")
  );

  const ranked = candidates.map((pet) => {
    const reasons = Object.keys(pet.preferences).filter((key) =>
      pet.preferences[key].includes(answers[key])
    );
    return { pet, reasons, score: reasons.length };
  });
  const highest = Math.max(0, ...ranked.map((match) => match.score));
  // Do not force a recommendation when very few preferences agree.
  if (highest < 3) return { type: "explore", matches: [] };
  return { type: "match", matches: ranked.filter((match) => match.score === highest) };
}

// This small export also lets the matching rules be checked with Node.
if (typeof module !== "undefined") module.exports = { findMatches, pets, allowedAnswers };

if (typeof document !== "undefined") {
  const form = document.querySelector("#animal-quiz");
  const progress = document.querySelector("#quiz-progress");
  const message = document.querySelector("#quiz-message");
  const result = document.querySelector("#match-result");
  const title = document.querySelector("#result-title");
  const summary = document.querySelector("#result-summary");
  const cards = document.querySelector("#match-cards");

  function readAnswers() {
    return Object.fromEntries(new FormData(form));
  }

  function clearResult() {
    result.hidden = true;
    cards.replaceChildren();
    title.textContent = "";
    summary.textContent = "";
    message.textContent = "";
  }

  function updateProgress() {
    const answers = readAnswers();
    const completed = questionNames.filter((name) => answers[name]).length;
    progress.textContent = completed + " of 6 questions answered";
  }

  function addParagraph(parent, heading, text) {
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = heading + " ";
    paragraph.append(strong, document.createTextNode(text));
    parent.append(paragraph);
  }

  form.addEventListener("change", () => {
    clearResult();
    updateProgress();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearResult();
    const answers = readAnswers();
    const outcome = findMatches(answers);

    if (outcome.type === "incomplete") {
      message.textContent = "Please answer all six questions. " +
        outcome.missing.length + " still need an answer.";
      form.querySelector('input[name="' + outcome.missing[0] + '"]').focus();
      return;
    }

    if (outcome.type === "prepare") {
      title.textContent = "Your next step: prepare before choosing";
      summary.textContent = "It is fine to be curious without being ready. Work through the care checklist, plan a suitable habitat and budget, and arrange daily and backup care before choosing an animal.";
    } else if (outcome.type === "explore") {
      title.textContent = "No close match yet";
      summary.textContent = "Your preferences and available setup do not closely match these seven profiles. Explore the animal guide and their actual care needs; you do not need to choose a pet now.";
    } else {
      title.textContent = outcome.matches.length > 1
        ? "Your closest matches: a shared result"
        : "Your closest animal match";
      summary.textContent = outcome.matches.length > 1
        ? "These animals tied in this simple preference quiz. Compare their needs; there is no single winner."
        : "This animal shares several of your preferences. Treat this as a starting point for research, not proof that you should adopt.";

      outcome.matches.forEach(({ pet, reasons }) => {
        const card = document.createElement("article");
        card.className = "animal-card";
        const heading = document.createElement("h3");
        heading.textContent = pet.match;
        card.append(heading);
        addParagraph(card, "Why this match?", pet.description);
        const list = document.createElement("ul");
        reasons.forEach((key) => {
          const item = document.createElement("li");
          const selected = form.querySelector('input[name="' + key + '"]:checked');
          item.textContent = "You chose: " + selected.closest("label").querySelector("span").textContent;
          list.append(item);
        });
        card.append(list);
        addParagraph(card, "Care to plan for:", pet.needs);
        const link = document.createElement("a");
        link.href = "animal-" + pet.id + ".html";
        link.textContent = "Read more about " + pet.title.toLowerCase();
        card.append(link);
        cards.append(card);
      });
    }

    result.hidden = false;
    title.focus();
  });

  form.addEventListener("reset", () => {
    clearResult();
    progress.textContent = "0 of 6 questions answered";
    form.querySelector("input").focus();
  });
  updateProgress();
}
