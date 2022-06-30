import React, { Component } from 'react';
import Zmage from "react-zmage";
import Fade from 'react-reveal';


let id = 0;
class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map(function (projects) {
        let projectImage = "images/portfolio/" + projects.image;

        return (
            <div key={id++} className="columns portfolio-item">
            <div className="item-wrap">
                <Zmage alt={projects.title} src={projectImage} />
                <div style={{ textAlign: "center" }}>{projects.title}</div>
            </div>
            </div>
        );
        });

        return (
        <section id="portfolio">
            <Fade left duration={1000} distance="40px">
            <div className="row">
                <div className="twelve columns collapsed">
                <h1>Check Out Some of My Work</h1>

                <div
                    id="portfolio-wrapper"
                    className="bgrid-quarters s-bgrid-thirds cf"
                >
                    {projects}
                </div>
                </div>
            </div>
            </Fade>
        </section>
        );
    }
}

// function Portfolio() {


//     return(
//         <section className='flex'>
//             <div className='proj-container'>
                
//                 {/* project 1 */}
//                 <div className='project'>
//                     <h1>The B Word</h1>
//                     <a className='link' href='https://limitless-journey-42984.herokuapp.com/' target="_blank">
//                         <img src={require(`../../assets/images/bword.jpg`)} />
//                     </a>

//                 </div>

//             </div>
//         </section>
//     )
// }

export default Portfolio;