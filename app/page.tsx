'use client'
import BlogList from "@/Components/BlogList";
import Headers from "@/Components/Header";
import Footer from "@/Components/Footer";
import ToastContainer from "@/Components/ToastContainer";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
    <ToastContainer theme="dark"/>
    <Headers />
    <BlogList/>
    <Footer />
    </>
  );
}
