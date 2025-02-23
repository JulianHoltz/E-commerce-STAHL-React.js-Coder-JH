

const products = [
  {
    id: "1",
    name: "Rebar 6mm",
    price: 3500,
    category: "Rebars",
    description:"Steel reabar 6mm width, for concrete reinforcement",
    img: "https://i.ibb.co/4Zj4rfGB/varillas6.jpg",
    alt: "Rebar photo",
    stock: 1
  },
  {
    id: "2",
    name: "Rebar 8mm",
    price: 6000,
    category: "Rebars",
    description:"Steel reabar 8mm width, for concrete reinforcement",
    img: "https://i.ibb.co/d42TkbYs/varillas8.jpg",
    alt: "Rebar photo",
    stock: 5
  },
  {
    id: "3",
    name: "Rebar 10mm",
    price: 10250,
    category: "Rebars",
    description:"Steel reabar 10mm width, for concrete reinforcement",
    img: "https://i.ibb.co/v4d6grdW/varillas10.jpg",
    alt: "Rebar photo",
    stock: 10
  },
  {
    id: "4",
    name: "Rebar 12mm",
    price: 16300,
    category: "Rebars",
    description:"Steel reabar 12mm width, for concrete reinforcement",
    img: "https://i.ibb.co/R4jqtz5Y/varillas12.jpg",
    alt: "Rebar photo",
    stock: 1
  },
  {
    id: "5",
    name: "Structural Angle 2x2x1/4",
    price: 46100,
    category: "Beams",
    description:`Steel Beam hot rolled Angle 2" by 2", width 1/4 total length 6m`,
    img: "https://i.ibb.co/0R5kw7tp/Angulo-2x2x1-4.jpg",
    alt: "Hot rolled angle photo",
    stock: 100
  },
  {
    id: "6",
    name: "HEB 200",
    price: 163000,
    category: "Beams",
    description:`Steel Beam hot rolled HEB 200mm by 200mm, total length 12m`,
    img: "https://i.ibb.co/1YR5b8Y7/HEB200.jpg",
    alt: "Hot rolled HEB Beam photo",
    stock: 20
  },
  {
    id: "7",
    name: "Structural Tube 20x20x2",
    price: 35500,
    category: "Beams",
    description:`Steel Beam hot rolled tube 20mm by 20mm e=2mm, total length 6m`,
    img: "https://i.ibb.co/p6QQFmDt/tube2x2-jpeg.jpg",
    alt: "Hot rolled tube photo",
    stock: 20
  },
  {
    id: "8",
    name: "Corrugated steel sheet",
    price: 62300,
    category: "steelShets",
    description:`Corrugated steel sheet C27 6m`,
    img: "https://i.ibb.co/5WwMsfhZ/corrugated-Sheet.jpg",
    alt: "Rufing Steel Sheet",
    stock: 289
  },
  {
    id: "9",
    name: "steel sheet 1/2",
    price: 190300,
    category: "steelShets",
    description:`steel sheet 5 x 8`,
    img: "https://i.ibb.co/xqRf3B7H/Steel-Sheet.jpg",
    alt: `Steel Sheet 1/2"`,
    stock: 18
  },
  {
    id: "10",
    name: "Bosch Power Screwdriver",
    price: 77050,
    category: "PowerTools",
    description:`Bosch - GSR 18V Batery Screwdriver, Batery is not included`,
    img: "https://i.ibb.co/mV02Cn8b/bosch-gsb.jpg",
    alt: `Electrical screwdriver tool`,
    stock: 2
  },
  {
    id: "11",
    name: "Bosch Grinder",
    price: 51209,
    category: "PowerTools",
    description:`Bosch - GWS 850w Grinder`,
    img: "https://i.ibb.co/1fRt5Qd4/amoladora.jpg",
    alt: `Electrical Grinder tool`,
    stock: 4
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
    },1000);
  });
};

//Un item
export const getOneProduct = (id) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      //Version harcodeada
      //resolve(products[2])

      //Version dinamica (hay que incluirle id como dato de entrada!)
      let producto = products.find((item) => item.id === id);
      producto ? resolve (producto) : reject("Producto no encontrado");
    },1000)
  })
}


