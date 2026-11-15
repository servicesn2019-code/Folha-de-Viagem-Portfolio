export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>Sistema Administrativo</h1>
        <br /><br /><br />
        <form>
          <label htmlFor="nameUser">Nome:</label>
          <input type="text" name="nameUser" id="nameUser" placeholder="Nome do Usuario" />
          <br />
          <label htmlFor="emailUser">E-mail:</label>
          <input type="email" name="emailUser" id="emailUser" placeholder="Email Usuario" />
          <br />
          <button type="submit" className="cursor-pointer">Registrar</button>
        </form>
      </main>
    </div>
  );
}
