/* PET PARADISE — PATCHED BUILD 2026-11-22b */
/* ==========================================
   PET PARADISE
   THE UNCHARTED ISLAND
   COMPLETE GAME SCRIPT
========================================== */

/* ==========================================
   1. PETS, COLOURS AND ACCESSORIES
========================================== */

const pets = [
  {
    id: "dog",
    name: "Dog",
    emoji: "🐶",
    trait: "Detects danger and tracks animals",
    description: "A loyal companion with an excellent sense of smell."
  },
  {
    id: "cat",
    name: "Cat",
    emoji: "🐱",
    trait: "Discovers hidden paths",
    description: "An observant explorer who notices secret passages."
  },
  {
    id: "bunny",
    name: "Bunny",
    emoji: "🐰",
    trait: "Recognises unusual plants",
    description: "A sensitive companion who notices changes in nature."
  },
  {
    id: "hamster",
    name: "Hamster",
    emoji: "🐹",
    trait: "Finds tiny objects",
    description: "Small, curious and surprisingly resourceful."
  },
  {
    id: "bird",
    name: "Bird",
    emoji: "🐦",
    trait: "Can fly and spot distant landmarks",
    description: "A sharp-eyed flying companion who can explore areas from above and spot distant places."
  }
];

const colours = [
  { name: "Cream", value: "#F1DCC0" },
  { name: "Golden", value: "#D9A34F" },
  { name: "Brown", value: "#987052" },
  { name: "Grey", value: "#A6A8A4" },
  { name: "White", value: "#FFFFFF" },
  { name: "Black", value: "#454545" },
  { name: "Pink", value: "#F2A6C1" },
  { name: "Purple", value: "#B99AE8" },
  { name: "Blue", value: "#75B8E8" },
  { name: "Light Green", value: "#A9D89B" },
  { name: "Bright Red", value: "#F04444" }
];

const eyeColours = [
  { name: "Chocolate", value: "#654321" },
  { name: "Ocean Blue", value: "#2685C7" },
  { name: "Forest Green", value: "#65A85B" },
  { name: "Violet", value: "#A65AC4" },
  { name: "Golden", value: "#D5A52F" },
  { name: "Black", value: "#222222" },
  { name: "Grey", value: "#9299A5" }
];

const accessories = [
  { id: "sunny-bloom", name: "Sunny Bloom", emoji: "🌼", price: 0, category: "Head" },
  { id: "flower-crown", name: "Flower Crown", emoji: "🌸", price: 50, category: "Head" },
  { id: "soft-bow", name: "Soft Bow", emoji: "🎀", price: 50, category: "Head" },
  { id: "explorer-hat", name: "Explorer Hat", emoji: "🧢", price: 100, category: "Head" },
  { id: "tiny-crown", name: "Tiny Crown", emoji: "👑", price: 100, category: "Head" },
  { id: "forest-bandana", name: "Forest Bandana", emoji: "🧣", price: 50, category: "Neck" },
  { id: "bell-collar", name: "Bell Collar", emoji: "🔔", price: 50, category: "Neck" },
  { id: "little-scarf", name: "Little Scarf", emoji: "🧤", price: 100, category: "Neck" },
  { id: "flower-necklace", name: "Flower Necklace", emoji: "🌺", price: 100, category: "Neck" },
  { id: "star-clip", name: "Star Clip", emoji: "⭐", price: 50, category: "Special" },
  { id: "mini-backpack", name: "Mini Backpack", emoji: "🎒", price: 100, category: "Special" },
  { id: "little-wings", name: "Little Wings", emoji: "🪽", price: 100, category: "Special" },
  { id: "forgotten-gift", name: "Island Guardian Gift", emoji: "💎", price: 0, category: "Special" },
  { id: "berry-bow", name: "Berry Bow", emoji: "🍓", price: 50, category: "Head" },
  { id: "moonflower-crown", name: "Moonflower Crown", emoji: "🌙", price: 100, category: "Head" },
  { id: "mossy-hood", name: "Mossy Hood", emoji: "🌿", price: 80, category: "Head" },
  { id: "pearl-collar", name: "Pearl Collar", emoji: "🤍", price: 75, category: "Neck" },
  { id: "cloud-scarf", name: "Cloud Scarf", emoji: "☁️", price: 60, category: "Neck" },
  { id: "tiny-shell", name: "Tiny Seashell", emoji: "🐚", price: 50, category: "Special" },
  { id: "acorn-backpack", name: "Acorn Backpack", emoji: "🌰", price: 100, category: "Special" },
  { id: "feather-wings", name: "Feather Wings", emoji: "🪶", price: 120, category: "Special" },
  { id: "crystal-pendant", name: "Crystal Pendant", emoji: "💠", price: 90, category: "Neck" },
  { id: "daisy-clip", name: "Daisy Clip", emoji: "🌼", price: 50, category: "Head" },
  { id: "rainbow-bandana", name: "Rainbow Bandana", emoji: "🌈", price: 80, category: "Neck" },
  { id: "sunset-cape", name: "Sunset Cape", emoji: "🌅", price: 110, category: "Special" },
  { id: "lavender-bell", name: "Lavender Bell", emoji: "🔔", price: 65, category: "Neck" }
];

/* ==========================================
   2. LEVEL INFORMATION
========================================== */

const levels = [
  {
    id: 1,
    name: "Sunny Shore",
    region: "The Beginning",
    emoji: "🏝️",
    description: "Build a safe little home, explore the shore and discover what your companion loves.",
    reward: 200,
    objectives: [
      "Explore the sunny beach",
      "Collect 5 pieces of wood",
      "Collect 4 palm leaves",
      "Collect 3 stones",
      "Play with your companion",
      "Build your beach shelter"
    ]
  },
  {
    id: 2,
    name: "Whispering Woods",
    region: "The Forest",
    emoji: "🌳",
    description: "Explore hidden forest paths, discover secret clearings and uncover the route to the next region.",
    reward: 400,
    objectives: [
      "Explore the forest",
      "Discover a hidden clearing",
      "Collect 3 forest flowers"
    ]
  },
  {
    id: 3,
    name: "Forgotten Falls",
    region: "The Waterfalls",
    emoji: "💧",
    description: "Explore a wide waterfall valley, follow the winding riverbed, discover a quiet pond and uncover hidden places along the banks.",
    reward: 400,
    objectives: [
      "Explore the waterfall region",
      "Visit the flower-filled riverbank",
      "Discover the safe little pond",
      "Explore the rocky island",
      "Discover the waterfall cave"
    ]
  },
  {
    id: 4,
    name: "Shadowlands",
    region: "The Forgotten Ruins",
    emoji: "🌙",
    description: "Explore mysterious ruins and uncover the forgotten history of the island's animal companions.",
    reward: 400,
    objectives: [
      "Explore the twilight path",
      "Discover the forgotten cemetery",
      "Find the ancient idol",
      "Find the old journal",
      "Discover the forgotten bell tower"
    ]
  },
  {
    id: 5,
    name: "The Forgotten Companion",
    region: "The Hidden Valley",
    emoji: "🐾",
    description: "Follow the distant animal call, find the missing companion and help it reach safety.",
    reward: 500,
    objectives: [
      "Follow the animal call",
      "Discover the hidden valley",
      "Find the missing companion",
      "Get both companions home",
      "Feed the new companion",
      "Play with the new companion"
    ]
  }
];

/* ==========================================
   3. GAME DATA AND SAVE SYSTEM
========================================== */

const SAVE_KEY = "petParadiseSave_v2";

function freshGame() {
  return {
    playerName: "",
    pet: null,
    mainColour: colours[0],
    markingColour: colours[2],
    eyeColour: eyeColours[0],
    petAppearance: null,
    petName: "",

    coins: 0,
    currentLevel: 1,
    highestUnlockedLevel: 1,

    completedLevels: [],
    objectives: {},
    resources: {},
    discoveries: [],
    mapPieces: {},

    forestMapAssembled: false,
    waterfallMapAssembled: false,

    journalUnlocked: false,
    journalRead: false,

    shelterBuilt: false,
    safeWaterFound: false,

    animalCallHeard: false,
    secondCompanion: null,
    secondPetNeeds: { hunger: 55, happiness: 45, energy: 75, cleanliness: 70 },
    level5AtShelter: false,
    rescueComplete: false,

    purchasedAccessories: [],
    equippedAccessories: {},

    soundMuted: false,
    musicVolume: 35,
    effectsVolume: 65,

    setupComplete: false
  };
}

function loadGame() {
  try {
    const saved = localStorage.getItem(SAVE_KEY);

    if (!saved) return freshGame();

    const parsed = JSON.parse(saved);
    const defaults = freshGame();

    const restored = {
      ...defaults,
      ...parsed
    };

    restored.mainColour =
      colours.find(c => c.name === parsed.mainColour?.name) || colours[0];

    restored.markingColour =
      colours.find(c => c.name === parsed.markingColour?.name) || colours[2];

    restored.eyeColour =
      eyeColours.find(c => c.name === parsed.eyeColour?.name) || eyeColours[0];

    // Migrate older saves and preserve the exact setup colours for the 3D pet.
    restored.petAppearance = parsed.petAppearance || {
      colour: restored.mainColour.value,
      marking: restored.markingColour.value,
      eye: restored.eyeColour.value
    };

    return restored;
  } catch (error) {
    console.error("Could not load saved game:", error);
    return freshGame();
  }
}

let game = loadGame();

// Level 4 save migration: replace the old journal-reading objective with the new bell-tower discovery.
// Keep the four existing discoveries, but do not treat the old read-journal checkbox as the new task.
if (game && game.objectives) {
  const oldLevel4 = game.objectives[4] || [];
  const foundBellTower = (game.discoveries || []).includes("Forgotten bell tower") ||
    (game.worldCollected?.[4] || []).includes("bellTower");
  game.objectives[4] = oldLevel4.filter(index => index >= 0 && index <= 3);
  if (foundBellTower && !game.objectives[4].includes(4)) game.objectives[4].push(4);
  game.worldCollected = game.worldCollected || {};
  game.worldCollected[4] = (game.worldCollected[4] || []).filter(id => ["path","cemetery","idol","journal","bellTower"].includes(id));
  if (foundBellTower && !game.worldCollected[4].includes("bellTower")) game.worldCollected[4].push("bellTower");
  saveGame();
}

// Level 5 migration: keep the first three existing story discoveries, then use the new shelter-care tasks.
if (game && game.objectives && !game.completedLevels.includes(5)) {
  game.objectives[5] = (game.objectives[5] || []).filter(index => index >= 0 && index <= 2);
}
game.secondPetNeeds = game.secondPetNeeds || { hunger:55, happiness:45, energy:75, cleanliness:70 };
game.level5AtShelter = !!game.level5AtShelter;

// Level 3 save repair: completed discoveries are the reliable source of truth.
game.objectives = game.objectives || {};
game.discoveries = game.discoveries || [];
game.worldCollected = game.worldCollected || {};
if (!game.forgottenFallsTaskVersion || game.forgottenFallsTaskVersion < 3) {
  const found = new Set(game.discoveries);
  const repaired = [];
  if (found.has("The great waterfall")) repaired.push(0);
  if (found.has("Flower-filled riverbank")) repaired.push(1);
  if (found.has("Safe freshwater spot") || game.safeWaterFound) repaired.push(2);
  if (found.has("Rocky island")) repaired.push(3);
  if (found.has("Waterfall cave")) repaired.push(4);
  game.objectives[3] = repaired;
  // Clear stale object flags (including objects marked collected after a blocked interaction).
  game.worldCollected[3] = [];
  const completedObjectIds = ["waterfall", "riverbank", "water", "rock", "cave"];
  const completedIndexes = new Set(repaired);
  game.worldCollected[3] = completedObjectIds.filter((_, index) => completedIndexes.has(index));
  game.forgottenFallsTaskVersion = 3;
  saveGame();
}

const app = document.getElementById("app");

function saveGame(showNotification = false) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(game));

    if (showNotification) {
      notify("Your adventure has been saved! 💾");
    }
  } catch (error) {
    console.error("Save failed:", error);
    notify("Your progress could not be saved.");
  }
}

window.addEventListener("beforeunload", () => saveGame());

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveGame();
});

/* ==========================================
   4. SMALL GAME UTILITIES
========================================== */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function notify(message) {
  let toast = document.getElementById("game-notification");

  if (toast) toast.remove();

  toast = document.createElement("div");
  toast.id = "game-notification";
  toast.textContent = message;

  toast.style.cssText = `
    position:fixed;
    left:50%;
    bottom:25px;
    transform:translateX(-50%);
    z-index:99999;
    background:#234d42;
    color:#fffaf0;
    padding:13px 22px;
    border-radius:30px;
    font:600 14px 'DM Sans',sans-serif;
    box-shadow:0 8px 30px #0003;
    text-align:center;
    max-width:90%;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 2600);
}

function getLevel(id = game.currentLevel) {
  return levels.find(level => level.id === id);
}

function getObjectives(id = game.currentLevel) {
  if (!game.objectives[id]) game.objectives[id] = [];
  return game.objectives[id];
}

function isComplete(id, index) {
  return getObjectives(id).includes(index);
}

function progressPercent(id = game.currentLevel) {
  const level = getLevel(id);
  return Math.round(
    (getObjectives(id).length / level.objectives.length) * 100
  );
}

function canEnterLevel(id) {
  return id <= game.highestUnlockedLevel && id >= 1 && id <= 5;
}

function petEmoji(id = game.pet?.id) {
  return pets.find(p => p.id === id)?.emoji || "🐾";
}

function petName(id = game.petName) {
  return id || "Your companion";
}

function addDiscovery(name) {
  if (!game.discoveries.includes(name)) {
    game.discoveries.push(name);
    notify("New discovery: " + name + " ✨");
    saveGame();
  }
}

/* ==========================================
   5. ORIGINAL SVG ANIMAL ART
========================================== */

function petSVG() {
  const coat = game.mainColour.value;
  const marking = game.markingColour.value;
  const eyes = game.eyeColour.value;

  const face = `
    <ellipse cx="66" cy="68" rx="3.5" ry="5" fill="${eyes}"/>
    <ellipse cx="104" cy="68" rx="3.5" ry="5" fill="${eyes}"/>
    <circle cx="67" cy="66" r="1.2" fill="white"/>
    <circle cx="105" cy="66" r="1.2" fill="white"/>
    <path d="M81 80 Q85 75 89 80 Q85 86 81 80" fill="#D97882"/>
    <path d="M85 85 Q79 92 74 87 M85 85 Q91 92 96 87"
      fill="none" stroke="#614A45" stroke-width="2.5" stroke-linecap="round"/>
  `;

  const animals = {
    dog: `
      <path d="M48 38 Q18 5 22 68 Q27 100 54 87Z" fill="${marking}"/>
      <path d="M121 38 Q150 5 146 68 Q141 100 115 87Z" fill="${marking}"/>
      <ellipse cx="85" cy="92" rx="54" ry="47" fill="${coat}"/>
      <path d="M50 69 Q42 24 85 21 Q128 24 120 69 Q113 105 85 111 Q57 105 50 69Z" fill="${coat}"/>
      <path d="M85 85 Q65 75 62 92 Q62 111 85 111 Q108 111 108 92 Q105 75 85 85Z" fill="${marking}"/>
      ${face}
    `,

    cat: `
      <path d="M38 60 L37 12 Q40 4 49 20 L66 43Z" fill="${coat}"/>
      <path d="M102 43 L122 20 Q131 4 134 12 L133 60Z" fill="${coat}"/>
      <path d="M44 40 L45 24 L57 43Z M114 43 L126 24 L127 40Z" fill="${marking}"/>
      <ellipse cx="85" cy="83" rx="49" ry="48" fill="${coat}"/>
      <path d="M47 85 Q30 75 25 95 M123 85 Q140 75 145 95"
        stroke="${marking}" stroke-width="8" fill="none" stroke-linecap="round"/>
      ${face}
      <path d="M43 79 L15 73 M43 91 L15 96 M127 79 L155 73 M127 91 L155 96"
        stroke="#8C8177" stroke-width="2" stroke-linecap="round"/>
    `,

    bunny: `
      <path d="M57 55 Q35 15 48 3 Q65 -2 72 48Z" fill="${coat}"/>
      <path d="M100 48 Q106 -2 123 3 Q137 15 113 55Z" fill="${coat}"/>
      <path d="M51 33 Q50 12 57 13 L67 48Z" fill="${marking}"/>
      <path d="M109 48 L121 13 Q128 12 128 33Z" fill="${marking}"/>
      <ellipse cx="85" cy="91" rx="49" ry="43" fill="${coat}"/>
      <ellipse cx="85" cy="101" rx="22" ry="15" fill="${marking}"/>
      ${face}
    `,

    hamster: `
      <ellipse cx="85" cy="83" rx="55" ry="50" fill="${coat}"/>
      <circle cx="43" cy="45" r="17" fill="${marking}"/>
      <circle cx="127" cy="45" r="17" fill="${marking}"/>
      <circle cx="43" cy="45" r="9" fill="${coat}"/>
      <circle cx="127" cy="45" r="9" fill="${coat}"/>
      <ellipse cx="65" cy="90" rx="18" ry="16" fill="${marking}"/>
      <ellipse cx="105" cy="90" rx="18" ry="16" fill="${marking}"/>
      ${face}
    `,

    bird: `
      <path d="M48 91 Q22 100 13 119 Q39 117 60 105Z" fill="${marking}"/>
      <path d="M52 96 Q30 117 29 132 Q52 124 67 108Z" fill="${coat}"/>

      <path d="M42 79 Q37 47 65 34 Q91 20 119 39
        Q145 56 133 91 Q124 119 91 124 Q59 124 42 100
        Q34 90 42 79Z" fill="${coat}"/>

      <path d="M79 66 Q91 25 126 20 Q145 18 151 32
        Q133 33 123 49 Q147 42 158 55 Q140 55 127 68
        Q145 68 151 81 Q125 82 111 94Z"
        fill="${marking}" opacity=".9"/>

      <g class="bird-wing">
        <path d="M83 76 Q58 40 31 45 Q16 49 13 64
          Q32 58 43 72 Q23 69 17 85 Q38 78 51 94
          Q36 94 31 108 Q61 106 86 101Z"
          fill="${marking}"/>

        <path d="M32 65 Q47 70 60 88
          M28 83 Q45 83 59 96 M43 52 Q61 61 72 82"
          fill="none" stroke="${coat}" stroke-width="3"
          stroke-linecap="round"/>
      </g>

      <path d="M69 91 Q91 83 117 96 Q106 119 85 116
        Q69 112 69 91Z" fill="${marking}" opacity=".65"/>

      <circle cx="105" cy="45" r="25" fill="${coat}"/>
      <circle cx="114" cy="40" r="5" fill="${eyes}"/>
      <circle cx="115.5" cy="38.5" r="1.7" fill="white"/>
      <path d="M128 47 L153 54 L129 62Z" fill="#E6A642"/>
      <path d="M82 119 Q75 128 68 124 M99 122 Q95 131 88 127"
        fill="none" stroke="#D58B45" stroke-width="3"
        stroke-linecap="round"/>
    `
  };

  return `
    <svg class="pet-art" viewBox="0 0 170 145"
      xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label="${game.pet?.name || "Pet"} illustration">
      ${animals[game.pet?.id] || animals.dog}
    </svg>
  `;
}

function petPreview() {
  if (!game.pet) return "";

  return `
    <div class="pet-preview" style="--pet-color:${game.mainColour.value}">
      ${petSVG()}
      <span class="colour-name">${game.mainColour.name}</span>
    </div>
  `;
}

/* ==========================================
   6. ORIGINAL COLOUR PICKER
========================================== */

function colourOptions(list, selected, type) {
  return `
    <div class="colour-grid">
      ${list.map((colour, index) => `
        <button
          type="button"
          class="colour-option ${selected.name === colour.name ? "selected" : ""}"
          data-type="${type}"
          data-index="${index}"
          style="--swatch:${colour.value}"
          title="${colour.name}"
          aria-label="${colour.name}">
        </button>
      `).join("")}
    </div>
    <p class="colour-description">
      Selected: <strong>${selected.name}</strong>
    </p>
  `;
}

function wireColourPicker() {
  document.querySelectorAll(".colour-option").forEach(button => {
    button.onclick = () => {
      const type = button.dataset.type;
      const index = Number(button.dataset.index);

      if (type === "main") {
        game.mainColour = colours[index];
        showMainColour();
      }

      if (type === "marking") {
        game.markingColour = colours[index];
        showMarkingColour();
      }

      if (type === "eye") {
        game.eyeColour = eyeColours[index];
        showEyeColour();
      }
    };
  });
}

/* ==========================================
   7. ORIGINAL PARTICLES
========================================== */

function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (9 + Math.random() * 15) + "s";
    particle.style.animationDelay = (-Math.random() * 20) + "s";
    particle.style.opacity = 0.3 + Math.random() * 0.7;

    container.appendChild(particle);
  }
}

/* ==========================================
   8. ORIGINAL ONBOARDING SCREENS
========================================== */

function showPlayerScreen() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">EXPEDITION REGISTRATION · 01</span>
      <div class="screen-icon">🧭</div>
      <h1>First things first...</h1>
      <p>Before exploring the unknown, let's get to know our explorer.</p>

      <div class="form-group">
        <label for="player-name">What should we call you?</label>
        <input id="player-name" maxlength="18"
          placeholder="Enter your name..." autocomplete="off">
      </div>

      <p class="error-message" id="error"></p>
      <button class="primary-btn" id="continue-btn">Continue →</button>
    </section>
  `;

  const input = document.getElementById("player-name");

  document.getElementById("continue-btn").onclick = () => {
    const name = input.value.trim();

    if (!name) {
      document.getElementById("error").textContent =
        "Please enter your name first.";
      input.focus();
      return;
    }

    game.playerName = name;
    saveGame();
    showPetSelection();
  };

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      document.getElementById("continue-btn").click();
    }
  });

  input.focus();
}

function showPetSelection() {
  app.innerHTML = `
    <section class="game-screen wide-screen">
      <span class="step-label">CHOOSE YOUR COMPANION · 02</span>
      <h1>Every explorer needs a partner.</h1>
      <p>Choose the animal that will accompany you through the unknown.</p>

      <div class="pet-grid">
        ${pets.map(pet => `
          <button class="pet-card" data-pet="${pet.id}" type="button">
            <span class="pet-emoji">${pet.emoji}</span>
            <strong>${pet.name}</strong>
            <span class="pet-trait">${pet.trait}</span>
          </button>
        `).join("")}
      </div>

      <div class="button-row">
        <button class="secondary-btn" id="back-btn">← Go back</button>
      </div>
    </section>
  `;

  document.querySelectorAll(".pet-card").forEach(card => {
    card.onclick = () => {
      game.pet = pets.find(pet => pet.id === card.dataset.pet);
      saveGame();
      showMainColour();
    };
  });

  document.getElementById("back-btn").onclick = showPlayerScreen;
}

function showMainColour() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">CUSTOMISATION · 03</span>
      <h1>Choose their colours.</h1>
      <p>First, let's choose your companion's main coat colour.</p>

      ${petPreview()}

      <h3>Primary colour</h3>
      ${colourOptions(colours, game.mainColour, "main")}

      <div class="button-row">
        <button class="secondary-btn" id="back-btn">← Back</button>
        <button class="primary-btn" id="continue-btn">Next: Markings →</button>
      </div>
    </section>
  `;

  wireColourPicker();
  document.getElementById("back-btn").onclick = showPetSelection;
  document.getElementById("continue-btn").onclick = showMarkingColour;
}

function showMarkingColour() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">CUSTOMISATION · 04</span>
      <h1>Add some personality!</h1>
      <p>Choose the secondary colour for your companion's ears, patches, stripes or wings.</p>

      ${petPreview()}

      <h3>Marking colour</h3>
      ${colourOptions(colours, game.markingColour, "marking")}

      <div class="button-row">
        <button class="secondary-btn" id="back-btn">← Back</button>
        <button class="primary-btn" id="continue-btn">Next: Eyes →</button>
      </div>
    </section>
  `;

  wireColourPicker();
  document.getElementById("back-btn").onclick = showMainColour;
  document.getElementById("continue-btn").onclick = showEyeColour;
}

function showEyeColour() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">CUSTOMISATION · 05</span>
      <h1>Eyes full of wonder.</h1>
      <p>Now choose your companion's eye colour.</p>

      ${petPreview()}

      <h3>Eye colour</h3>
      ${colourOptions(eyeColours, game.eyeColour, "eye")}

      <div class="button-row">
        <button class="secondary-btn" id="back-btn">← Back</button>
        <button class="primary-btn" id="continue-btn">Name your friend →</button>
      </div>
    </section>
  `;

  wireColourPicker();
  document.getElementById("back-btn").onclick = showMarkingColour;
  document.getElementById("continue-btn").onclick = showNamingScreen;
}

function showNamingScreen() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">MEET YOUR COMPANION · 06</span>
      ${petPreview()}
      <h1>A name for your new friend.</h1>
      <p>Every great adventure deserves a great companion.</p>

      <div class="form-group">
        <label for="pet-name">What will you call your ${game.pet.name.toLowerCase()}?</label>
        <input id="pet-name" maxlength="16"
          placeholder="Enter your pet's name..." autocomplete="off">
      </div>

      <p class="error-message" id="error"></p>

      <div class="button-row">
        <button class="secondary-btn" id="back-btn">← Back</button>
        <button class="primary-btn" id="continue-btn">Meet my companion →</button>
      </div>
    </section>
  `;

  const input = document.getElementById("pet-name");

  document.getElementById("back-btn").onclick = showEyeColour;

  document.getElementById("continue-btn").onclick = () => {
    const name = input.value.trim();

    if (!name) {
      document.getElementById("error").textContent =
        "Your companion needs a name!";
      input.focus();
      return;
    }

    game.petName = name;
    saveGame();
    showAdventureReady();
  };

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      document.getElementById("continue-btn").click();
    }
  });

  input.focus();
}

function showAdventureReady() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">YOUR EXPEDITION IS READY</span>
      ${petPreview()}

      <h1>Meet ${escapeHTML(game.petName)}!</h1>
      <p>Explorer ${escapeHTML(game.playerName)}, your journey is about to begin.</p>

      <div class="adventure-card">
        <strong>Your expedition companion</strong>
        <p>Animal: ${game.pet.name}</p>
        <p>Name: ${escapeHTML(game.petName)}</p>
        <p>Primary colour: ${game.mainColour.name}</p>
        <p>Markings: ${game.markingColour.name}</p>
        <p>Eye colour: ${game.eyeColour.name}</p>
        <p>Special ability: ${game.pet.description}</p>
      </div>

      <button class="primary-btn" id="start-adventure">
        Begin the expedition 🌴
      </button>
    </section>
  `;

  document.getElementById("start-adventure").onclick = () => {
    game.petAppearance = {
      colour: game.mainColour?.value || colours[0].value,
      marking: game.markingColour?.value || colours[2].value,
      eye: game.eyeColour?.value || eyeColours[0].value
    };
    game.setupComplete = true;
    saveGame();
    showIslandIntroduction();
  };
}

function showIslandIntroduction() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">EXPEDITION LOG · DAY 01</span>
      <div class="screen-icon">🏝️</div>

      <h1>Welcome to the unknown.</h1>
      <p>After a long journey, you have arrived at an uncharted island.</p>

      <div class="adventure-card">
        <strong>Mission briefing</strong>
        <p>Your supplies are limited.</p>
        <p>The island remains unexplored.</p>
        <p>Strange wildlife has been spotted beyond the shoreline.</p>
        <p>Your first objective: establish a safe campsite.</p>
      </div>

      <p>Your adventure with ${escapeHTML(game.petName)} begins here.</p>

      <button class="primary-btn" id="continue-expedition">
        Continue to Sunny Shore →
      </button>
    </section>
  `;

  document.getElementById("continue-expedition").onclick = () => {
    enterLevel(1);
  };
}

/* ==========================================
   9. GAME PROGRESSION
========================================== */

function enterLevel(id) {
  if (!canEnterLevel(id)) {
    notify("Complete the previous region to unlock this path!");
    return;
  }

  game.currentLevel = id;
  saveGame();

  if ((id === 2 || id === 3) &&
      getObjectives(id).length >= getLevel(id).objectives.length) {
    finishLevel();
    return;
  }

  showMissionPreview(id);
}

function completeObjective(index) {
  const level = getLevel();
  const completed = getObjectives();

  if (completed.includes(index)) return;

  completed.push(index);
  saveGame();

  notify("Objective completed: " + level.objectives[index] + " ✓");

  if (completed.length === level.objectives.length) {
    finishLevel();
  } else {
    showPlayableLevel();
  }
}

function finishLevel() {
  const id = game.currentLevel;

  if (game.completedLevels.includes(id)) {
    showWorldMap();
    return;
  }

  const level = getLevel();

  game.completedLevels.push(id);
  game.coins += level.reward;
  game.highestUnlockedLevel = Math.max(
    game.highestUnlockedLevel,
    Math.min(5, id + 1)
  );

  if (id === 1 && !game.purchasedAccessories.includes("sunny-bloom")) {
    game.purchasedAccessories.push("sunny-bloom");
  }

  if (id === 4) {
    game.journalUnlocked = true;
  }

  if (id === 5) {
    game.rescueComplete = true;
    if (!game.purchasedAccessories.includes("forgotten-gift")) {
      game.purchasedAccessories.push("forgotten-gift");
    }
  }

  saveGame();
  showLevelCompletion(level);
}

/* ==========================================
   10. MISSION PREVIEW
========================================== */

