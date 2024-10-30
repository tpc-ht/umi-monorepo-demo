import {defineConfig} from "umi";

export default defineConfig({
  mfsu: {exclude: ['@crm/components']},
  monorepoRedirect: {},
  routes: [
    {path: "/", component: "index"},
    {path: "/docs", component: "docs"},
  ],
  npmClient: "pnpm",
});
