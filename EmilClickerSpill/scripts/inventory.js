var inventoryArray = [
    {
        name: "Resource",
        items: [
            { type: "Gold", amount: 0, maxAmount: 1000 },
            { type: "Wood", amount: 0, maxAmount: 1000 },
            { type: "Metal", amount: 0, maxAmount: 1000 },
        ]
    },
    {
        name: "Reagent",
        items: [
            { type: "Ichor", amount: 0, maxAmount: 100 },
            { type: "Fungi", amount: 0, maxAmount: 100 },
            { type: "Herbs", amount: 0, maxAmount: 100 },
        ]
    },
    {
        name: "Mana",
        items: [
            { type: "Arcane", amount: 0, maxAmount: 10 },
            { type: "Fire", amount: 0, maxAmount: 10 },
            { type: "Water", amount: 0, maxAmount: 10 },
            { type: "Earth", amount: 0, maxAmount: 10 },
            { type: "Wind", amount: 0, maxAmount: 10 },
        ]
    },
]

getInventory();

function getInventory() {
    var mainContainer = document.getElementById("inventory-container");
    mainContainer.removeChild(mainContainer.childNodes[0]);
    mainContainer.removeChild(mainContainer.childNodes[0]);
    mainContainer.removeChild(mainContainer.childNodes[0]);
    for (let index = 0; index < inventoryArray.length; index++) {
        let container = document.createElement("div");
        container.id = inventoryArray[index].name.toLowerCase() + "-container";
        container.className = "inventory-sub-container";
        let header = document.createElement("p");
        header.innerHTML = inventoryArray[index].name + "s: ";
        container.appendChild(header)
        mainContainer.appendChild(container);
        for (let item = 0; item < inventoryArray[index].items.length; item++) {
            let d = document.createElement("div");
            let p = document.createElement("p");
            let s = document.createElement("span");
            d.className = "inventory-item"
            p.innerHTML = inventoryArray[index].items[item].type + ": ";
            s.innerHTML = inventoryArray[index].items[item].amount.toFixed(2) + "/" + inventoryArray[index].items[item].maxAmount;
            p.appendChild(s);
            d.appendChild(p);
            let divId = inventoryArray[index].name.toLowerCase() + "-container";
            document.getElementById(divId).appendChild(d)
            // inventoryArray[index].items
        }
    }
}
function manaRegen() {
    let regenAmount = 0.01;
    for (let mana = 0; mana < inventoryArray[2].items.length; mana++) {
        if (inventoryArray[2].items[mana].amount < inventoryArray[2].items[mana].maxAmount) {
            inventoryArray[2].items[mana].amount += regenAmount;
        }
        // console.log(inventoryArray[2].items[mana].amount);
        // console.log(inventoryArray[2].items[mana].maxAmount);
    }
}

setInterval(() => {
    manaRegen();
    getInventory();
}, 1000)