
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OTPDemo from "./pages/OTPDemo";
import ButtonDemo from "./pages/ButtonDemo";
import ShowcaseOverview from "./pages/ShowcaseOverview";
import StepperDemo from "./pages/StepperDemo";
import InputDemo from "./pages/InputDemo";
import ProfileMenuDemo from "./pages/ProfileMenuDemo";
import HamburgerMenuDemo from "./pages/HamburgerMenuDemo";
import InfoCardDemo from "./pages/InfoCardDemo";
import StatusChipDemo from "./pages/StatusChipDemo";
import UploadFileDemo from "./pages/UploadFileDemo";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/showcases" element={<ShowcaseOverview />} />
          <Route path="/buttons" element={<ButtonDemo />} />
          <Route path="/otp" element={<OTPDemo />} />
          <Route path="/stepper" element={<StepperDemo />} />
          <Route path="/inputs" element={<InputDemo />} />
          <Route path="/profile-menu" element={<ProfileMenuDemo />} />
          <Route path="/hamburger-menu" element={<HamburgerMenuDemo />} />
          <Route path="/info-card" element={<InfoCardDemo />} />
          <Route path="/status-chip" element={<StatusChipDemo />} />
          <Route path="/upload-file" element={<UploadFileDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