function showMissionPreview(id) {
  const level = getLevel(id);
  const completed = getObjectives(id);
  const percent = progressPercent(id);

  app.innerHTML = `
    <section class="game-screen wide-screen">
      <span class="step-label">REGION ${id} · ${level.region.toUpperCase()}</span>

      <div class="screen-icon">${level.emoji}</div>

      <h1>${level.name}</h1>
      <p>${level.description}</p>

      <div class="adventure-card">
        <strong>Mission objectives</strong>

        <div class="objective-list">
          ${level.objectives.map((objective, index) => `
            <p class="${completed.includes(index) ? "objective-done" : ""}">
              ${completed.includes(index) ? "✓" : "○"} ${objective}
            </p>
          `).join("")}
        </div>

        <div class="progress-track">
          <div class="progress-fill" style="width:${percent}%"></div>
        </div>

        <p>${percent}% completed</p>
        <p>Mission reward: 🪙 ${level.reward} coins</p>
      </div>

      <button class="primary-btn" id="enter-region">
        ${percent ? "Continue exploring →" : "Enter region →"}
      </button>

      <button class="secondary-btn" onclick="showWorldMap()">
        Island map
      </button>
    </section>
  `;

  document.getElementById("enter-region").onclick = showPlayableLevel;
}

/* ==========================================
   11. PLAYABLE LEVELS
========================================== */

function showPlayableLevel() {
  const id = game.currentLevel;
  const level = getLevel();

  app.innerHTML = `
    <section class="game-screen wide-screen adventure-game">
      <div class="game-topbar">
        <div>
          <span class="step-label">REGION ${id}</span>
          <h1>${level.name}</h1>
        </div>
        <div class="coin-counter">🪙 ${game.coins}</div>
      </div>

      <div class="adventure-world world-${id}">
        <div class="world-decoration">${worldDecorations(id)}</div>

        <div class="world-pet">
          <div class="world-pet-art">${petSVG()}</div>
          <strong>${escapeHTML(game.petName)}</strong>
          <span>${petComment(id)}</span>
          ${equippedAccessoryDisplay(0)}
        </div>

        <div class="world-player">🧭</div>

        <p class="world-description">${worldDescription(id)}</p>
      </div>

      <div class="game-menu-buttons">
        <button onclick="showWorldMap()">🗺 Island map</button>
        <button onclick="showJournal()">📖 Journal</button>
        <button onclick="showShop()">🛍 Shop</button>
        <button onclick="showSaveMenu()">💾 Save</button>
      </div>

      <div class="game-objectives">
        <h3>Current objectives</h3>

        ${level.objectives.map((objective, index) => `
          <div class="game-objective ${isComplete(id, index) ? "objective-done" : ""}">
            <span>${isComplete(id, index) ? "✓" : "○"}</span>
            ${objective}
          </div>
        `).join("")}
      </div>

      <div class="level-actions">
        ${getLevelActions(id)}
      </div>
    </section>
  `;
}

function worldDecorations(id) {
  const decorations = {
    1: "🌴　🌊　🐚　🌴　☀️　🌊",
    2: "🌳　🍄　🌿　🌲　🦋　🌳",
    3: "💧　🌿　🪨　🌸　💦　🌿",
    4: "🌙　🌫️　🏛️　✨　🌿　🌙",
    5: "🌿　🌳　🌼　🐾　🌳　🌿"
  };

  return decorations[id];
}

function worldDescription(id) {
  const descriptions = {
    1: "Warm sunlight, soft sand and the sound of waves surround you.",
    2: "The forest is full of winding paths and little secrets.",
    3: "The waterfall fills the air with a cool mist.",
    4: "The ruins are quiet, but something seems to be calling.",
    5: "The hidden valley is close. Your companion stays beside you."
  };

  return descriptions[id];
}

function petComment(id) {
  const comments = {
    1: [
      "This place smells wonderful!",
      "Can we explore over there?",
      "I think we'll like it here."
    ],
    2: [
      "I think there's something behind those trees.",
      "Did you hear that little bird?",
      "Let's see where this path goes!"
    ],
    3: [
      "The water sounds lovely!",
      "Look at all those flowers!",
      "Can we explore the rocks?"
    ],
    4: [
      "Something is different here...",
      "I think this place has a story.",
      "Let's look around carefully."
    ],
    5: [
      "We need to find our new friend.",
      "I can hear them somewhere.",
      "Let's stay together."
    ]
  };

  const options = comments[id];
  return options[Math.floor(Math.random() * options.length)];
}

/* ==========================================
   12. LEVEL 1 — SUNNY SHORE
========================================== */

function getLevelActions(id) {
  if (id === 1) {
    return `
      <h3>Explore Sunny Shore</h3>

      <div class="interaction-grid">
        <button onclick="exploreBeach()">🏖️ Explore beach</button>
        <button onclick="collectLevelResource('wood',5)">🪵 Gather wood</button>
        <button onclick="collectLevelResource('leaves',4)">🌴 Gather palm leaves</button>
        <button onclick="collectLevelResource('stones',3)">🪨 Gather stones</button>
        <button onclick="playWithPet()">🐾 Play with ${escapeHTML(game.petName)}</button>
        <button onclick="buildShelter()">🏡 Build shelter</button>
      </div>

      <div class="resource-status">${resourceSummary(1)}</div>
    `;
  }

  if (id === 2) {
    return `
      <h3>Explore Whispering Woods</h3>
      <div class="interaction-grid">
        <button onclick="exploreForest()">🌳 Explore forest</button>
        <button onclick="discoverClearing()">🌿 Find hidden clearing</button>
        <button onclick="collectLevelResource('flowers',3)">🌼 Gather forest flowers</button>
      </div>
      <div class="resource-status">${resourceSummary(2)}</div>
    `;
  }

  if (id === 3) {
    return `
      <h3>Explore Forgotten Falls</h3>
      <div class="interaction-grid">
        <button onclick="exploreWaterfall()">💧 Explore waterfall</button>
        <button onclick="visitRiverbank()">🌸 Visit flower-filled riverbank</button>
        <button onclick="findSafeWater()">💧 Discover the safe little pond</button>
        <button onclick="exploreRockyIsland()">🪨 Explore rocky island</button>
        <button onclick="discoverWaterfallCave()">✨ Discover waterfall cave</button>
      </div>
    `;
  }

  if (id === 4) {
    return `
      <h3>Explore Shadowlands</h3>

      <div class="interaction-grid">
        <button onclick="exploreTwilightPath()">🌫️ Explore twilight path</button>
        <button onclick="exploreCemetery()">🪦 Discover forgotten cemetery</button>
        <button onclick="discoverAncientIdol()">🗿 Find ancient idol</button>
        <button onclick="findJournal()">📖 Find forgotten journal</button>
        <button onclick="showJournal()">📜 Open journal</button>
      </div>
    `;
  }

  return `
    <h3>The Forgotten Companion</h3>

    <div class="interaction-grid">
      ${game.level5AtShelter
        ? `<button onclick="feedSecondCompanion()">🥕 Feed ${escapeHTML(game.secondCompanion?.name || "the new companion")}</button>
           <button onclick="playWithSecondCompanion()">🎾 Play with the new companion</button>`
        : `<button onclick="followAnimalCall()">🐾 Follow the animal call</button>
           <button onclick="discoverHiddenValley()">🌿 Discover hidden valley</button>
           <button onclick="locateSecondCompanion()">🐾 Find missing companion</button>
           ${game.secondCompanion?.found ? `<button onclick="returnBothCompanionsHome()">🏡 Get both companions home</button>` : ""}`}
    </div>
    ${secondPetDisplay()}
    ${game.secondCompanion?.found ? renderTwoPetDashboards() : ""}
  `;
}

/* ==========================================
   13. RESOURCES AND LEVEL 1 ACTIONS
========================================== */

function resourceSummary(levelId) {
  const resources = game.resources[levelId] || {};

  return `
    <p>Collected supplies:</p>
    <span>🪵 Wood: ${resources.wood || 0}</span>
    <span>🌴 Leaves: ${resources.leaves || 0}</span>
    <span>🪨 Stones: ${resources.stones || 0}</span>
    <span>🌼 Flowers: ${resources.flowers || 0}</span>
  `;
}

function collectLevelResource(resource, amount) {
  const id = game.currentLevel;

  if (!game.resources[id]) game.resources[id] = {};

  const oldAmount = game.resources[id][resource] || 0;

  if (id === 1) {
    const limits = { wood: 5, leaves: 4, stones: 3 };
    game.resources[id][resource] = Math.min(
      limits[resource],
      oldAmount + amount
    );
  } else {
    game.resources[id][resource] = oldAmount + amount;
  }

  notify(`Collected ${amount} ${resource}!`);
  saveGame();

  if (id === 1) {
    const r = game.resources[1];

    if (r.wood >= 5) completeObjective(1);
    if (r.leaves >= 4) completeObjective(2);
    if (r.stones >= 3) completeObjective(3);
  }

  if (id === 2 && resource === "flowers" && game.resources[2].flowers >= 3) {
    completeObjective(2);
  }

  showPlayableLevel();
}

function exploreBeach() {
  addDiscovery("Sunny Shore beach");
  completeObjective(0);
}

function playWithPet() {
  notify(`${game.petName} is having a wonderful time! 🐾`);
  completeObjective(4);
}

function buildShelter() {
  const r = game.resources[1] || {};

  if ((r.wood || 0) < 5 || (r.leaves || 0) < 4 || (r.stones || 0) < 3) {
    notify("You still need more wood, leaves and stones!");
    return;
  }

  if (game.shelterBuilt) {
    notify("Your shelter is already built!");
    return;
  }

  game.shelterBuilt = true;
  addDiscovery("Sunny Shore shelter");
  completeObjective(5);
}

/* ==========================================
   14. LEVEL 2 — WHISPERING WOODS
========================================== */

function exploreForest() {
  addDiscovery("Whispering Woods");
  completeObjective(0);
  notify(`${game.petName} is curious about the forest.`);
}

function discoverClearing() {
  addDiscovery("Hidden forest clearing");
  completeObjective(1);
}

/* ==========================================
   15. LEVEL 3 — FORGOTTEN FALLS
========================================== */

function exploreWaterfall() {
  addDiscovery("The great waterfall");
  completeObjective(0);
}

function visitRiverbank() {
  addDiscovery("Flower-filled riverbank");
  completeObjective(1);
}

function findSafeWater() {
  if (!game.discoveries.includes("Flower-filled riverbank")) {
    notify("Explore the riverbank first.");
    return;
  }

  game.safeWaterFound = true;
  addDiscovery("Safe freshwater spot");
  completeObjective(2);
}

function exploreRockyIsland() {
  addDiscovery("Rocky island");
  completeObjective(3);
}

function discoverWaterfallCave() {
  addDiscovery("Waterfall cave");
  completeObjective(4);
}

/* ==========================================
   16. LEVEL 4 — SHADOWLANDS
========================================== */

function exploreTwilightPath() {
  addDiscovery("Shadowlands twilight path");
  completeObjective(0);
}

function exploreCemetery() {
  if (!isComplete(4, 0)) {
    notify("Follow the twilight path first.");
    return;
  }
  addDiscovery("Forgotten cemetery");
  completeObjective(1);
}

function discoverAncientIdol() {
  if (!isComplete(4, 1)) {
    notify("Discover the forgotten cemetery first.");
    return;
  }
  addDiscovery("Ancient guardian idol");
  completeObjective(2);
}

function findJournal() {
  if (!isComplete(4, 2)) {
    notify("Find the ancient idol before searching for the journal.");
    return;
  }

  if (!game.journalUnlocked) {
    game.journalUnlocked = true;
    game.journalRead = true;
    addDiscovery("Forgotten journal");
    notify("You found the forgotten journal and opened it. Its pages reveal a final landmark...");
    completeObjective(3);
    saveGame();
  }

  // The journal opens immediately when discovered. Reading it is no longer a separate task.
  showJournal();
}

function discoverBellTower() {
  if (!game.journalUnlocked || !isComplete(4, 3)) {
    notify("The journal mentions a forgotten bell tower. Find and open the journal first.");
    return;
  }
  addDiscovery("Forgotten bell tower");
  game.bellTowerFound = true;
  completeObjective(4);
  setWorldMessage("You discovered the forgotten bell tower. A distant animal call echoes across the ruins...");
  saveGame();
}

function triggerShadowlandsAnimalCall() {
  if (game.animalCallHeard) return;
  game.animalCallHeard = true;
  saveGame();
  initAudio();
  playAnimalSound();
  notify("A distant animal call echoes through the cemetery and ruins...");
  setTimeout(() => {
    notify(`${game.petName} suddenly stops and listens. Something is nearby.`);
    playAnimalSound();
  }, 1500);
}

/* ==========================================
   17. DISCOVERY JOURNAL
========================================== */

function showJournal() {
  if (game.currentLevel === 4 && game.journalUnlocked && !game.journalRead) {
    game.journalRead = true;
    saveGame();
  }

  const journalText = game.journalUnlocked
    ? `
      <div class="adventure-card">
        <h3>The Forgotten Journal</h3>
        <p>These pages describe the animals that once lived across the island.</p>
        <p>Some lived near the forests, others near the waterfalls and hidden valleys.</p>
        <p>Their habits, favourite places and unusual abilities were carefully recorded.</p>
        <p>One final entry mentions an animal that disappeared from the island long ago...</p>
      </div>
    `
    : `
      <p>You haven't found the forgotten journal yet. Keep exploring!</p>
    `;

  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">YOUR EXPEDITION RECORD</span>
      <div class="screen-icon">📖</div>
      <h1>Discovery Journal</h1>

      ${journalText}

      <h3>Your discoveries</h3>
      <div class="adventure-card">
        ${game.discoveries.length
          ? game.discoveries.map(item => `<p>✦ ${escapeHTML(item)}</p>`).join("")
          : "<p>Your discoveries will appear here.</p>"}
      </div>

      <button class="primary-btn" onclick="showPlayableLevel()">Return to adventure</button>
    </section>
  `;
}

/* ==========================================
   18. LEVEL 5 — THE FORGOTTEN COMPANION
========================================== */

function followAnimalCall() {
  if (!game.animalCallHeard) {
    notify("There is no clear call to follow yet.");
    return;
  }

  addDiscovery("Trail of the missing companion");
  completeObjective(0);
}

function discoverHiddenValley() {
  if (!isComplete(5, 0)) {
    notify("Listen for the animal call and follow it first.");
    return;
  }

  addDiscovery("The hidden valley");
  completeObjective(1);
}

function locateSecondCompanion() {
  if (!isComplete(5, 1)) {
    notify("Explore the hidden valley first.");
    return;
  }

  if (!game.secondCompanion) {
    const possiblePets = pets.filter(p => p.id !== game.pet.id);
    const chosen = possiblePets[
      Math.floor(Math.random() * possiblePets.length)
    ];

    game.secondCompanion = {
      id: chosen.id,
      name: "New Friend",
      emoji: chosen.emoji,
      colour: "#C99B73",
      found: true,
      safe: false,
      namePrompted: false,
      appearance: { colour: "#C99B73", marking: "#987052", eye: "#654321" },
      closet: { favouriteStyle: "Explorer", equippedAccessories: [] }
    };
  }

  promptSecondCompanionName();
  notify(`You found a ${game.secondCompanion.id}! ${game.secondCompanion.name} needs your help.`);
  completeObjective(2);
}

function promptSecondCompanionName() {
  if (!game.secondCompanion || game.secondCompanion.namePrompted) return;
  const suggested = game.secondCompanion.name && game.secondCompanion.name !== "New Friend"
    ? game.secondCompanion.name
    : "";
  const entered = window.prompt(
    "Your new companion has arrived! What would you like to name them?",
    suggested
  );
  const chosenName = (entered || "").trim().slice(0, 16);
  game.secondCompanion.name = chosenName || "New Friend";
  game.secondCompanion.namePrompted = true;
  saveGame();
}

function secondPetDisplay() {
  if (!game.secondCompanion) {
    return `<p>Your new companion is still somewhere in the valley...</p>`;
  }

  const companionName = escapeHTML(game.secondCompanion.name || "New Friend");
  return `
    <div class="adventure-card second-companion-card">
      <div class="screen-icon">${game.secondCompanion.emoji}</div>
      <h3>${companionName} — your second companion</h3>
      <p>You rescued a ${escapeHTML(game.secondCompanion.id)}. This little one has their own appearance, accessories and personal closet, separate from Clove.</p>
      <p>Your new companion has joined the 3D world and will stay beside you as you travel home.</p>
      <div class="button-row">
        <button class="primary-btn" onclick="showSecondPetCloset()">👗 Open ${companionName}'s personal closet</button>
      </div>
    </div>
  `;
}

function helpSecondCompanion() { return returnBothCompanionsHome(); }
function guideBothCompanions() { return returnBothCompanionsHome(); }
function buildSharedHome() { notify("Your Sunny Shore shelter is already built. Let's take both companions there!"); }

function returnBothCompanionsHome() {
  if (!game.secondCompanion?.found) { notify("Find the missing companion first."); return; }
  if (!game.shelterBuilt) { notify("Your Sunny Shore shelter must be built first in Level 1."); return; }
  if (game.level5AtShelter) { notify("You're already home with both companions!"); return; }
  game.level5ReturnPending = true;
  notify("You and both companions begin the journey back to the Sunny Shore shelter.");
  setTimeout(() => {
    game.level5AtShelter = true;
    game.secondCompanion.safe = true;
    game.worldPosition = { x: 88, y: 86 };
    saveGame();
    completeLevel5Objective(3);
    showPlayableLevel();
    setTimeout(() => setWorldMessage("Home again! Your original companion welcomes the newcomer into the shelter. ❤️"), 350);
  }, 700);
}

function completeLevel5Objective(index) {
  const list = game.objectives[5] || (game.objectives[5] = []);
  if (list.includes(index)) return;
  list.push(index);
  saveGame();
  playSoundEffect("success");
  notify("Objective completed: " + getLevel(5).objectives[index]);
  if (game.currentLevel === 5) {
    const display = document.getElementById("objective-display");
    if (display) display.innerHTML = renderObjectiveList();
  }
  if (list.length >= getLevel(5).objectives.length) setTimeout(() => finishLevel(), 700);
}

function renderOnePetDashboard(name, needs, slot) {
  const rows = [["Hunger",needs.hunger],["Happiness",needs.happiness],["Energy",needs.energy],["Cleanliness",needs.cleanliness]];
  return `<div class="pet-status level5-pet-dashboard">
    <h3>${escapeHTML(name)}'s dashboard</h3>
    ${rows.map(([label,value]) => `<div class="pet-status-row"><span>${label}</span><div class="pet-meter"><span style="width:${Math.max(0,Math.min(100,value))}%"></span></div><b>${Math.round(value)}%</b></div>`).join("")}
    ${slot===1 ? `<div class="pet-action-buttons"><button onclick="feedSecondCompanion()">🥕 Feed</button><button onclick="playWithSecondCompanion()">🎾 Play</button><button onclick="secondCompanionCare('pet')">♡ Pet</button><button onclick="secondCompanionCare('rest')">💤 Rest</button><button onclick="showSecondPetCloset()">👗 ${escapeHTML(name)}'s closet</button></div>` : `<div class="pet-action-buttons"><button onclick="petInteraction('feed')">🥕 Feed</button><button onclick="petInteraction('play')">🎾 Play</button><button onclick="petInteraction('pet')">♡ Pet</button><button onclick="petInteraction('rest')">💤 Rest</button><button onclick="showShop()">🎀 Accessory closet</button></div>`}
  </div>`;
}
function renderTwoPetDashboards() {
  if (!game.secondCompanion?.found) return "";
  game.secondPetNeeds = game.secondPetNeeds || { hunger:55,happiness:45,energy:75,cleanliness:70 };
  return `<div class="two-pet-dashboards"><h3>Both companions</h3>
    ${renderOnePetDashboard(game.petName, game.petNeeds, 0)}
    ${renderOnePetDashboard(game.secondCompanion.name || "New Friend", game.secondPetNeeds, 1)}
    ${game.level5AtShelter ? `<div class="adventure-card bonding-card"><div class="screen-icon">🐾 ❤️ 🐾</div><h3>A new friendship</h3><p>Your first companion gently welcomes the newcomer. They settle beside each other, share their toys and begin to bond.</p></div>` : ""}
  </div>`;
}
function updateTwoPetDashboards() {
  const host = document.querySelector(".two-pet-dashboards");
  if (host) host.outerHTML = renderTwoPetDashboards();
  saveGame();
}

/* The rescued companion has an independent closet and appearance. The player's human closet remains separate. */
function showSecondPetCloset() {
  if (!game.secondCompanion?.found) return;
  const pet = game.secondCompanion;
  pet.appearance = pet.appearance || { colour: pet.colour || "#C99B73", marking: "#987052", eye: "#654321" };
  pet.closet = pet.closet || { favouriteStyle: "Explorer", equippedAccessories: [] };
  game.purchasedAccessories = game.purchasedAccessories || [];
  game.equippedAccessories = game.equippedAccessories || {};
  game.equippedAccessories[1] = Array.isArray(game.equippedAccessories[1])
    ? game.equippedAccessories[1]
    : (Array.isArray(pet.closet.equippedAccessories) ? pet.closet.equippedAccessories : []);
  pet.closet.equippedAccessories = [...game.equippedAccessories[1]];
  saveGame();
  const swatches = ["#F1DCC0","#D9A34F","#987052","#A6A8A4","#FFFFFF","#454545","#F2A6C1","#B99AE8","#75B8E8","#A9D89B"];
  const eyes = ["#654321","#2685C7","#65A85B","#A65AC4","#D5A52F","#222222","#9299A5"];
  const colorButtons = (field, values) => values.map(c => `<button class="colour-dot" style="background:${c};outline:${pet.appearance[field]===c?'3px solid #4A3728':'none'}" aria-label="Choose ${field} colour" onclick="setSecondPetAppearance('${field}','${c}')"></button>`).join("");
  app.innerHTML = `<section class="game-screen wide-screen">
    <span class="step-label">SECOND COMPANION CUSTOMISATION</span><div class="screen-icon">${pet.emoji}</div>
    <h1>${escapeHTML(pet.name || "New companion")}'s Personal Pet Closet</h1>
    <p>Choose their coat, markings, eyes and accessories. These choices are saved separately from your first companion and your own character.</p>
    <div class="closet-section"><h3>Coat colour</h3><div class="colour-swatches">${colorButtons("colour",swatches)}</div></div>
    <div class="closet-section"><h3>Markings</h3><div class="colour-swatches">${colorButtons("marking",swatches)}</div></div>
    <div class="closet-section"><h3>Eye colour</h3><div class="colour-swatches">${colorButtons("eye",eyes)}</div></div>
    <div class="closet-section"><h3>Accessories</h3><p>Only accessories in your shared collection can be equipped. Your two pets keep separate outfits.</p>
      <div class="shop-grid">${accessories.map(a=>{
        const owned=game.purchasedAccessories.includes(a.id);
        const on=game.equippedAccessories[1].includes(a.id);
        return `<article class="shop-item"><span>${a.emoji}</span><h3>${a.name}</h3><p>${owned?'Owned':a.price===0?'Free':`🪙 ${a.price}`}</p>${owned?`<button onclick="toggleSecondPetAccessory('${a.id}')">${on?'Unequip':'Equip now'}</button>`:`<button onclick="buyAccessory('${a.id}',1)">Buy & equip</button>`}</article>`;
      }).join("")}</div>
    </div>
    <div class="adventure-card"><h3>Currently wearing</h3>${equippedAccessoryDisplay(1) || "<p>No accessories equipped.</p>"}</div>
    <div class="button-row"><button class="secondary-btn" onclick="showPlayableLevel()">← Back to adventure</button><button class="primary-btn" onclick="saveSecondPetCloset()">Save look ✓</button></div>
  </section>`;
}
function setSecondPetAppearance(field, value) {
  if (!game.secondCompanion) return;
  game.secondCompanion.appearance = game.secondCompanion.appearance || {};
  game.secondCompanion.appearance[field] = value;
  saveGame(); showSecondPetCloset();
}
function toggleSecondPetAccessory(id) {
  if (!game.purchasedAccessories.includes(id)) return;
  game.equippedAccessories = game.equippedAccessories || {};
  game.equippedAccessories[1] = game.equippedAccessories[1] || [];
  const list=game.equippedAccessories[1];
  game.equippedAccessories[1]=list.includes(id)?list.filter(x=>x!==id):[...list,id];
  game.secondCompanion.closet = game.secondCompanion.closet || { favouriteStyle: "Explorer", equippedAccessories: [] };
  game.secondCompanion.closet.equippedAccessories = [...game.equippedAccessories[1]];
  saveGame();
  if (window.PetParadise3D?.start && document.querySelector("#play-world")) window.PetParadise3D.start();
  showSecondPetCloset();
}
function saveSecondPetCloset() {
  saveGame();
  if (window.PetParadise3D?.start && document.querySelector("#play-world")) window.PetParadise3D.start();
  showPlayableLevel();
  setTimeout(()=>setWorldMessage(`${game.secondCompanion.name}'s new look is ready! ✨`),250);
}
function feedSecondCompanion() {
  if (!game.level5AtShelter || !game.secondCompanion?.safe) { setWorldMessage("Bring both companions to the Sunny Shore shelter first."); return; }
  game.secondPetNeeds = game.secondPetNeeds || { hunger:55,happiness:45,energy:75,cleanliness:70 };
  if ((game.inventory?.food || 0) <= 0) { setWorldMessage("You're out of food. Find some supplies first."); return; }
  game.inventory.food--;
  game.secondPetNeeds.hunger = Math.min(100, game.secondPetNeeds.hunger + 30);
  game.secondPetNeeds.happiness = Math.min(100, game.secondPetNeeds.happiness + 8);
  playSoundEffect("feed");
  playAnimalSound(game.secondCompanion.id, .035);
  setWorldMessage(`${game.secondCompanion.name} enjoys a meal in the shelter. ❤️`);
  if (!isComplete(5,4)) completeLevel5Objective(4);
  updateTwoPetDashboards();
}
function playWithSecondCompanion() {
  if (!game.level5AtShelter || !game.secondCompanion?.safe) { setWorldMessage("Bring both companions to the Sunny Shore shelter first."); return; }
  game.secondPetNeeds = game.secondPetNeeds || { hunger:55,happiness:45,energy:75,cleanliness:70 };
  if (game.secondPetNeeds.energy < 15) { setWorldMessage(`${game.secondCompanion.name} is tired. Let them rest first.`); return; }
  game.secondPetNeeds.happiness = Math.min(100, game.secondPetNeeds.happiness + 25);
  game.secondPetNeeds.energy = Math.max(0, game.secondPetNeeds.energy - 12);
  playSoundEffect("play");
  playAnimalSound(game.secondCompanion.id, .04);
  playAnimalSound(game.pet?.id, .035);
  setWorldMessage(`${game.secondCompanion.name} plays with you, while ${game.petName} comes over to join in! The two companions start bonding. ❤️`);
  if (!isComplete(5,5)) completeLevel5Objective(5);
  updateTwoPetDashboards();
}
function secondCompanionCare(action) {
  if (!game.level5AtShelter || !game.secondCompanion?.safe) return;
  game.secondPetNeeds = game.secondPetNeeds || { hunger:55,happiness:45,energy:75,cleanliness:70 };
  if (action === "pet") game.secondPetNeeds.happiness = Math.min(100,game.secondPetNeeds.happiness+12);
  if (action === "rest") game.secondPetNeeds.energy = Math.min(100,game.secondPetNeeds.energy+25);
  setWorldMessage(action === "pet" ? `${game.secondCompanion.name} enjoys your attention.` : `${game.secondCompanion.name} rests in the shelter.`);
  updateTwoPetDashboards();
}

/* ==========================================
   19. LEVEL COMPLETION
========================================== */

function showLevelCompletion(level) {
  const finalLevel = level.id === 5;

  app.innerHTML = `
    <section class="game-screen">
      <div class="screen-icon">🏆</div>

      <span class="step-label">REGION RESTORED</span>

      <h1>${finalLevel ? "A home for everyone!" : `${level.name} completed!`}</h1>

      <p>
        ${finalLevel
          ? "You helped a lost companion find safety. The island is now home to both your companions."
          : `${game.petName} explored every corner of this region with you.`}
      </p>

      ${level.id === 2 ? `
        <div class="adventure-card map-story-card">
          <div class="screen-icon">🌟 🗺️ 🌟</div>
          <h2>From the restored map…</h2>
          <p>The old forest map settles into place. A winding trail appears beyond the Whispering Woods, leading towards the distant sound of rushing water.</p>
          <p><strong>Next destination: Forgotten Falls</strong></p>
        </div>
      ` : ""}

      ${level.id === 3 ? `
        <div class="adventure-card map-story-card">
          <div class="screen-icon">🌟 🗺️ 🌟</div>
          <h2>A new path appears…</h2>
          <p>As the map is restored, a hidden trail emerges beyond the waterfall cave. It winds into a quiet twilight region, where the outlines of ancient ruins can be seen.</p>
          <p><strong>Next destination: Shadowlands</strong></p>
        </div>
      ` : ""}

      <div class="adventure-card">
        <h2>Mission rewards</h2>
        <p>🪙 +${level.reward} coins</p>
        <p>Regions completed: ${game.completedLevels.length}/5</p>

        ${level.id === 1 ? "<p>🌼 Special gift: Sunny Bloom</p>" : ""}
        ${level.id === 4 ? "<p>📖 Special discovery: Forgotten Journal</p>" : ""}
        ${level.id === 5 ? "<p>💎 Special gift: Island Guardian Gift</p>" : ""}
      </div>

      <button class="primary-btn" onclick="${level.id === 2 ? "enterLevel(3)" : level.id === 3 ? "enterLevel(4)" : "showWorldMap()"}">
        ${finalLevel ? "View your island" : level.id === 2 ? "Follow the map to Forgotten Falls →" : level.id === 3 ? "Follow the map to Shadowlands →" : "Explore the island map"}
      </button>
    </section>
  `;
}

