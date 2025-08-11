import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { Card } from "./components/ui/card";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Hero />
        <Section
          title="Products"
          className="bg-gray-100 dark:bg-gray-800 pt-16"
          id="product"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
            {[
              {
                name: "Abon Ayam Variant Original 100gr",
                image: "/foto.jpg",
                bestSeller: true,
                outOfStock: false,
              },
              {
                name: "Abon Ayam Variant Spicy 100gr",
                image: "/foto.jpg",
                outOfStock: false,
              },
              {
                name: "Abon Ayam Variant Original 70gr",
                image: "/foto.jpg",
                outOfStock: false,
              },
              {
                name: "Abon Ayam Variant Spicy 70gr",
                image: "/foto.jpg",
                outOfStock: false,
              },
              {
                name: "Tempe Gila Variant Original 100gr",
                image: "/tempe.jpg",
                outOfStock: true,
              },
              {
                name: "Tempe Gila Variant Spicy 100gr",
                image: "/tempe.jpg",
                outOfStock: true,
              },
            ].map(({ name, image, bestSeller, outOfStock }) => (
              <Card
                className="p-6 bg-white dark:bg-gray-900 shadow-lg flex flex-col justify-between h-full"
                key={name}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-48 w-full rounded-lg mb-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-4">{name}</h3>
                  {bestSeller && (
                    <span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      Best Seller
                    </span>
                  )}
                  {outOfStock && (
                    <span className="inline-block bg-red-300 text-red-900 px-2 py-1 rounded-full text-xs font-bold">
                      Out of Stock
                    </span>
                  )}
                </div>
                <a
                  className="w-full inline-block"
                  href={
                    outOfStock
                      ? undefined
                      : `https://wa.me/081802090774?text=saya%20ingin%20memesan%20${encodeURIComponent(
                          name
                        )}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled={outOfStock}
                  >
                    {outOfStock ? "Coming Soon" : "Order Now"}
                  </Button>
                </a>
              </Card>
            ))}
          </ul>
        </Section>
        <Section
          title="Testimoni"
          className="bg-gray-100 dark:bg-gray-800"
          id="testimoni"
        >
          <div className="grid grid-cols-1 gap-6">
            <Card className="h-40 lg:h-32 p-8 bg-gray-50 dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center">
              <p className="text-center font-bold text-gray-600 dark:text-gray-200">
                "Tempe terbaik yang pernah saya coba! Saya akan memesan lagi"
              </p>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                - Andi, Chef
              </p>
            </Card>
            <Card className="h-40 lg:h-32 p-8 bg-gray-50 dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center">
              <p className="text-center font-bold text-gray-600 dark:text-gray-200">
                "Saya sangat puas dengan tempe yang dijual"
              </p>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                - Budi, Food Critic
              </p>
            </Card>
            <Card className="h-40 lg:h-32 p-8 bg-gray-50 dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center">
              <p className="text-center font-bold text-gray-600 dark:text-gray-200">
                "Tempe terenak yang pernah saya coba"
              </p>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                - Siti, Culinary Blogger
              </p>
            </Card>
          </div>
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
        <Section
          title="Contact Us"
          className="bg-gray-100 dark:bg-gray-800 h-[calc(100vh-40rem)] lg:h-[calc(100vh-32rem)]"
        >
          <p className="text-gray-700 dark:text-gray-300">
            Have questions or feedback? We'd love to hear from you! Reach out to
            us via:
          </p>
          <ul className="list-none pl-0 flex space-x-6 mt-4 text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="https://wa.me/081802090774"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:no-underline"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto: H9CmM@example.com"
                className="text-blue-500 hover:no-underline"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sardjanatempe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:no-underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://sardjanatempe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:no-underline"
              >
                Website
              </a>
            </li>
          </ul>
        </Section>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
