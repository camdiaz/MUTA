//HTTP Interaction 
const { calculateRecyclingRoute } = require('./../services/recyclingService');

// Recycling route
async function recyclingRoute(req, res) {
  try {
    const materialList = ["plástico", "cartón", "vidrio","metales"];
    const { materials, maxPeso } = req.body;

    if (!Array.isArray(materials) || typeof maxPeso !== 'number' || maxPeso <= 0) {
      return res.status(400).json({ message: "Invalid information" });
    }

    const chosenMaterials = materials
      .filter(material => 
        materialList.includes(material.nombre) &&
        material.peso > 0 &&
        material.valor > 0
      );

    const { chosenResources, totalValue } = await calculateRecyclingRoute(chosenMaterials, maxPeso);

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

module.exports = { recyclingRoute };