/* ==========================================
   20. ISLAND WORLD MAP
========================================== */

function showWorldMap() {
  app.innerHTML = `
    <section class="game-screen wide-screen">
      <span class="step-label">YOUR ISLAND ADVENTURE</span>
      <div class="screen-icon">🗺️</div>

      <h1>The Island Map</h1>
      <p>Five regions. One island. A whole lot to discover.</p>

      <div class="map-region-list">
        ${levels.map(level => {
          const unlocked = canEnterLevel(level.id);
          const completed = game.completedLevels.includes(level.id);

          return `
            <article class="map-region ${unlocked ? "unlocked" : "locked"}">
              <div class="map-region-icon">${level.emoji}</div>
              <div class="map-region-info">
                <span>REGION ${level.id}</span>
                <h3>${level.name}</h3>
                <p>${completed ? "✓ Completed" : unlocked ? "Ready to explore" : "🔒 Locked"}</p>
              </div>

              ${unlocked
                ? `<button onclick="enterLevel(${level.id})">${completed ? "Replay" : "Explore"}</button>`
                : `<span class="locked-icon">🔒</span>`}
            </article>
          `;
        }).join("")}
      </div>

      <div class="adventure-card">
        <strong>Your expedition</strong>
        <p>Explorer: ${escapeHTML(game.playerName)}</p>
        <p>Companion: ${escapeHTML(game.petName)}</p>
        <p>Coins: 🪙 ${game.coins}</p>
        <p>Completed regions: ${game.completedLevels.length}/5</p>
      </div>

      <div class="game-menu-buttons">
        <button onclick="showCloset()">👗 Your Closet</button>
        <button onclick="showShop()">🛍 Accessory shop</button>
        <button onclick="showJournal()">📖 Journal</button>
        <button onclick="showSaveMenu()">💾 Save options</button>
      </div>
    </section>
  `;
}

/* ==========================================
   21. ACCESSORY SHOP
========================================== */

function equippedAccessoryDisplay(petIndex = 0) {
  const list = game.equippedAccessories[petIndex] || [];

  if (!list.length) return "";

  return `<div class="equipped-accessories">${list.map(id => {
    const item = accessories.find(a => a.id === id);
    return item ? item.emoji : "";
  }).join(" ")}</div>`;
}

function showShop() {
  game.purchasedAccessories = game.purchasedAccessories || [];
  game.equippedAccessories = game.equippedAccessories || {};
  game.equippedAccessories[0] = game.equippedAccessories[0] || [];
  app.innerHTML = `
    <section class="game-screen wide-screen">
      <span class="step-label">THE LITTLE ISLAND SHOP</span>
      <div class="screen-icon">🛍️</div>
      <h1>Clove's Accessory Collection</h1>
      <p>Buy an accessory and it will be equipped on Clove straight away.</p>
      <div class="coin-counter">🪙 ${game.coins} coins</div>
      <div class="button-row" style="justify-content:center;margin:14px 0 20px">
        <button class="primary-btn" type="button" onclick="showCloset()">👗 Open Your Closet</button>
      </div>
      <div class="shop-grid">
        ${accessories.map(item => {
          const owned = game.purchasedAccessories.includes(item.id);
          const equipped = game.equippedAccessories[0].includes(item.id);
          return `<article class="shop-item"><span>${item.emoji}</span><h3>${item.name}</h3><p>${item.category}</p><p>${owned ? "Owned" : item.price === 0 ? "Free" : `🪙 ${item.price}`}</p>
            ${owned ? `<button onclick="equipAccessory('${item.id}',0)">${equipped ? "Unequip" : "Equip now"}</button>` : `<button onclick="buyAccessory('${item.id}',0)">Buy & equip</button>`}
          </article>`;
        }).join("")}
      </div>
      <div class="adventure-card"><h3>Clove is wearing</h3>${equippedAccessoryDisplay(0) || "<p>No accessories equipped yet.</p>"}</div>
      ${game.secondCompanion?.found ? `<button class="secondary-btn" onclick="showSecondPetCloset()">Open ${escapeHTML(game.secondCompanion.name || "second companion")}'s shop</button>` : ""}
      <button class="secondary-btn" onclick="showWorldMap()">Back to island map</button>
    </section>`;
}

function buyAccessory(id, petIndex = 0) {
  const item = accessories.find(a => a.id === id);
  if (!item) return;
  game.purchasedAccessories = game.purchasedAccessories || [];
  if (game.purchasedAccessories.includes(id)) {
    equipAccessory(id, petIndex);
    return;
  }
  if (game.coins < item.price) {
    notify("You need more coins for this accessory.");
    return;
  }
  game.coins -= item.price;
  game.purchasedAccessories.push(id);
  game.equippedAccessories = game.equippedAccessories || {};
  game.equippedAccessories[petIndex] = game.equippedAccessories[petIndex] || [];
  if (!game.equippedAccessories[petIndex].includes(id)) game.equippedAccessories[petIndex].push(id);
  if (petIndex === 1 && game.secondCompanion) {
    game.secondCompanion.closet = game.secondCompanion.closet || { favouriteStyle: "Explorer", equippedAccessories: [] };
    game.secondCompanion.closet.equippedAccessories = [...game.equippedAccessories[1]];
  }
  saveGame();
  notify(`${item.name} bought and equipped!`);
  if (petIndex === 1) showSecondPetCloset(); else showShop();
  if (window.PetParadise3D?.start && document.querySelector("#play-world")) window.PetParadise3D.start();
}

function equipAccessory(id, petIndex = 0) {
  if (!game.purchasedAccessories.includes(id)) {
    notify("Purchase this accessory first.");
    return;
  }
  game.equippedAccessories = game.equippedAccessories || {};
  game.equippedAccessories[petIndex] = game.equippedAccessories[petIndex] || [];
  const list = game.equippedAccessories[petIndex];
  game.equippedAccessories[petIndex] = list.includes(id) ? list.filter(x => x !== id) : [...list, id];
  if (petIndex === 1 && game.secondCompanion) {
    game.secondCompanion.closet = game.secondCompanion.closet || { favouriteStyle: "Explorer", equippedAccessories: [] };
    game.secondCompanion.closet.equippedAccessories = [...game.equippedAccessories[1]];
  }
  saveGame();
  if (petIndex === 1) showSecondPetCloset(); else showShop();
  if (window.PetParadise3D?.start && document.querySelector("#play-world")) window.PetParadise3D.start();
}

/* ==========================================
   22. SAVE MENU AND CONTINUE
========================================== */

function showSaveMenu() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">YOUR ADVENTURE</span>
      <div class="screen-icon">💾</div>

      <h1>Save Progress</h1>
      <p>Your progress is automatically saved in this browser.</p>

      <div class="adventure-card">
        <p>Explorer: ${escapeHTML(game.playerName)}</p>
        <p>Companion: ${escapeHTML(game.petName)}</p>
        <p>Coins: ${game.coins}</p>
        <p>Completed regions: ${game.completedLevels.length}/5</p>
      </div>

      <button class="primary-btn" onclick="saveGame(true)">Save now</button>
      <button class="secondary-btn" onclick="showWorldMap()">Return to island map</button>
      <button class="danger-btn" onclick="resetSave()">Reset entire adventure</button>
    </section>
  `;
}

function resetSave() {
  const confirmed = confirm(
    "Are you sure you want to reset your entire adventure? This will erase your saved progress."
  );

  if (!confirmed) return;

  localStorage.removeItem(SAVE_KEY);
  game = freshGame();
  location.reload();
}

function showContinueScreen() {
  if (game.setupComplete && game.pet && game.petName) {
    app.innerHTML = `
      <section class="game-screen">
        <span class="step-label">WELCOME BACK</span>
        <div class="screen-icon">🌴</div>
        <h1>Your island awaits.</h1>
        <p>${escapeHTML(game.petName)} is ready for another adventure.</p>

        <div class="adventure-card">
          <p>Explorer: ${escapeHTML(game.playerName)}</p>
          <p>Coins: 🪙 ${game.coins}</p>
          <p>Regions completed: ${game.completedLevels.length}/5</p>
        </div>

        <button class="primary-btn" onclick="showWorldMap()">Continue adventure →</button>
        <button class="secondary-btn" onclick="showSaveMenu()">Save options</button>
      </section>
    `;
  } else {
    showPlayerScreen();
  }
}

/* ==========================================
   23. SETTINGS
========================================== */

