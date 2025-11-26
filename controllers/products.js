const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "All products fetched successfully" });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "Products testing route working" });
};

module.exports = { getAllProducts, getAllProductsTesting };
