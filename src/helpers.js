

function Randomizer(items) {
    const randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}

function Remover(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}



export { Randomizer, Remover }