import React from 'react'

import { Helmet } from 'react-helmet'

import Link from '../components/link'
import Work from '../components/work'
import Service from '../components/service'
import Author from '../components/author'
import Statistic from '../components/statistic'
import Client from '../components/client'
import Item from '../components/item'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Agency modern template</title>
        <meta property="og:title" content="Agency modern template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <span className="home-company">Pipone.</span>
          </div>
          <div className="home-items">
            <a
              href="mailto:?subject="
              className="home-link start-button button"
            >
              <span className="home-text">hit me up!</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button button">
              <img alt="image" src="/hamburger.svg" className="home-image" />
              <span className="home-text01">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <img alt="image" src="/logo.svg" className="home-logo" />
                  <span className="home-company1">SPYRL</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links">
                  <span className="nav-link">Work</span>
                  <span className="nav-link">Services</span>
                  <span className="nav-link">About</span>
                  <span className="nav-link">Contact</span>
                </div>
                <button className="start-button button home-button1">
                  <span className="home-text06">Start a project</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-header">
          <h1 className="home-title">
            <span className="home-text07">trustworthy</span>
            <span className="home-text08"> </span>
            <span className="home-text09">solutions</span>
            <span className="home-text10"> </span>
            <br className="home-text11"></br>
            <span className="home-text12">for</span>
            <br className="home-text13"></br>
            <span className="home-text14">data-driven</span>
            <span className="home-text15"> </span>
            <span className="home-text16">organizations</span>
            <br className="home-text17"></br>
            <br className="home-text18"></br>
          </h1>
          <p className="home-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod consectetur tempor incididunt.
          </p>
        </div>
      </header>
      <div className="home-video">
        <video
          src
          poster="/video-preview-1500w.png"
          className="home-video1"
        ></video>
      </div>
      <div className="home-description1">
        <div className="home-content">
          <div className="home-text19">
            <p className="home-paragraph">
              We are a team of aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat.
            </p>
            <p className="home-paragraph1">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
          <button className="start-button button home-button2">
            <span className="home-text20">Start a project</span>
          </button>
        </div>
      </div>
      <div className="home-featured">
        <div className="home-header1">
          <h2 className="heading">Featured Work</h2>
          <div className="home-link1">
            <Link
              Caption="100+ Projects"
              rootClassName="link-root-class-name"
            ></Link>
          </div>
        </div>
        <div className="home-list">
          <Work></Work>
          <Work Image="/work%20%232-1500w.png" Title="ZENG"></Work>
          <Work Image="/work%20%233-1500w.png" Title="YORGU"></Work>
        </div>
      </div>
      <div className="home-client">
        <p className="home-text21">
          Become a client aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat.
        </p>
        <button className="start-button button home-button3">
          <span className="home-text22">Start a project</span>
        </button>
      </div>
      <div className="home-services">
        <div className="home-header2">
          <h2 className="heading">SERVICES</h2>
        </div>
        <div className="home-grid">
          <Service rootClassName="service-root-class-name"></Service>
          <Service
            Title="Strategy"
            rootClassName="service-root-class-name1"
          ></Service>
          <Service
            Title="Marketing"
            rootClassName="service-root-class-name5"
          ></Service>
          <Service
            Title="Copywriting"
            rootClassName="service-root-class-name2"
          ></Service>
          <Service
            Title="UI / UX"
            rootClassName="service-root-class-name3"
          ></Service>
          <Service
            Title="Web Development"
            rootClassName="service-root-class-name4"
          ></Service>
        </div>
      </div>
      <div className="home-about">
        <div className="home-header3">
          <h2 className="home-company2">AGNCY</h2>
          <span className="home-description2">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </span>
          <Author></Author>
        </div>
        <div className="home-statistics">
          <button className="start-button button home-button4">
            <span className="home-text23">Join our team</span>
          </button>
          <div className="home-statistic-list">
            <Statistic rootClassName="statistic-root-class-name3"></Statistic>
            <Statistic
              Value="60"
              Caption="Awards"
              rootClassName="statistic-root-class-name"
            ></Statistic>
            <Statistic
              Value="15K"
              Caption="Monthly Visits"
              rootClassName="statistic-root-class-name4"
            ></Statistic>
            <Statistic
              Value="70+"
              Caption="People on board"
              rootClassName="statistic-root-class-name1"
            ></Statistic>
            <Statistic
              Value="300+"
              Caption="Finished projects"
              rootClassName="statistic-root-class-name5"
            ></Statistic>
            <Statistic
              Value="1M"
              Caption="Active Users"
              rootClassName="statistic-root-class-name2"
            ></Statistic>
          </div>
        </div>
        <div className="home-clients">
          <div className="home-header4">
            <h2 className="home-title3 heading">Our Clients</h2>
          </div>
          <div className="home-grid1">
            <div className="home-column">
              <Client
                Avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                Mention="@zeng"
                rootClassName="client-root-class-name"
              ></Client>
              <Client
                Quote="“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“"
                Author="Coco White"
                Avatar="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                Mention="@white_co"
                rootClassName="client-root-class-name1"
              ></Client>
            </div>
            <div className="home-column1">
              <Client
                Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                Author="Jennifer Marle"
                Avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                Mention="@motech"
              ></Client>
              <Client
                Quote="“Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaduis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                Author="Maria Martinez"
                Avatar="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                Mention="@yorgu.official"
              ></Client>
            </div>
          </div>
        </div>
        <div className="home-client-list">
          <div className="home-header5">
            <h2 className="home-title4 heading">Client list</h2>
          </div>
          <div className="home-row">
            <span className="home-text24">2022</span>
            <div className="home-list1">
              <Item></Item>
              <Item Tags="Webdevelopment / Marketing" Title="Aliquaduis"></Item>
              <Item Tags="Strategy / Copywriting" Title="Consequat"></Item>
              <Item Tags="UI / UX" Title="Commodo"></Item>
              <Item Tags="Webdevelopment" Title="Veniam"></Item>
              <Item Tags="Webdevelopment / Marketing" Title="Fugiat"></Item>
            </div>
          </div>
          <div className="home-row1">
            <span className="home-text25">2021</span>
            <div className="home-list2">
              <Item></Item>
              <Item Tags="Webdevelopment / Marketing" Title="Aliquaduis"></Item>
              <Item Tags="Strategy / Copywriting" Title="Consequat"></Item>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-information">
          <div className="home-details">
            <div className="home-header6">
              <div className="home-branding2">
                <img alt="image" src="/logo.svg" className="home-logo1" />
                <span className="home-company3">AGNCY</span>
              </div>
              <div className="home-location">
                <span className="home-caption">Office</span>
                <span className="home-value">
                  132, My Street, Bigtown BG23 4YZUnited States
                </span>
              </div>
            </div>
            <div className="home-location1">
              <span className="home-caption1">Let&apos;s talk</span>
              <span className="home-value1">sayhello@agncy.address</span>
            </div>
            <button className="home-button5 start-button button">
              <span className="home-text26">Start a project</span>
            </button>
          </div>
          <div className="home-links1">
            <span className="social">Instagram</span>
            <span className="social">Linkedin</span>
            <span className="social">Twitter</span>
            <span className="social">Dribbble</span>
            <span className="social">Behance</span>
          </div>
        </div>
        <img alt="image" src="/footer-1400w.png" className="home-image1" />
      </footer>
    </div>
  )
}

export default Home
