function HomeLayout({ navbar, hero, footer }) {
  return (
    <div>
      <header className="bg-secondary px-6 md:px-12 lg:px-28 overflow-hidden py-4">
        {navbar}
      </header>
      <main className="mt-36 px-8 md:px-16 xl:px-28">
        <section>{hero}</section>
      </main>
      <footer>{footer}</footer>
    </div>
  );
}

export default HomeLayout;
