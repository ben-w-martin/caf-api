const endpoint = "http://localhost:5173/src/assets/carouselCoffees.json";

console.log("COFFEE CAROUSEL ENDPOINT: ", endpoint);

const getAll = () => {
  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const response = fetch(endpoint, config)
    .then((resp) => resp.json())
    .catch((err) => {
      console.error("CarouselCoffeeService -> Error: ", err);
      return null;
    });

  return response;
};

export { getAll };
