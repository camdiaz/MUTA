const { calculateRecyclingRoute } = require('./../services/recyclingService');

async function recyclingRoute(req, res) {
  try {
    const materialList = ["plástico", "cartón", "vidrio","metales"];
    const { materials, maxWeight } = req.body;

    if (!Array.isArray(materials) || typeof maxWeight !== 'number' || maxWeight <= 0) {
      return res.status(400).json({ message: "Invalid information" });
    }

    const chosenMaterials = materials
      .filter(material => 
        materialList.includes(material.nombre) &&
        material.peso > 0 &&
        material.valor > 0
      );

    const { chosenResources, totalValue } = await calculateRecyclingRoute(chosenMaterials, maxWeight);

    return res.status(200).json({
      message: "Optimal recycling route",
      ruta: chosenResources.map(material => ({
        nombre: material.nombre,
        peso: `${material.peso} Kg`
      })),
      valorTotal: totalValue
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error calculating the optimal recycling route. Please, try again.' });
  }
}

module.exports = recyclingRoute;
