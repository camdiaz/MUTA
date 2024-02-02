// All about logic

async function calculateRecyclingRoute(materials, maxWeight) {
    try {
        materials.sort((a, b) => b.valor / b.peso - a.valor / a.peso);
        let totalValue = 0;
        const chosenResources = materials.reduce((acc, material) => {
            if (maxWeight >= material.peso) {
                acc.push(material);
                totalValue += material.valor;
                maxWeight -= material.peso;
            }
            return acc;
        }, []);

        return { chosenResources, totalValue };
    } catch (error) {
        console.error(error);
        throw new Error('Error retrieving material details.');
    }
}

module.exports = { calculateRecyclingRoute };