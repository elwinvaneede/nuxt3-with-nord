# Nuxt 3 with Nord

POC to get the [Nord Design System](https://nordhealth.design/) components working in [Nuxt 3](https://v3.nuxtjs.org) with SSR.

The Nord components are Web Components (built with [Lit](https://lit.dev/)). Server-side rendering these components (their Shadow DOM) is not yet supported in Nuxt, but Lit is working on a Nuxt integration to make this possible in the future. So, initially, this will only be server-side rendering of the Vue templates (light DOM). The Web Components are rendered client side for now.

The Web Components need to be defined after the Vue hydration; otherwise you get hydration warnings where the client DOM differs from the server DOM. The `app:mounted` lifecycle hook seemed to be working for this, but with larger applications, some hydration warnings would start appearing. Using the `page:finish` lifecycle hook instead of `app:mounted` seemed to solve this.

This solution unfortunately doesn't work together with the bundling/tree-shaking of Nuxt, because of the dynamic nature.
And of course, the interface is only visible after hydration is done, and the Web Components are imported/defined.

In an ideal situation, I would like to cherry-pick the components I need in the pages/components with a static import (for example `import '@nordhealth/components/lib/Button.js'` or even better with the upcoming Vue wrappers for optimal DX such as typings in templates: `import { Button } from '@nordhealth/vue')`. And then Nuxt does all the bundling & tree-shaking, and Lit's Nuxt integration handles the SSR & hydration of the Web Components.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