function showSettings() {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">EXPEDITION SETTINGS</span>
      <div class="screen-icon">⚙️</div>
      <h1>Settings</h1>

      <div class="adventure-card">
        <label>
          <input type="checkbox" id="mute-sound" ${game.soundMuted ? "checked" : ""}>
          Mute sound
        </label>

        <p>Music volume</p>
        <input type="range" id="music-volume" min="0" max="100" value="${game.musicVolume}">

        <p>Sound effects volume</p>
        <input type="range" id="effects-volume" min="0" max="100" value="${game.effectsVolume}">
      </div>

      <button class="primary-btn" onclick="saveSettings()">Save settings</button>
      <button class="secondary-btn" onclick="showWorldMap()">Back to map</button>
    </section>
  `;
}

function saveSettings() {
  game.soundMuted = document.getElementById("mute-sound").checked;
  game.musicVolume = Number(document.getElementById("music-volume").value);
  game.effectsVolume = Number(document.getElementById("effects-volume").value);

  saveGame();
  notify("Settings saved!");
  showWorldMap();
}

/* ==========================================
   24. GAMEPLAY STYLES
========================================== */

function injectGameStyles() {
  if (document.getElementById("pet-paradise-game-styles")) return;

  const style = document.createElement("style");
  style.id = "pet-paradise-game-styles";

  style.textContent = `
    .adventure-game { max-width:1000px; }

    .game-topbar {
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:15px;
      margin-bottom:20px;
      text-align:left;
    }

    .game-topbar h1 {
      margin:5px 0;
    }

    .coin-counter {
      display:inline-block;
      background:#f1e6c9;
      color:#234d42;
      padding:10px 17px;
      border-radius:30px;
      font-weight:800;
      white-space:nowrap;
    }

    .adventure-world {
      min-height:320px;
      border-radius:24px;
      position:relative;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:center;
      margin:20px 0;
      background:linear-gradient(160deg,#f8dca4,#a5c79a 65%,#668c67);
      isolation:isolate;
    }

    .adventure-world:before,
    .adventure-world:after {
      content:"";
      position:absolute;
      width:230px;
      height:230px;
      border-radius:50%;
      background:#ffffff20;
      z-index:-1;
    }

    .adventure-world:before { top:-100px; left:-60px; }
    .adventure-world:after { bottom:-130px; right:-50px; }

    .world-2 {
      background:linear-gradient(160deg,#c9d5ad,#64896d 65%,#345d4c);
    }

    .world-3 {
      background:linear-gradient(160deg,#c5e8eb,#7bb7ad 60%,#437b78);
    }

    .world-4 {
      background:linear-gradient(160deg,#b7b5a7,#697c70 60%,#374f49);
    }

    .world-5 {
      background:linear-gradient(160deg,#e8d9ad,#8ba77c 60%,#496b53);
    }

    .world-decoration {
      position:absolute;
      inset:12px;
      display:flex;
      justify-content:space-around;
      align-items:flex-start;
      font-size:clamp(18px,4vw,34px);
      opacity:.8;
      pointer-events:none;
    }

    .world-pet {
      z-index:2;
      text-align:center;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:7px;
      animation:petParadiseFloat 3s ease-in-out infinite;
    }

    .world-pet-art .pet-art {
      width:160px;
      max-width:42vw;
      filter:drop-shadow(0 8px 5px #0002);
    }

    .world-pet strong {
      color:#234d42;
      font-size:17px;
    }

    .world-pet span {
      font-size:13px;
      color:#234d42;
      font-weight:600;
    }

    .world-player {
      position:absolute;
      bottom:42px;
      right:22%;
      font-size:36px;
    }

    .world-description {
      position:absolute;
      bottom:8px;
      left:12px;
      right:12px;
      text-align:center;
      color:#234d42;
      font-size:12px;
      font-weight:700;
    }

    @keyframes petParadiseFloat {
      0%,100% { transform:translateY(0); }
      50% { transform:translateY(-9px); }
    }

    .game-menu-buttons,
    .interaction-grid {
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
      gap:10px;
      margin:18px 0;
    }

    .game-menu-buttons button,
    .interaction-grid button,
    .map-region button,
    .shop-item button {
      border:1px solid #d7d3c4;
      background:#f6f1e6;
      color:#234d42;
      border-radius:14px;
      padding:12px 16px;
      cursor:pointer;
      font:700 13px 'DM Sans',sans-serif;
      transition:.2s ease;
    }

    .game-menu-buttons button:hover,
    .interaction-grid button:hover,
    .map-region button:hover,
    .shop-item button:hover {
      background:#e6eddf;
      transform:translateY(-2px);
    }

    .game-objectives,
    .level-actions {
      text-align:left;
      margin:25px 0;
    }

    .game-objectives h3,
    .level-actions h3 {
      font-family:'Cinzel',serif;
      color:#234d42;
    }

    .game-objective {
      display:flex;
      gap:10px;
      align-items:center;
      padding:10px 13px;
      margin:6px 0;
      border-radius:12px;
      background:#f2eee4;
      color:#234d42;
    }

    .objective-done {
      color:#68876b !important;
      text-decoration:line-through;
    }

    .progress-track {
      width:100%;
      height:9px;
      border-radius:20px;
      background:#ded8c9;
      overflow:hidden;
      margin:15px 0;
    }

    .progress-fill {
      height:100%;
      background:#6e9b73;
      border-radius:20px;
      transition:width .3s ease;
    }

    .map-region-list,
    .shop-grid {
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
      gap:13px;
      margin:24px 0;
    }

    .map-region,
    .shop-item {
      background:#f2eee4;
      color:#234d42;
      padding:17px;
      border-radius:17px;
    }

    .map-region {
      display:flex;
      align-items:center;
      gap:12px;
      text-align:left;
    }

    .map-region-icon { font-size:30px; }

    .map-region-info { flex:1; }

    .map-region-info span {
      font-size:10px;
      letter-spacing:1.5px;
    }

    .map-region-info h3 {
      font-family:'Cinzel',serif;
      margin:5px 0;
    }

    .map-region-info p { font-size:12px; }

    .map-region.locked { opacity:.55; }

    .locked-icon { font-size:22px; }

    .shop-item { text-align:center; }

    .shop-item > span { font-size:35px; }

    .shop-item h3 {
      font-family:'Cinzel',serif;
      font-size:16px;
    }

    .shop-item button:disabled {
      opacity:.6;
      cursor:default;
    }

    .equipped-accessories {
      font-size:22px;
      margin:6px;
    }

    .resource-status {
      display:flex;
      justify-content:center;
      flex-wrap:wrap;
      gap:12px;
      margin:18px 0;
      color:#234d42;
      font-size:13px;
    }

    .resource-status p { width:100%; }

    .danger-btn {
      background:#f2dddd;
      color:#8b3535;
      border:0;
      border-radius:30px;
      padding:13px 24px;
      margin:8px;
      cursor:pointer;
    }

    @media(max-width:600px) {
      .adventure-world { min-height:260px; }
      .world-player { right:12%; }
      .game-topbar { align-items:flex-start; }
      .map-region { flex-wrap:wrap; }
      .map-region button { width:100%; }
      .interaction-grid button { flex:1 1 42%; }
    }
  `;

  document.head.appendChild(style);
}

/* ==========================================
   25. START BUTTON AND INITIALISATION
========================================== */

function initialiseGame() {
  createParticles();
  injectGameStyles();

  const startButton = document.getElementById("start-btn");

  if (startButton) {
    startButton.onclick = () => {
      if (game.setupComplete && game.pet && game.petName) {
        showContinueScreen();
      } else {
        showPlayerScreen();
      }
    };

    if (game.setupComplete) {
      startButton.textContent = "Continue Adventure";
    }
  }
}

initialiseGame();

/* =====================================================
   PET PARADISE — INTERACTIVE GAMEPLAY UPGRADE
   Add this AFTER the existing initialiseGame();
===================================================== */

/* ---------- 1. PLAYER AND GAME DATA ---------- */

game.playerGender = game.playerGender || "";
game.playerOutfit = game.playerOutfit || {
  top: "👕",
  bottom: "👖",
  shoes: "👟",
  hair: "💇",
  bag: "🎒"
};

game.ownedClothes = game.ownedClothes || [
  "👕", "👚", "🧥", "👗", "🥻",
  "👖", "🩳", "🩱", "👟", "👢",
  "🩴", "🎒", "👜", "💇", "🎀"
];

game.petNeeds = game.petNeeds || {
  hunger: 75,
  happiness: 75,
  energy: 85,
  cleanliness: 80
};
game.secondPetNeeds = game.secondPetNeeds || { hunger:55, happiness:45, energy:75, cleanliness:70 };
game.level5AtShelter = !!game.level5AtShelter;

game.inventory = game.inventory || {
  food: 5,
  toys: 2
};

game.worldCollected = game.worldCollected || {};
game.worldPosition = game.worldPosition || { x: 50, y: 70 };

let worldKeys = {};
let worldFrame = null;
let worldLastTime = 0;
let worldTarget = null;
let audioContext = null;
let musicTimer = null;
let musicStep = 0;
let currentAudioLevel = 0;


/* ---------- 2. PLAYER SETUP ---------- */

showPlayerScreen = function () {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">EXPEDITION REGISTRATION · 01</span>
      <div class="screen-icon">🧭</div>

      <h1>Meet our explorer!</h1>
      <p>First, let's create the person who will explore this island.</p>

      <div class="form-group">
        <label>Your name</label>
        <input id="player-name"
          maxlength="18"
          value="${escapeHTML(game.playerName || "")}"
          placeholder="Enter your name...">
      </div>

      <h3>How would you like your explorer to appear?</h3>

      <div class="gender-options">
        <button class="gender-choice ${game.playerGender === "female" ? "selected" : ""}"
          data-gender="female">
          👩🏻‍🌾
          <strong>Female</strong>
        </button>

        <button class="gender-choice ${game.playerGender === "male" ? "selected" : ""}"
          data-gender="male">
          👨🏻‍🌾
          <strong>Male</strong>
        </button>

        <button class="gender-choice ${game.playerGender === "neutral" ? "selected" : ""}"
          data-gender="neutral">
          🧑🏻‍🌾
          <strong>Prefer not to say</strong>
        </button>
      </div>

      <p class="error-message" id="error"></p>

      <button class="primary-btn" id="continue-btn">
        Create my explorer →
      </button>
    </section>
  `;

  document.querySelectorAll(".gender-choice").forEach(button => {
    button.onclick = () => {
      game.playerGender = button.dataset.gender;

      document.querySelectorAll(".gender-choice").forEach(b =>
        b.classList.toggle("selected", b === button)
      );
    };
  });

  document.getElementById("continue-btn").onclick = () => {
    const name = document.getElementById("player-name").value.trim();

    if (!name || !game.playerGender) {
      document.getElementById("error").textContent =
        "Enter your name and choose an explorer appearance.";
      return;
    }

    game.playerName = name;
    saveGame();

    showPetSelection();
  };
};


/* ---------- 3. CHARACTER APPEARANCE ---------- */

function playerEmoji() {
  if (game.playerGender === "female") return "👩🏻‍🌾";
  if (game.playerGender === "male") return "👨🏻‍🌾";
  return "🧑🏻‍🌾";
}

function showCloset() {
  const categories = [
    { id: "top", name: "Tops", items: ["👕", "👚", "🧥", "🥼"] },
    { id: "dress", name: "Frocks & outfits", items: ["👗", "🥻", "🩱"] },
    { id: "bottom", name: "Bottoms", items: ["👖", "🩳", "👗"] },
    { id: "shoes", name: "Shoes", items: ["👟", "👢", "🩴", "👡"] },
    { id: "bag", name: "Bags", items: ["🎒", "👜", "💼"] },
    { id: "hair", name: "Hair & accessories", items: ["💇", "🎀", "👒", "🧢"] }
  ];

  app.innerHTML = `
    <section class="game-screen wide-screen">
      <span class="step-label">YOUR PERSONAL WARDROBE</span>
      <div class="screen-icon">👗</div>

      <h1>The Explorer's Closet</h1>
      <p>Choose your outfit. You can change it whenever you want!</p>

      <div class="character-preview">
        <div class="character-big">${playerEmoji()}</div>
        <div class="outfit-preview">
          ${game.playerOutfit.top}
          ${game.playerOutfit.bottom}
          ${game.playerOutfit.shoes}
          ${game.playerOutfit.bag}
        </div>
      </div>

      ${categories.map(category => `
        <div class="closet-category">
          <h3>${category.name}</h3>
          <div class="closet-items">
            ${category.items.map(item => `
              <button class="closet-item"
                onclick="changeOutfit('${category.id}','${item}')">
                ${item}
              </button>
            `).join("")}
          </div>
        </div>
      `).join("")}

      <button class="primary-btn" onclick="showPlayableLevel()">
        Done dressing up ✓
      </button>
    </section>
  `;
}

function changeOutfit(category, item) {
  game.playerOutfit[category] = item;
  saveGame();
  showCloset();
}


/* ---------- 4. GAME WORLD ---------- */

function getWorldObjects(id) {
  const objects = {
    1: [
      { id:"beach", icon:"🏖️", label:"Explore beach", type:"explore", x:16, y:25 },
      { id:"wood1", icon:"🪵", label:"Wood", type:"wood", x:28, y:40 },
      { id:"wood2", icon:"🪵", label:"Wood", type:"wood", x:43, y:20 },
      { id:"wood3", icon:"🪵", label:"Wood", type:"wood", x:68, y:37 },
      { id:"wood4", icon:"🪵", label:"Wood", type:"wood", x:85, y:22 },
      { id:"wood5", icon:"🪵", label:"Wood", type:"wood", x:17, y:68 },
      { id:"leaf1", icon:"🌴", label:"Palm leaves", type:"leaves", x:37, y:75 },
      { id:"leaf2", icon:"🌴", label:"Palm leaves", type:"leaves", x:61, y:65 },
      { id:"leaf3", icon:"🌴", label:"Palm leaves", type:"leaves", x:80, y:78 },
      { id:"leaf4", icon:"🌴", label:"Palm leaves", type:"leaves", x:90, y:48 },
      { id:"stone1", icon:"🪨", label:"Stone", type:"stones", x:52, y:44 },
      { id:"stone2", icon:"🪨", label:"Stone", type:"stones", x:73, y:20 },
      { id:"stone3", icon:"🪨", label:"Stone", type:"stones", x:10, y:48 },
      { id:"shelter", icon:"🏡", label:"Build your beach shelter", type:"shelter", x:88, y:86 }
    ],

    2: [
      { id:"forest", icon:"🌳", label:"Explore forest", type:"forest", x:20, y:20 },
      { id:"clearing", icon:"🌿", label:"Hidden clearing", type:"clearing", x:80, y:25 },
      { id:"flower1", icon:"🌼", label:"Flower", type:"flower", x:30, y:65 },
      { id:"flower2", icon:"🌸", label:"Flower", type:"flower", x:55, y:30 },
      { id:"flower3", icon:"🌺", label:"Flower", type:"flower", x:75, y:70 },
    ],

    3: [
      { id:"waterfall", icon:"💧", label:"Great waterfall", type:"waterfall", x:50, y:12 },
      { id:"riverbank", icon:"🌸", label:"Flower-filled riverbank", type:"riverbank", x:20, y:55 },
      { id:"water", icon:"🫧", label:"Safe little pond", type:"safeWater", x:70, y:43 },
      { id:"rock", icon:"🪨", label:"Rocky island", type:"rock", x:85, y:78 },
      { id:"cave", icon:"✨", label:"Waterfall cave", type:"cave", x:15, y:80 },
    ],

    4: [
      { id:"path", icon:"🌫️", label:"Twilight path", type:"twilight", x:32, y:32 },
      { id:"cemetery", icon:"🪦", label:"Forgotten cemetery", type:"cemetery", x:68, y:32 },
      { id:"idol", icon:"🗿", label:"Ancient guardian idol", type:"idol", x:32, y:68 },
      { id:"journal", icon:"📖", label:"Forgotten journal", type:"journal", x:68, y:68 },
      { id:"bellTower", icon:"🔔", label:"Forgotten bell tower", type:"bellTower", x:50, y:50 }
    ],

    5: game.level5AtShelter ? [
      { id:"shelterHome", icon:"🏡", label:"Your Sunny Shore shelter", type:"shelterHome", x:88, y:86 }
    ] : [
      { id:"call", icon:"🐾", label:"Follow animal call", type:"call", x:20, y:25 },
      { id:"valley", icon:"🌿", label:"Hidden valley", type:"valley", x:75, y:25 },
      { id:"missing", icon:"❔", label:"Search for companion", type:"missing", x:55, y:70 },
      { id:"homeReturn", icon:"🏡", label:"Return to the shelter", type:"homeReturn", x:88, y:84 }
    ]
  };

  return objects[id] || [];
}

// Level 3 guidance follows unfinished objectives, never stale collection flags.
function getLevel3ObjectiveObjectId(index) {
  return ["waterfall", "riverbank", "water", "rock", "cave"][index] || null;
}

function getActiveLevel3WorldObject() {
  const objects = getWorldObjects(3);
  const completed = getObjectives(3);
  const nextIndex = [0, 1, 2, 3, 4].find(index => !completed.includes(index));
  if (nextIndex === undefined) return null;
  const id = getLevel3ObjectiveObjectId(nextIndex);
  return objects.find(object => object.id === id) || null;
}

// Level 4 guidance always points to the next unfinished landmark, including the final bell tower.
function getActiveLevel4WorldObject() {
  const objects = getWorldObjects(4);
  const completed = getObjectives(4);
  const nextIndex = [0, 1, 2, 3, 4].find(index => !completed.includes(index));
  if (nextIndex === undefined) return null;
  const ids = ["path", "cemetery", "idol", "journal", "bellTower"];
  return objects.find(object => object.id === ids[nextIndex]) || null;
}


/* ---------- 5. WORLD VISUALS ---------- */

function injectInteractiveStyles() {
  if (document.getElementById("interactive-upgrade-styles")) return;

  const style = document.createElement("style");
  style.id = "interactive-upgrade-styles";

  style.textContent = `
    .gender-options,.closet-items {
      display:flex;
      justify-content:center;
      flex-wrap:wrap;
      gap:12px;
      margin:18px 0;
    }

    .gender-choice,.closet-item {
      border:2px solid #ded8c9;
      border-radius:16px;
      background:#fffaf0;
      color:#234d42;
      padding:14px;
      cursor:pointer;
      font-size:25px;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:7px;
    }

    .gender-choice strong { font-size:12px; }
    .gender-choice.selected { border-color:#6e9b73; background:#e8f0e5; }

    .character-preview {
      background:#e8eddf;
      border-radius:20px;
      padding:20px;
      margin:20px auto;
      max-width:350px;
      text-align:center;
    }

    .character-big { font-size:100px; }
    .outfit-preview { font-size:30px; }

    .closet-category {
      background:#f4f0e6;
      padding:12px;
      border-radius:16px;
      margin:12px 0;
    }

    .closet-item { min-width:55px; }
    .closet-item:hover { transform:translateY(-3px); }

    .adventure-world {
      min-height:480px !important;
      height: min(65vh, 600px);
      background-size:cover;
      touch-action:none;
      position:relative;
      overflow:hidden;
      border:3px solid #ffffff80;
    }

    .adventure-world.world-1 {
      background:linear-gradient(#a9d9ef 0%,#d9eac0 48%,#d8c18a 49%,#e8d8ad 100%);
    }

    .adventure-world.world-2 {
      background:linear-gradient(#b8d3b2,#658d68 60%,#365b42);
    }

    .adventure-world.world-3 {
      background:linear-gradient(#bde5ed,#7bb8b4 55%,#4a8b86);
    }

    .adventure-world.world-4 {
      background:linear-gradient(#aaa5bd,#697c79 55%,#394c4b);
    }

    .adventure-world.world-5 {
      background:linear-gradient(#d9d9a9,#91ad7b 55%,#527653);
    }

    .world-object {
      position:absolute;
      transform:translate(-50%,-50%);
      border:0;
      border-radius:50%;
      background:#fff9e8dd;
      width:54px;
      height:54px;
      font-size:27px;
      cursor:pointer;
      box-shadow:0 4px 12px #0002;
      z-index:3;
      transition:transform .2s;
    }

    .world-object:hover { transform:translate(-50%,-50%) scale(1.16); }

    .world-object.collected {
      opacity:.22;
      filter:grayscale(1);
      pointer-events:none;
    }

    .world-character {
      position:absolute;
      transform:translate(-50%,-50%);
      z-index:8;
      text-align:center;
      transition:none;
      pointer-events:none;
      filter:drop-shadow(0 5px 4px #0003);
    }

    .world-character .character-sprite { font-size:43px; }
    .world-character .character-name {
      display:block;
      font-size:11px;
      font-weight:800;
      color:#234d42;
      background:#fff9e8d9;
      border-radius:20px;
      padding:3px 7px;
      white-space:nowrap;
    }

    .world-character.moving .character-sprite {
      animation:characterBounce .32s infinite alternate;
    }

    @keyframes characterBounce {
      from { transform:translateY(0); }
      to { transform:translateY(-5px); }
    }

    .world-pet {
      position:absolute;
      left:45%;
      top:70%;
      z-index:7;
      transition:none;
      animation:none;
      pointer-events:none;
    }

    .world-pet .pet-art { width:100px; }

    .world-pet.pet-moving {
      animation:petHop .3s infinite alternate;
    }

    .world-pet.pet-dog .pet-art,
    .world-pet.pet-cat .pet-art {
      animation:petRun .25s infinite alternate;
    }

    .world-pet.pet-hamster .pet-art {
      animation:petScurry .16s infinite alternate;
    }

    .world-pet.pet-bunny .pet-art {
      animation:petHop .32s infinite alternate;
    }

    .world-pet.pet-bird.pet-flying .pet-art {
      animation:birdFlight .3s infinite alternate;
    }

    .world-pet.pet-bird .bird-wing {
      transform-origin:80px 85px;
      animation:birdFlap .18s infinite alternate;
    }

    @keyframes petHop {
      from { transform:translateY(0); }
      to { transform:translateY(-17px); }
    }

    @keyframes petRun {
      from { transform:translateY(0) rotate(-3deg); }
      to { transform:translateY(-5px) rotate(3deg); }
    }

    @keyframes petScurry {
      from { transform:translateX(-2px); }
      to { transform:translateX(2px); }
    }

    @keyframes birdFlight {
      from { transform:translateY(-5px) rotate(-4deg); }
      to { transform:translateY(-35px) rotate(4deg); }
    }

    @keyframes birdFlap {
      from { transform:rotate(-25deg); }
      to { transform:rotate(25deg); }
    }

    .world-guide {
      position:absolute;
      top:10px;
      left:50%;
      transform:translateX(-50%);
      background:#fff8d8;
      color:#365c43;
      border-radius:30px;
      padding:9px 15px;
      font-weight:800;
      z-index:12;
      box-shadow:0 3px 12px #0002;
      pointer-events:none;
    }

    .world-guide-arrow {
      display:inline-block;
      font-size:24px;
      margin-right:8px;
      animation:guidePulse .7s infinite alternate;
    }

    @keyframes guidePulse {
      to { transform:translateY(-5px); }
    }

    .world-hud {
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:8px;
      margin:12px 0;
    }

    .world-hud button,.pet-action-buttons button {
      background:#f5f0e4;
      border:1px solid #d6d1c1;
      border-radius:13px;
      padding:10px 13px;
      color:#234d42;
      font-weight:700;
      cursor:pointer;
    }

    .pet-action-buttons {
      display:flex;
      justify-content:center;
      flex-wrap:wrap;
      gap:9px;
      margin:14px 0;
    }

    .movement-controls {
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:15px;
      margin:12px 0;
    }

    .joystick {
      width:125px;
      height:125px;
      border-radius:50%;
      background:#234d4230;
      border:3px solid #234d4260;
      position:relative;
      touch-action:none;
      flex-shrink:0;
    }

    .joystick-knob {
      width:45px;
      height:45px;
      border-radius:50%;
      background:#fff9e8;
      border:2px solid #668c67;
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      pointer-events:none;
    }

    .move-hint {
      color:#426b54;
      font-size:12px;
      text-align:center;
    }

    .interact-button {
      background:#234d42 !important;
      color:white !important;
      padding:17px 24px !important;
      border-radius:18px !important;
    }

    .pet-status {
      background:#edf1e5;
      border-radius:14px;
      padding:12px;
      margin:12px 0;
      color:#234d42;
      font-size:13px;
    }

    .pet-status-row {
      display:grid;
      grid-template-columns:90px 1fr;
      gap:8px;
      align-items:center;
      margin:6px 0;
    }

    .pet-meter {
      height:9px;
      background:#d5d9cd;
      border-radius:20px;
      overflow:hidden;
    }

    .pet-meter span {
      display:block;
      height:100%;
      background:#78a77b;
    }

    .world-action-message {
      min-height:24px;
      text-align:center;
      color:#315d47;
      font-weight:700;
      font-size:13px;
    }

    @media(max-width:600px) {
      .adventure-world { min-height:400px !important; }
      .movement-controls { gap:8px; }
      .joystick { width:105px; height:105px; }
    }
  `;

  document.head.appendChild(style);
}


/* ---------- 6. AUDIO SYSTEM ---------- */

/*
  This system creates original synthesized placeholder sounds.
  It does not pretend to be real animal recordings.
*/

function initAudio() {
  if (!audioContext) {
    const AudioClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioClass) {
      console.warn("Web Audio is not supported in this browser.");
      return;
    }
    audioContext = new AudioClass();
  }

  if (game.soundMuted) return;

  if (audioContext.state === "suspended") {
    audioContext.resume().then(() => {
      if (!game.soundMuted && game.musicVolume > 0) {
        startRegionMusic();
      }
    }).catch(error => {
      console.error("Audio could not start:", error);
    });
    return;
  }

  if (game.musicVolume > 0) {
    startRegionMusic();
  }
}

function tone(frequency, duration = 0.2, volume = 0.08, type = "sine") {
  if (!audioContext || game.soundMuted || game.effectsVolume === 0) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;

  gain.gain.setValueAtTime(
    volume * (game.effectsVolume / 100),
    audioContext.currentTime
  );

  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + duration
  );

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}

function playSoundEffect(type) {
  const sounds = {
    collect: [660, 880],
    success: [523, 659, 784],
    pet: [440, 550],
    feed: [330, 440],
    play: [550, 740, 880],
    build: [220, 330, 440],
    map: [660, 990],
    water: [440, 660, 880],
    coin: [880, 1175],
    discovery: [523, 784, 1046]
  };

  (sounds[type] || [440]).forEach((frequency, index) => {
    setTimeout(() => tone(frequency, .22), index * 110);
  });
}

function playAnimalSound(petId = game.pet?.id, volume = 0.045) {
  if (!audioContext) initAudio();
  if (!audioContext || game.soundMuted || game.effectsVolume <= 0) return;

  const id = petId;

  const calls = {
    dog: [260, 190, 260],
    cat: [550, 650, 480],
    bunny: [400, 520],
    hamster: [650, 720, 600],
    bird: [1100, 1450, 1250]
  };

  (calls[id] || [440]).forEach((frequency, index) => {
    setTimeout(() => tone(frequency, .16, volume, id === "bird" ? "sine" : id === "dog" ? "triangle" : "sine"), index * 150);
  });
}

function startRegionMusic() {
  if (!audioContext || musicTimer || game.soundMuted) return;

  const melodies = {
    1: [392, 440, 523, 440, 349, 392],
    2: [330, 392, 440, 392, 294, 349],
    3: [440, 523, 587, 523, 392, 440],
    4: [294, 349, 392, 349, 262, 294],
    5: [349, 440, 523, 587, 523, 440]
  };

  musicStep = 0;

  musicTimer = setInterval(() => {
    if (!audioContext || game.soundMuted || game.musicVolume === 0) return;

    const melody = melodies[game.currentLevel] || melodies[1];
    const frequency = melody[musicStep % melody.length];
    musicStep++;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;

    const now = audioContext.currentTime;
    const volume = game.musicVolume / 100;

    gain.gain.setValueAtTime(.045 * volume, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + 1.35);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + 1.4);

    const harmony = audioContext.createOscillator();
    const harmonyGain = audioContext.createGain();

    harmony.type = "triangle";
    harmony.frequency.value = frequency / 2;
    harmonyGain.gain.setValueAtTime(.012 * volume, now);
    harmonyGain.gain.exponentialRampToValueAtTime(.001, now + 1.35);

    harmony.connect(harmonyGain);
    harmonyGain.connect(audioContext.destination);

    harmony.start(now);
    harmony.stop(now + 1.4);

  }, 1600);
}

function stopRegionMusic() {
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
}


/* ---------- 7. INTERACTIVE WORLD SCREEN ---------- */

showPlayableLevel = function () {
  injectInteractiveStyles();

  const id = game.currentLevel;
  const level = getLevel(id);
  const objects = getWorldObjects(id);

  if (worldFrame) cancelAnimationFrame(worldFrame);

  const x = game.worldPosition.x || 50;
  const y = game.worldPosition.y || 70;

  app.innerHTML = `
    <section class="game-screen wide-screen adventure-game">

      <div class="game-topbar">
        <div>
          <span class="step-label">REGION ${id}</span>
          <h1>${level.name}</h1>
        </div>
        <div class="coin-counter">🪙 ${game.coins}</div>
      </div>

      <div class="world-hud">
        <button onclick="showWorldMap()">🗺 Map</button>
        <button onclick="showCloset()">👗 Closet</button>
        <button onclick="showJournal()">📖 Journal</button>
        <button onclick="showShop()">🛍 Shop</button>
        <button onclick="showSettings()">⚙️ Sound</button>
        <button onclick="saveGame(true)">💾 Save</button>
      </div>

      <div class="adventure-world world-${id}" id="play-world">

        <div class="world-guide" id="world-guide">
          <span class="world-guide-arrow">⬇</span>
          <span id="guide-text">Explore the area!</span>
        </div>

        ${objects.map(object => `
          <button class="world-object"
            data-world-object="${object.id}"
            data-type="${object.type}"
            style="left:${object.x}%;top:${object.y}%"
            title="${object.label}">
            ${object.icon}
          </button>
        `).join("")}

        <div class="world-character" id="world-player"
          style="left:${x}%;top:${y}%">
          <div class="character-sprite">${playerSVG()}</div>
          <span class="character-name">${escapeHTML(game.playerName)}</span>
        </div>

        <div class="world-pet pet-${game.pet.id}" id="world-pet"
          style="left:${x - 8}%;top:${y + 5}%">
          <div class="world-pet-art">${petSVG()}</div>
          <span class="character-name">${escapeHTML(game.petName)}</span>
        </div>
      </div>

      <div class="movement-controls">
        <div>
          <div class="joystick" id="joystick">
            <div class="joystick-knob" id="joystick-knob"></div>
          </div>
          <div class="move-hint">Move with joystick or WASD / arrow keys</div>
        </div>

        <button class="interact-button" id="interact-world">
          ✋ Interact
        </button>
      </div>

      <p class="world-action-message" id="world-message">
        Explore the area with ${escapeHTML(game.petName)}!
      </p>

      ${id === 5 && game.secondCompanion?.found
        ? `${game.level5AtShelter ? `<div class="adventure-card"><h3>Sunny Shore — your shelter</h3><p>The shelter you built in Level 1 is now a safe home for both companions. Your first companion is helping the newcomer settle in.</p></div>` : ""}${renderTwoPetDashboards()}`
        : `<div class="pet-status" id="pet-status">${renderPetStatus()}</div>
           <h3>Spend time with your companion</h3>
           <div class="pet-action-buttons">
             <button onclick="petInteraction('pet')">♡ Pet</button>
             <button onclick="petInteraction('feed')">🥕 Feed</button>
             <button onclick="petInteraction('play')">🎾 Play</button>
             <button onclick="petInteraction('groom')">🪮 Groom</button>
             <button onclick="petInteraction('rest')">💤 Rest</button>
             <button onclick="petInteraction('sound')">🔊 Call</button>
           </div>`}

      <div class="game-objectives" id="objective-display">
        ${renderObjectiveList()}
      </div>

      <div class="game-menu-buttons">
        <button onclick="showWorldMap()">Return to island map</button>
      </div>

    </section>
  `;

  document.querySelectorAll(".world-object").forEach(button => {
    button.onclick = () => {
      worldTarget = button.dataset.worldObject;
      const object = objects.find(o => o.id === worldTarget);
      setWorldMessage(`Head towards ${object.label}, then press Interact.`);
    };
  });

  document.getElementById("interact-world").onclick = interactWithWorld;

  setupMovement();
  startWorldLoop();

  if (audioContext && !game.soundMuted) startRegionMusic();
};


/* ---------- 8. OBJECTIVES ---------- */

function renderObjectiveList() {
  const level = getLevel();

  return `
    <h3>Current objectives</h3>
    ${level.objectives.map((objective, index) => `
      <div class="game-objective ${isComplete(game.currentLevel,index) ? "objective-done" : ""}">
        ${isComplete(game.currentLevel,index) ? "✓" : "○"}
        ${objective}
      </div>
    `).join("")}
  `;
}

function refreshObjectives() {
  const display = document.getElementById("objective-display");
  if (display) display.innerHTML = renderObjectiveList();
}

completeObjective = function (index) {
  const completed = getObjectives();

  if (completed.includes(index)) return;

  completed.push(index);
  saveGame();

  playSoundEffect("success");
  notify("Objective completed: " + getLevel().objectives[index]);

  refreshObjectives();
  if (game.currentLevel === 3 || game.currentLevel === 4) {
    worldTarget = null;
    updateGuide();
  }

  if (completed.length === getLevel().objectives.length) {
    if (game.currentLevel === 4) triggerShadowlandsAnimalCall();
    setTimeout(() => finishLevel(), 700);
  }
};


/* ---------- 9. MOVEMENT ---------- */

function setupMovement() {
  worldKeys = {};

  document.onkeydown = event => {
    if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(event.key)) {
      event.preventDefault();
    }
    worldKeys[event.key.toLowerCase()] = true;
  };

  document.onkeyup = event => {
    worldKeys[event.key.toLowerCase()] = false;
  };

  const joystick = document.getElementById("joystick");
  const knob = document.getElementById("joystick-knob");

  if (!joystick) return;

  let active = false;

  function moveJoystick(event) {
    const rect = joystick.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);

    const distance = Math.sqrt(dx * dx + dy * dy);
    const max = 38;
    const scale = distance > max ? max / distance : 1;

    const mx = dx * scale;
    const my = dy * scale;

    knob.style.left = `calc(50% + ${mx}px)`;
    knob.style.top = `calc(50% + ${my}px)`;

    worldKeys.joyX = mx / max;
    worldKeys.joyY = my / max;
  }

  joystick.onpointerdown = event => {
    active = true;
    joystick.setPointerCapture(event.pointerId);
    moveJoystick(event);
  };

  joystick.onpointermove = event => {
    if (active) moveJoystick(event);
  };

  function resetJoystick() {
    active = false;
    knob.style.left = "50%";
    knob.style.top = "50%";
    worldKeys.joyX = 0;
    worldKeys.joyY = 0;
  }

  joystick.onpointerup = resetJoystick;
  joystick.onpointercancel = resetJoystick;
}

function startWorldLoop() {
  let petX = game.worldPosition.x - 8;
  let petY = game.worldPosition.y + 5;

  function loop(timestamp) {
    if (!document.getElementById("play-world")) return;

    const dt = Math.min((timestamp - (worldLastTime || timestamp)) / 16.67, 2);
    worldLastTime = timestamp;

    let dx = 0;
    let dy = 0;

    if (worldKeys.arrowleft || worldKeys.a) dx--;
    if (worldKeys.arrowright || worldKeys.d) dx++;
    if (worldKeys.arrowup || worldKeys.w) dy--;
    if (worldKeys.arrowdown || worldKeys.s) dy++;

    dx += worldKeys.joyX || 0;
    dy += worldKeys.joyY || 0;

    const moving = Math.abs(dx) + Math.abs(dy) > .1;

    if (moving) {
      const length = Math.sqrt(dx * dx + dy * dy) || 1;
      dx /= length;
      dy /= length;

      game.worldPosition.x += dx * .48 * dt;
      game.worldPosition.y += dy * .48 * dt;

      game.worldPosition.x = Math.max(5, Math.min(95, game.worldPosition.x));
      game.worldPosition.y = Math.max(12, Math.min(90, game.worldPosition.y));
    }

    const player = document.getElementById("world-player");
    const pet = document.getElementById("world-pet");

    if (!player || !pet) return;

    player.style.left = game.worldPosition.x + "%";
    player.style.top = game.worldPosition.y + "%";
    player.classList.toggle("moving", moving);

    const petDistance = Math.hypot(
      game.worldPosition.x - petX,
      game.worldPosition.y - petY
    );

    if (petDistance > 7 || moving) {
      petX += (game.worldPosition.x - 7 - petX) * .045 * dt;
      petY += (game.worldPosition.y + 3 - petY) * .045 * dt;
      pet.classList.add("pet-moving");
    } else {
      pet.classList.remove("pet-moving");
    }

    pet.style.left = petX + "%";
    pet.style.top = petY + "%";

    if (game.pet.id === "bird") {
      pet.classList.toggle("pet-flying", moving || petDistance > 5);
    }

    updateGuide();

    worldFrame = requestAnimationFrame(loop);
  }

  worldLastTime = 0;
  worldFrame = requestAnimationFrame(loop);
}


/* ---------- 10. GUIDANCE ---------- */

function updateGuide() {
  const objects = getWorldObjects(game.currentLevel);
  let target;

  if (game.currentLevel === 3) {
    target = getActiveLevel3WorldObject();
    if (worldTarget) {
      const selected = objects.find(object => object.id === worldTarget);
      const selectedIndex = selected ? ["waterfall", "riverbank", "water", "rock", "cave"].indexOf(selected.id) : -1;
      if (selected && selectedIndex >= 0 && !isComplete(3, selectedIndex)) target = selected;
    }
  } else if (game.currentLevel === 4) {
    target = getActiveLevel4WorldObject();
  } else if (game.currentLevel === 5) {
    if (game.level5AtShelter) target = objects.find(o => o.id === "shelterHome");
    else {
      const nextId = !isComplete(5,0) ? "call" : !isComplete(5,1) ? "valley" : !isComplete(5,2) ? "missing" : "homeReturn";
      target = objects.find(o => o.id === nextId);
    }
  } else {
    target = worldTarget
      ? objects.find(o => o.id === worldTarget)
      : objects.find(o => !isWorldObjectCollected(o.id));
  }

  const guide = document.getElementById("guide-text");
  const arrow = document.querySelector(".world-guide-arrow");
  if (!guide) return;
  if (game.currentLevel === 4 && !target && !isComplete(4, 4)) {
    guide.textContent = "Find the forgotten bell tower";
    if (arrow) arrow.textContent = "🔔";
    return;
  }
  if (!target) {
    guide.textContent = game.currentLevel === 3 ? "All waterfall discoveries are complete!" : game.currentLevel === 4 ? "All Shadowlands discoveries are complete!" : "All nearby tasks are complete!";
    if (arrow) arrow.textContent = "✓";
    return;
  }

  guide.textContent = target.type === "shelter"
    ? "Go to the beach hut and build your shelter"
    : target.type === "homeReturn"
      ? "Take both companions back to your Sunny Shore shelter"
      : target.type === "shelterHome"
        ? "You're home! Care for your new companion"
        : `Find ${target.label}`;

  const dx = target.x - game.worldPosition.x;
  const dy = target.y - game.worldPosition.y;
  if (arrow) {
    let direction = "⬇";
    if (Math.abs(dx) > Math.abs(dy)) direction = dx > 0 ? "➡" : "⬅";
    else direction = dy > 0 ? "⬇" : "⬆";
    arrow.textContent = direction;
  }
}

function setWorldMessage(message) {
  const element = document.getElementById("world-message");
  if (element) element.textContent = message;
}

function isWorldObjectCollected(id) {
  if (game.currentLevel === 3) {
    const index = ["waterfall", "riverbank", "water", "rock", "cave"].indexOf(id);
    return index >= 0 ? isComplete(3, index) : false;
  }
  if (game.currentLevel === 4) {
    const index = ["path", "cemetery", "idol", "journal", "bellTower"].indexOf(id);
    return index >= 0 ? isComplete(4, index) : false;
  }
  const list = game.worldCollected[game.currentLevel] || [];
  return list.includes(id);
}

function markWorldObjectCollected(id) {
  if (!game.worldCollected[game.currentLevel]) {
    game.worldCollected[game.currentLevel] = [];
  }

  if (!game.worldCollected[game.currentLevel].includes(id)) {
    game.worldCollected[game.currentLevel].push(id);
  }

  const element = document.querySelector(`[data-world-object="${id}"]`);
  if (element) element.classList.add("collected");

  saveGame();
}


/* ---------- 11. WORLD INTERACTIONS ---------- */

function interactWithWorld() {
  const objects = getWorldObjects(game.currentLevel);
  let target = worldTarget ? objects.find(o => o.id === worldTarget) : null;

  if (game.currentLevel === 3) {
    if (!target || isWorldObjectCollected(target.id)) target = getActiveLevel3WorldObject();
  } else if (game.currentLevel === 4) {
    target = getActiveLevel4WorldObject();
  } else if (!target) {
    target = objects
      .filter(o => !isWorldObjectCollected(o.id))
      .sort((a,b) => {
        const da = Math.hypot(a.x-game.worldPosition.x,a.y-game.worldPosition.y);
        const db = Math.hypot(b.x-game.worldPosition.x,b.y-game.worldPosition.y);
        return da-db;
      })[0];
  }

  if (!target) {
    setWorldMessage(game.currentLevel === 4 && !isComplete(4,4)
      ? "Find the forgotten bell tower. Follow the guide arrow!"
      : "All objectives in this region are complete!");
    updateGuide();
    return;
  }

  const distance = Math.hypot(
    target.x - game.worldPosition.x,
    target.y - game.worldPosition.y
  );
  if (distance > 13) {
    setWorldMessage(`You're ${Math.round(distance)} steps away. Follow the guide arrow!`);
    return;
  }

  if (isWorldObjectCollected(target.id)) {
    setWorldMessage("You've already explored this spot.");
    updateGuide();
    return;
  }

  handleWorldObject(target);

  if (game.currentLevel === 5 && target.type === "homeReturn") {
    returnBothCompanionsHome();
    return;
  }
  if (game.currentLevel === 5 && target.type === "shelterHome") {
    setWorldMessage("Both companions are home in the shelter. Take care of your new friend below!");
    return;
  }

  if (game.currentLevel === 3) {
    const objectiveIndex = ["waterfall", "riverbank", "water", "rock", "cave"].indexOf(target.id);
    if (objectiveIndex >= 0 && isComplete(3, objectiveIndex)) {
      markWorldObjectCollected(target.id);
      playSoundEffect("collect");
    } else {
      worldTarget = null;
    }
  } else if (game.currentLevel === 4) {
    const objectiveIndex = ["path", "cemetery", "idol", "journal", "bellTower"].indexOf(target.id);
    if (objectiveIndex >= 0 && isComplete(4, objectiveIndex)) {
      markWorldObjectCollected(target.id);
      playSoundEffect("collect");
    } else {
      // A landmark cannot be consumed if its prerequisite has not been met.
      worldTarget = null;
    }
  } else {
    if (target.type === "shelter" && !game.shelterBuilt) {
      updateGuide();
      return;
    }
    markWorldObjectCollected(target.id);
    playSoundEffect("collect");
  }

  worldTarget = null;
  saveGame();
  updateGuide();
}

function handleWorldObject(object) {
  const id = game.currentLevel;
  const type = object.type;

  if (id === 1) {
    if (type === "explore") {
      addDiscovery("Sunny Shore beach");
      completeObjective(0);
      setWorldMessage("The beach is beautiful! You found your first campsite.");
    }

    if (["wood","leaves","stones"].includes(type)) {
      if (!game.resources[1]) game.resources[1] = {};
      game.resources[1][type] = (game.resources[1][type] || 0) + 1;

      const limits = { wood:5, leaves:4, stones:3 };
      game.resources[1][type] = Math.min(limits[type],game.resources[1][type]);

      const objectives = { wood:1, leaves:2, stones:3 };
      if (game.resources[1][type] >= limits[type]) {
        completeObjective(objectives[type]);
      }

      setWorldMessage(`Collected ${type}! ${game.resources[1][type]}/${limits[type]}`);
    }

    if (type === "shelter") {
      const resources = game.resources[1] || {};
      if ((resources.wood || 0) < 5 || (resources.leaves || 0) < 4 || (resources.stones || 0) < 3) {
        setWorldMessage("The shelter needs 5 wood, 4 palm leaves and 3 stones. Gather the missing materials first!");
        return;
      }
      if (!isComplete(1,4)) {
        setWorldMessage("Spend a little time playing with your companion before building your shelter!");
        return;
      }
      if (game.shelterBuilt) {
        setWorldMessage("Your beach shelter is already built!");
        return;
      }
      buildShelter();
    }
  }

  if (id === 2) {
    if (type === "forest") {
      addDiscovery("Whispering Woods");
      completeObjective(0);
    }

    if (type === "clearing") {
      addDiscovery("Hidden forest clearing");
      completeObjective(1);
    }

    if (type === "flower") {
      if (!game.resources[2]) game.resources[2] = {};
      game.resources[2].flowers = (game.resources[2].flowers || 0) + 1;
      if (game.resources[2].flowers >= 3) completeObjective(2);
      setWorldMessage("You found a forest flower!");
    }
  }

  if (id === 3) {
    if (type === "waterfall") {
      addDiscovery("The great waterfall");
      completeObjective(0);
    }

    if (type === "riverbank") {
      addDiscovery("Flower-filled riverbank");
      completeObjective(1);
    }

    if (type === "safeWater") {
      if (!game.discoveries.includes("Flower-filled riverbank")) {
        setWorldMessage("Explore the flower-filled riverbank before discovering the quiet pond.");
        return;
      }
      game.safeWaterFound = true;
      addDiscovery("Safe freshwater spot");
      completeObjective(2);
    }

    if (type === "rock") {
      addDiscovery("Rocky island");
      completeObjective(3);
    }

    if (type === "cave") {
      addDiscovery("Waterfall cave");
      completeObjective(4);
    }
  }

  if (id === 4) {
    if (type === "twilight") exploreTwilightPath();
    if (type === "cemetery") exploreCemetery();
    if (type === "idol") discoverAncientIdol();
    if (type === "journal") findJournal();
    if (type === "bellTower") discoverBellTower();
  }

  if (id === 5) {
    if (type === "call") {
      followAnimalCall();
    }

    if (type === "valley") {
      discoverHiddenValley();
    }

    if (type === "missing") {
      locateSecondCompanion();
    }
    if (type === "homeReturn") {
      setWorldMessage("The path leads back to your Sunny Shore shelter.");
    }
    if (type === "shelterHome") {
      setWorldMessage("Your original beach shelter is now home to both companions.");
    }
  }
}


/* ---------- 12. PET INTERACTIONS ---------- */

function renderPetStatus() {
  const needs = game.petNeeds;

  return `
    <strong>${escapeHTML(game.petName)}'s wellbeing</strong>

    ${[
      ["Hunger",needs.hunger],
      ["Happiness",needs.happiness],
      ["Energy",needs.energy],
      ["Cleanliness",needs.cleanliness]
    ].map(([name,value]) => `
      <div class="pet-status-row">
        <span>${name}</span>
        <div class="pet-meter">
          <span style="width:${value}%"></span>
        </div>
      </div>
    `).join("")}
  `;
}

function updatePetStatus() {
  const element = document.getElementById("pet-status");
  if (element) element.innerHTML = renderPetStatus();
  saveGame();
}

function petInteraction(action) {
  const needs = game.petNeeds;

  if (action === "pet") {
    needs.happiness = Math.min(100,needs.happiness + 12);
    needs.energy = Math.max(0,needs.energy - 2);
    playSoundEffect("pet");
    playAnimalSound(game.pet?.id);
    setWorldMessage(`${game.petName} enjoys your attention! ❤️`);
  }

  if (action === "feed") {
    if (game.inventory.food <= 0) {
      setWorldMessage("You're out of food. Find some supplies!");
      return;
    }

    game.inventory.food--;
    needs.hunger = Math.min(100,needs.hunger + 25);
    playSoundEffect("feed");
    playAnimalSound(game.pet?.id);
    setWorldMessage(`${game.petName} happily enjoys the food!`);
  }

  if (action === "play") {
    if (needs.energy < 15) {
      setWorldMessage(`${game.petName} is tired. Let them rest first.`);
      return;
    }

    needs.happiness = Math.min(100,needs.happiness + 20);
    needs.energy = Math.max(0,needs.energy - 15);
    playSoundEffect("play");
    playAnimalSound(game.pet?.id);

    if (game.currentLevel === 1) {
      completeObjective(4);
    }

    setWorldMessage(`${game.petName} plays with you! What a lovely moment!`);
  }

  if (action === "groom") {
    needs.cleanliness = Math.min(100,needs.cleanliness + 25);
    playSoundEffect("pet");
    setWorldMessage(`${game.petName} looks neat and happy!`);
  }

  if (action === "rest") {
    needs.energy = Math.min(100,needs.energy + 25);
    needs.happiness = Math.min(100,needs.happiness + 4);
    setWorldMessage(`${game.petName} takes a peaceful little rest.`);
  }

  if (action === "sound") {
    initAudio();
    playAnimalSound();
    setWorldMessage(`${game.petName} responds to your call!`);
  }

  if (game.currentLevel === 5 && game.secondCompanion?.found) updateTwoPetDashboards();
  else updatePetStatus();
}


/* ---------- 13. BUILDING ---------- */

buildShelter = function () {
  const resources = game.resources[1] || {};

  if ((resources.wood || 0) < 5 ||
      (resources.leaves || 0) < 4 ||
      (resources.stones || 0) < 3) {
    setWorldMessage("Gather all the required materials first!");
    return;
  }

  if (game.shelterBuilt) {
    setWorldMessage("Your beach shelter is already built!");
    return;
  }

  game.shelterBuilt = true;
  addDiscovery("Sunny Shore shelter");
  playSoundEffect("build");
  completeObjective(5);
  setWorldMessage("Your beach shelter is ready! 🏡");
};


/* The Shadowlands animal call is triggered automatically after the five real objectives. */


/* ---------- 16. LEVEL 5 RESCUE ---------- */

locateSecondCompanion = function () {
  if (!isComplete(5,1)) {
    setWorldMessage("Explore the hidden valley first.");
    return;
  }

  if (!game.secondCompanion) {
    const possiblePets = pets.filter(p => p.id !== game.pet.id);
    const chosen = possiblePets[Math.floor(Math.random() * possiblePets.length)];

    game.secondCompanion = {
      id:chosen.id,
      name:"New Friend",
      emoji:chosen.emoji,
      colour:"#C99B73",
      found:true,
      safe:false,
      namePrompted:false,
      appearance: { colour: "#C99B73", marking: "#987052", eye: "#654321" },
      closet: { favouriteStyle: "Explorer", equippedAccessories: [] }
    };
    game.secondPetNeeds = game.secondPetNeeds || { hunger: 55, happiness: 45, energy: 75, cleanliness: 70 };
    game.equippedAccessories = game.equippedAccessories || {};
    game.equippedAccessories[1] = game.equippedAccessories[1] || [];
  }

  game.secondPetNeeds = game.secondPetNeeds || { hunger:55, happiness:45, energy:75, cleanliness:70 };
  game.equippedAccessories = game.equippedAccessories || {};
  game.equippedAccessories[1] = game.equippedAccessories[1] || [];
  game.secondCompanion.appearance = game.secondCompanion.appearance || { colour: game.secondCompanion.colour || "#C99B73", marking:"#987052", eye:"#654321" };
  game.secondCompanion.closet = game.secondCompanion.closet || { favouriteStyle: "Explorer", equippedAccessories: [] };
  game.secondCompanion.closet.equippedAccessories = Array.isArray(game.secondCompanion.closet.equippedAccessories)
    ? game.secondCompanion.closet.equippedAccessories
    : [];
  game.equippedAccessories[1] = Array.isArray(game.equippedAccessories[1])
    ? game.equippedAccessories[1]
    : [...game.secondCompanion.closet.equippedAccessories];
  playSoundEffect("discovery");
  setWorldMessage(`You found a ${game.secondCompanion.id}! It appears beside you and your first companion. ❤️`);
  completeObjective(2);
  saveGame();
  setTimeout(() => showPlayableLevel(), 350);
};


/* ---------- 17. SOUND SETTINGS ---------- */

showSettings = function () {
  app.innerHTML = `
    <section class="game-screen">
      <span class="step-label">EXPEDITION SETTINGS</span>
      <div class="screen-icon">🎵</div>
      <h1>Sound settings</h1>

      <div class="adventure-card">
        <label>
          <input type="checkbox" id="mute-sound"
            ${game.soundMuted ? "checked" : ""}>
          Mute all sound
        </label>

        <p>Background music</p>
        <input type="range" id="music-volume"
          min="0" max="100" value="${game.musicVolume}">

        <p>Sound effects</p>
        <input type="range" id="effects-volume"
          min="0" max="100" value="${game.effectsVolume}">
      </div>

      <p class="move-hint">
        Music and sound effects are generated by the game.
        Real animal recordings can be added separately.
      </p>

      <button class="primary-btn" onclick="saveSettings()">Save settings</button>
      <button class="secondary-btn" onclick="showPlayableLevel()">Back to adventure</button>
    </section>
  `;
};

saveSettings = function () {
  game.soundMuted = document.getElementById("mute-sound").checked;
  game.musicVolume = Number(document.getElementById("music-volume").value);
  game.effectsVolume = Number(document.getElementById("effects-volume").value);

  if (game.soundMuted || game.musicVolume === 0) {
    stopRegionMusic();
  } else {
    initAudio();
  }

  saveGame();
  notify("Sound settings saved!");
  showPlayableLevel();
};


/* ---------- 18. AUDIO STARTS AFTER USER INPUT ---------- */

document.addEventListener("click", () => {
  if (!audioContext) initAudio();
}, { once:true });


/* ---------- 19. INITIALISE UPGRADE ---------- */

injectInteractiveStyles();

if (game.setupComplete) {
  const startButton = document.getElementById("start-btn");

  if (startButton) {
    startButton.textContent = "Continue Adventure";
    startButton.onclick = showContinueScreen;
  }
}

console.log("Pet Paradise interactive gameplay upgrade loaded!");

/* ==========================================
   PET PARADISE — AUDIO PLAYBACK RELIABILITY FIX
   This replaces the earlier audio function declarations.
   The tones are synthesized placeholders, not real recordings.
========================================== */

function initAudio() {
  if (!audioContext) {
    const AudioClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioClass) {
      console.warn("Web Audio is not supported in this browser.");
      notify("This browser does not support game audio.");
      return;
    }

    audioContext = new AudioClass();
  }

  if (game.soundMuted || game.musicVolume <= 0) {
    stopRegionMusic();
    return;
  }

  const startMusic = () => {
    if (!game.soundMuted && game.musicVolume > 0) {
      startRegionMusic();
    }
  };

  if (audioContext.state === "suspended") {
    audioContext.resume().then(startMusic).catch(error => {
      console.error("Audio could not start:", error);
    });
  } else {
    startMusic();
  }
}

