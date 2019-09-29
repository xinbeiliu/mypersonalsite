import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/438/1*0G5zu7CnXdMT9pGbYUTQLQ.png) center / cover'}}></CardTitle>
                    <CardText>
                        Instapic is a user-friendly social media web application. 
                        It combines everything you may need for social media posting, 
                        such as uploading photos with captions or hashtags, liking or 
                        disliking a photo, saving a photo, making comments to photos 
                        posted by other users, search photos by different hashtags, 
                        just like a real Instagram.
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/xinbeiliu/Instapic-project"colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                )

        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>Coming Soon...</h1></div>
                )
        }

    }
    
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Flask</Tab>
                    <Tab>React</Tab>
                </Tabs>


                <section className="projects-grid">
                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>  
                </section>
            </div>
            )
    }
}

export default Projects;