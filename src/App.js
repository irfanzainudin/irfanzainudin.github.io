import './App.css';

// our own components
import Arrow from './components/Arrow';

// our own pages
import Home from './pages/Home';
import WebDevProjects from './pages/WebDevProjects';
import GameDevProjects from './pages/GameDevProjects';

const pages = [
    <Home />,
    <WebDevProjects />,
    // <GameDevProjects />
]

function prevPage() {
    var activePage;
    var pages = document.getElementsByClassName("page")
    for (var i = 0; i < pages.length; i++) {
        if (pages.item(i).classList.contains("active")) {
            activePage = i
            break
        }
    }
    if (activePage === 0) {
        pages.item(pages.length - 1).classList.add("active")
        pages.item(activePage).classList.remove("active")
    } else {
        pages.item(activePage - 1).classList.add("active")
        pages.item(activePage).classList.remove("active")
    }
}

function nextPage() {
    var activePage;
    var pages = document.getElementsByClassName("page")
    for (var i = 0; i < pages.length; i++) {
        if (pages.item(i).classList.contains("active")) {
            activePage = i
            break
        }
    }
    if (activePage === (pages.length - 1)) {
        pages.item(0).classList.add("active")
        pages.item(activePage).classList.remove("active")
    } else {
        pages.item(activePage + 1).classList.add("active")
        pages.item(activePage).classList.remove("active")
    }
}

function App() {
    return (
        <div id="app">
            <Arrow direction="left" className="left" changePage={prevPage} />
            {
                pages.map((page) => {
                    return (
                        page
                    )
                })
            }
            <Arrow direction="right" className="right" changePage={nextPage} />
        </div>
    );
}

export default App;
