import Hero from './Hero'
import Layout from './Layout'
import Products from "./Products"

function App() {
  return (
    <Layout>
      {(category: string) => (
        <Hero>
          {category !== "All" && (
            <div className="w-full px-6">
              <Products category={category} />
            </div>
          )}
        </Hero>
      )}
    </Layout>
  );
}

export default App;