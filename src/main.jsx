
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BmiContextProvider } from './context/bmiContext.jsx'
import { DarkModeContextProvider } from './context/darkContext.jsx'
import {BrowserRouter} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DarkModeContextProvider>
        <BmiContextProvider>
        <BrowserRouter>
            <App />
            <ToastContainer
                position="top-center"
                autoClose={2000}
            />
        </BrowserRouter>
        </BmiContextProvider>
    </DarkModeContextProvider>

)