function startRegionMusic() {
  if (!audioContext || game.soundMuted || game.musicVolume <= 0) return;
  if (audioContext.state !== "running") return;
  if (musicTimer) return;

  const melodies = {
    1: [392, 440, 523, 440, 349, 392],
    2: [330, 392, 440, 392, 294, 349],
    3: [440, 523, 587, 523, 392, 440],
    4: [294, 349, 392, 349, 262, 294],
    5: [349, 440, 523, 587, 523, 440]
  };

  musicStep = 0;

  musicTimer = setInterval(() => {
    if (!audioContext || audioContext.state !== "running" || game.soundMuted || game.musicVolume <= 0) {
      return;
    }

    const melody = melodies[game.currentLevel] || melodies[1];
    const frequency = melody[musicStep % melody.length];
    musicStep++;

    const now = audioContext.currentTime;
    const volume = game.musicVolume / 100;

    const melodyOscillator = audioContext.createOscillator();
    const melodyGain = audioContext.createGain();
    melodyOscillator.type = "sine";
    melodyOscillator.frequency.setValueAtTime(frequency, now);
    melodyGain.gain.setValueAtTime(0.045 * volume, now);
    melodyGain.gain.exponentialRampToValueAtTime(0.001, now + 1.35);
    melodyOscillator.connect(melodyGain);
    melodyGain.connect(audioContext.destination);
    melodyOscillator.start(now);
    melodyOscillator.stop(now + 1.4);

    const harmonyOscillator = audioContext.createOscillator();
    const harmonyGain = audioContext.createGain();
    harmonyOscillator.type = "triangle";
    harmonyOscillator.frequency.setValueAtTime(frequency / 2, now);
    harmonyGain.gain.setValueAtTime(0.012 * volume, now);
    harmonyGain.gain.exponentialRampToValueAtTime(0.001, now + 1.35);
    harmonyOscillator.connect(harmonyGain);
    harmonyGain.connect(audioContext.destination);
    harmonyOscillator.start(now);
    harmonyOscillator.stop(now + 1.4);
  }, 1600);
}

function stopRegionMusic() {
  if (musicTimer) {
    clearInterval(musicTimer);
    musicTimer = null;
  }
}

/* Resume audio after a real player interaction (required by browsers). */
document.addEventListener("click", () => {
  if (!game.soundMuted && game.musicVolume > 0) {
    initAudio();
  }
}, { passive: true });


/* =====================================================
   PET PARADISE — HUMAN EXPLORER + FULL CLOSET UPGRADE
   Added after the existing game code. Keeps the current
   save system, levels, world, pet systems and theme.
===================================================== */

/* ---------- HUMAN CHARACTER DATA ---------- */

game.playerStyle = game.playerStyle || {
  skin: "#c98f69",
  hair: "#38251f",
  hairStyle: "long",
  top: "#6f9876",
  bottom: "#526b83",
  shoes: "#51463e",
  accessory: "#d9ad55",
  bag: "backpack"
};

game.activeOutfitSlot = game.activeOutfitSlot || "Everyday";
game.ownedHumanClothes = Array.isArray(game.ownedHumanClothes) ? game.ownedHumanClothes : [];
game.playerOutfit.fullOutfit = game.playerOutfit.fullOutfit || "";
game.outfitPresets = game.outfitPresets || {
  Everyday: null,
  Explorer: null,
  Beachwear: null,
  "Special Occasion": null
};

const humanCloset = {
  tops: [
    { label: "Sage shirt", icon: "👕", color: "#6f9876" },
    { label: "Cream blouse", icon: "👚", color: "#eadfc7" },
    { label: "Explorer jacket", icon: "🧥", color: "#9b805d" },
    { label: "Blue hoodie", icon: "🥼", color: "#779bbd" },
    { label: "Coral top", icon: "👕", color: "#d98778" },
    { label: "Lavender top", icon: "👚", color: "#a995c9" },
    ...[
      ["Striped tee","👕","#d16f65"],["Ocean blue shirt","👔","#397da8"],["Sunshine blouse","👚","#e6c45b"],
      ["Rose pink shirt","👕","#d98da9"],["Forest green tee","👕","#47765c"],["Lilac sweater","🧶","#9d83c4"],
      ["White formal shirt","👔","#f0eee7"],["Black turtleneck","🥼","#34343b"]
    ].map(([label,icon,color],i)=>({id:`human-top-${i}`,label,icon,color,price:40}))
  ],
  bottoms: [
    { label: "Denim trousers", icon: "👖", color: "#526b83" },
    { label: "Khaki trousers", icon: "👖", color: "#a68c61" },
    { label: "Shorts", icon: "🩳", color: "#7b9b85" },
    { label: "Dark trousers", icon: "👖", color: "#4c4d55" },
    { label: "Beach shorts", icon: "🩳", color: "#d8b56e" },
    ...[
      ["Black jeans","👖","#30343d"],["White trousers","👖","#e8e3d8"],["Olive cargos","👖","#69754c"],
      ["Rose trousers","👖","#b87983"],["Navy pants","👖","#344b70"],["Checked trousers","👖","#887b70"]
    ].map(([label,icon,color],i)=>({id:`human-bottom-${i}`,label,icon,color,price:40}))
  ],
  shoes: [
    { label: "Trail boots", icon: "🥾", color: "#51463e" },
    { label: "Sneakers", icon: "👟", color: "#eee9dc" },
    { label: "Sandals", icon: "🩴", color: "#b98562" },
    { label: "Blue trainers", icon: "👟", color: "#668ba9" }
  ],
  hair: [
    { label: "Long hair", icon: "💇", value: "long" },
    { label: "Short hair", icon: "💇‍♂️", value: "short" },
    { label: "Ponytail", icon: "🎀", value: "ponytail" },
    { label: "Curly hair", icon: "🦱", value: "curly" },
    { label: "Braided hair", icon: "🪮", value: "braid" }
  ],
  bags: [
    { label: "Explorer backpack", icon: "🎒", value: "backpack" },
    { label: "Small satchel", icon: "👜", value: "satchel" },
    { label: "No bag", icon: "—", value: "none" }
  ],
  dresses: [
    ["Meadow sundress","👗","#e9a6b7"],["Lavender day dress","👗","#a995c9"],["Sunset dress","👗","#d98262"],
    ["Ocean dress","👗","#5e9fbd"],["Floral garden dress","👗","#d7a1a8"],["Midnight dress","👗","#45445f"]
  ].map(([label,icon,color],i)=>({id:`human-dress-${i}`,label,icon,color,price:40,outfitPart:"dress"})),
  suits: [
    ["Classic navy suit","🤵","#344b70"],["Charcoal suit","🤵","#45464d"],["Cream formal suit","🤵","#d8cbb4"],
    ["Forest green suit","🤵","#466b56"],["Burgundy suit","🤵","#713c4c"],["Midnight black suit","🤵","#25252b"]
  ].map(([label,icon,color],i)=>({id:`human-suit-${i}`,label,icon,color,price:40,outfitPart:"suit"}))
};

function playerSVG() {
  const s = game.playerStyle;
  const longHair = s.hairStyle !== "short";
  const hairBack = longHair
    ? `<path d="M31 34 Q25 2 50 4 Q78 1 72 39 L69 69 Q65 83 59 79 L58 47 L40 47 L39 78 Q30 80 28 64Z" fill="${s.hair}"/>`
    : `<path d="M30 35 Q29 5 51 5 Q74 5 71 36 L65 29 Q51 17 36 31Z" fill="${s.hair}"/>`;
  const hairFront = s.hairStyle === "ponytail"
    ? `<path d="M68 23 Q88 23 79 49 Q74 57 70 48Z" fill="${s.hair}"/><path d="M31 29 Q40 8 58 17 Q69 20 69 34 Q53 25 40 34Z" fill="${s.hair}"/>`
    : s.hairStyle === "curly"
      ? `<path d="M30 33 Q24 20 34 17 Q34 3 47 10 Q56 0 64 13 Q78 13 71 31 Q62 22 53 24 Q41 19 30 33Z" fill="${s.hair}"/>`
      : s.hairStyle === "braid"
        ? `<path d="M30 31 Q26 5 50 5 Q75 4 71 34 L63 27 Q48 18 36 31Z" fill="${s.hair}"/><path d="M69 38 Q82 49 72 64 Q82 76 70 85" fill="none" stroke="${s.hair}" stroke-width="6" stroke-linecap="round"/>`
        : `<path d="M30 34 Q27 6 50 5 Q76 4 71 36 Q62 24 52 25 Q40 21 30 34Z" fill="${s.hair}"/>`;
  const bag = game.playerOutfit.bag === "🎒" || game.playerOutfit.bag === "👜" || s.bag !== "none"
    ? `<path d="M22 72 Q15 72 16 85 L18 111 Q19 117 26 115 L31 83Z" fill="#8b7256" stroke="#5c503f" stroke-width="2"/>`
    : "";
  const fullOutfit = game.playerOutfit.fullOutfit || "";
  const lowerClothing = fullOutfit === "dress"
    ? `<path d="M32 94 Q50 100 68 94 L78 137 Q50 145 22 137Z" fill="${s.top}" stroke="#314d3d" stroke-width="1.5"/>`
    : `<path d="M31 94 Q50 101 69 94 L67 127 L53 132 L34 127Z" fill="${s.bottom}" stroke="#3f5366" stroke-width="1.5"/>`;
  return `<svg class="human-avatar-svg" viewBox="0 0 100 158" role="img" aria-label="${escapeHTML(game.playerName || "Explorer")} human character">
    <ellipse cx="50" cy="151" rx="27" ry="5" fill="#18392d" opacity=".18"/>
    ${bag}
    ${hairBack}
    <path d="M39 48 L38 57 L62 57 L61 47Z" fill="${s.skin}"/>
    <path d="M34 56 Q50 49 66 56 L73 96 Q50 106 27 96Z" fill="${s.top}" stroke="#314d3d" stroke-width="1.5"/>
    <path d="M35 59 Q25 58 22 76 L17 101 Q18 106 23 106 L31 82 L38 74Z" fill="${s.top}" stroke="#314d3d" stroke-width="1.3"/>
    <path d="M65 59 Q75 58 78 76 L83 101 Q82 106 77 106 L69 82 L62 74Z" fill="${s.top}" stroke="#314d3d" stroke-width="1.3"/>
    <circle cx="20" cy="106" r="5" fill="${s.skin}"/><circle cx="80" cy="106" r="5" fill="${s.skin}"/>
    ${lowerClothing}
    <path d="M36 124 L51 126 L48 145 L34 145Z" fill="${fullOutfit === "dress" ? s.skin : s.bottom}"/><path d="M53 126 L66 123 L69 145 L53 145Z" fill="${fullOutfit === "dress" ? s.skin : s.bottom}"/>
    ${fullOutfit === "suit" ? `<path d="M43 57 L50 70 L57 57 L54 94 L46 94Z" fill="#f1e9db"/><path d="M49 65 L53 65 L55 89 L50 94 L46 89Z" fill="#9b3947"/>` : ""}
    <path d="M31 142 Q40 138 49 143 L49 151 L28 151 Q25 146 31 142Z" fill="${s.shoes}"/><path d="M54 142 Q63 138 71 143 L75 151 L53 151Z" fill="${s.shoes}"/>
    <ellipse cx="50" cy="31" rx="19" ry="23" fill="${s.skin}"/>
    ${hairFront}
    <path d="M43 34 Q46 31 48 34 M56 34 Q59 31 61 34" fill="none" stroke="#49352d" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M48 43 Q51 46 55 43" fill="none" stroke="#8d5147" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M35 57 Q50 63 65 57" fill="none" stroke="${s.accessory}" stroke-width="3"/>
  </svg>`;
}

function playerEmoji() {
  return playerSVG();
}

function injectCharacterStyles() {
  if (document.getElementById("human-character-upgrade-styles")) return;
  const style = document.createElement("style");
  style.id = "human-character-upgrade-styles";
  style.textContent = `
    .human-avatar-svg{display:block;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 5px 4px #17372b35)}
    .world-character{width:72px!important;height:142px!important;transform:translate(-50%,-70%);z-index:12!important;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;pointer-events:none}
    .world-character .character-sprite{width:65px;height:125px;font-size:0;display:block;transform-origin:50% 90%}
    .world-character.moving .character-sprite{animation:humanWalk .34s ease-in-out infinite alternate}
    .world-character .character-name{white-space:nowrap;background:#fff8e8d9;padding:3px 8px;border-radius:12px;font-size:10px;font-weight:700;color:#234d42;margin-top:-2px}
    @keyframes humanWalk{from{transform:translateY(0) rotate(-2deg)}to{transform:translateY(-3px) rotate(2deg)}}
    .closet-layout{display:grid;grid-template-columns:minmax(190px,260px) 1fr;gap:18px;align-items:start;margin:20px 0}
    .closet-avatar-card{position:sticky;top:12px;background:linear-gradient(160deg,#e7efdf,#f8f1df);border-radius:22px;padding:18px;text-align:center;box-shadow:inset 0 0 0 1px #fff}
    .closet-avatar-card .human-avatar-svg{height:245px;margin:auto}
    .closet-avatar-card strong{display:block;color:#234d42;margin-top:8px}
    .closet-panel{min-width:0;text-align:left}
    .outfit-slots,.closet-tabs,.colour-swatches{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}
    .outfit-slot,.closet-tab,.closet-choice{border:1px solid #d6d1c2;border-radius:12px;background:#fffaf0;color:#234d42;padding:10px 12px;cursor:pointer;font:600 12px 'DM Sans',sans-serif}
    .outfit-slot.active,.closet-tab.active{background:#dfeadd;border:2px solid #6e9b73}
    .closet-section{background:#f4f0e6;border-radius:16px;padding:14px;margin:12px 0}
    .closet-section h3{margin:0 0 10px;color:#234d42;font-family:'Cinzel',serif}
    .closet-choice{display:inline-flex;align-items:center;gap:7px;margin:4px;font-size:13px}
    .closet-choice .choice-icon{font-size:23px}
    .closet-choice.selected{border:2px solid #6e9b73;background:#e7efe2}
    .colour-dot{width:25px;height:25px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #b9b3a3;cursor:pointer}
    .closet-note{font-size:12px;color:#657568}
    @media(max-width:650px){.closet-layout{grid-template-columns:1fr}.closet-avatar-card{position:static}.closet-avatar-card .human-avatar-svg{height:210px}.world-character{width:60px!important;height:125px!important}}
  `;
  document.head.appendChild(style);
}

function saveCurrentOutfit() {
  const slot = game.activeOutfitSlot || "Everyday";
  game.outfitPresets[slot] = {
    playerStyle: { ...game.playerStyle },
    playerOutfit: { ...game.playerOutfit }
  };
}

function switchOutfitSlot(slot) {
  saveCurrentOutfit();
  game.activeOutfitSlot = slot;
  const preset = game.outfitPresets[slot];
  if (preset) {
    game.playerStyle = { ...game.playerStyle, ...preset.playerStyle };
    game.playerOutfit = { ...game.playerOutfit, ...preset.playerOutfit };
  } else if (slot === "Explorer") {
    game.playerStyle.top = "#9b805d";
    game.playerStyle.bottom = "#a68c61";
    game.playerStyle.shoes = "#51463e";
  } else if (slot === "Beachwear") {
    game.playerStyle.top = "#e4a77f";
    game.playerStyle.bottom = "#d8b56e";
    game.playerStyle.shoes = "#b98562";
  } else if (slot === "Special Occasion") {
    game.playerStyle.top = "#9b83b9";
    game.playerStyle.bottom = "#51465f";
    game.playerStyle.shoes = "#51465f";
  } else {
    game.playerStyle.top = "#6f9876";
    game.playerStyle.bottom = "#526b83";
    game.playerStyle.shoes = "#51463e";
  }
  saveGame();
  showCloset();
}

function setPlayerColour(part, colour) {
  game.playerStyle[part] = colour;
  saveCurrentOutfit();
  saveGame();
  showCloset();
}

function chooseClosetItem(category, item) {
  if (item.id && !game.ownedHumanClothes.includes(item.id)) {
    const price = item.price || 40;
    if (game.coins < price) { notify("You need 40 coins for this clothing item."); return; }
    game.coins -= price;
    game.ownedHumanClothes.push(item.id);
    notify(`${item.label} purchased and equipped!`);
  }
  if (category === "tops") {
    game.playerStyle.top = item.color;
    game.playerOutfit.top = item.icon;
    game.playerOutfit.fullOutfit = "";
    delete game.playerOutfit.fullOutfitId;
  } else if (category === "bottoms") {
    game.playerStyle.bottom = item.color;
    game.playerOutfit.bottom = item.icon;
    game.playerOutfit.fullOutfit = "";
    delete game.playerOutfit.fullOutfitId;
  } else if (category === "shoes") {
    game.playerStyle.shoes = item.color;
    game.playerOutfit.shoes = item.icon;
  } else if (category === "dresses" || category === "suits") {
    game.playerStyle.top = item.color;
    game.playerStyle.bottom = item.color;
    game.playerOutfit.fullOutfit = item.outfitPart;
    game.playerOutfit.fullOutfitId = item.id;
    game.playerOutfit.top = item.icon;
    game.playerOutfit.bottom = item.icon;
  } else if (category === "hair") {
    game.playerStyle.hairStyle = item.value;
    game.playerOutfit.hair = item.icon;
  } else if (category === "bags") {
    game.playerStyle.bag = item.value;
    game.playerOutfit.bag = item.value === "none" ? "" : item.icon;
  }
  saveCurrentOutfit();
  saveGame();
  showCloset();
}

