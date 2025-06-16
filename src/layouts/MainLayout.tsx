import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NotFound from '@/pages/NotFound'

function MainLayout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>

			<Footer />
		</>
	)
}

export default MainLayout
