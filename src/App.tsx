import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { Card } from "./components/ui/card";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <Section title="Products" className="bg-gray-100 dark:bg-gray-800">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Abon Ayam Variant Original 100gr",
                bestSeller: true,
              },
              {
                name: "Abon Ayam Variant Spicy 100gr",
              },
              {
                name: "Abon Ayam Variant Original 70gr",
              },
              {
                name: "Abon Ayam Variant Spicy 70gr",
              },
              {
                name: "Tempe Gila Variant Original 100gr",
              },
              {
                name: "Tempe Gila Variant Spicy 100gr",
              },
            ].map(({ name, bestSeller }) => (
              <Card
                className="p-6 bg-white dark:bg-gray-900 shadow-lg flex flex-col justify-between h-full"
                key={name}
              >
                <div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold mb-4">{name}</h3>
                  {bestSeller && (
                    <span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      Best Seller
                    </span>
                  )}
                </div>
                <a
                  className="w-full inline-block"
                  href={`https://wa.me/081802090774?text=saya%20ingin%20memesan%20${encodeURIComponent(
                    name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    Order Now
                  </Button>
                </a>
              </Card>
            ))}
          </ul>
        </Section>
        <Section title="About Us" className="bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to SARDJANA TEMPE, where we bring you the finest culinary
            experiences. Our mission is to provide delicious, high-quality food
            that delights your taste buds and warms your heart.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            From our signature dishes to our commitment to sustainability, we
            strive to create a dining experience that is not only enjoyable but
            also responsible.
          </p>
        </Section>
        <Section title="Contact Us" className="bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-700 dark:text-gray-300">
            Have questions or feedback? We'd love to hear from you! Reach out to
            us via email at{" "}
            <a
              href="mailto: H9CmM@example.com"
              className="text-blue-500 hover:underline"
            >
              {" "}
              H9CmM@example.com
            </a>
          </p>
        </Section>
      </ThemeProvider>
    </>
  );
}

export default App;