function showCloset() {
  injectCharacterStyles();
  const slots = ["Everyday", "Explorer", "Beachwear", "Special Occasion"];
  const colours = ["#2f604c", "#6f9876", "#9b805d", "#779bbd", "#d98778", "#a995c9", "#eadfc7", "#343a40", "#d8b56e", "#ffffff"];
  const section = (title, key, items) => `
    <div class="closet-section"><h3>${title}</h3>
      ${items.map(item => {
        const selected = item.id ? game.playerOutfit.fullOutfitId === item.id || (game.ownedHumanClothes.includes(item.id) && key === "tops" && game.playerOutfit.top === item.icon && game.playerStyle.top === item.color) : key === "hair" ? game.playerStyle.hairStyle === item.value : key === "bags" ? game.playerStyle.bag === item.value : game.playerOutfit[key === "tops" ? "top" : key === "bottoms" ? "bottom" : "shoes"] === item.icon;
        const owned = !item.id || game.ownedHumanClothes.includes(item.id);
        return `<button class="closet-choice ${selected ? "selected" : ""}" onclick='chooseClosetItem("${key}",${JSON.stringify(item).replace(/'/g,"&#39;")})'><span class="choice-icon">${item.icon}</span>${item.label}${item.id ? `<small>${owned ? "Owned" : `🪙 ${item.price} — buy & wear`}</small>` : ""}</button>`;
      }).join("")}
    </div>`;

  app.innerHTML = `
    <section class="game-screen wide-screen">
      <span class="step-label">YOUR PERSONAL WARDROBE</span>
      <h1>The Explorer's Closet</h1>
      <p>Build your look from head to toe. Your character wears these outfits throughout the island.</p>
      <div class="outfit-slots">${slots.map(slot => `<button class="outfit-slot ${game.activeOutfitSlot === slot ? "active" : ""}" onclick='switchOutfitSlot(${JSON.stringify(slot)})'>${slot}</button>`).join("")}</div>
      <div class="closet-layout">
        <div class="closet-avatar-card">${playerSVG()}<strong>${escapeHTML(game.playerName || "Explorer")}</strong><span class="closet-note">Live character preview</span></div>
        <div class="closet-panel">
          ${section("Hairstyles", "hair", humanCloset.hair)}
          <div class="closet-section"><h3>Hair colour</h3><div class="colour-swatches">${["#38251f","#171717","#754c32","#c18a4d","#d5b18a","#9a9a9a","#e7d2a2"].map(c=>`<button class="colour-dot" style="background:${c}" aria-label="Hair colour" onclick="setPlayerColour('hair','${c}')"></button>`).join("")}</div></div>
          ${section("Tops", "tops", humanCloset.tops)}
          ${section("Bottoms", "bottoms", humanCloset.bottoms)}
          ${game.playerGender === "female" ? section("Dresses", "dresses", humanCloset.dresses) : ""}
          ${section("Suits & formalwear", "suits", humanCloset.suits)}
          ${section("Shoes", "shoes", humanCloset.shoes)}
          ${section("Bags", "bags", humanCloset.bags)}
          <div class="closet-section"><h3>Skin tone</h3><div class="colour-swatches">${["#f2c9a5","#e3ad83","#c98f69","#a96f4d","#815338","#5d392a"].map(c=>`<button class="colour-dot" style="background:${c}" aria-label="Skin tone" onclick="setPlayerColour('skin','${c}')"></button>`).join("")}</div></div>
          <div class="closet-section"><h3>Accessory colour</h3><div class="colour-swatches">${colours.map(c=>`<button class="colour-dot" style="background:${c}" aria-label="Accessory colour" onclick="setPlayerColour('accessory','${c}')"></button>`).join("")}</div></div>
        </div>
      </div>
      <div class="button-row"><button class="secondary-btn" onclick="showPlayableLevel()">← Back to adventure</button><button class="primary-btn" onclick="showPlayableLevel()">Wear this outfit ✓</button></div>
    </section>`;
}

function changeOutfit(category, item) {
  chooseClosetItem(category, { icon: item, label: item, color: "#6f9876" });
}

/* Make the human avatar render in the existing moving world character. */
const previousShowPlayableLevel = showPlayableLevel;
showPlayableLevel = function () {
  injectCharacterStyles();
  previousShowPlayableLevel();
  const sprite = document.querySelector("#world-player .character-sprite");
  if (sprite) sprite.innerHTML = playerSVG();
  if (game.currentLevel === 5 && game.secondCompanion?.found && !game.secondCompanion.namePrompted) {
    setTimeout(promptSecondCompanionName, 120);
  }
};

/* Refresh the live SVG after any saved character appearance changes. */

showContinueScreen = function () {
  if (game.setupComplete && game.pet && game.petName) {
    injectCharacterStyles();
    app.innerHTML = `
      <section class="game-screen">
        <span class="step-label">WELCOME BACK</span>
        <h1>Your island awaits.</h1>
        <div class="character-preview" style="max-width:260px;margin:16px auto">${playerSVG()}<strong>${escapeHTML(game.playerName)}</strong></div>
        <p>${escapeHTML(game.petName)} is ready for another adventure.</p>
        <div class="adventure-card">
          <p>Coins: 🪙 ${game.coins}</p>
          <p>Regions completed: ${game.completedLevels.length}/5</p>
        </div>
        <button class="primary-btn" onclick="showWorldMap()">Continue adventure →</button>
        <button class="secondary-btn" onclick="showCloset()">👗 Open my closet</button>
        <button class="secondary-btn" onclick="showSaveMenu()">Save options</button>
      </section>`;
  } else {
    showPlayerScreen();
  }
};



/* =========================================================
   PET PARADISE — RESPONSIVE WORLD + AUDIO RESTORE
   Full-screen desktop, touch-friendly mobile, scenic world,
   visible human avatar, and gesture-unlocked audio.
========================================================= */

(function petParadiseVisualAudioUpgrade() {
  const style = document.createElement("style");
  style.id = "pet-paradise-responsive-realism";
  style.textContent = `
    html, body {
      width:100%; min-height:100%; margin:0;
      overflow-x:hidden;
    }
    body { min-width:320px; }
    .game-shell {
      width:100% !important;
      max-width:1600px !important;
      min-height:100vh;
      margin:0 auto !important;
      padding:clamp(10px,2vw,28px) !important;
      box-sizing:border-box;
    }
    .game-world, #game-world {
      width:100% !important;
      min-height:calc(100vh - 110px);
      box-sizing:border-box;
    }
    #app, .game-content {
      width:100% !important;
      max-width:none !important;
      box-sizing:border-box;
    }
    .game-screen {
      width:100%;
      max-width:none !important;
      box-sizing:border-box;
    }
    .wide-screen, .adventure-game {
      width:100% !important;
      max-width:none !important;
    }
    .adventure-game {
      display:grid;
      grid-template-columns:minmax(0,1.7fr) minmax(300px,.9fr);
      grid-template-areas:
        "head head"
        "nav nav"
        "world controls"
        "world message"
        "world status"
        "world actiontitle"
        "world actions"
        "objectives objectives"
        "footer footer";
      gap:clamp(10px,1.5vw,20px);
      align-items:start;
    }
    .adventure-game > .game-topbar { grid-area:head; margin:0; }
    .adventure-game > .world-hud { grid-area:nav; margin:0; }
    .adventure-game > .adventure-world,
    .adventure-game > #play-world {
      grid-area:world;
      min-height:clamp(480px,66vh,760px) !important;
      height:100%;
      margin:0;
      border-radius:22px;
      overflow:hidden;
      position:relative;
      background:
        linear-gradient(180deg,rgba(8,35,31,.05),rgba(9,35,28,.16)),
        url("island-bg.jpg") center 48% / cover no-repeat,
        linear-gradient(145deg,#7eb6a4,#d7c18d 58%,#54785c) !important;
      box-shadow:0 22px 55px rgba(12,30,25,.24), inset 0 0 0 1px rgba(255,255,255,.32);
      isolation:isolate;
    }
    .adventure-world:before {
      content:"";
      position:absolute; inset:0;
      background:linear-gradient(180deg,rgba(15,45,39,.04),rgba(9,30,25,.14));
      pointer-events:none; z-index:0;
    }
    .world-decoration { opacity:.10 !important; filter:blur(1px); }
    .world-object {
      width:clamp(34px,3vw,48px) !important;
      height:clamp(34px,3vw,48px) !important;
      border:1px solid rgba(255,255,255,.75) !important;
      background:rgba(247,244,226,.88) !important;
      box-shadow:0 5px 14px rgba(20,35,25,.24) !important;
      backdrop-filter:blur(7px);
      transition:transform .2s ease, box-shadow .2s ease;
    }
    .world-object:hover { transform:translateY(-4px) scale(1.08); }
    .world-character, .world-pet {
      z-index:5;
      filter:drop-shadow(0 9px 7px rgba(0,0,0,.32));
    }
    .character-sprite {
      width:clamp(76px,7vw,112px) !important;
      height:auto !important;
      font-size:0 !important;
      transform-origin:50% 90%;
      animation:explorerIdle 3.2s ease-in-out infinite;
    }
    .human-avatar-svg {
      display:block;
      width:100% !important;
      height:auto !important;
      overflow:visible;
    }
    .world-pet-art .pet-art {
      width:clamp(100px,9vw,150px) !important;
      max-width:none !important;
      filter:drop-shadow(0 8px 5px rgba(0,0,0,.25));
    }
    .character-name {
      display:inline-block;
      padding:4px 9px;
      border-radius:20px;
      background:rgba(250,247,235,.88);
      color:#203d32 !important;
      font-size:11px;
      font-weight:800;
      box-shadow:0 2px 8px #10271d33;
    }
    @keyframes explorerIdle {
      0%,100% { transform:translateY(0) }
      50% { transform:translateY(-3px) }
    }
    .adventure-game > .movement-controls { grid-area:controls; margin:0; }
    .adventure-game > .world-action-message { grid-area:message; margin:0; }
    .adventure-game > .pet-status { grid-area:status; margin:0; }
    .adventure-game > h3 { grid-area:actiontitle; margin:0; }
    .adventure-game > .pet-action-buttons { grid-area:actions; margin:0; }
    .adventure-game > .game-objectives { grid-area:objectives; margin:0; }
    .adventure-game > .game-menu-buttons { grid-area:footer; }
    .movement-controls {
      display:flex; align-items:center; justify-content:space-between;
      gap:14px; flex-wrap:wrap;
      padding:14px;
      border-radius:18px;
      background:rgba(247,245,232,.86);
      backdrop-filter:blur(12px);
      box-shadow:0 8px 24px rgba(10,30,22,.12);
    }
    .pet-status {
      padding:14px !important;
      border-radius:18px !important;
      background:rgba(247,245,232,.9) !important;
      box-shadow:0 8px 24px rgba(10,30,22,.12);
    }
    .pet-action-buttons {
      display:flex; flex-wrap:wrap; gap:8px;
      padding:12px;
      border-radius:18px;
      background:rgba(247,245,232,.86);
    }
    .pet-action-buttons button, .world-hud button {
      min-height:42px;
      touch-action:manipulation;
    }
    .game-objectives {
      padding:16px;
      border-radius:18px;
      background:rgba(247,245,232,.88);
    }
    .game-objective { background:rgba(255,255,255,.68) !important; }
    .world-action-message {
      padding:10px 14px;
      border-radius:14px;
      background:rgba(248,245,229,.88);
      color:#24483a;
      text-align:center;
      font-weight:700;
    }
    .world-hud {
      display:flex; flex-wrap:wrap; gap:9px;
    }
    .world-hud button {
      flex:1 1 auto;
      border-radius:12px;
    }
    .character-preview .human-avatar-svg { max-height:270px; }
    @media (min-width:1200px) {
      .game-shell { padding:22px 30px !important; }
      .adventure-game { gap:18px 24px; }
    }
    @media (max-width:900px) {
      .game-shell { padding:8px !important; }
      .game-world, #game-world { min-height:calc(100vh - 70px); }
      .adventure-game {
        display:flex; flex-direction:column; gap:12px;
      }
      .adventure-game > * { width:100%; }
      .adventure-game > .adventure-world,
      .adventure-game > #play-world {
        width:100%; min-height:clamp(360px,58vh,600px) !important;
        height:auto;
      }
      .world-hud { justify-content:center; }
      .world-hud button { flex:1 1 28%; }
      .movement-controls { width:100%; }
    }
    @media (max-width:560px) {
      .game-shell { padding:0 !important; border-radius:0 !important; }
      .game-world, #game-world { min-height:100dvh; border-radius:0 !important; }
      .game-screen { padding:14px !important; border-radius:0 !important; }
      .game-topbar { align-items:center; }
      .game-topbar h1 { font-size:clamp(20px,6vw,28px); }
      .adventure-game > .adventure-world,
      .adventure-game > #play-world { min-height:54svh !important; border-radius:15px; }
      .world-object { width:38px !important; height:38px !important; }
      .character-sprite { width:72px !important; }
      .world-pet-art .pet-art { width:96px !important; }
      .world-hud button { flex:1 1 30%; padding:9px 6px; font-size:12px; }
      .movement-controls { padding:10px; }
      .joystick { width:76px !important; height:76px !important; }
      .pet-action-buttons button { flex:1 1 28%; padding:10px 6px; }
      .game-objective { font-size:12px; }
    }
  `;
  document.head.appendChild(style);
})();

/* Audio starts only after a real user gesture, as browsers require. */
function initAudio() {
  const AudioClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioClass) return;
  if (!audioContext) audioContext = new AudioClass();

  if (game.soundMuted) {
    stopRegionMusic();
    return;
  }
  const begin = () => {
    if (!game.soundMuted && game.musicVolume > 0) startRegionMusic();
  };
  if (audioContext.state === "suspended") {
    audioContext.resume().then(begin).catch(err => console.warn("Audio resume failed", err));
  } else {
    begin();
  }
}

function startRegionMusic() {
  if (!audioContext || audioContext.state !== "running" || game.soundMuted || game.musicVolume <= 0 || musicTimer) return;

  const tracks = {
    1:[392,440,523,440,349,392,523,440],
    2:[330,392,440,392,294,349,392,440],
    3:[440,523,587,523,392,440,523,659],
    4:[294,349,392,349,262,294,349,392],
    5:[349,440,523,587,523,440,392,349]
  };
  const notes = tracks[game.currentLevel] || tracks[1];
  musicStep = 0;

  musicTimer = setInterval(() => {
    if (!audioContext || audioContext.state !== "running" || game.soundMuted || game.musicVolume <= 0) return;
    const now = audioContext.currentTime;
    const volume = Math.max(0, Math.min(1, game.musicVolume / 100));
    const freq = notes[musicStep % notes.length];
    musicStep++;

    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(.035 * volume, now);
    gain.gain.exponentialRampToValueAtTime(.0001, now + 1.15);
    osc.connect(gain); gain.connect(audioContext.destination);
    osc.start(now); osc.stop(now + 1.2);

    if (musicStep % 2 === 0) {
      const pad = audioContext.createOscillator();
      const padGain = audioContext.createGain();
      pad.type = "triangle";
      pad.frequency.setValueAtTime(freq / 2, now);
      padGain.gain.setValueAtTime(.009 * volume, now);
      padGain.gain.exponentialRampToValueAtTime(.0001, now + 1.7);
      pad.connect(padGain); padGain.connect(audioContext.destination);
      pad.start(now); pad.stop(now + 1.8);
    }
  }, 1450);
}

function stopRegionMusic() {
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
}

/* Unlock audio on the first tap/click/key, then keep it available. */
document.addEventListener("pointerdown", function petParadiseAudioUnlock() {
  initAudio();
}, { passive:true });
document.addEventListener("keydown", function petParadiseKeyboardAudioUnlock() {
  initAudio();
}, { passive:true });

/* Re-apply the correct track when the player enters another region. */
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && audioContext && !game.soundMuted && game.musicVolume > 0) {
    if (audioContext.state === "suspended") audioContext.resume().then(() => {
      stopRegionMusic(); startRegionMusic();
    });
  }
});

/* Ensure the sound settings immediately affect playback. */
const petParadiseOriginalSaveSettings = typeof saveSettings === "function" ? saveSettings : null;
if (petParadiseOriginalSaveSettings) {
  saveSettings = function() {
    petParadiseOriginalSaveSettings();
    if (game.soundMuted || game.musicVolume <= 0) stopRegionMusic();
    else initAudio();
  };
}


/* =========================================================
   PET PARADISE — FULL 3D WORLD ENGINE
   Procedural Three.js island, human explorer and animal models
   Keeps the existing progression, inventory, objectives and UI.
========================================================= */
(function installPetParadise3D() {
  const THREE_URLS = [
    "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js",
    "https://unpkg.com/three@0.160.0/build/three.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js"
  ];
  let threeLoadPromise = null;
  let renderer = null, scene = null, camera = null, worldRoot = null;
  let playerRig = null, petRig = null, secondPetRig = null, playerParts = null, petParts = null;
  let animationFrame = 0, lastFrame = 0, yaw = 0, cameraDistance = 8;
  let pointerDown = false, pointerX = 0, pointerY = 0;
  let pointerStartX = 0, pointerStartY = 0, pointerDragged = false;
  let tapDestination = null;
  let raycaster = null, pointer = null, interactiveMeshes = [];
  let activeLevel = 0, activeWorld = null;
  const clock = { time: 0 };

  function loadThree() {
    if (window.THREE) return Promise.resolve(window.THREE);
    if (threeLoadPromise) return threeLoadPromise;
    threeLoadPromise = new Promise((resolve, reject) => {
      let index = 0;
      const tryNext = () => {
        if (window.THREE) { resolve(window.THREE); return; }
        if (index >= THREE_URLS.length) {
          reject(new Error("Three.js could not load from the available CDNs. Check the internet connection or browser network restrictions."));
          return;
        }
        const url = THREE_URLS[index++];
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.crossOrigin = "anonymous";
        script.onload = () => {
          if (window.THREE && window.THREE.WebGLRenderer) resolve(window.THREE);
          else { script.remove(); tryNext(); }
        };
        script.onerror = () => { script.remove(); tryNext(); };
        document.head.appendChild(script);
      };
      tryNext();
    });
    return threeLoadPromise;
  }

  function mat(color, roughness = .82, metalness = 0) {
    return new THREE.MeshStandardMaterial({ color, roughness, metalness });
  }
  function mesh(geometry, material, parent, x=0, y=0, z=0) {
    const m = new THREE.Mesh(geometry, material);
    m.position.set(x,y,z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  function group(parent, x=0, y=0, z=0) {
    const g = new THREE.Group();
    g.position.set(x,y,z);
    parent.add(g);
    return g;
  }
  function sphere(parent, color, x,y,z, sx,sy,sz, material=null) {
    const m = mesh(new THREE.SphereGeometry(1,24,16), material || mat(color), parent,x,y,z);
    m.scale.set(sx,sy,sz);
    return m;
  }
  function cylinder(parent, color, rt, rb, h, x,y,z, material=null, radial=12) {
    return mesh(new THREE.CylinderGeometry(rt,rb,h,radial),material || mat(color),parent,x,y,z);
  }
  function makeLeaf(parent, color, length, width, angle, lift=0) {
    const leaf = group(parent);
    const points = [
      new THREE.Vector3(0,0,0),
      new THREE.Vector3(length*.28,lift+.12,length*.28),
      new THREE.Vector3(length*.68,lift+.18,length*.7),
      new THREE.Vector3(length,lift,length)
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    const stem = mesh(new THREE.TubeGeometry(curve,16,.035,6,false),mat("#7d9b4b"),leaf);
    const shape = new THREE.Shape();
    shape.moveTo(0,0);
    shape.quadraticCurveTo(length*.42,width,length,0);
    shape.quadraticCurveTo(length*.42,-width,0,0);
    const geo = new THREE.ShapeGeometry(shape,12);
    const blade = mesh(geo,mat(color),leaf);
    blade.position.set(length*.48,.12,length*.48);
    blade.rotation.x = -Math.PI/2;
    blade.rotation.z = angle;
    leaf.rotation.y = angle;
    return leaf;
  }

  function addPalm(parent,x,z,scale=1) {
    const tree = group(parent,x,0,z);
    const trunkMat = mat("#96704b");
    let previous = new THREE.Vector3(0,0,0);
    for(let i=1;i<=7;i++){
      const h=i*.48*scale;
      const next=new THREE.Vector3(Math.sin(i*.12)*.18*scale,h,Math.cos(i*.12)*.12*scale);
      const mid=previous.clone().add(next).multiplyScalar(.5);
      const dir=next.clone().sub(previous);
      const seg=mesh(new THREE.CylinderGeometry(.16*scale-i*.012,.22*scale-i*.012,dir.length(),9),trunkMat,tree,mid.x,mid.y,mid.z);
      seg.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());
      previous=next;
    }
    const crown=group(tree,previous.x,previous.y,previous.z);
    sphere(crown,"#6b8f42",0,0,0,.24*scale,.18*scale,.24*scale);
    for(let i=0;i<9;i++){
      const a=i*Math.PI*2/9;
      const length=(1.7+Math.sin(i*2.4)*.18)*scale;
      const curve=new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0,0,0),
        new THREE.Vector3(Math.cos(a)*length*.48,.18*scale,Math.sin(a)*length*.48),
        new THREE.Vector3(Math.cos(a)*length,-.38*scale,Math.sin(a)*length)
      );
      mesh(new THREE.TubeGeometry(curve,18,.035*scale,5,false),mat("#557d38"),crown);
      const blade=mesh(new THREE.ConeGeometry(.22*scale,length*.5,5),mat(i%2?"#4f8b42":"#679b48"),crown);
      blade.position.set(Math.cos(a)*length*.72,-.15*scale,Math.sin(a)*length*.72);
      blade.rotation.z=Math.PI/2.4;
      blade.rotation.y=-a;
      blade.scale.set(.7,1,.45);
    }
    return tree;
  }

  function addBroadTree(parent,x,z,scale=1,leafColor="#2f7049") {
    const t=group(parent,x,0,z);
    cylinder(t,"#70533a",.19*scale,.3*scale,1.8*scale,0,.9*scale,0);
    for(let i=0;i<7;i++){
      const a=i*Math.PI*2/7;
      sphere(t,leafColor,Math.cos(a)*.55*scale,1.9*scale+(i%3)*.22*scale,Math.sin(a)*.55*scale,.72*scale,.78*scale,.7*scale);
    }
    sphere(t,"#3d8651",0,2.25*scale,0,.78*scale,.85*scale,.78*scale);
    return t;
  }

  function addRock(parent,x,z,scale=1,color="#777b70") {
    const r=mesh(new THREE.DodecahedronGeometry(scale,1),mat(color),parent,x,scale*.45,z);
    r.scale.set(1.25,.72,.9);
    r.rotation.set(.12,Math.random()*2,.2);
    return r;
  }

  function addHut(parent,x,z) {
    const hut=group(parent,x,0,z);
    const wood=mat("#79533a"), thatch=mat("#b18a4d");
    mesh(new THREE.BoxGeometry(3.3,1.8,2.8),wood,hut,0,.95,0);
    const roof=mesh(new THREE.ConeGeometry(2.55,1.5,4),thatch,hut,0,2.45,0);
    roof.rotation.y=Math.PI/4;
    mesh(new THREE.BoxGeometry(.85,1.25,.12),mat("#35291f"),hut,0,.65,1.43);
    return hut;
  }

  function addWaterfall(parent) {
    // Tall cliff, broad falling sheet and a deep, visible plunge pool.
    const cliff=mesh(new THREE.BoxGeometry(13,9,3.2),mat("#68766d"),parent,0,4.2,-17);
    for(let i=0;i<13;i++){const cliffRock=addRock(parent,-6+i,-17,.75+(i%3)*.16,"#707d77");cliffRock.position.y+=.45;}
    const water=mesh(new THREE.PlaneGeometry(5.2,8.1,26,36),new THREE.MeshStandardMaterial({color:"#70d6df",roughness:.16,metalness:.12,transparent:true,opacity:.9,side:THREE.DoubleSide}),parent,0,3.6,-15.15);
    water.rotation.x=-.08;
    water.userData.waterfall=true;
    const pool=mesh(new THREE.CircleGeometry(5.1,64),mat("#43b8ca",.16,.2),parent,0,.755,-10.2);
    pool.rotation.x=-Math.PI/2;
    const rim=mesh(new THREE.TorusGeometry(5.15,.28,10,64),mat("#7b8980"),parent,0,.80,-10.2);
    rim.rotation.x=Math.PI/2;
    return water;
  }

  function addRiver(parent) {
    // A continuous, clearly visible riverbed winds from the waterfall to the pond and lower valley.
    const riverPoints=[
      new THREE.Vector3(-.2,.10,-10.4),new THREE.Vector3(1.0,.10,-7.5),
      new THREE.Vector3(3.8,.10,-5.2),new THREE.Vector3(7.5,.10,-3.2),
      new THREE.Vector3(9.2,.10,.2),new THREE.Vector3(7.0,.10,3.6),
      new THREE.Vector3(4.5,.10,7.0),new THREE.Vector3(2.4,.10,12.5)
    ];
    const curve=new THREE.CatmullRomCurve3(riverPoints);
    const bed=mesh(new THREE.TubeGeometry(curve,100,2.05,14,false),mat("#8d9b88"),parent);
    bed.scale.y=.13; bed.position.y=.56;
    const water=mesh(new THREE.TubeGeometry(curve,100,1.22,14,false),new THREE.MeshStandardMaterial({color:"#4bb9c9",roughness:.18,metalness:.14,transparent:true,opacity:.94}),parent);
    water.scale.y=.055; water.position.y=.755; water.userData.river=true;
    // A broad, calm pond branches from the river and is the actual safe-water discovery.
    const pond=mesh(new THREE.CircleGeometry(3.7,64),new THREE.MeshStandardMaterial({color:"#62c9d3",roughness:.16,metalness:.12,transparent:true,opacity:.94,side:THREE.DoubleSide}),parent,8.5,.755,-2.45);
    pond.rotation.x=-Math.PI/2; pond.userData.pond=true;
    const pondRim=mesh(new THREE.TorusGeometry(3.9,.26,10,64),mat("#87968a"),parent,8.5,.80,-2.45);
    pondRim.rotation.x=Math.PI/2;
    for(let i=0;i<18;i++){
      const a=i*Math.PI*2/18, x=8.5+Math.cos(a)*4.2, z=-2.45+Math.sin(a)*4.2;
      const shoreRock=addRock(parent,x,z,.28+(i%3)*.08,"#7b8980"); shoreRock.position.y+=.55;
      if(i%3===0){
        const reed=group(parent,x,.18,z);
        for(let j=0;j<3;j++){const blade=mesh(new THREE.ConeGeometry(.09,.9,5),mat("#5d925b"),reed,(j-1)*.16,.42,0);blade.rotation.z=(j-1)*-.22;}
      }
    }
    // A second shallow channel widens the lower river delta and makes the riverbed read as a real valley feature.
    const branchPoints=[new THREE.Vector3(7.4,.10,2.4),new THREE.Vector3(10.2,.10,4.2),new THREE.Vector3(12.8,.10,6.8),new THREE.Vector3(14.0,.10,10.2)];
    const branchCurve=new THREE.CatmullRomCurve3(branchPoints);
    const branchBed=mesh(new THREE.TubeGeometry(branchCurve,48,1.35,12,false),mat("#8d9b88"),parent);
    branchBed.scale.y=.11; branchBed.position.y=.57;
    const branchWater=mesh(new THREE.TubeGeometry(branchCurve,48,.72,12,false),new THREE.MeshStandardMaterial({color:"#55bfce",roughness:.18,metalness:.12,transparent:true,opacity:.92}),parent);
    branchWater.scale.y=.05; branchWater.position.y=.755; branchWater.userData.river=true;
    // Stepping stones and a small wooden footbridge make the riverbank readable and explorable.
    for(let i=0;i<7;i++){const step=addRock(parent,1.2+i*.65,4.5+Math.sin(i*.8)*.45,.38,"#a1a397");step.position.y+=.55;}
    const bridge=group(parent,4.0,.55,6.0);
    mesh(new THREE.BoxGeometry(4.8,.22,1.35),mat("#9b7650"),bridge,0,.22,0);
    for(const side of [-1,1]) for(let i=0;i<4;i++) cylinder(bridge,"#795a3e",.07,.08,1.0,side*2.15,.75,(i-1.5)*.32);
    for(let i=0;i<16;i++){
      const a=i*2.399, x=-10+Math.cos(a)*(2.3+(i%4)*.5), z=2+Math.sin(a)*(2.2+(i%3)*.55);
      const bloom=group(parent,x,.67,z);
      for(let j=0;j<5;j++){const q=j*Math.PI*2/5;sphere(bloom,j%2?"#f1c0d1":"#f4d58a",Math.cos(q)*.18,.13,Math.sin(q)*.18,.12,.10,.10);}
      sphere(bloom,"#f4d46e",0,.14,0,.10,.10,.10);
    }
  }

  function buildTerrain(level) {
    if (level === 5 && game.level5AtShelter) level = 1;
    const root=group(scene);
    const waterMat=new THREE.MeshStandardMaterial({color:level===4?"#344f58":"#168c9b",roughness:.22,metalness:.18});
    const ocean=mesh(new THREE.PlaneGeometry(320,320,100,100),waterMat,root,0,-.7,0);
    ocean.rotation.x=-Math.PI/2;
    ocean.userData.ocean=true;
    const sandColor=level===4?"#8b8771":level===2?"#7d9869":"#d9c18b";
    const islandScale=level===3?1.85:1;
    const sand=mesh(new THREE.CylinderGeometry(18.5*islandScale,20*islandScale,1.25,112),mat(sandColor),root,0,-.05,0);
    sand.scale.z=.82;
    const grassColor=level===1?"#57905b":level===2?"#2d6945":level===3?"#477d63":level===4?"#455b54":"#507b50";
    const land=mesh(new THREE.CylinderGeometry(14.6*islandScale,15.2*islandScale,.22,112),mat(grassColor),root,0,.62,0);
    land.scale.z=.82;
    const beach=mesh(new THREE.TorusGeometry(17.2*islandScale,.95*islandScale,12,112),mat("#e8d2a0"),root,0,.54,0);
    beach.scale.z=.82;
    beach.rotation.x=Math.PI/2;
    // Soft terrain rises and rock shelves around the island.
    for(let i=0;i<22;i++){
      const a=i*Math.PI*2/22, rad=(13.4+(i%3)*.6)*islandScale;
      const hill=sphere(root,grassColor,Math.cos(a)*rad,.65+Math.sin(i*3)*.24,Math.sin(a)*rad*.82,(1.9+(i%2)*.8)*(level===3?1.25:1),.65+(i%3)*.3,(1.6)*(level===3?1.25:1));
      hill.rotation.y=-a;
    }
    if(level===1){
      for(const [x,z,s] of [[-12,-8,1.1],[11,-9,1],[-13,7,.9],[12,8,1.15],[-7,12,.8],[7,12,.85]]) addPalm(root,x,z,s);
      addHut(root,8,-1);
      for(let i=0;i<18;i++) addRock(root,Math.sin(i*4.2)*13,Math.cos(i*3.4)*10,.28+Math.random()*.45,"#8d8b79");
    } else if(level===2){
      for(let i=0;i<26;i++) addBroadTree(root,Math.sin(i*2.4)*13,Math.cos(i*1.7)*10,.7+(i%4)*.13,i%2?"#2c7045":"#3f8952");
      for(let i=0;i<12;i++) addRock(root,Math.sin(i*2.8)*11,Math.cos(i*2.1)*8,.3,"#737b68");
    } else if(level===3){
      // Forgotten Falls is a much larger valley than the earlier regions.
      for(let i=0;i<42;i++){
        const a=i*2.399, r=14+(i%6)*1.65;
        addBroadTree(root,Math.cos(a)*r,Math.sin(a)*r*.78,.78+(i%3)*.14,i%2?"#397d50":"#4b925c");
      }
      addWaterfall(root);
      addRiver(root);
      // Rocky island outcrop, cave entrance, ledges and scattered boulders.
      for(let i=0;i<11;i++) addRock(root,14.5+Math.cos(i*.57)*3.0,10.0+Math.sin(i*.57)*2.2,.55+(i%3)*.22,"#7d8980");
      const caveArch=group(root,-14.5,.62,10.5);
      for(let i=0;i<7;i++){const a=Math.PI+(i/6)*Math.PI;const x=Math.cos(a)*2.0,y=Math.sin(a)*2.1;mesh(new THREE.DodecahedronGeometry(.85,1),mat("#68736e"),caveArch,x,y,0);}
      mesh(new THREE.CircleGeometry(1.45,32),mat("#263b3b"),caveArch,0,1.0,.12).scale.set(1,1.35,1);
      for(let i=0;i<36;i++){const a=i*2.399,r=13+(i%7)*1.9;const boulder=addRock(root,Math.cos(a)*r,Math.sin(a)*r*.78,.3+(i%4)*.2,"#718078");boulder.position.y+=.52;}
      // A broad fern meadow and scattered flowering banks fill the expanded valley.
      for(let i=0;i<24;i++){
        const a=i*2.399,r=18+(i%5)*1.15,x=Math.cos(a)*r,z=Math.sin(a)*r*.78;
        if(Math.abs(x)<8 && z>-8 && z<10) continue;
        addBroadTree(root,x,z,.42+(i%3)*.08,i%2?"#477e4c":"#5b9655");
      }
      // Ferns and lush plants along the banks.
      for(let i=0;i<48;i++){const a=i*2.17,r=8+(i%6)*1.2,x=Math.cos(a)*r,z=Math.sin(a)*r*.82;const fern=group(root,x,.66,z);for(let j=0;j<5;j++){const leaf=mesh(new THREE.ConeGeometry(.16,1.0,5),mat(j%2?"#4c8d50":"#609c5c"),fern,Math.cos(j*1.25)*.38,.42,Math.sin(j*1.25)*.38);leaf.rotation.z=Math.cos(j*1.25)*.5;leaf.rotation.x=Math.sin(j*1.25)*.35;}}
    } else if(level===4){
      for(let i=0;i<15;i++) addBroadTree(root,Math.sin(i*2.2)*13,Math.cos(i*1.9)*10,.8,"#3b6750");
      const stone=mat("#85877b");
      // Broken low walls and rubble frame the island without crowding the five quest landmarks.
      for(const [x,z,angle] of [[-12,-1,.18],[12,1,-.22],[-1,-12,.08],[1,12,-.12]]){
        const wall=mesh(new THREE.BoxGeometry(3.8,.62,.48),stone,root,x,.82,z);
        wall.rotation.y=angle;
        for(let j=0;j<3;j++){
          const cap=mesh(new THREE.BoxGeometry(.72,.24,.62),mat("#aaa48d"),root,x-1.35+j*1.35,1.20,z);
          cap.rotation.y=angle;
        }
      }
      for(let i=0;i<18;i++) addRock(root,Math.sin(i*2.7)*12.5,Math.cos(i*2.1)*10.2,.28,"#777c72");
    } else {
      // Level 5 keeps the forested valley region, with a distinct natural hollow
      // around the hidden-valley discovery at the north-east side of the island.
      for(let i=0;i<22;i++) addBroadTree(root,Math.sin(i*2.3)*13,Math.cos(i*1.6)*10,.75+(i%3)*.2,"#3b8050");
      for(let i=0;i<14;i++) addRock(root,Math.sin(i*2.8)*12,Math.cos(i*1.9)*9,.4,"#737e6d");
      addHut(root,-8,-5);
      const valleyCenter=new THREE.Vector3(7.0,.66,-6.2);
      const valleyFloor=mesh(new THREE.CircleGeometry(4.35,56),mat("#6f9b60"),root,valleyCenter.x,valleyCenter.y,valleyCenter.z);
      valleyFloor.rotation.x=-Math.PI/2;
      // A broken ring of low hills surrounds the floor, leaving a clear entrance.
      for(let i=0;i<13;i++){
        const a=-Math.PI*.82+i*(Math.PI*1.64/12);
        const x=valleyCenter.x+Math.cos(a)*5.0;
        const z=valleyCenter.z+Math.sin(a)*3.9;
        const hill=sphere(root,i%2?"#527b50":"#638b59",x,1.05,z,1.9,.95,1.45,mat(i%2?"#527b50":"#638b59"));
        hill.rotation.y=-a;
        const rock=addRock(root,x*.98,z*1.01,.46+(i%3)*.12,"#788477");
        rock.position.y+=.56;
      }
      // A winding entry path leads down from the outer forest into the basin.
      for(let i=0;i<8;i++){
        const x=3.1+i*.43, z=-10.3+i*.57;
        const stone=mesh(new THREE.CylinderGeometry(.42,.50,.12,7),mat(i%2?"#879080":"#9a9a83"),root,x,.72,z);
        stone.rotation.y=i*.13;
      }
      // A small stream and pool make the valley feel like a sheltered destination.
      const valleyStream=new THREE.CatmullRomCurve3([
        new THREE.Vector3(5.1,.78,-7.5),new THREE.Vector3(6.0,.78,-6.9),
        new THREE.Vector3(7.2,.78,-6.1),new THREE.Vector3(8.1,.78,-4.9)
      ]);
      mesh(new THREE.TubeGeometry(valleyStream,36,.18,8,false),new THREE.MeshStandardMaterial({color:"#63c2ca",roughness:.2,transparent:true,opacity:.9}),root);
      const valleyPool=mesh(new THREE.CircleGeometry(.9,36),new THREE.MeshStandardMaterial({color:"#69c5cc",roughness:.2,transparent:true,opacity:.92,side:THREE.DoubleSide}),root,8.1,.79,-4.9);
      valleyPool.rotation.x=-Math.PI/2;
      for(let i=0;i<18;i++){
        const a=i*2.399,r=2.5+(i%3)*.55,x=valleyCenter.x+Math.cos(a)*r,z=valleyCenter.z+Math.sin(a)*r*.72;
        const flower=group(root,x,.72,z);
        sphere(flower,i%2?"#eaa5b6":"#f2d27a",0,.18,0,.12,.11,.10,mat(i%2?"#eaa5b6":"#f2d27a"));
        for(let j=0;j<3;j++){
          const leaf=mesh(new THREE.ConeGeometry(.06,.34,5),mat("#4f8c4e"),flower,Math.cos(j*2.1)*.12,.10,Math.sin(j*2.1)*.12);
          leaf.rotation.z=(j-1)*.3;
        }
      }
    }
    // Low grass and flower clusters add scale and life to the ground.
    for(let i=0;i<55;i++){
      const a=i*2.399, r=3.8+(i%9)*1.08, x=Math.cos(a)*r, z=Math.sin(a)*r*.8;
      const flower=group(root,x,.65,z);
      for(let j=0;j<3;j++){
        const blade=mesh(new THREE.ConeGeometry(.09,.52,5),mat(i%2?"#4d8c4c":"#6c9b51"),flower,Math.cos(j*2.1)*.13,.24,Math.sin(j*2.1)*.13);
        blade.rotation.z=(j-1)*.32;
      }
      if(i%5===0) sphere(flower,i%2?"#f3c96e":"#e99da8",0,.48,0,.12,.12,.12);
    }
    return root;
  }

  function makeHuman() {
    const rig=group(scene);
    const style=game.playerStyle||{};
    const skin=mat(style.skin||"#c98f6b"), hair=mat(style.hair||"#38251e");
    const outfit=game.playerOutfit||{};
    // Use the exact colours selected in the closet. Icons identify clothing type;
    // they must never override the player's chosen fabric colour.
    const topColor=style.top||"#6f9876";
    const bottomColor=style.bottom||"#40566b";
    const shoeColor=style.shoes||"#f0e8d5";
    const top=mat(topColor), bottom=mat(bottomColor), shoes=mat(shoeColor);
    const body=group(rig,0,0,0);
    const torso=mesh(new THREE.CapsuleGeometry(.43,.72,6,12),top,body,0,1.35,0);
    torso.scale.set(.9,1.05,.58);
    const fullOutfit = outfit.fullOutfit || "";
    if (fullOutfit === "dress") {
      mesh(new THREE.CylinderGeometry(.30,.62,.78,12),top,body,0,.91,.015);
      mesh(new THREE.BoxGeometry(.16,.32,.035),mat("#f5e8df"),body,0,1.52,.265);
    } else if (fullOutfit === "suit") {
      mesh(new THREE.BoxGeometry(.12,.48,.035),mat("#f4eee2"),body,0,1.42,.265);
      mesh(new THREE.ConeGeometry(.075,.35,4),mat("#9b3947"),body,0,1.43,.30);
      const lapelMat=mat("#252b38");
      const lapelL=mesh(new THREE.BoxGeometry(.13,.48,.045),lapelMat,body,-.17,1.53,.255); lapelL.rotation.z=-.28;
      const lapelR=mesh(new THREE.BoxGeometry(.13,.48,.045),lapelMat,body,.17,1.53,.255); lapelR.rotation.z=.28;
    }
    const neck=cylinder(body,style.skin||"#c98f6b",.13,.14,.22,0,1.98,0,skin);
    sphere(body,style.skin||"#c98f6b",0,2.35,0,.37,.46,.34,skin);
    // ears, nose, eyes and brows
    sphere(body,style.skin||"#c98f6b",-.38,2.36,0,.075,.12,.08,skin);
    sphere(body,style.skin||"#c98f6b",.38,2.36,0,.075,.12,.08,skin);
    // Eyes, brows, nose and a small smile are modelled on the front of the face.
    for(const side of [-1,1]){
      sphere(body,"#fffaf0",side*.13,2.42,.307,.052,.066,.027);
      sphere(body,game.playerStyle?.eye||"#49352d",side*.13,2.415,.333,.025,.039,.018);
      sphere(body,"#ffffff",side*.14,2.435,.349,.009,.012,.008);
      const brow=mesh(new THREE.BoxGeometry(.105,.018,.018),mat(style.hair||"#38251e"),body,side*.13,2.535,.30);
      brow.rotation.z=side*.10;
    }
    sphere(body,style.skin||"#c98f6b",0,2.31,.355,.047,.065,.05,skin);
    const smile=mesh(new THREE.TorusGeometry(.065,.012,6,14,Math.PI),mat("#8e5147"),body,0,2.205,.333);
    smile.rotation.z=Math.PI;
    const hairCap=sphere(body,style.hair||"#38251e",0,2.65,-.015,.39,.24,.37,hair);
    hairCap.scale.set(1.04,.8,1);
    const hairstyle=game.playerStyle?.hairStyle||"long";
    if(hairstyle!=="short"){
      sphere(body,style.hair||"#38251e",-.32,2.38,-.02,.13,.42,.16,hair);
      sphere(body,style.hair||"#38251e",.32,2.38,-.02,.13,.42,.16,hair);
    }
    if(hairstyle==="ponytail"){
      const pony=sphere(body,style.hair||"#38251e",.02,2.34,-.37,.16,.34,.17,hair); pony.rotation.x=-.25;
    } else if(hairstyle==="curly"){
      for(let i=0;i<9;i++){
        const a=(i/9)*Math.PI*2;
        sphere(body,style.hair||"#38251e",Math.cos(a)*.31,2.68+Math.sin(a)*.12,Math.sin(a)*.22,.13,.13,.13,hair);
      }
    } else if(hairstyle==="braid"){
      for(let i=0;i<5;i++) sphere(body,style.hair||"#38251e",.34,2.30-i*.12,-.08,.085,.10,.09,hair);
    }
    const armL=group(body,-.48,1.72,0), armR=group(body,.48,1.72,0);
    for(const arm of [armL,armR]){
      cylinder(arm,style.top||"#6f9876",.13,.17,.65,0,-.34,0,top);
      sphere(arm,style.skin||"#c98f6b",0,-.7,0,.13,.14,.13,skin);
    }
    const legL=group(body,-.2,.82,0), legR=group(body,.2,.82,0);
    const legMaterial = fullOutfit === "dress" ? mat("#c98f69") : bottom;
    for(const leg of [legL,legR]){
      cylinder(leg,fullOutfit === "dress" ? (style.skin||"#c98f69") : (style.bottom||"#40566b"),.16,.19,.68,0,-.28,0,legMaterial);
      mesh(new THREE.BoxGeometry(.29,.16,.46),shoes,leg,0,-.68,.1);
    }
    // Backpack uses the selected bag slot if equipped.
    if(game.playerOutfit && game.playerOutfit.bag && game.playerOutfit.bag!=="none"){
      const pack=mesh(new THREE.BoxGeometry(.48,.58,.25),mat("#986b43"),body,0,1.42,-.39);
      pack.rotation.x=-.08;
    }
    rig.userData.parts={body,armL,armR,legL,legR};
    return rig;
  }

  function makePet(petData = game.pet, appearance = null, accessorySlot = 0) {
    const id = petData?.id || "dog";
    const rig = group(scene);
    const animal = group(rig);
    const defaults = {
      dog: "#bd8958", cat: "#8c8c88", bunny: "#e7dfd2",
      bird: "#dcae45", hamster: "#d9a66d"
    };
    const savedAppearance = appearance || game.petAppearance || game.pet?.appearance || {};
    const resolvePetColour = (candidate, fallback) => {
      if (typeof candidate === "string" && candidate.trim()) return candidate.trim();
      if (candidate && typeof candidate === "object") {
        const value = candidate.value || candidate.hex || candidate.color || candidate.colour;
        if (typeof value === "string" && value.trim()) return value.trim();
        if (typeof candidate.name === "string") {
          const match = [...colours, ...eyeColours].find(c => c.name.toLowerCase() === candidate.name.toLowerCase());
          if (match) return match.value;
        }
      }
      return fallback;
    };
    const selectedCoat = resolvePetColour(
      savedAppearance.colour ?? savedAppearance.coat ?? savedAppearance.coatColor ?? game.mainColour,
      defaults[id] || defaults.dog
    );
    const selectedMarking = resolvePetColour(
      savedAppearance.marking ?? savedAppearance.markingColour ?? game.markingColour,
      "#987052"
    );
    const selectedEye = resolvePetColour(
      savedAppearance.eye ?? savedAppearance.eyeColour ?? game.eyeColour,
      "#654321"
    );
    const fur = mat(selectedCoat), marking = mat(selectedMarking), eye = mat(selectedEye);
    const cream = mat("#fff1dc"), innerEar = mat("#d99198"), nose = mat("#49312d");
    const legs = [], wings = [];

    function coatSphere(x,y,z,sx,sy,sz,material=fur) {
      return sphere(animal, material.color, x,y,z,sx,sy,sz,material);
    }
    function limb(x,z, length=.48, width=.13) {
      const leg = group(animal,x,.48,z);
      cylinder(leg,selectedCoat,width*.78,width,length,0,-length*.34,0,fur);
      sphere(leg,selectedCoat,0,-length*.72,.055,width*1.18,.09,width*1.45,fur);
      legs.push(leg);
      return leg;
    }
    function eyes(y,z,spread=.17,size=.045) {
      for (const side of [-1,1]) {
        sphere(animal,"#fffaf0",side*spread,y,z,size*1.8,size*2.1,.025,cream);
        sphere(animal,selectedEye,side*spread,y,z+.025,size,size*1.2,.022,eye);
        sphere(animal,"#ffffff",side*spread-.009,y+.012,z+.046,.009,.012,.008,mat("#ffffff"));
      }
    }
    function whiskers(y,z,spread=.27) {
      for (const side of [-1,1]) for (let i=0;i<3;i++) {
        const w=mesh(new THREE.CylinderGeometry(.006,.006,.34,5),mat("#b9aa9b"),animal,side*(spread+.13),y+(i-1)*.045,z);
        w.rotation.z=side*(.9+(i-1)*.12); w.rotation.x=.28;
      }
    }

    if (id === "hamster") {
      // Rounded hamster silhouette, cheek pouches, small ears and short legs.
      coatSphere(0,.73,0,.66,.61,.69);
      coatSphere(0,1.18,.37,.46,.42,.43);
      for (const side of [-1,1]) {
        sphere(animal,selectedMarking,side*.29,1.29,.62,.19,.21,.07,marking);
        sphere(animal,selectedCoat,side*.28,1.53,.39,.115,.10,.10,fur);
        sphere(animal,"#e9a9a9",side*.28,1.53,.455,.062,.055,.026,innerEar);
      }
      eyes(1.31,.755,.17,.04);
      sphere(animal,"#df898e",0,1.17,.81,.065,.045,.045,mat("#df898e"));
      whiskers(1.11,.73,.31);
      for (const x of [-.37,.37]) for (const z of [-.35,.39]) {
        sphere(animal,selectedCoat,x,.31,z,.17,.12,.19,fur);
      }
      sphere(animal,selectedCoat,0,.57,-.69,.12,.12,.13,fur);
    } else if (id === "dog") {
      // Canine torso, chest, muzzle, floppy ears, paws and curved tail.
      coatSphere(0,.78,-.02,.58,.49,.91);
      coatSphere(0,1.24,.43,.43,.43,.43);
      coatSphere(0,1.08,.78,.27,.20,.28,cream);
      sphere(animal,selectedMarking,0,.82,.86,.23,.22,.07,marking);
      for (const side of [-1,1]) {
        const ear=sphere(animal,selectedMarking,side*.34,1.27,.24,.16,.32,.14,marking);
        ear.rotation.z=side*.35;
      }
      eyes(1.32,.79,.16,.043);
      sphere(animal,"#30221f",0,1.12,1.02,.075,.06,.055,nose);
      whiskers(1.03,.91,.22);
      for (const x of [-.39,.39]) for (const z of [-.57,.55]) limb(x,z,.55,.14);
      const tail=mesh(new THREE.TorusGeometry(.28,.085,8,20,Math.PI*1.15),fur,animal,0,.92,-.91);
      tail.rotation.y=Math.PI/2; animal.userData.tail=tail;
    } else if (id === "cat") {
      // Feline torso, pointed ears, cheek muzzle, whiskers and upright curling tail.
      coatSphere(0,.77,-.02,.54,.48,.83);
      coatSphere(0,1.22,.43,.39,.40,.39);
      for (const side of [-1,1]) {
        const ear=mesh(new THREE.ConeGeometry(.19,.48,5),fur,animal,side*.25,1.62,.42);
        ear.rotation.z=side*.16;
        const inner=sphere(animal,"#d99198",side*.25,1.62,.485,.09,.25,.025,innerEar);
        inner.rotation.z=side*.16;
      }
      coatSphere(0,1.06,.77,.23,.16,.19,cream);
      eyes(1.31,.75,.15,.043);
      sphere(animal,"#d58a91",0,1.10,.94,.055,.045,.035,innerEar);
      whiskers(1.04,.83,.22);
      for (const x of [-.36,.36]) for (const z of [-.53,.52]) limb(x,z,.54,.12);
      const tail=mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
        new THREE.Vector3(0,.72,-.75),new THREE.Vector3(.22,1.0,-1.0),
        new THREE.Vector3(.28,1.42,-1.03),new THREE.Vector3(.08,1.55,-.92)
      ]),24,.085,8,false),fur,animal);
      animal.userData.tail=tail;
    } else if (id === "bunny") {
      // Soft rabbit body, tall independently coloured ears, strong hind feet.
      coatSphere(0,.75,-.02,.57,.52,.72);
      coatSphere(0,1.22,.43,.40,.39,.39);
      for (const side of [-1,1]) {
        const ear=sphere(animal,selectedCoat,side*.19,1.82,.36,.145,.60,.13,fur);
        ear.rotation.z=side*.12;
        const inner=sphere(animal,"#d99198",side*.19,1.83,.455,.075,.46,.025,innerEar);
        inner.rotation.z=side*.12;
        sphere(animal,selectedMarking,side*.29,1.32,.68,.12,.13,.045,marking);
      }
      coatSphere(0,1.08,.75,.25,.17,.18,cream);
      eyes(1.31,.75,.15,.043);
      sphere(animal,"#d58a91",0,1.11,.91,.05,.04,.035,innerEar);
      for (const x of [-.40,.40]) {
        limb(x,-.48,.48,.16); limb(x,.48,.42,.12);
      }
      sphere(animal,"#fff8ed",0,.65,-.72,.20,.20,.20,cream);
    } else if (id === "bird") {
      // Feathered bird with breast, wings, layered tail, beak and feet.
      coatSphere(0,1.03,0,.47,.62,.40);
      coatSphere(0,1.53,.10,.34,.34,.32);
      coatSphere(0,.90,.34,.31,.39,.18,cream);
      for (const side of [-1,1]) {
        const wing=sphere(animal,selectedMarking,side*.40,1.05,-.02,.15,.43,.31,marking);
        wing.rotation.z=side*.20; wings.push(wing);
        sphere(animal,"#fffaf0",side*.13,1.58,.38,.085,.09,.035,cream);
        sphere(animal,selectedEye,side*.13,1.58,.41,.038,.048,.022,eye);
        const foot=mesh(new THREE.CylinderGeometry(.035,.045,.28,7),mat("#d58b45"),animal,side*.15,.31,.10);
        foot.rotation.z=.15;
      }
      const beak=mesh(new THREE.ConeGeometry(.14,.34,5),mat("#e5a03e"),animal,0,1.48,.47);
      beak.rotation.x=Math.PI/2;
      for(let i=0;i<3;i++){
        const feather=mesh(new THREE.ConeGeometry(.10,.55,5),i%2?fur:marking,animal,(-1+i)*.13,.90,-.49-i*.08);
        feather.rotation.x=-Math.PI/2.4; feather.rotation.z=(i-1)*.15;
      }
      animal.userData.wings=wings;
    }

    // Render the accessories actually equipped on this pet in the 3D scene.
    const equipped = game.equippedAccessories?.[accessorySlot] || [];
    const accessoryMat = colour => mat(colour);
    const gold = accessoryMat("#e7b94f"), pink = accessoryMat("#e98fa9"), green = accessoryMat("#72a96b");
    const headY = id === "bird" ? 1.92 : id === "bunny" ? 2.30 : 1.78;
    const headZ = id === "bird" ? .05 : .34;
    for (const accessoryId of equipped) {
      if (accessoryId === "flower-crown" || accessoryId === "sunny-bloom") {
        const crown = mesh(new THREE.TorusGeometry(.34,.055,7,24), green, animal, 0, headY-.10, headZ);
        crown.rotation.x = Math.PI/2;
        for (let i=0;i<5;i++) {
          const a=i*Math.PI*2/5;
          sphere(animal, accessoryId === "sunny-bloom" ? "#f4c84b" : "#ed9ab7", Math.cos(a)*.32, headY+.02, headZ+Math.sin(a)*.22, .105,.105,.08, accessoryId === "sunny-bloom" ? gold : pink);
        }
        sphere(animal,"#f8d95c",0,headY+.02,headZ,.10,.10,.09,gold);
      } else if (accessoryId === "soft-bow" || accessoryId === "star-clip") {
        const x = .30;
        if (accessoryId === "soft-bow") {
          const left=sphere(animal,"#e98fa9",x-.10,headY,headZ,.15,.10,.07,pink); left.rotation.z=.45;
          const right=sphere(animal,"#e98fa9",x+.10,headY,headZ,.15,.10,.07,pink); right.rotation.z=-.45;
          sphere(animal,"#f5c5d2",x,headY,headZ+.04,.07,.07,.06,pink);
        } else {
          for(let i=0;i<5;i++){const a=i*Math.PI*2/5;sphere(animal,"#f4ce55",x+Math.cos(a)*.09,headY+Math.sin(a)*.09,headZ+.04,.07,.07,.05,gold);}
        }
      } else if (accessoryId === "explorer-hat" || accessoryId === "tiny-crown") {
        if (accessoryId === "explorer-hat") {
          mesh(new THREE.CylinderGeometry(.40,.43,.12,16),accessoryMat("#9b7046"),animal,0,headY+.03,headZ);
          mesh(new THREE.CylinderGeometry(.27,.31,.28,12),accessoryMat("#b78a56"),animal,0,headY+.20,headZ);
        } else {
          mesh(new THREE.TorusGeometry(.27,.045,6,16),gold,animal,0,headY+.03,headZ);
          for(let i=0;i<5;i++){const x=(i-2)*.12;mesh(new THREE.ConeGeometry(.075,.20,5),gold,animal,x,headY+.17,headZ);}
        }
      } else if (["forest-bandana","bell-collar","little-scarf","flower-necklace","pearl-collar","cloud-scarf","crystal-pendant","rainbow-bandana","lavender-bell"].includes(accessoryId)) {
        const collarY = id === "bird" ? .88 : .91;
        const collar = mesh(new THREE.TorusGeometry(.34,.065,7,24), accessoryMat(accessoryId === "bell-collar" ? "#d7b54b" : accessoryId === "flower-necklace" ? "#e99ab1" : "#8aaf82"), animal,0,collarY,.35);
        collar.rotation.x=Math.PI/2;
        if(accessoryId === "bell-collar") sphere(animal,"#e9bd4d",0,collarY-.10,.68,.10,.12,.09,gold);
        if(accessoryId === "flower-necklace") sphere(animal,"#efb0c2",0,collarY-.10,.68,.12,.12,.08,pink);
      } else if (accessoryId === "mini-backpack") {
        const pack=mesh(new THREE.BoxGeometry(.48,.48,.22),accessoryMat("#9a7654"),animal,0,.88,-.72);
        pack.rotation.x=-.12;
      } else if (accessoryId === "little-wings" || accessoryId === "feather-wings") {
        const wingColour = accessoryId === "feather-wings" ? "#f4e6cf" : "#e9e5f4";
        for(const side of [-1,1]) { const wing=sphere(animal,wingColour,side*.52,1.05,-.35,.20,.36,.12,accessoryMat(wingColour)); wing.rotation.z=side*.35; }
      } else {
        const data = accessories.find(item => item.id === accessoryId);
        if (data?.category === "Head") {
          const headAccessoryColour = accessoryId === "mossy-hood" ? "#668b58" : accessoryId === "moonflower-crown" ? "#a99ad5" : "#d98da9";
          const headAccessoryMat = accessoryMat(headAccessoryColour);
          mesh(new THREE.TorusGeometry(.29,.045,6,18),headAccessoryMat,animal,0,headY+.02,headZ);
          if (accessoryId === "mossy-hood") sphere(animal,headAccessoryColour,0,headY-.03,headZ-.13,.32,.31,.30,headAccessoryMat);
          else for(let i=0;i<3;i++) sphere(animal,headAccessoryColour,(i-1)*.17,headY+.13,headZ,.09,.11,.08,headAccessoryMat);
        } else if (data?.category === "Special") {
          const packColour = accessoryId === "acorn-backpack" ? "#9a7654" : accessoryId === "sunset-cape" ? "#d98262" : "#8c9ab4";
          const pack=mesh(new THREE.BoxGeometry(.46,.48,.20),accessoryMat(packColour),animal,0,.91,-.70);
          pack.rotation.x=-.10;
        }
      }
    }

    animal.userData.legs=legs;
    rig.userData.animal=animal;
    rig.userData.species=id;
    return rig;
  }

  function objectModel(type,parent) {
    if (type === "shelterHome") type = "shelter";
    const g=group(parent);
    if(type==="wood"){
      const log=mesh(new THREE.CylinderGeometry(.14,.17,1.25,10),mat("#8b603c"),g,0,.18,0);
      log.rotation.z=Math.PI/2;
      sphere(g,"#b68b5a",-.63,.18,0,.15,.16,.16);
    } else if(type==="leaves"||type==="flower"){
      for(let i=0;i<5;i++){
        const leaf=sphere(g,type==="flower"?"#4d9250":"#4f8d45",Math.cos(i*1.25)*.25,.2+Math.sin(i)*.06,Math.sin(i*1.25)*.25,.3,.07,.13,mat(type==="flower"?"#4d9250":"#4f8d45"));
        leaf.rotation.y=i*1.25;
      }
      if(type==="flower") sphere(g,"#f1c45c",0,.4,0,.12,.12,.12,mat("#f1c45c"));
    } else if(type==="stones"||type==="rock"){
      mesh(new THREE.DodecahedronGeometry(.4,1),mat("#8b938c"),g,0,.3,0).scale.set(1.2,.8,.9);
    } else if(type.includes("map")){
      const page=mesh(new THREE.BoxGeometry(.48,.06,.62),mat("#e9d9a8"),g,0,.4,0);
      page.rotation.y=-.35;
      mesh(new THREE.BoxGeometry(.08,.07,.64),mat("#84563c"),g,-.19,.43,0).rotation.y=-.35;
    } else if(type==="journal"){
      const plinth=mat("#777d73"), worn=mat("#aaa58f"), paper=mat("#e8d9ad"), leather=mat("#76523d");
      mesh(new THREE.BoxGeometry(1.05,.22,.92),plinth,g,0,.12,0);
      mesh(new THREE.BoxGeometry(.78,.72,.68),worn,g,0,.57,0);
      mesh(new THREE.BoxGeometry(.66,.09,.56),leather,g,0,.98,.02);
      const left=mesh(new THREE.BoxGeometry(.30,.055,.48),paper,g,-.15,1.04,.02); left.rotation.z=-.12;
      const right=mesh(new THREE.BoxGeometry(.30,.055,.48),paper,g,.15,1.04,.02); right.rotation.z=.12;
      mesh(new THREE.BoxGeometry(.035,.025,.42),mat("#8e7754"),g,0,1.075,.02);
      for(let i=0;i<3;i++){
        mesh(new THREE.BoxGeometry(.18,.012,.012),mat("#9a8864"),g,-.15,1.075,-.10+i*.11);
        mesh(new THREE.BoxGeometry(.18,.012,.012),mat("#9a8864"),g,.15,1.075,-.10+i*.11);
      }
    } else if(type==="water"||type==="safeWater"||type==="waterfall"){
      const drop=sphere(g,"#64cfe0",0,.35,0,.25,.38,.25,mat("#64cfe0",.15,.15));
    } else if(type==="forest"||type==="clearing"){
      addBroadTree(g,0,0,.65,"#3d8050");
    } else if(type==="twilight"){
      // A moonlit trail marker: curved stepping stones, two lanterns and a broken arch.
      const pathStone=mat("#777e78"), dark=mat("#4c5b56"), glow=mat("#d9c18a",.35,.15);
      for(let i=0;i<7;i++){
        const x=Math.sin(i*.48)*.58, z=(i-3)*.42;
        const step=mesh(new THREE.CylinderGeometry(.30,.36,.10,7),i%2?pathStone:dark,g,x,.10,z);
        step.rotation.y=i*.16;
      }
      for(const x of [-.95,.95]){
        mesh(new THREE.BoxGeometry(.18,1.55,.18),pathStone,g,x,.82,-.35);
        mesh(new THREE.BoxGeometry(.28,.16,.28),pathStone,g,x,1.62,-.35);
        const lamp=mesh(new THREE.BoxGeometry(.25,.32,.25),glow,g,x,1.38,-.35);
        sphere(g,"#e4c98b",x,1.39,-.35,.09,.10,.09,glow);
      }
      mesh(new THREE.BoxGeometry(2.0,.18,.20),pathStone,g,0,1.72,-.35);
      const broken=mesh(new THREE.BoxGeometry(.20,.78,.20),pathStone,g,.78,2.08,-.35); broken.rotation.z=-.30;
      addBroadTree(g,-1.55,0,.42,"#526d61");
      addBroadTree(g,1.55,.45,.38,"#526d61");
    } else if(type==="cemetery"){
      // A quiet forgotten cemetery: several individual grave markers, stone edging and lanterns.
      const earth=mat("#777b68"), stone=mat("#aaa99a"), darkStone=mat("#777d78"), moss=mat("#526e52");
      const base=mesh(new THREE.CylinderGeometry(2.05,2.2,.16,32),earth,g,0,.08,0);
      base.scale.z=.78;
      const graves=[[-1.05,-.72],[-.05,-.92],[.98,-.65],[-.72,.48],[.48,.58]];
      graves.forEach(([x,z],i)=>{
        const mound=sphere(g,"#626f59",x,.17,z,.42,.13,.68,moss);
        mound.rotation.y=(i%2)*.12;
        const marker=mesh(new THREE.BoxGeometry(.48,.72,.16),i%2?stone:darkStone,g,x,.53,z-.38);
        marker.rotation.z=(i%2?.05:-.035);
        sphere(g,i%2?"#aaa99a":"#858c83",x,.91,z-.38,.24,.20,.09,i%2?stone:darkStone);
        // Small carved cross on each marker.
        mesh(new THREE.BoxGeometry(.07,.34,.035),mat("#d0cbb8"),g,x,.57,z-.285);
        mesh(new THREE.BoxGeometry(.25,.065,.035),mat("#d0cbb8"),g,x,.63,z-.285);
      });
      const fence=mat("#716f62");
      for(const x of [-1.75,1.75]) for(const z of [-1.15,1.15]) cylinder(g,"#77766b",.09,.12,.72,x,.38,z,fence,8);
      for(const z of [-1.15,1.15]) mesh(new THREE.BoxGeometry(3.5,.10,.10),fence,g,0,.58,z);
      for(const x of [-1.75,1.75]) mesh(new THREE.BoxGeometry(.10,.10,2.3),fence,g,x,.58,0);
      for(const x of [-1.55,1.55]){
        const lantern=group(g,x,.72,0);
        mesh(new THREE.BoxGeometry(.18,.24,.18),mat("#4e554e"),lantern,0,.18,0);
        sphere(lantern,"#e9c979",0,.20,0,.07,.09,.07,mat("#e9c979",.35,.1));
      }
      sphere(g,"#526f53",-1.65,.20,.55,.24,.10,.28,moss);
      sphere(g,"#526f53",1.62,.20,-.50,.24,.10,.28,moss);
    } else if(type==="idol"){
      // A carved ancient guardian idol on a stepped stone pedestal.
      const stone=mat("#85877d"), worn=mat("#a49d83"), shadow=mat("#414b47"), gold=mat("#b69a5b",.48,.28);
      mesh(new THREE.BoxGeometry(1.65,.28,1.35),stone,g,0,.16,0);
      mesh(new THREE.BoxGeometry(1.25,.24,1.02),worn,g,0,.40,0);
      mesh(new THREE.CylinderGeometry(.56,.72,.34,8),stone,g,0,.68,0);
      mesh(new THREE.CylinderGeometry(.48,.58,.92,8),worn,g,0,1.30,0);
      sphere(g,"#a49d83",0,1.98,0,.55,.53,.48,worn);
      // Crown-like carved points and broad ears make the statue read as an idol.
      for(const side of [-1,1]){
        const ear=mesh(new THREE.ConeGeometry(.22,.55,5),stone,g,side*.55,2.08,0);
        ear.rotation.z=side*.30;
        sphere(g,"#414b47",side*.20,2.04,.414,.07,.09,.035,shadow);
        const arm=mesh(new THREE.BoxGeometry(.24,.72,.30),stone,g,side*.55,1.35,.08);
        arm.rotation.z=side*.22;
      }
      mesh(new THREE.BoxGeometry(.30,.08,.045),shadow,g,0,1.80,.47);
      mesh(new THREE.TorusGeometry(.39,.055,7,24),gold,g,0,1.24,.05).rotation.x=Math.PI/2;
      sphere(g,"#b69a5b",0,1.55,.49,.10,.10,.06,gold);
      // A few rune stones around the pedestal.
      for(let i=0;i<4;i++){
        const a=i*Math.PI/2+.35;
        const rune=mesh(new THREE.DodecahedronGeometry(.18,0),stone,g,Math.cos(a)*1.25,.20,Math.sin(a)*1.05);
        rune.scale.y=1.4;
      }
    } else if(type==="valley"){
      // A small, clearly visible hidden valley: lowered grassy basin, sloping ridges,
      // exposed rock shelves, a narrow winding path and a few secluded plants.
      const meadow=mat("#638d58"), meadowLight=mat("#82a96a"), ridge=mat("#68786b"), ridgeTop=mat("#87917d");
      const basin=mesh(new THREE.CylinderGeometry(2.55,2.9,.16,40),meadow,g,0,.10,0);
      basin.scale.z=.78;
      const inner=mesh(new THREE.CircleGeometry(2.28,48),meadowLight,g,0,.19,0);
      inner.rotation.x=-Math.PI/2;
      // Low enclosing slopes make the valley read as a dip between two ridges.
      for(let side=0;side<2;side++){
        const x=side===0?-2.55:2.55;
        const slope=mesh(new THREE.ConeGeometry(2.05,1.65,9),ridge,g,x,.78,0);
        slope.scale.set(1.15,1,.78);
        slope.rotation.z=side===0?-.10:.10;
        const cap=mesh(new THREE.ConeGeometry(1.82,.42,9),ridgeTop,g,x,1.45,0);
        cap.scale.z=.82;
      }
      // A shallow winding trail descends into the basin.
      for(let i=0;i<6;i++){
        const z=1.95-i*.68, x=1.35-i*.34;
        const step=mesh(new THREE.CylinderGeometry(.34,.42,.10,7),i%2?ridgeTop:ridge,g,x,.25,z);
        step.rotation.y=.18*i;
      }
      // Small streamlet and a natural pool in the lowest part of the valley.
      const stream=mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.55,.22,-1.7),new THREE.Vector3(-.9,.22,-.85),
        new THREE.Vector3(.15,.22,-.25),new THREE.Vector3(.72,.22,.9)
      ]),32,.13,8,false),new THREE.MeshStandardMaterial({color:"#62bdc4",roughness:.22,metalness:.08}),g);
      const pool=mesh(new THREE.CircleGeometry(.55,28),new THREE.MeshStandardMaterial({color:"#70cbd0",roughness:.2,transparent:true,opacity:.9,side:THREE.DoubleSide}),g,.55,.24,.82);
      pool.rotation.x=-Math.PI/2;
      for(const [x,z] of [[-1.65,-.75],[1.55,-1.25],[-1.15,1.25],[1.55,.9]]){
        addBroadTree(g,x,z,.34,"#477c4d");
        // Keep trunks and foliage inside the valley boundary.
      }
      for(let i=0;i<11;i++){
        const a=i*2.399, x=Math.cos(a)*1.75, z=Math.sin(a)*1.35;
        const bloom=group(g,x,.24,z);
        sphere(bloom,i%2?"#e9a5b4":"#f1d17b",0,.18,0,.10,.10,.10);
        for(let j=0;j<3;j++){
          const leaf=mesh(new THREE.ConeGeometry(.055,.30,5),mat("#4d8a50"),bloom,Math.cos(j*2.1)*.10,.10,Math.sin(j*2.1)*.10);
          leaf.rotation.z=(j-1)*.35;
        }
      }
    } else if(type==="bellTower"){
      // A separate ruined bell tower landmark, with its own raised platform and hanging bell.
      const stone=mat("#85877b"), edge=mat("#aaa48d"), dark=mat("#414b47"), bronze=mat("#b89a59",.42,.32);
      mesh(new THREE.CylinderGeometry(2.05,2.25,.22,8),stone,g,0,.12,0);
      mesh(new THREE.BoxGeometry(1.55,.30,1.45),edge,g,0,.36,0);
      for(const [x,z] of [[-.62,-.55],[.62,-.55],[-.62,.55],[.62,.55]]){
        mesh(new THREE.BoxGeometry(.22,2.25,.22),stone,g,x,1.60,z);
        mesh(new THREE.BoxGeometry(.30,.12,.30),edge,g,x,2.77,z);
      }
      mesh(new THREE.BoxGeometry(1.75,.22,1.65),stone,g,0,2.82,0);
      const roof=mesh(new THREE.ConeGeometry(1.25,.92,4),edge,g,0,3.38,0); roof.rotation.y=Math.PI/4;
      mesh(new THREE.CylinderGeometry(.07,.09,.68,10),dark,g,0,2.08,.02);
      const bell=mesh(new THREE.CylinderGeometry(.16,.30,.42,12),bronze,g,0,1.88,.02); bell.scale.y=.85;
      sphere(g,"#d5b66c",0,1.64,.02,.07,.07,.07,bronze);
      // Broken stone steps and scattered masonry make the structure look abandoned.
      for(let i=0;i<3;i++) mesh(new THREE.BoxGeometry(1.15-i*.18,.12,.34),stone,g,0,.18+i*.12,1.05+i*.22);
      for(const [x,z] of [[-1.45,.85],[1.38,-.92],[-1.3,-1.1]]){
        const rubble=mesh(new THREE.DodecahedronGeometry(.28,0),edge,g,x,.22,z); rubble.scale.set(1.3,.75,1);
      }
    } else if(type==="cave"){
      addRock(g,0,0,.65,"#7d8379");
    } else if(type==="shelter"){
      const postMat=mat("#9b7047"), roofMat=mat("#d0a45d");
      mesh(new THREE.BoxGeometry(.12,.9,.12),postMat,g,-.42,.48,0);
      mesh(new THREE.BoxGeometry(.12,.9,.12),postMat,g,.42,.48,0);
      const roof=mesh(new THREE.ConeGeometry(.72,.52,4),roofMat,g,0,1.08,0);
      roof.rotation.y=Math.PI/4;
      sphere(g,"#fff0ad",0,.16,0,.16,.12,.16);
    } else {
      sphere(g,"#d5b878",0,.3,0,.28,.28,.28,mat("#d5b878"));
    }
    return g;
  }

  function addWorldInteractives(level) {
    interactiveMeshes=[];
    const buttons=[...document.querySelectorAll("#play-world .world-object")];
    buttons.forEach(button=>{
      const left=parseFloat(button.style.left)||50, top=parseFloat(button.style.top)||50;
      const x=(left-50)*((level===3||level===4)?.50:.28), z=(top-50)*((level===3||level===4)?.43:.25);
      const holder=group(worldRoot,x,.72,z);
      const type=button.dataset.type||"";
      const model=objectModel(type,holder);
      holder.userData.button=button;
      holder.userData.baseY=.72;
      interactiveMeshes.push(holder);
      const glow=mesh(new THREE.CircleGeometry(.55,24),new THREE.MeshBasicMaterial({color:"#fff0ad",transparent:true,opacity:.2,side:THREE.DoubleSide}),holder,0,.02,0);
      glow.rotation.x=-Math.PI/2;
    });
  }

  function addAtmosphere(level) {
    if (level === 5 && game.level5AtShelter) level = 1;
    const sky=level===4?"#9aa4a2":level===3?"#9bc6d0":"#a8d5e7";
    scene.background=new THREE.Color(sky);
    scene.fog=new THREE.Fog(sky,34,92);
    const sun= new THREE.Mesh(new THREE.SphereGeometry(2.2,24,16),new THREE.MeshBasicMaterial({color:level===4?"#e8d7b0":"#fff0c7"}));
    sun.position.set(-18,22,-30);
    worldRoot.add(sun);
    // Floating motes/pollen are intentionally subtle.
    const points=[];
    for(let i=0;i<150;i++) points.push((Math.random()-.5)*42,Math.random()*9+1,(Math.random()-.5)*42);
    const geo=new THREE.BufferGeometry();
    geo.setAttribute("position",new THREE.Float32BufferAttribute(points,3));
    const particles=new THREE.Points(geo,new THREE.PointsMaterial({color:"#fff1c7",size:.07,transparent:true,opacity:.55}));
    worldRoot.add(particles);
    worldRoot.userData.particles=particles;
  }

  function resizeRenderer() {
    const host=document.getElementById("play-world");
    if(!renderer||!host)return;
    const w=Math.max(1,host.clientWidth),h=Math.max(1,host.clientHeight);
    renderer.setSize(w,h,false);
    camera.aspect=w/h;
    camera.updateProjectionMatrix();
  }

  function setupCanvasControls(canvas) {
    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();

    canvas.addEventListener("pointerdown", e => {
      pointerDown = true;
      pointerDragged = false;
      pointerX = pointerStartX = e.clientX;
      pointerY = pointerStartY = e.clientY;
      canvas.setPointerCapture?.(e.pointerId);
    });

    canvas.addEventListener("pointermove", e => {
      if (!pointerDown) return;
      const dx = e.clientX - pointerX;
      const dy = e.clientY - pointerY;
      if (Math.hypot(e.clientX - pointerStartX, e.clientY - pointerStartY) > 7) {
        pointerDragged = true;
      }
      if (pointerDragged) yaw -= dx * .006;
      pointerX = e.clientX;
      pointerY = e.clientY;
    });

    canvas.addEventListener("pointerup", e => {
      const wasTap = pointerDown && !pointerDragged &&
        Math.hypot(e.clientX - pointerStartX, e.clientY - pointerStartY) < 12;
      pointerDown = false;
      if (!wasTap) return;

      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      // First check whether the player tapped a visible 3D objective.
      const hits = raycaster.intersectObjects(interactiveMeshes, true);
      if (hits.length) {
        let node = hits[0].object;
        while (node && !node.userData.button) node = node.parent;
        const button = node?.userData.button;
        if (button && !button.classList.contains("collected")) {
          const id = button.dataset.worldObject;
          const target = getWorldObjects(game.currentLevel).find(o => o.id === id);
          if (target) {
            worldTarget = target.id;
            tapDestination = { x: target.x, y: target.y };
            setWorldMessage(`Walking towards ${target.label}. Press Interact when you arrive.`);
            updateGuide();
          }
          return;
        }
      }

      // Otherwise project the tap onto the island ground plane and walk there.
      const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), -.62);
      const point = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(ground, point)) {
        const scaleX=activeLevel===3?.50:.28, scaleZ=activeLevel===3?.43:.25;
        const x = Math.max(2, Math.min(98, point.x / scaleX + 50));
        const y = Math.max(2, Math.min(98, point.z / scaleZ + 50));
        tapDestination = { x, y };
        worldTarget = null;
        setWorldMessage("Walking to your selected location...");
      }
    });

    canvas.addEventListener("pointercancel", () => { pointerDown = false; });
    canvas.addEventListener("wheel", e => {
      cameraDistance = Math.max(5, Math.min(14, cameraDistance + e.deltaY * .008));
      e.preventDefault();
    }, { passive: false });
  }

  function animate() {
    animationFrame=requestAnimationFrame(animate);
    if(!renderer||!scene||!camera||!playerRig||!petRig)return;
    const now=performance.now();
    const dt=Math.min((now-lastFrame)/1000||.016,.05);
    lastFrame=now;clock.time+=dt;
    const p=game.worldPosition||{x:50,y:70};
    // Tap-to-move: update the existing game coordinates so the original
    // objective distance checks and Interact button continue to work.
    if (tapDestination) {
      const moveX = tapDestination.x - p.x;
      const moveY = tapDestination.y - p.y;
      const distance = Math.hypot(moveX, moveY);
      if (distance <= 7) {
        tapDestination = null;
        worldKeys = worldKeys || {};
        worldKeys.joyX = 0;
        worldKeys.joyY = 0;
        if (worldTarget) setWorldMessage("You're here! Press Interact to complete this objective.");
      } else {
        const step = Math.min(distance, 10 * dt);
        p.x = Math.max(5, Math.min(95, p.x + moveX / distance * step));
        p.y = Math.max(12, Math.min(90, p.y + moveY / distance * step));
      }
    }
    const targetX=(p.x-50)*(activeLevel===3?.50:.28), targetZ=(p.y-50)*(activeLevel===3?.43:.25);
    playerRig.position.x+=(targetX-playerRig.position.x)*Math.min(1,dt*9);
    playerRig.position.z+=(targetZ-playerRig.position.z)*Math.min(1,dt*9);
    if (worldKeys && (Math.abs(worldKeys.joyX||0)+Math.abs(worldKeys.joyY||0)>.1 || worldKeys.arrowleft||worldKeys.arrowright||worldKeys.arrowup||worldKeys.arrowdown||worldKeys.w||worldKeys.a||worldKeys.s||worldKeys.d)) tapDestination = null;
    const moving=!!(tapDestination || (worldKeys&&(worldKeys.arrowleft||worldKeys.arrowright||worldKeys.arrowup||worldKeys.arrowdown||worldKeys.w||worldKeys.a||worldKeys.s||worldKeys.d||Math.abs(worldKeys.joyX||0)+Math.abs(worldKeys.joyY||0)>.1)));
    if(moving){
      let dx=(worldKeys?.arrowright||worldKeys?.d?1:0)-(worldKeys?.arrowleft||worldKeys?.a?1:0)+(worldKeys?.joyX||0);
      let dz=(worldKeys?.arrowdown||worldKeys?.s?1:0)-(worldKeys?.arrowup||worldKeys?.w?1:0)+(worldKeys?.joyY||0);
      if (tapDestination) {
        const tx = tapDestination.x - p.x;
        const ty = tapDestination.y - p.y;
        dx = tx;
        dz = ty;
      }
      if (Math.abs(dx)+Math.abs(dz)>.001) playerRig.rotation.y=Math.atan2(dx,dz);
    }
    const bob=moving?Math.abs(Math.sin(clock.time*11))*.09:Math.sin(clock.time*2)*.025;
    playerRig.position.y=bob;
    const pp=playerRig.userData.parts;
    if(pp){
      const swing=moving?Math.sin(clock.time*11)*.48:Math.sin(clock.time*1.8)*.035;
      pp.armL.rotation.x=swing;pp.armR.rotation.x=-swing;
      pp.legL.rotation.x=-swing*.8;pp.legR.rotation.x=swing*.8;
    }
    const followX=playerRig.position.x-Math.sin(yaw)*1.15;
    const followZ=playerRig.position.z+Math.cos(yaw)*1.15;
    petRig.position.x+=(followX-petRig.position.x)*Math.min(1,dt*3.8);
    petRig.position.z+=(followZ-petRig.position.z)*Math.min(1,dt*3.8);
    petRig.position.y=.05+Math.sin(clock.time*3.4)*.06;
    petRig.rotation.y+=((playerRig.rotation.y-petRig.rotation.y)*Math.min(1,dt*2));
    const animal=petRig.userData.animal;
    if(animal?.userData.legs){
      const pairPlay = !!game.secondCompanion?.found && Math.sin(clock.time*.72) > .88;
      animal.userData.legs.forEach((leg,i)=>leg.rotation.x=moving?Math.sin(clock.time*10+i*Math.PI)*.45:pairPlay?Math.sin(clock.time*8+i*Math.PI)*.22:0);
    }
    if(animal?.userData.wings) animal.userData.wings.forEach((wing,i)=>wing.rotation.z=Math.sin(clock.time*12)*.2*(i?1:-1));
    if (secondPetRig) {
      const homeBond = !!game.level5AtShelter;
      const side = homeBond ? .92 + Math.sin(clock.time*1.7)*.10 : 1.45;
      const secondX = homeBond ? petRig.position.x + side : playerRig.position.x + Math.cos(yaw) * side;
      const secondZ = homeBond ? petRig.position.z + .18 : playerRig.position.z - Math.sin(yaw) * side + 1.0;
      secondPetRig.position.x += (secondX-secondPetRig.position.x)*Math.min(1,dt*(homeBond?2.8:3.2));
      secondPetRig.position.z += (secondZ-secondPetRig.position.z)*Math.min(1,dt*(homeBond?2.8:3.2));
      secondPetRig.position.y = .05 + Math.sin(clock.time*3.1+1.2)*.055;
      // Calculate this before using it below; otherwise the animation loop
      // hits a temporal-dead-zone ReferenceError as soon as pet two appears.
      const bondingPulse = !!game.secondCompanion?.found && (Math.sin(clock.time*.72) > .88);
      const secondFacing = (homeBond || bondingPulse) ? Math.atan2(petRig.position.x-secondPetRig.position.x, petRig.position.z-secondPetRig.position.z) : playerRig.rotation.y-.22;
      secondPetRig.rotation.y += ((secondFacing-secondPetRig.rotation.y)*Math.min(1,dt*1.8));
      if (homeBond || bondingPulse) petRig.rotation.y += ((Math.atan2(secondPetRig.position.x-petRig.position.x, secondPetRig.position.z-petRig.position.z)-petRig.rotation.y)*Math.min(1,dt*1.2));
      if (game.secondCompanion?.found) {
        const bob = bondingPulse ? .13 : .035;
        petRig.position.y = .05 + Math.abs(Math.sin(clock.time*3.4))*bob;
        secondPetRig.position.y = .05 + Math.abs(Math.sin(clock.time*3.4+1.1))*bob;
        petRig.rotation.z = Math.sin(clock.time*.9)*.025 + (bondingPulse?.08:0);
        secondPetRig.rotation.z = -Math.sin(clock.time*.9)*.025 - (bondingPulse?.08:0);
        if (!game._lastBondSoundAt) game._lastBondSoundAt = 0;
        if (audioContext && audioContext.state === "running" && !game.soundMuted && game.effectsVolume>0 && clock.time-game._lastBondSoundAt>18 && Math.random()<.012) {
          game._lastBondSoundAt=clock.time;
          playAnimalSound(game.pet?.id,.025);
          setTimeout(()=>playAnimalSound(game.secondCompanion?.id,.025),420);
        }
      }
      const secondAnimal = secondPetRig.userData.animal;
      if(secondAnimal?.userData.legs) secondAnimal.userData.legs.forEach((leg,i)=>leg.rotation.x=moving?Math.sin(clock.time*9+i*Math.PI)*.38:bondingPulse?Math.sin(clock.time*8+i*Math.PI)*.22:Math.sin(clock.time*2+i)*.025);
      if(secondAnimal?.userData.wings) secondAnimal.userData.wings.forEach((wing,i)=>wing.rotation.z=Math.sin(clock.time*11+1)*.18*(i?1:-1));
    }
    if(worldRoot?.userData.particles) worldRoot.userData.particles.rotation.y=clock.time*.012;
    // Gentle ocean movement.
    if(worldRoot) worldRoot.children.forEach(child=>{
      if(child.userData.ocean){
        const pos=child.geometry.attributes.position;
        for(let i=0;i<pos.count;i++){
          const x=pos.getX(i),y=pos.getY(i);
          pos.setZ(i,Math.sin(x*.22+clock.time*1.2)*.045+Math.cos(y*.18+clock.time)*.035);
        }
        pos.needsUpdate=true;child.geometry.computeVertexNormals();
      }
      if(child.userData.waterfall){
        child.material.opacity=.78+Math.sin(clock.time*4)*.08;
      }
      if(child.userData.river){
        child.material.opacity=.90+Math.sin(clock.time*2.3)*.035;
      }
      if(child.userData.pond){
        child.material.opacity=.90+Math.sin(clock.time*1.7)*.035;
      }
    });
    const cameraAngle=playerRig.rotation.y+yaw;
    const camOffset=new THREE.Vector3(-Math.sin(cameraAngle)*cameraDistance,4.3,-Math.cos(cameraAngle)*cameraDistance);
    const desired=playerRig.position.clone().add(camOffset);
    camera.position.lerp(desired,Math.min(1,dt*4));
    camera.lookAt(playerRig.position.x,1.2,playerRig.position.z-1.2);
    renderer.render(scene,camera);
  }

  async function start3DWorld() {
    const host=document.getElementById("play-world");
    if(!host)return;
    try {
      await loadThree();
      // The player may have changed screens while the library was loading.
      if(!document.getElementById("play-world"))return;
      if(animationFrame)cancelAnimationFrame(animationFrame);
      const old=host.querySelector("canvas.pet-paradise-3d");
      if(old)old.remove();
      activeLevel=game.currentLevel||1;
      cameraDistance=activeLevel===3?16:11;
      scene=new THREE.Scene();
      camera=new THREE.PerspectiveCamera(48,host.clientWidth/Math.max(1,host.clientHeight),.1,220);
      renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:"high-performance"});
      renderer.domElement.className="pet-paradise-3d";
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7));
      renderer.shadowMap.enabled=true;
      renderer.shadowMap.type=THREE.PCFSoftShadowMap;
      renderer.outputColorSpace=THREE.SRGBColorSpace;
      renderer.toneMapping=THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure=1.12;
      host.prepend(renderer.domElement);
      scene.add(new THREE.HemisphereLight("#d8f1ff","#536344",2.0));
      const sun=new THREE.DirectionalLight("#fff0d2",3.0);
      sun.position.set(-12,24,10);sun.castShadow=true;
      sun.shadow.mapSize.set(1024,1024);
      sun.shadow.camera.left=-38;sun.shadow.camera.right=38;sun.shadow.camera.top=38;sun.shadow.camera.bottom=-38;
      scene.add(sun);
      const fill=new THREE.DirectionalLight("#9ed9e7",.65);fill.position.set(12,8,-12);scene.add(fill);
      worldRoot=buildTerrain(activeLevel);
      addAtmosphere(activeLevel);
      playerRig=makeHuman();
      playerRig.position.set(((game.worldPosition?.x||50)-50)*((activeLevel===3||activeLevel===4)?.50:.28),.05,((game.worldPosition?.y||70)-50)*((activeLevel===3||activeLevel===4)?.43:.25));
      playerRig.rotation.y=Math.PI;
      scene.add(playerRig);
      petRig=makePet();
      petRig.position.set(playerRig.position.x-1,.05,playerRig.position.z+1);
      scene.add(petRig);
      secondPetRig = null;
      if (activeLevel === 5 && game.secondCompanion?.found) {
        const secondData = { id: game.secondCompanion.id, appearance: game.secondCompanion.appearance || { colour: game.secondCompanion.colour || "#C99B73" } };
        secondPetRig = makePet(secondData, secondData.appearance, 1);
        secondPetRig.position.set(playerRig.position.x+1.35,.05,playerRig.position.z+1.2);
        scene.add(secondPetRig);
      }
      addWorldInteractives(activeLevel);
      // Hide the old 2D sprite layer while retaining its invisible interaction buttons.
      host.classList.add("three-d-active");
      setupCanvasControls(renderer.domElement);
      resizeRenderer();
      if(!window.petParadise3DResizeBound){
        window.addEventListener("resize",resizeRenderer);
        window.petParadise3DResizeBound=true;
      }
      lastFrame=performance.now();
      animate();
    } catch(error) {
      console.error("Pet Paradise 3D:",error);
      const note=document.createElement("div");
      note.className="three-d-fallback-note";
      const reason = error && error.message ? error.message : String(error || "Unknown rendering error");
      threeLoadPromise = null;
      note.textContent="3D could not start: " + reason;
      note.title = reason;
      host.appendChild(note);
    }
  }

  const style=document.createElement("style");
  style.id="pet-paradise-3d-styles";
  style.textContent=`
    .two-pet-dashboards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px;margin:16px 0}
    .level5-pet-dashboard{padding:16px;border-radius:16px;background:#f1f5ef;color:#25483b}
    .level5-pet-dashboard h3{margin:0 0 12px}
    .level5-pet-dashboard .pet-status-row{display:grid;grid-template-columns:90px 1fr 42px;align-items:center;gap:8px;margin:8px 0}
    .level5-pet-dashboard .pet-action-buttons{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
    .level5-pet-dashboard button{padding:8px 11px}
    .bonding-card{text-align:center;grid-column:1/-1}
    #play-world.three-d-active{
      background:#0d5d68 !important;
      background-image:none !important;
      perspective:none !important;
      isolation:isolate;
    }
    #play-world .pet-paradise-3d{
      position:absolute;inset:0;width:100%;height:100%;display:block;z-index:0;
      border-radius:inherit;touch-action:none;
    }
    #play-world.three-d-active .world-decoration,
    #play-world.three-d-active .world-character,
    #play-world.three-d-active .world-pet,
    #play-world.three-d-active .world-description{display:none !important}
    #play-world.three-d-active .world-object{
      opacity:0 !important;background:transparent !important;border:0 !important;
      box-shadow:none !important;color:transparent !important;
      z-index:4;cursor:pointer;
    }
    #play-world.three-d-active .world-guide{
      z-index:6;pointer-events:none;
      background:rgba(255,248,225,.96);color:#4A3728;
      border:2px solid rgba(0,0,0,.82);
      border-radius:18px;padding:18px 24px;
      font-size:clamp(30px,3vw,42px);line-height:1.2;font-weight:900;
      -webkit-text-stroke:.7px #000;
      text-shadow:1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
      backdrop-filter:blur(8px);max-width:min(92%,900px);text-align:center;
    }
    #play-world.three-d-active .world-guide-arrow{font-size:1.35em;margin-right:12px;}
    .three-d-fallback-note{
      position:absolute;z-index:10;left:12px;right:12px;bottom:12px;
      padding:10px 14px;border-radius:12px;background:#173b34;color:#fff;
      font:600 13px/1.4 system-ui;text-align:center;
    }
    @media(max-width:700px){
      #play-world .pet-paradise-3d{touch-action:pan-y}
      #play-world.three-d-active{min-height:54svh !important}
    }
  `;
  if(!document.getElementById(style.id))document.head.appendChild(style);


  async function mountClosetPreview3D() {
    const host=document.querySelector(".character-preview");
    if(!host)return;
    try {
      await loadThree();
      if(!document.querySelector(".character-preview"))return;
      host.querySelector(".character-big")?.remove();
      host.querySelector(".outfit-preview")?.remove();
      host.querySelector("canvas.pet-closet-3d")?.remove();
      const canvas=document.createElement("canvas");
      canvas.className="pet-closet-3d";
      canvas.style.cssText="display:block;width:100%;height:280px;border-radius:16px;touch-action:pan-y";
      host.prepend(canvas);
      const previewScene=new THREE.Scene();
      previewScene.background=new THREE.Color("#e8eddf");
      const previewCamera=new THREE.PerspectiveCamera(34,1,.1,100);
      previewCamera.position.set(0,2.6,7.5);
      previewCamera.lookAt(0,1.35,0);
      const previewRenderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});
      previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
      previewRenderer.outputColorSpace=THREE.SRGBColorSpace;
      previewRenderer.shadowMap.enabled=true;
      previewScene.add(new THREE.HemisphereLight("#ffffff","#71806b",2));
      const key=new THREE.DirectionalLight("#fff2d8",2.2);key.position.set(-3,7,5);key.castShadow=true;previewScene.add(key);
      const floor=mesh(new THREE.CircleGeometry(2.5,48),mat("#d1ddc9"),previewScene,0,0,0);floor.rotation.x=-Math.PI/2;
      const oldScene=scene;scene=previewScene;
      const avatar=makeHuman();avatar.position.y=.02;previewScene.add(avatar);
      scene=oldScene;
      const resize=()=>{
        const w=Math.max(1,host.clientWidth),h=280;
        previewRenderer.setSize(w,h,false);previewCamera.aspect=w/h;previewCamera.updateProjectionMatrix();
      };
      resize();
      if(!host.dataset.previewResize){
        const observer=new ResizeObserver(resize);observer.observe(host);host.dataset.previewResize="1";
      }
      let turn=0;
      const renderPreview=()=>{
        if(!canvas.isConnected){previewRenderer.dispose();return;}
        turn+=.004;
        avatar.rotation.y=Math.sin(turn)*.16;
        previewRenderer.render(previewScene,previewCamera);
        requestAnimationFrame(renderPreview);
      };
      renderPreview();
    } catch(err) { console.warn("3D closet preview unavailable",err); }
  }

  // Keep the established HTML game systems and replace only the world renderer.
  const oldShowCloset=showCloset;
  showCloset=function(){
    oldShowCloset.apply(this,arguments);
    setTimeout(mountClosetPreview3D,80);
  };

  const oldShowPlayableLevel=showPlayableLevel;
  showPlayableLevel=function(){
    if(animationFrame)cancelAnimationFrame(animationFrame);
    if(hostHasRenderer()) {
      const oldHost=document.getElementById("play-world");
      if(oldHost)oldHost.classList.remove("three-d-active");
    }
    oldShowPlayableLevel.apply(this,arguments);
    setTimeout(start3DWorld,60);
  };
  function hostHasRenderer(){return !!document.querySelector("#play-world canvas.pet-paradise-3d");}

  // When returning from closet/shop/map and then entering play again, the wrapper above
  // rebuilds the 3D scene from the current level and saved character/pet appearance.
  window.addEventListener("beforeunload",()=>{if(animationFrame)cancelAnimationFrame(animationFrame);});
  window.PetParadise3D={start:start3DWorld};
})();
