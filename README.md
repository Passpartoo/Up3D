# Up3D
High definition 3D display on web browser in Javascript


<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Requirements :
  - physics engine : [Rapier](https://github.com/dimforge/rapier)
  - 3D graphics engine : [Three Js](https://threejs.org/)
  - development server : [Vite](https://vitejs.dev/config/server-options)
  - Blender level design skills and mesh
    
# Installation

git clone <[Up3D](https://github.com/Passpartoo/Up3D/)>

# Project Folder
cd <name_folder>

# NPM Installer
```
pnpm install @dimforge/rapier3d-compat -S
```
```
pnpm install three -S
```
```
pnpm install vite -D
```
# Or Yarn Installer
```
yarn add @dimforge/rapier3d
yarn add three
yarn add vite
```
# Steps

## 1. Create your bend file
If you do not have a bend to use, you can create it using [this live preview](https://free3d.com/3d-models/blender)
[this live preview](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/transform/bend.html)

Once you are done, copy paste the content on the left side of the page into a file.
Hint: Don't forget to replace the file name if necessary
You can check out the `examples/bend` file to see a real example.

## 2. Create the project
```
npm run dev
```
or
```
yarn dev
```

For more details about the options run
```
up3d extract --help
```


To follow the styleguide run:
`black source/`

### TODO
- changes tabs to spaces
- add mesh support
- add AI interact
- add a test tool like Jest or Mocha
```
npm test
```
