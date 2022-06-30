import React, { Component } from 'react';
import ReactGA from "react-ga";
import $ from "jquery";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
// import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

// function App() {
//   const [categories] = useState([
//     { name: 'About Me' },
//     { name: 'Portfolio' },
//     { name: 'Contact' },
//     { name: 'Resume' }
//   ]);
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   return (
//     <div>
//       <Header
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//       ></Header>
//       <main>
//         <div>
//           { currentCategory.name === 'About Me' && 
//           <About currentCategory={currentCategory}></About> }
//           {/* <ContactForm></ContactForm> */}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        {/* <Resume data={this.state.resumeData.resume} /> */}
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
