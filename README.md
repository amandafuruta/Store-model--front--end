![LetsDev](./public/thumb.svg)

Base Front Web
=============

# About
This repository was organized within the [NextJS](https://nextjs.org/) framework and is used as the basis for our websites.

# How use this template
To use this template just create a new repository and in the creation options choose the ``base-front-web`` template.
<img src="https://user-images.githubusercontent.com/50346240/132269772-b5e92d24-ef1e-4df3-b3b0-79803a2c153a.png"/>

# How run the application

### Clone the repository
```$ git clone [repo url]```
### Go into the repository
```$ cd [project folder]```
### Install dependencies
```$ yarn```

### Run the app
```$ yarn dev```

# How build the application

### Run the scipt
```$ yarn build```
### Run the app in a local server
```$ yarn start```

or

### Run the app in a production server
```$ npx next start -p 8080```

# Package.json

Scripts:

`dev`<br>
Runs next dev which starts Next.js in development mode

`build`<br>
Runs next build which builds the application for production usage

`start`<br>
Runs next start which starts a Next.js local server

`lint`<br>
Runs linter in all project files

# Technologies used in the project.

- [NextJS](https://nextjs.org/)
- [Axios](https://axios-http.com)
- [NextAuth](https://next-auth.js.org)
- [SWR](https://swr.vercel.app)
- [Unform](https://unform.dev)
- [Yup](https://github.com/jquense/yup)
- [HeadlessUI](https://headlessui.dev)

# Env File

```env
AXIOS_BASE_URL=http://localhost:3000/
NEXTAUTH_URL=http://localhost:3000/
```
