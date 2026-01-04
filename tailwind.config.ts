import {Config} from "tailwindcss"

const config:Config = {
    content:[
        "./app/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}"
    ],
    theme:{
        extend:{
            colors:{
                primary: "#360026",
                "text-primary":"#360026"
            }
        }
    },
    plugins:[]
}

export default config