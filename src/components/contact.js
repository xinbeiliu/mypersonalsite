import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {

    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                   <Cell col={6}>
                        <h2>Aileen Liu</h2>
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I'm passionate about coding</p>
                   </Cell>
                   <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (123) 456 - 0000
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    someone@example.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    MySkypeID
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                        
                   </Cell>  
                </Grid>
            </div>

            )
    }
}

export default Contact;