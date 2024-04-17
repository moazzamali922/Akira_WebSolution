import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './compenents/Footer';
import Header from './compenents/Header';
import Hero from './compenents/Hero';
import Engagement from './compenents/Engagement';
import WatsonAssistantLoader from './compenents/watsonScript';
const NewsLetter = React.lazy(() => import('./compenents/NewsLetter'));
const HeadlineCards = React.lazy(() => import('./compenents/HeadlineCards'));
const OtherHero = React.lazy(() => import('./compenents/OtherHero'));
const BookAMeeting = React.lazy(() => import('./compenents/BookAMeeting'));
const Pricing = React.lazy(() => import('./compenents/Pricing'));
const TestimonialsPage = React.lazy(() => import('./compenents/Testimonials'));
const Solutions = React.lazy(() => import('./compenents/Solutions'));
const Video = React.lazy(() => import('./compenents/Video'));
const PrivacyPolicy = React.lazy(() => import('./compenents/PrivacyPolicy'));
const LoadingIndicator = () => <div>Loading...</div>; // Replace with your loading indicator component

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <React.Fragment>
                  <Hero />
                  <Engagement />
                  <HeadlineCards />
                  <NewsLetter />
                  {/* <OurPartners /> */}
                </React.Fragment>
              </Suspense>
            }
          />
          <Route
            path="/CaseStudies"
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <React.Fragment>
                  <OtherHero />
                  <TestimonialsPage />
                </React.Fragment>
              </Suspense>
            }
          />
          <Route
            path="/solutions"
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <React.Fragment>
                  <OtherHero />
                  <Solutions />
                  <Video />
                  <BookAMeeting />
                  <NewsLetter />
                </React.Fragment>
              </Suspense>
            }
          />
          <Route
            path="/Connect"
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <React.Fragment>
                  <OtherHero />
                  <NewsLetter />
                </React.Fragment>
              </Suspense>
            }
          />
          <Route
            path="/PrivacyPolicy"
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="/Pricing"
            element={
              <Suspense fallback={<LoadingIndicator />}>
                <Pricing />
              </Suspense>
            }
          />
        </Routes>
      </div>

      {/* WATSON ASSISTANT SCRIPT BEING PULLED IN VIA REACT */}
      {/* Other components and content */}
      <WatsonAssistantLoader />
      
      <Footer />
    </Router>
  );
}

export default App;
