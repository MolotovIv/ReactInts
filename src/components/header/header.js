function Header() {
  return (
    <header>
      <div className="headerleft">
        <img
          width={40}
          height={40}
          id="logo"
          src="/img/logo.png"
          alt="logo"
        ></img>
        <div className="header-info">
          <h2>SOMEFLEX STORE</h2>
          <h4>Магазин спортивной одежды</h4>
        </div>
      </div>
      <div className=" header-right">
        <h1> FORM AUTORIZATION</h1>
      </div>
    </header>
  );
}
export default Header;
