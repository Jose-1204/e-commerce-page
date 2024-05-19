import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export function TabsComponent() {
  return (
    <>
      <div className="border-2 border-gray-800 max-w-full mx-10 bg-orange-200 rounded-3xl mt-4">
        <Tabs className=" text-gray-900  bg-gray-200  dark:bg-gray-900  dark:text-white">
          <TabList className="flex">
            <Tab className="flex-1 text-lg  py-2 px-4 hover:bg-gray-300 focus:outline-none focus:bg-gray-300  text-gray-900  bg-gray-200  dark:bg-gray-900  dark:text-white hover:dark:bg-gray-800 rounded-l-3xl ">
              Muebles para la habitacion
            </Tab>
            <Tab className="flex-1 text-lg text-gray-900  bg-gray-200  dark:bg-gray-900  dark:text-white py-2 px-4  hover:dark:bg-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
              Para tu comedor
            </Tab>
            <Tab className="flex-1 text-lg text-gray-900  bg-gray-200  dark:bg-gray-900  dark:text-white py-2 px-4 hover:bg-gray-300 focus:outline-none  hover:dark:bg-gray-800 focus:bg-gray-300">
              Articulos de cocina
            </Tab>
            <Tab className="flex-1 text-lg  text-gray-900  bg-gray-200  dark:bg-gray-900  dark:text-white py-2 px-4 rounded-r-3xl hover:bg-gray-300 focus:outline-none  hover:dark:bg-gray-800 focus:bg-gray-300">
              Muebles para el bano
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Contenido para Muebles para la habitacion</p>
            </TabPanel>
            <TabPanel>
              <p>Contenido para Para tu comedor</p>
            </TabPanel>
            <TabPanel>
              <p>Contenido para Articulos de cocina</p>
            </TabPanel>
            <TabPanel>
              <p>Contenido para Muebles para el bano</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}
