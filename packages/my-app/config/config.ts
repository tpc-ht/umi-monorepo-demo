import {defineConfig} from "umi";

const {REACT_APP_ENV = ""} = process.env;
console.log("REACT_APP_ENV", REACT_APP_ENV);
export default defineConfig({
  mfsu: {exclude: ['@crm/components']},
  monorepoRedirect: {},
  routes: [
    {path: "/", component: "index"},
    {path: "/docs", component: "docs"},
  ],
  npmClient: "pnpm",
});
