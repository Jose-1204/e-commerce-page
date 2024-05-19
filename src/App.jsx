import { Products } from "./components/Products";
import { NavBar } from "./components/NavBar";
import { CarouselShop } from "./components/Carousel";
import { TabsComponent } from "./components/Tabs";
import ThemeSwitch from "./components/ThemeSwitch";

// VComfort
//Concepto: Venta de muebles, decoración y accesorios para el hogar que combinan estilo y funcionalidad.

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <header className="flex justify-between p-4 ">
          <h1></h1>
          <ThemeSwitch />
        </header>
        <NavBar />
        {/* Otros componentes y contenido */}
        <TabsComponent />
        <CarouselShop />
        <Products />
      </div>
    </>
  );
}

export default App;
