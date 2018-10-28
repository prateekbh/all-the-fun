import React from "react"
import Header from "./header"
import Footer from "./footer"
import Home from "./pages/home"
import About from "./pages/about"
import Speakers from "./pages/speakers"
import ContactUs from "./pages/contactus"

const pageMap = {
	home: Home,
	about: About,
	speakers: Speakers,
	"contact-us": ContactUs,
}

const DefaultPage = () => <h1> Not Found</h1>

const getPage = pageName => {
	const Page = pageMap[pageName] || DefaultPage
	return <Page />
}

const Body = ({ pageName }) => (
	<body className="body-class index_1 home1">
		<div id="body-wrap">
			<Header />
			{getPage(pageName)}
		</div>
		<Footer />
	</body>
)

export default Body
