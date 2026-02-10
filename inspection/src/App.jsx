// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // Layout Component (New!)
// import MainLayout from './Components/Mainlayout.jsx';

// // Page Components
// import CarfaxHero from './Components/Hero.jsx';
// import FeaturesSection from './Components/Info.jsx';
// import VinFraudSection from './Components/VinSection.jsx';
// import VehicleHistorySection from './Components/VehicalHistorySection.jsx';
// import TrustedBySection from './Components/TrustedBySection.jsx';
// import VehicalHistoryReport from './Components/VehicalHistoryReport.jsx';
// import SampleReport from './Components/SampleReport.jsx';
// import VinFraudPage from './Components/Vinfraud.jsx';
// import Learn from './Components/learn.jsx';
// // import VinFraudLanding from './Components/VinFruadCheck.jsx';
// import VinDecoder from './Components/VinDecoder.jsx';
// import RecallCheckPage from './Components/Recallpage.jsx';
// import NotFoundPage from './Components/Errorpage.jsx';
// import SupportCenter from './Components/Support.jsx';
// import PricingPage from './Components/Getreport.jsx';
// import ScrollToTop from './Scrolltop.jsx';
// import CarfaxReport from './Components/ViewReport.jsx'; // Your new report page
// import CarfaxReport1 from './Components/ViewReport1.jsx'; // Your new report page
// import CheckoutPage from './Components/CheckoutPage.jsx';
// import AdminDashboard from './Components/admindashboard.jsx';

// function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToTop />

//       <Routes>
//         {/* --- GROUP 1: Pages WITH Navbar & Footer --- */}
//         <Route element={<MainLayout />}>

//           {/* Main Home Route */}
//           <Route path="/" element={
//             <>
//               <CarfaxHero />
//               <FeaturesSection />
//               <VinFraudSection />
//               <VehicleHistorySection />
//               <TrustedBySection />
//             </>
//           } />

//           {/* Standard Pages */}
//           {/* <Route path="/Vin-fraud-check" element={<VinFraudLanding />} /> */}
//           <Route path="/Support" element={<SupportCenter />} />
//           <Route path="/Get-Report" element={<PricingPage />} />
//           <Route path="/Get-Report/:vin" element={<PricingPage />} />
//           <Route path="/Recall-page" element={<RecallCheckPage />} />
//           <Route path="/Vin-Decoder" element={<VinDecoder />} />
//           <Route path="/sample-report" element={<SampleReport />} />
//           <Route path="/Vin-fraud" element={<VinFraudPage />} />
//           <Route path="/vehical-history" element={<VehicalHistoryReport />} />
//           <Route path="/history" element={<VehicleHistorySection />} />
//           <Route path="/not-found" element={<NotFoundPage />} />
//           <Route path="/checkout" element={<CheckoutPage />} />
//           <Route path="/learn" element={<Learn />} />
//         </Route>

//         {/* --- GROUP 2: Pages WITHOUT Navbar & Footer --- */}
//         {/* This route is outside the MainLayout, so it will be full screen */}
//         <Route path="/view-report" element={<CarfaxReport />} />
//         <Route path="/view-report1" element={<CarfaxReport1 />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- IMPORTS RESTORED TO MATCH YOUR EXISTING FILENAMES ---

// Layout (Note the lowercase 'l')
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- FIXED IMPORTS (Matching your actual lowercase filenames) ---
import MainLayout from './Components/Mainlayout.jsx'; // Lowercase 'l'
import CarfaxHero from './Components/Hero.jsx';
import FeaturesSection from './Components/Info.jsx';
import VinFraudSection from './Components/VinSection.jsx';
import VehicleHistorySection from './Components/VehicalHistorySection.jsx'; // Matches your file
import TrustedBySection from './Components/TrustedBySection.jsx';
import VehicalHistoryReport from './Components/VehicalHistoryReport.jsx'; // Matches your file
import SampleReport from './Components/SampleReport.jsx';
import VinFraudPage from './Components/Vinfraud.jsx'; // Reverted to 'Vinfraud'
import Learn from './Components/learn.jsx'; // Reverted to 'learn'
import VinDecoder from './Components/VinDecoder.jsx';
import RecallCheckPage from './Components/Recallpage.jsx'; // Reverted to 'Recallpage'
import NotFoundPage from './Components/Errorpage.jsx'; // Reverted to 'Errorpage'
import SupportCenter from './Components/Support.jsx';
import PricingPage from './Components/Getreport.jsx'; // Reverted to 'Getreport'
import ScrollToTop from './Scrolltop.jsx'; // Reverted to 'Scrolltop'
import CarfaxReport from './Components/ViewReport.jsx';
import CarfaxReport1 from './Components/ViewReport1.jsx';
import CheckoutPage from './Components/CheckoutPage.jsx';
import AdminDashboard from './Components/admindashboard.jsx'; // Reverted to 'admindashboard'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={
            <>
              <CarfaxHero />
              <FeaturesSection />
              <VinFraudSection />
              <VehicleHistorySection />
              <TrustedBySection />
            </>
          } />

          <Route path="/Support" element={<SupportCenter />} />
          <Route path="/Get-Report" element={<PricingPage />} />
          <Route path="/Get-Report/:vin" element={<PricingPage />} />
          <Route path="/Recall-page" element={<RecallCheckPage />} />
          <Route path="/Vin-Decoder" element={<VinDecoder />} />
          <Route path="/sample-report" element={<SampleReport />} />
          <Route path="/Vin-fraud" element={<VinFraudPage />} />
          <Route path="/vehical-history" element={<VehicalHistoryReport />} />
          <Route path="/history" element={<VehicleHistorySection />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/view-report" element={<CarfaxReport />} />
        <Route path="/view-report1" element={<CarfaxReport1 />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;