
/* =====================================================
   PET PARADISE — CHARACTER & ACCESSORY SYSTEM
   Separate extension. Does not replace the main game.
===================================================== */

(() => {
  "use strict";

  if (window.PetParadiseWardrobe) return;

  /* ---------- DATA ---------- */

  game.equippedHumanAccessories =
    game.equippedHumanAccessories || [];

  game.equippedAccessories =
    game.equippedAccessories || {};

  game.purchasedAccessories =
    game.purchasedAccessories || [];

  let selectedTarget = "human";

  const categories = {
    "Head": "head",
    "Neck": "neck",
    "Special": "special"
  };

  function getEquipped(target = selectedTarget) {
    if (target === "human") {
      return game.equippedHumanAccessories;
    }

    const index = Number(target.replace("pet", ""));

    if (!game.equippedAccessories[index]) {
      game.equippedAccessories[index] = [];
    }

    return game.equippedAccessories[index];
  }

  function getTargetName(target) {
    if (target === "human") return game.playerName || "Explorer";
    if (target === "pet0") return game.petName || "First companion";
    if (target === "pet1") {
      return game.secondCompanion?.name || "Second companion";
    }
    return "Character";
  }

  function isOwned(id) {
    return game.purchasedAccessories.includes(id);
  }

  function isEquipped(id, target = selectedTarget) {
    return getEquipped(target).includes(id);
  }

  function saveAppearance() {
    saveGame();
    refreshVisuals();
  }

  /* ---------- EQUIPPING ---------- */

  function equip(id, target = selectedTarget) {
    const item = accessories.find(a => a.id === id);

    if (!item) return;

    if (!isOwned(id)) {
      notify("You need to own this accessory first!");
      return;
    }

    const list = getEquipped(target);

    if (list.includes(id)) {
      unequip(id, target);
      return;
    }

    // One item per accessory category.
    // Different categories can be worn together.
    const slot = categories[item.category];

    const previous = list.filter(oldId => {
      const oldItem = accessories.find(a => a.id === oldId);
      return oldItem && categories[oldItem.category] === slot;
    });

    previous.forEach(oldId => {
      list.splice(list.indexOf(oldId), 1);
    });

    list.push(id);

    saveAppearance();

    notify(`${item.name} equipped on ${getTargetName(target)}!`);

    showShop();
  }

  function unequip(id, target = selectedTarget) {
    const list = getEquipped(target);
    const index = list.indexOf(id);

    if (index !== -1) list.splice(index, 1);

    saveAppearance();

    notify("Accessory removed.");

    showShop();
  }

  /* ---------- INVENTORY ---------- */

  function addToInventory(id) {
    if (!accessories.some(a => a.id === id)) return;

    if (!isOwned(id)) {
      game.purchasedAccessories.push(id);
      saveGame();
    }

    refreshVisuals();
  }

  /* ---------- TARGET SELECTOR ---------- */

  function targetOptions() {
    let options = `
      <option value="human">My character — ${escapeHTML(game.playerName || "Explorer")}</option>
    `;

    if (game.pet) {
      options += `
        <option value="pet0">
          ${escapeHTML(game.petName || "First companion")}
        </option>
      `;
    }

    if (game.secondCompanion) {
      options += `
        <option value="pet1">
          ${escapeHTML(game.secondCompanion.name || "Second companion")}
        </option>
      `;
    }

    return options;
  }

  /* ---------- SHOP DISPLAY ---------- */

  function renderShop() {
    const target = selectedTarget;
    const equipped = getEquipped(target);

    app.innerHTML = `
      <section class="game-screen wide-screen wardrobe-shop">

        <span class="step-label">YOUR PERSONAL COLLECTION</span>
        <h1>Accessory Collection</h1>

        <p>
          Choose who you want to dress.
          Every character has their own accessories.
        </p>

        <div class="coin-counter">
          🪙 ${game.coins} coins
        </div>

        <div class="wardrobe-target">
          <label for="wardrobe-target">
            Select character
          </label>

          <select id="wardrobe-target">
            ${targetOptions()}
          </select>
        </div>

        <div class="wardrobe-equipped">
          <h3>Currently equipped</h3>

          ${
            equipped.length
              ? equipped.map(id => {
                  const item = accessories.find(a => a.id === id);
                  return item
                    ? `<span class="wardrobe-chip">${item.emoji} ${item.name}</span>`
                    : "";
                }).join("")
              : "<p>No accessories equipped.</p>"
          }
        </div>

        <div class="shop-grid">
          ${accessories.map(item => {
            const owned = isOwned(item.id);
            const wearing = isEquipped(item.id, target);

            return `
              <article class="shop-item wardrobe-item">

                <span>${item.emoji}</span>

                <h3>${item.name}</h3>

                <p>${item.category}</p>

                <p>
                  ${
                    owned
                      ? "In your collection"
                      : item.price === 0
                        ? "Free"
                        : `🪙 ${item.price}`
                  }
                </p>

                ${
                  !owned
                    ? `
                      <button onclick="PetParadiseWardrobe.buy('${item.id}')">
                        ${item.price === 0 ? "Collect" : "Purchase"}
                      </button>
                    `
                    : `
                      <button onclick="PetParadiseWardrobe.equip('${item.id}')">
                        ${wearing ? "Unequip" : "Wear"}
                      </button>
                    `
                }

              </article>
            `;
          }).join("")}
        </div>

        <button class="secondary-btn" onclick="showWorldMap()">
          ← Back to island map
        </button>

      </section>
    `;

    const selector = document.getElementById("wardrobe-target");

    selector.value = target;

    selector.addEventListener("change", event => {
      selectedTarget = event.target.value;
      renderShop();
    });
  }

  /* ---------- PURCHASES ---------- */

  function buy(id) {
    const item = accessories.find(a => a.id === id);

    if (!item) return;

    if (isOwned(id)) {
      notify("You already own this item!");
      return;
    }

    if (game.coins < item.price) {
      notify("You need more coins!");
      return;
    }

    game.coins -= item.price;

    game.purchasedAccessories.push(id);

    saveGame();

    notify(`${item.name} added to your collection!`);

    renderShop();
  }

  /* ---------- VISIBLE SVG ACCESSORIES ---------- */

  function accessorySVG(ids, type) {
    return ids.map(id => {
      const item = accessories.find(a => a.id === id);

      if (!item) return "";

      let x = type === "human" ? 50 : 85;
      let y = type === "human" ? 7 : 10;

      const slot = categories[item.category];

      if (slot === "neck") {
        y = type === "human" ? 58 : 52;
      }

      if (slot === "special") {
        x = type === "human" ? 79 : 139;
        y = type === "human" ? 88 : 85;
      }

      return `
        <text
          x="${x}"
          y="${y}"
          text-anchor="middle"
          font-size="18"
          style="font-family:Arial,'Apple Color Emoji',sans-serif"
        >${item.emoji}</text>
      `;
    }).join("");
  }

  const originalPlayerSVG = playerSVG;

  playerSVG = function() {
    const svg = originalPlayerSVG();

    return svg.replace(
      "</svg>",
      `${accessorySVG(getEquipped("human"), "human")}</svg>`
    );
  };

  const originalPetSVG = petSVG;

  petSVG = function() {
    const svg = originalPetSVG();

    return svg.replace(
      "</svg>",
      `${accessorySVG(getEquipped("pet0"), "pet")}</svg>`
    );
  };

  /* ---------- 3D ACCESSORY MODELS ---------- */

  function add3DAccessory(THREE, parent, id, type, species) {
    const group = new THREE.Group();
    group.name = "pp-accessory-" + id;

    const material = color =>
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.65,
        metalness: 0.08
      });

    function sphere(color, x, y, z, sx, sy, sz) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, 16, 12),
        material(color)
      );

      mesh.position.set(x, y, z);
      mesh.scale.set(sx, sy, sz);
      group.add(mesh);

      return mesh;
    }

    function box(color, x, y, z, sx, sy, sz) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(sx, sy, sz),
        material(color)
      );

      mesh.position.set(x, y, z);
      group.add(mesh);

      return mesh;
    }

    function ring(color, x, y, z, radius, thickness) {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(radius, thickness, 8, 32),
        material(color)
      );

      mesh.position.set(x, y, z);
      mesh.rotation.x = Math.PI / 2;
      group.add(mesh);

      return mesh;
    }

    const human = type === "human";

    const headY = human
      ? 2.78
      : species === "bird" ? 1.85
      : species === "bunny" ? 1.72
      : species === "hamster" ? 1.55
      : 1.66;

    const headZ = human
      ? 0
      : species === "bird" ? 0.1 : 0.43;

    const neckY = human ? 1.95 : 1.05;
    const neckZ = human ? 0 : 0.55;

    // HEAD ACCESSORIES
    if (
      id === "sunny-bloom" ||
      id === "flower-crown"
    ) {
      ring("#d69b54", 0, headY, headZ, human ? 0.34 : 0.29, 0.035);

      for (let i = 0; i < 7; i++) {
        const angle = i * Math.PI * 2 / 7;

        sphere(
          i % 2 ? "#f4a7b8" : "#fff0a5",
          Math.cos(angle) * 0.29,
          headY + Math.sin(angle) * 0.035,
          headZ + Math.sin(angle) * 0.29,
          0.09, 0.075, 0.09
        );
      }
    }

    if (id === "soft-bow") {
      sphere("#dc8eaa", -0.14, headY, headZ + 0.25, 0.15, 0.11, 0.07);
      sphere("#dc8eaa", 0.14, headY, headZ + 0.25, 0.15, 0.11, 0.07);
      sphere("#9e526d", 0, headY, headZ + 0.29, 0.07, 0.07, 0.06);
    }

    if (id === "explorer-hat") {
      const brim = new THREE.Mesh(
        new THREE.CylinderGeometry(0.43, 0.43, 0.09, 24),
        material("#9a7045")
      );

      brim.position.set(0, headY + 0.12, headZ);
      group.add(brim);

      const crown = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.30, 0.32, 20),
        material("#b28b56")
      );

      crown.position.set(0, headY + 0.30, headZ);
      group.add(crown);
    }

    if (id === "tiny-crown") {
      ring("#e6bd52", 0, headY + 0.10, headZ, 0.25, 0.045);

      for (let i = -1; i <= 1; i++) {
        const spike = new THREE.Mesh(
          new THREE.ConeGeometry(0.075, 0.22, 5),
          material("#eac45c")
        );

        spike.position.set(i * 0.16, headY + 0.26, headZ);
        group.add(spike);
      }
    }

    if (id === "star-clip") {
      const star = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.15),
        material("#f2cf5c")
      );

      star.position.set(0.30, headY + 0.04, headZ + 0.20);
      group.add(star);
    }

    // NECK ACCESSORIES
    if (
      id === "bell-collar" ||
      id === "forest-bandana" ||
      id === "little-scarf" ||
      id === "flower-necklace"
    ) {
      const color =
        id === "forest-bandana" ? "#78936b" :
        id === "little-scarf" ? "#c77f72" :
        id === "flower-necklace" ? "#e7bd69" :
        "#bba66c";

      ring(color, 0, neckY, neckZ, human ? 0.25 : 0.31, 0.055);

      if (id === "bell-collar") {
        sphere("#e5c65d", 0, neckY - 0.10, neckZ + 0.28, 0.09, 0.11, 0.09);
      }

      if (id === "flower-necklace") {
        sphere("#f3a6b3", 0, neckY - 0.13, neckZ + 0.28, 0.11, 0.09, 0.07);
      }
    }

    // SPECIAL ACCESSORIES
    if (id === "mini-backpack") {
      box("#a7794e", 0, human ? 1.40 : 0.80, human ? -0.43 : -0.55, 0.42, 0.48, 0.22);
      box("#d3ad78", 0, human ? 1.38 : 0.78, human ? -0.55 : -0.67, 0.22, 0.13, 0.035);
    }

    if (id === "little-wings") {
      sphere("#e9e1f5", -0.55, human ? 1.60 : 0.90, -0.28, 0.28, 0.43, 0.12);
      sphere("#e9e1f5", 0.55, human ? 1.60 : 0.90, -0.28, 0.28, 0.43, 0.12);
    }

    if (id === "forgotten-gift") {
      const crystal = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.23),
        new THREE.MeshStandardMaterial({
          color: "#8cced0",
          emissive: "#397d83",
          emissiveIntensity: 0.4
        })
      );

      crystal.position.set(0, human ? 1.55 : 0.95, 0.45);
      group.add(crystal);
    }

    parent.add(group);

    return group;
  }

  function decorateRig(THREE, rig, ids, type, species) {
    if (!rig) return;

    const parent = type === "human"
      ? rig.userData?.parts?.body
      : rig.userData?.animal || rig;

    if (!parent) return;

    const previous = parent.getObjectByName("pp-accessory-container");

    if (previous) parent.remove(previous);

    const container = new THREE.Group();
    container.name = "pp-accessory-container";

    parent.add(container);

    ids.forEach(id => {
      add3DAccessory(THREE, container, id, type, species);
    });
  }

  function refresh3D() {
    const api = window.PetParadise3D;

    if (!api?.getRigs) return;

    try {
      const rigs = api.getRigs();

      if (!rigs?.THREE || !rigs.scene) return;

      decorateRig(
        rigs.THREE,
        rigs.playerRig,
        getEquipped("human"),
        "human"
      );

      decorateRig(
        rigs.THREE,
        rigs.petRig,
        getEquipped("pet0"),
        "pet",
        game.pet?.id
      );

      decorateRig(
        rigs.THREE,
        rigs.secondPetRig,
        getEquipped("pet1"),
        "pet",
        game.secondCompanion?.id
      );

    } catch (error) {
      console.warn("Accessory appearance refresh:", error);
    }
  }

  /* ---------- SCREEN REFRESH ---------- */

  function refreshVisuals() {
    refresh3D();

    document.querySelectorAll(".character-preview").forEach(node => {
      const svg = node.querySelector(".human-avatar-svg");
      if (svg) {
        const replacement = document.createElement("div");
        replacement.innerHTML = playerSVG();
        svg.replaceWith(replacement.firstElementChild);
      }
    });
  }

  /* ---------- CONNECT TO EXISTING GAME ---------- */

  const originalShowShop = showShop;

  showShop = function() {
    renderShop();
  };

  const originalShowPlayableLevel = showPlayableLevel;

  showPlayableLevel = function() {
    originalShowPlayableLevel.apply(this, arguments);

    setTimeout(refreshVisuals, 500);
    setTimeout(refreshVisuals, 1200);
  };

  /* ---------- PUBLIC API ---------- */

  window.PetParadiseWardrobe = {
    buy,
    equip,
    unequip,
    addToInventory,
    refresh: refreshVisuals,
    getEquipped
  };

  /* ---------- STYLES ---------- */

  const style = document.createElement("style");

  style.textContent = `
    .wardrobe-target {
      background:#f2eee4;
      color:#234d42;
      padding:18px;
      border-radius:16px;
      margin:20px 0;
      text-align:left;
    }

    .wardrobe-target label {
      display:block;
      font-weight:700;
      margin-bottom:9px;
    }

    .wardrobe-target select {
      width:100%;
      padding:12px;
      border-radius:10px;
      border:1px solid #b9c5b3;
      background:#fffaf0;
      color:#234d42;
      font:600 14px 'DM Sans',sans-serif;
    }

    .wardrobe-equipped {
      background:#e9efe2;
      padding:17px;
      border-radius:16px;
      margin:16px 0;
      color:#234d42;
    }

    .wardrobe-chip {
      display:inline-block;
      background:#fffaf0;
      padding:8px 12px;
      border-radius:20px;
      margin:4px;
      font-weight:600;
    }

    .wardrobe-item {
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:6px;
    }

    .wardrobe-item button {
      width:100%;
    }
  `;

  document.head.appendChild(style);

  saveGame();

  console.log("Pet Paradise Character System loaded.");

})();
