# React + TypeScript + Vite => MoviesAppProject

Visit and test site on: [ericlouteiro_movies.com](https://react-movies-app-9pff.onrender.com/)

Main package used in this project:

- Zustand
- React-router
- AntDesing StyledComponents
- Axios
- Animations: Animate.css
- Yarn package manager

## Run on localhost:

### With Docker compose:

- Copy docker-compose.yml file into a directory and run the command: `docker compose up -d`( Image will be pulled from DockerHub public repository)

### With yarn

- Fork repository and install node modules
- Add an .env file with apiKey, recommended_movies and current_movies enviroment variables ( recommended and current movies have to be separated by ";" character )
- Run the project with the command `yarn dev`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
