import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import store from './store'

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	)
}

export default App
