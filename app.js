import express from 'express'
import config from "./config.js";

const app = express()

app.listen(config.port, () => {
    console.log('ff11')
})