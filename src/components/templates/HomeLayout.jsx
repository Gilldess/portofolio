import { useState, useEffect } from "react";

function HomeLayout({ navbar, hero, footer, aboute, project, contact }) {
  // 1. Buat state untuk mendeteksi apakah halaman sedang di-scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. Gunakan useEffect untuk memantau pergerakan scroll
  useEffect(() => {
    const handleScroll = () => {
      // Jika di-scroll lebih dari 20px ke bawah, ubah state jadi true
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* 3. Terapkan logika class Tailwind berdasarkan state isScrolled */}
      <header 
        className={`fixed top-0 w-full z-50 px-6 md:px-12 lg:px-28 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "py-3 dark:bg-slate-200/70 bg-slate-900/70 backdrop-blur-md border-b border-slate-300 dark:border-slate-800 shadow-sm" // Kondisi saat di-scroll (Transparan + Blur + Border)
            : "py-5 dark:bg-slate-200 bg-slate-900 border-b border-transparent" // Kondisi awal (Sama dengan Hero, tanpa border)
        }`}
      >
        {navbar}
      </header>
      
      <main>
        <section id="home" className="dark:bg-slate-900 bg-slate-200 mt-16 px-8 md:px-16 py-16 md:py-32 lg:py-44 xl:px-28">
          {hero}
        </section>
        
        <section className="dark:bg-slate-800 bg-slate-300 py-16 md:py-32 lg:py-44 px-8 md:px-16 xl:px-28">
          {aboute}
        </section>
        
        <section className="dark:bg-slate-900 bg-slate-200 px-8 md:px-16 py-16 md:py-32 lg:py-44 xl:px-28">
          {project}
        </section>
        
        <section className="dark:bg-slate-800 bg-slate-300 py-16 md:py-32 lg:py-44 px-8 md:px-16 xl:px-28">
          {contact}
        </section>
      </main>
      
      <footer>{footer}</footer>
    </div>
  );
}

export default HomeLayout;