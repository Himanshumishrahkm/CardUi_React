
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import {jobs} from './UserData/data.jsx'


createRoot(document.getElementById('root')).render(
 
    <App jobs={jobs}/>
 
)
