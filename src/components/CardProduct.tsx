import { Button } from "./ui/button";
import { Card } from "./ui/card";

const CardProduct = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="p-4 md:p-6 bg-white dark:bg-gray-900 shadow-lg flex flex-col justify-between h-full w-full">
      <Wrapper>{children}</Wrapper>
    </Card>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col justify-between h-full">{children}</div>;
};

const Image = ({ url, name }: { url: string; name?: string }) => (
  <img
    src={url}
    alt={name || "Product image"}
    className="h-36 lg:h-45 w-full rounded-lg mb-4 object-cover"
  />
);

const Title = ({ name }: { name?: string }) => (
  <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold">
    {name}
  </h3>
);

const Footer = ({
  bestSeller,
  outOfStok,
  id,
  productName,
  handleAddToCart,
}: {
  bestSeller: boolean;
  outOfStok: boolean;
  productName: string;
  id: number;
  handleAddToCart: (id: number) => void;
}) => (
  <div className="mt-3 flex flex-col gap-3 items-start">
    {bestSeller && !outOfStok ? (
      <span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
        Best Seller
      </span>
    ) : !bestSeller && !outOfStok ? (
      <span className="text-transparent">""</span>
    ) : null}
    {outOfStok ? (
      <span className="inline-block bg-red-300 text-red-900 px-2 py-1 rounded-full text-xs font-bold">
        Out of Stock
      </span>
    ) : null}
    <div className="w-full flex justify-between space-x-2">
      {outOfStok ? (
        <Button variant="outline" className="w-full" disabled>
          Coming Soon
        </Button>
      ) : (
        <a
          className="w-3/4 inline-block"
          href="#product"
          onClick={(e) => {
            e.preventDefault();
            const waLink = `https://wa.me/6282217606010?text=saya%20ingin%20memesan%20${encodeURIComponent(
              productName
            )}`;
            window.open(waLink, "_blank");
          }}
        >
          <Button variant="outline" className="w-full">
            Order Now
          </Button>
        </a>
      )}

      {!outOfStok && (
        <Button
          variant="outline"
          className="w-1/4 bg-slate-800 dark:bg-white text-white dark:text-slate-800 hover:text-white hover:bg-slate-800 dark:hover:bg-white"
          onClick={() => handleAddToCart(id)}
        >
          Add
        </Button>
      )}
    </div>
  </div>
);

CardProduct.Image = Image;
CardProduct.Title = Title;
CardProduct.Footer = Footer;
CardProduct.Wrapper = Wrapper; // optional, kalau mau diakses dari luar

export default CardProduct;
