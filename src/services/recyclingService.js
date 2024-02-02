// All about logic

async function calculateRecyclingRoute(materials, maxPeso) {
    try {
        materials.sort((a, b) => b.valor / b.peso - a.valor / a.peso);
        let totalValue = 0;
        const chosenResources = materials.reduce((acc, material) => {
            if (maxPeso >= material.peso) {
                acc.push(material);
                totalValue += material.valor;
                maxPeso -= material.peso;
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