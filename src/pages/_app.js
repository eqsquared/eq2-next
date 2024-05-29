import '../styles/globals.css';

const Header = () => (
    <header className="header">
        <div className="logo">
            <img src="/img/logo-eq2-color-square.svg" alt="EQ² Logo" />
        </div>
        <nav className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div className="header-cta">
            <a href="#" className="header-cta-button button button-edit">Get Your Team Diagnosis</a>
        </div>
    </header>
);

const Footer = () => (
    <footer className="final-cta section">
        <h2>Ready To Revolutionize Your Hiring Process?</h2>
        <a href="#" className="cta-button">Get Started Now</a>
    </footer>
);

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
