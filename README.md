# curso-vanilla-js# Character Search App

Una aplicación web que permite buscar y visualizar información de personajes de diferentes universos: Pokémon, Dragon Ball Z y Rick & Morty.

## 🚀 Características

- Búsqueda de personajes por nombre o ID
- Soporte para múltiples APIs:
  - PokéAPI (Pokémon)
  - Dragon Ball API
  - Rick & Morty API
- Visualización de datos en tarjetas con diseño responsive
- Interfaz de usuario intuitiva y fácil de usar

## 📋 Requisitos Previos

- Navegador web moderno
- Servidor local para desarrollo (debido al uso de módulos ES6)

## 🛠️ Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/anegri93/curso-vanilla-js.git
```

2. Navega al directorio del proyecto:
```bash
cd character-search-app
```

3. Abre el proyecto con un servidor local. Por ejemplo, usando Python:
```bash
python -m http.server 8000
```

4. Abre tu navegador y visita:
```
http://localhost:8000
```

## 💻 Uso

1. Selecciona una categoría del menú desplegable:
   - Pokémon
   - Rick & Morty
   - Dragon Ball Z

2. Ingresa el nombre o ID del personaje que deseas buscar
   - Para Pokémon: usa el nombre (ej. "charmander") o número
   - Para Rick & Morty: usa el ID del personaje
   - Para Dragon Ball Z: usa el nombre del personaje

3. Haz clic en "Buscar" para ver la información del personaje

## 🔧 Estructura del Proyecto

```
/
├── index.html
├── styles.css
├── main.js
└── api.js
```

## 🌐 APIs Utilizadas

- [PokéAPI](https://pokeapi.co/): Para información de Pokémon
- [Dragon Ball API](https://dragonball-api.com/): Para personajes de Dragon Ball
- [Rick & Morty API](https://rickandmortyapi.com/): Para personajes de Rick & Morty

## ⚙️ Funcionalidades

- **Búsqueda Flexible**: Permite buscar personajes por nombre o ID
- **Visualización de Datos**: Muestra información relevante en tarjetas
- **Manejo de Errores**: Gestión de errores en las peticiones a las APIs
- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla

## 🖼️ Visualización

La aplicación muestra los siguientes datos para cada tipo de personaje:

### Pokémon
- Imagen del Pokémon
- Nombre
- Habilidades
- Primeros 5 movimientos

### Rick & Morty
- Imagen del personaje
- Nombre
- Estado
- Especie
- Género

### Dragon Ball Z
- Imagen del personaje
- Nombre
- Información adicional del personaje

## 🤝 Contribuir

1. Haz un Fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva característica'`)
4. Haz Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## ✨ Autor

anegri93
