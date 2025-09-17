import Section from "./Section";

const About = () => {
  return (
    <div>
      <Section
        title="About Us"
        className="bg-gray-100 dark:bg-gray-800"
        id="about"
      >
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
        id="contact"
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
    </div>
  );
};

export default About;
