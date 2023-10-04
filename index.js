const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;
const batteries = () => {
    const result = batteryBatches.reduce((previousItem, currentItem) => {
        return totalBatteries = previousItem + currentItem
    })
    return result
}
