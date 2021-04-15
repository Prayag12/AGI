import React, { Component } from 'react';
import './services.css'
import webdesign from './imagesService/website-design.png'
import info from './imagesService/information.png'
import cloudC from './imagesService/cloud-computing.png'
import dev from './imagesService/development.png'
import data from './imagesService/data.png'
import monitor from './imagesService/monitor.png'
import graphicD from './imagesService/graphic-design.png'
import UI from './imagesService/user-interface.png'
import graphicDe from './imagesService/graphic-designer.png'
import twoD from './imagesService/2d.png'
import anime from './imagesService/animation.png'
import anima from './imagesService/animate.png'
import joy from './imagesService/joy.png'
import prod from './imagesService/producer.png'

class Services extends Component {
    render() {
        return (

            < div className='tools'>
                <body className='section2'>
                    <h2 className='title' style={{ textAlign: 'center' }}>Services</h2>
                    <div className='row'>

                        <div className="media">
                            <img src={webdesign} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Website Design And UX (Static/Dynamic)</h4>
                                <p>Planning, designing, creating and coding any kind of websites for better experience.</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={info} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Website Management</h4>
                                <p>Managing any existing website (updating information and maintaining the website).</p>
                            </div>
                        </div>

                        <div className="media">
                            <img src={cloudC} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Web Hosting/Domain Hosting</h4>
                                <p>Providing storage space and uploading the content of the website on the internet.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="media" >
                            <img src={dev} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Web Application Development</h4>
                                <p>Development of any application program that can be accessed through the website.</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={data} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Mobile Application Development</h4>
                                <p>Development of any application that runs on a mobile phone (both Android and iOS).</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={monitor} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Packaging Graphics Designs</h4>
                                <p>Designing attractive packaging for your product to make it stable for maketing.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="media" >
                            <img src={graphicD} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Visual Identity Graphic Design</h4>
                                <p>Creating identity of your product to provide its personality, tone, emotions and experience.</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={''} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Marketing & Advertising Graphic Design</h4>
                                <p>Includes designing of flyers, magazines / social media ads, banners, posters, infographics.</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={UI} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>User Interface Graphic Design</h4>
                                <p>Designing user’s visual experience and the design of on-screen graphic elements of any digital application.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="media" >
                            <img src={graphicDe} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Publication Graphic Design</h4>
                                <p>Graphic design for printed matter for designing of books, magazines, catalogues, reports.</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={twoD} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>2D Animation</h4>
                                <p>Creating a movement of characters, creatures, and background in a two-dimensional space.</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={anime} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Motion Graphic Design</h4>
                                <p>Bringing the storyboards to life with animation, video and traditional art (Advertisements, GIFs, Presentations, Promotional / Tutorial videos).</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="media" >
                            <img src={anima} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>3D Animation</h4>
                                <p>Bringing characters, props, images, and static scenes more to life within videos or other platforms.</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={joy} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>White Board Animation</h4>
                                <p>Creating videos to look like the content is being hand-drawn on a white background.</p>
                            </div>
                        </div>
                        <div className="media" >
                            <img src={prod} className="align-self-start mr-3" style={{ width: '60px', paddingLeft: '15px', paddingTop: '15px' }} />
                            <div className="media-body">
                                <h4>Video Editing</h4>
                                <p>Manipulating and arranging of video clips to make it attractive and meaningful.</p>
                            </div>
                        </div>
                    </div>
                </body>
            </div >
        )
    }
} export default Services;