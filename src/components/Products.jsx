// const products = [

// {
//   id: 1,
//   name: "Black shirt",
//   href: "#",
//   imageSrc: "/src/assets/startImages/shirt.jpg",
//   imageAlt: "Front of men's Basic Tee in black.",
//   price: "$35",
//   color: "Black",
// },
// {
//   id: 2,
//   name: "white bed",
//   href: "#",
//   imageSrc: "/src/assets/startImages/colchon.jpeg",
//   imageAlt: "Front of men's Basic Tee in black.",
//   price: "$35",
//   color: "Black",
// },
// {
//   id: 3,
//   name: "Comedor",
//   href: "#",
//   imageSrc: "/src/assets/startImages/comedor1.jpg",
//   imageAlt: "Front of men's Basic Tee in black.",
//   price: "$35",
//   color: "Black",
// },
// {
//   id: 4,
//   name: "Bathroom",
//   href: "#",
//   imageSrc: "/src/assets/startImages/bano.jpg",
//   imageAlt: "Front of men's Basic Tee in black.",
//   price: "$35",
//   color: "Black",
// },
// {
//   id: 5,
//   name: "Closet",
//   href: "#",
//   imageSrc: "/src/assets/startImages/ropero.jpg",
//   imageAlt: "Front of men's Basic Tee in black.",
//   price: "$35",
//   color: "Black",
// },
// {
//   id: 6,
//   name: "Planta",
//   href: "#",
//   imageSrc: "/src/assets/startImages/planta.jpg",
//   imageAlt: "Front of men's Basic Tee in black.",
//   price: "$35",
//   color: "Black",
// },
// {
//   id: 7,
//   name: "Mesa",
//   href: "#",
//   imageSrc: "/src/assets/startImages/mesa.jpeg",
//   imageAlt: "Front of men's Basic Tee in black.",
//   price: "$35",
//   color: "Black",
// },
// {
//   id: 8,
//   name: "V Vanity",
//   href: "#",
//   imageSrc: "/src/assets/startImages/vanity.jpg",
//   imageAlt: "V Vanity",
//   price: "$35",
//   color: "White",
// },
// ];

// export function Products() {

//   return (
//   <>
//     <div className="bg-white p-16">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900 bg-gray-200 text-center max-w-80 rounded-xl">
//           Customers also purchased
//         </h2>

//         <div className="mt-6 p- grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-gray-200 rounded-xl">
//           {products.map((product) => (
//             <div key={product.id} className="group relative">
//               <div className=" p-4 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <img
//                   src={product.imageSrc}
//                   alt={product.imageAlt}
//                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>
//               <div className="flex justify-between p-5 mt-0">
//                 <div>
//                   <h3 className="text-md text-gray-700">
//                     <a href={product.href}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-md text-gray-500">{product.color}</p>
//                 </div>
//                 <p className="text-xl font-medium text-gray-900">
//                   {product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </>
//   );
// }

// import { useFetch } from "../useFetch";

// import { Suspense } from "react";
// import { fetchData } from "./fetchData";

// const apiData = fetchData("https://fakestoreapi.com/products");
// export function Products() {
//   const data = apiData.read();
//   return (
//     <>
//       <div>
//         <h1>fetch</h1>
//         <Suspense fallback={<h1>Loading...</h1>}>
//           <ul>
//             {data?.map((product) => (
//               <li key={product.id}>
//                 <img
//                   src={product.image}
//                   alt={`imagen de ${product.name}`}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src =
//                       "https://conectemos.com/wp-content/uploads/2020/11/servidor-caido.jpg";
//                   }}
//                 />
//               </li>
//             ))}
//           </ul>
//         </Suspense>
//       </div>
//     </>
//   );
// }

// import { Suspense } from "react";
// import { fetchData } from "./fetchData";
// import { useState } from "react";

// const apiData = fetchData("https://fakestoreapi.com/products");

// export function Products() {
//   const data = apiData.read();
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Map the data to match the structure of your previous products array
//   const mappedData = data.map((product) => ({
//     id: product.id,
//     name: product.title,
//     href: "#",
//     imageSrc: product.image,
//     imageAlt: `Front of ${product.title}`,
//     price: `$${product.price}`,
//     color: product.category,
//   }));

//   return (

//     <div className="bg-white p-16">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900 bg-gray-200 text-center max-w-80 rounded-xl">
//           Customers also purchased
//         </h2>

//         <div className="mt-6 p- grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-gray-200 rounded-xl">
//           <Suspense fallback={<h1>Loading...</h1>}>
//             {mappedData.map((product) => (
//               <div key={product.id} className="group relative">
//                 <div className=" p-6 aspect-h-1 aspect-w-1 w-full overflow-hidden  rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <img
//                     src={product.imageSrc}
//                     alt={product.imageAlt}
//                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src =
//                         "https://conectemos.com/wp-content/uploads/2020/11/servidor-caido.jpg";
//                     }}
//                   />
//                 </div>
//                 <div className="flex justify-between p-5 mt-0">
//                   <div>
//                     <h3 className="text-md text-gray-700">
//                       <a href={product.href}>
//                         <span aria-hidden="true" className="absolute inset-0" />
//                         {product.name}
//                       </a>
//                     </h3>
//                     <p className="mt-1 text-md text-gray-500">
//                       {product.color}
//                     </p>
//                   </div>
//                   <p className="text-xl font-medium text-gray-900">
//                     {product.price}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Suspense>
//         </div>
//       </div>

//       {selectedProduct && ( // Condicional para mostrar el modal
//         <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { Suspense } from "react";
import { fetchData } from "./fetchData";
import { ProductModal } from "./ProductModal";
const apiData = fetchData("https://fakestoreapi.com/products");

export function Products() {
  const data = apiData.read();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const mappedData = data.map((product) => ({
    id: product.id,
    name: product.title,
    href: "#",
    imageSrc: product.image,
    imageAlt: `Front of ${product.title}`,
    price: `$${product.price}`,
    color: product.category,
  }));

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900  bg-gray-200  dark:bg-gray-900  dark:text-white text-center max-w-80 rounded-xl">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-gray-200 dark:bg-gray-900 rounded-xl">
          <Suspense fallback={<h1>Loading...</h1>}>
            {mappedData.map((product) => (
              <div
                key={product.id}
                className="group relative bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="p-4 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://conectemos.com/wp-content/uploads/2020/11/servidor-caido.jpg";
                    }}
                  />
                </div>
                <div className="flex justify-between p-5 mt-0">
                  <div>
                    <h3 className="text-md text-gray-700 dark:text-white">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-md text-gray-500 dark:text-white">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-xl font-medium text-gray-900 dark:text-white">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

