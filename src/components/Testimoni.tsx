import { Card } from "./ui/card";
import Section from "./Section";

const Testimoni = () => {
  return (
    <div>
      {" "}
      <Section
        title="Testimoni"
        className="bg-gray-100 dark:bg-gray-800"
        id="testimoni"
      >
        <div className="grid grid-cols-1 gap-6">
          <Card className="h-40 lg:h-32 p-8 bg-gray-50 dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center">
            <p className="text-center font-bold text-gray-600 dark:text-gray-200">
              "Abon terbaik yang pernah saya coba! Saya akan memesan lagi"
            </p>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              - Andi, Chef
            </p>
          </Card>
          <Card className="h-40 lg:h-32 p-8 bg-gray-50 dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center">
            <p className="text-center font-bold text-gray-600 dark:text-gray-200">
              "Saya sangat puas dengan abon yang dijual"
            </p>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              - Budi, Food Critic
            </p>
          </Card>
          <Card className="h-40 lg:h-32 p-8 bg-gray-50 dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-600 flex items-center justify-center">
            <p className="text-center font-bold text-gray-600 dark:text-gray-200">
              "Abon terenak yang pernah saya coba"
            </p>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              - Siti, Culinary Vlogger
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Testimoni;
