import MenuItem from "./components/MenuItem";

function App() {
  const menu = [
    {
      id: 1,
      name: "Idly",
      price: "Rs.20",
      description: "Soft and healthy",
      src: "src/assets/idli.jpeg",
    },
    {
      id: 2,
      name: "Briyani",
      price: "Rs.100",
      description: "Rich and delicious",
      src: "src/assets/briyani.jpeg",
    },
    {
      id: 3,
      name: "Dosa",
      price: "Rs.30",
      description: "Crispy",
      src: "src/assets/dosa.jpeg",
    },
    {
      id: 4,
      name: "Sphagetti",
      price: "Rs.40",
      description: "Wiry",
      src: "src/assets/Spaghetti.jpeg",
    },
    {
      id: 5,
      name: "Dumplings",
      price: "Rs.50",
      description: "Feast of China",
      src: "src/assets/dumpling.jpeg",
    },
    {
      id: 6,
      name: "Sushi",
      price: "Rs.40",
      description: "Nutritious",
      src: "src/assets/sushi.jpeg",
    },
  ];
  return (
    <>
      <header className="py-4 text-center">
        <h1 className="font-bold text-xl">Menu Item</h1>
      </header>
      <section className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 py-10">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            src={item.src}
            description={item.description}
          ></MenuItem>
        ))}
      </section>
    </>
  );
}

export default App;
