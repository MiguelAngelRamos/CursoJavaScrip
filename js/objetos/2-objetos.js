//* Objetos sobre objetos

const sitioWeb = {
  nombre: 'Google',
  link: { enlace: 'www.google.cl' },
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/google',
      nombre: 'Google'
    }
  }
};

//* Como obtengo el enlace de youtube
console.log(sitioWeb.redesSociales.youtube.enlace);

//* Destructuring (Desmenuzar)
//* const { enlace, nombre } = sitioWeb.redesSociales.youtube;
//* console.log(enlace);

// const {nombre, link, redesSociales} = sitioWeb;
// const { youtube } = redesSociales;
// const {enlace} = youtube;
//* redesSociales: { youtube: { enlace }} (todo esto recibe el nombre de enlace)
const {nombre, redesSociales, redesSociales: { youtube: { enlace }} } = sitioWeb;
console.log(enlace);