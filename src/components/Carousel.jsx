import { Carousel } from "antd";

export function CarouselShop() {
  return (
    <>
      {/* <Carousel arrows infinite={false}> */}
      <Carousel autoplay className=" pl-10 pr-10 mx-20 -mb-20 rounded pt-4">
        {/* <img src="/src/assets/startImages/ropero.jpg" alt="" className='h-64 w-72 ml-52 rounded-full' /> para todo en el centro */}

        <div >
          <img
            src="/src/assets/Carouselimg/juegomesa.webp"
            alt=""
            className="max-w-full max-h-96 mx-auto rounded-3xl"
          />
        </div>
        <div className=" ">
          <img
            src="/src/assets/Carouselimg/cama.jpeg"
            alt=""
            className="max-w-full max-h-96 mx-auto rounded-3xl"
          />
        </div>
        <div className=" ">
          <img
            src="/src/assets/Carouselimg/cama2.png"
            alt=""
            className="max-w-full max-h-96 mx-auto rounded-3xl"
          />
        </div>
      </Carousel>
      {/* con varias imagenes */}
      {/* <div className="border-4 border-red-700 h-80 ">
            <img
              src="/src/assets/startImages/ropero.jpg"
              alt=""
              className="max-w-full h-full float-left pl-3"
            />
            <img
              src="/src/assets/startImages/ropero.jpg"
              alt=""
              className="max-w-full h-full float-left"
            />
            <img
              src="/src/assets/startImages/ropero.jpg"
              alt=""
              className="max-w-full h-full float-left"
            />
            <img
              src="/src/assets/startImages/ropero.jpg"
              alt=""
              className="max-w-full h-full float-left"
            /> */}
    </>
  );
}
