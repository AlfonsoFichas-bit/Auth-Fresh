// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $login_index from "./routes/login/index.tsx";
import * as $register_index from "./routes/register/index.tsx";
import * as $auth_LoginPage from "./islands/auth/LoginPage.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
    "./routes/login/index.tsx": $login_index,
    "./routes/register/index.tsx": $register_index,
  },
  islands: {
    "./islands/auth/LoginPage.tsx": $auth_LoginPage,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
