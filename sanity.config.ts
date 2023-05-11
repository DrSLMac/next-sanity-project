import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "r7yvf34y",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-05-11",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;