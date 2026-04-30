import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const isProduction = process.env.NODE_ENV === "production";
const reactBundle = fileURLToPath(
  new URL(
    `./node_modules/@esm-bundle/react/esm/react.${isProduction ? "production.min" : "development"}.js`,
    import.meta.url,
  ),
);
const reactDomBundle = fileURLToPath(
  new URL(
    `./node_modules/@esm-bundle/react-dom/esm/react-dom.${isProduction ? "production.min" : "development"}.js`,
    import.meta.url,
  ),
);

export default defineConfig({
  base: isProduction ? "/chatgpt-operator-trainer/" : "/",
  esbuild: false,
  resolve: {
    preserveSymlinks: true,
    alias: {
      react: reactBundle,
      '@esm-bundle/react': reactBundle,
      '@esm-bundle/react-dom': reactDomBundle,
    },
  },
  build: {
    minify: false,
  },
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },
  environments: {
    client: {
      keepProcessEnv: false,
    },
  },
});
