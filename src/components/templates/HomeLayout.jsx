
function HomeLayout({ navbar, hero, footer, aboute, project }) {
  return (
    <div>
      <header className="bg-secondary fixed top-0 w-full z-50 px-6 md:px-12 lg:px-28 overflow-hidden py-4">
        {navbar}
      </header>
      <main>
        <section className="dark:bg-slate-900 bg-slate-200 mt-16 px-8 md:px-16 py-16 md:py-32 lg:py-44 xl:px-28">{hero}</section>
        <section className="dark:bg-slate-800 bg-slate-300 py-16 md:py-32 lg:py-44 px-8 md:px-16 xl:px-28">{aboute}</section>
        <section className="dark:bg-slate-900 bg-slate-200 px-8 md:px-16 py-16 md:py-32 lg:py-44 xl:px-28">{project}</section>

      </main>
      <footer>{footer}</footer>
    </div>
  );
}

export default HomeLayout;
