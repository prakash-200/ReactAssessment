import BasketballPlayerCard from "./components/BasketballPlayerCard"


function App() {

  const player = {
    name: "Sunil Chhetri",
    image: "https://example.com/lebron.jpg",
    position: "Forward",
    stats: {
      pointsPerGame: 0.29,
      assistsPerGame: 0.18,
      reboundsPerGame: 10.5,
    },
  };

  return (
   <BasketballPlayerCard name={player.name}
   image={player.image}
   position={player.position}
   stats={player.stats} />
  )
}

export default App
