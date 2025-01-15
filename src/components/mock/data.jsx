import { FaBullseye } from "react-icons/fa6";

const products = [
  {
    id: "001",
    name: "Rebar 6mm",
    price: 3500,
    category: "Rebars",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam dolorum maxime aperiam animi! Illo autem laudantium soluta maiores maxime repudiandae culpa nostrum, suscipit temporibus ex labore, deserunt, sed porro?",
    img: "../Img/varillas.jpg",
    alt: "Rebar photo",
    stock: 1
  },
  {
    id: "002",
    name: "Rebar 8mm",
    price: 6000,
    category: "Rebars",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam dolorum maxime aperiam animi! Illo autem laudantium soluta maiores maxime repudiandae culpa nostrum, suscipit temporibus ex labore, deserunt, sed porro?",
    img: "../Img/varillas.jpg",
    alt: "Rebar photo",
    stock: 5
  },
  {
    id: "003",
    name: "Rebar 10mm",
    price: 10250,
    category: "Rebars",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquam dolorum maxime aperiam animi! Illo autem laudantium soluta maiores maxime repudiandae culpa nostrum, suscipit temporibus ex labore, deserunt, sed porro?",
    img: "../Img/varillas.jpg",
    alt: "Rebar photo",
    stock: 10
  },
];

//Promesa de productos (Simula la conexion con un 'servidor' mediante un timeOut)
export const getProducts = () => { //el EXPORT aca es para exportar SOLO LA FUNCION, y no todo el archivo data
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        //si no hay error:
        resolve(products);
      } else {
        //si no se cumple lo anterior, es decir hay error:
        reject('ups! hubo un error, lo sentimos, intentelo mas tarde');
      }
    }, 3000);
  });
};
