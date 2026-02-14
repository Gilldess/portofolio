function HomeLayout({ navbar, hero, footer }) {
  return (
    <div>
      <header className="bg-secondary px-6 md:px-12 lg:px-28 py-4">
        {navbar}
      </header>
      <main>
        <section>{hero}</section>
      </main>
      <footer>{footer}</footer>
    </div>
  );
}

export default HomeLayout;
