const RandomApi = async (req, res) => {
  try {
    if (req.method === "GET") {
      const site = "https://www.themealdb.com/api/json/v1/1/random.php";
      const response = await fetch(site);
      if (!response.ok) {
        console.log("error");
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();
      res.status(200).json({ data, message: "Successfully gathered data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default RandomApi;
