function HomeLayout({ navbar, hero, footer, aboute }) {
  return (
    <div>
      <header className="bg-secondary px-6 md:px-12 lg:px-28 overflow-hidden py-4">
        {navbar}
      </header>
      <main>
        <section className="md:my-30 px-8 md:px-16 py-8 md:py-12 xl:px-28">{hero}</section>
        <section className="bg-tertiary py-8 md:py-12 mt-12 px-8 md:px-16 xl:px-28">{aboute}</section>
      </main>
      <footer>{footer}</footer>
    </div>
  );
}

export default HomeLayout;
