import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {

    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                        alt="avatar" className="avatar-img"
                        />

                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>Python | Flask | Postgres | Html5/CSS | JavaScript | JQuery | React</p>
                        

                        <div className="social-links">

                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/xinbeiliu/">
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/* Github */}
                            <a href="https://github.com/xinbeiliu">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                            </a>

                        </div>
                    </div>


                    </Cell>
                </Grid>
            </div>
            )
    }
}

export default Landing;