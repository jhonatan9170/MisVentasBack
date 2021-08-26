import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart1 from "../charts/Chart1";
import Chart2 from "../charts/Chart2";
import Table from '../Table/Table'
import FormProduct from '../Table/FormProduct'

const Main = () => {
  
  var data =[{"Producto":"Iphone","Cantidad":5,"Precio":50,"Marca":"Apple","Modelo":"Iphone 5"},{"Producto":" celular zte primer","Cantidad":20,"Precio":21,"Marca":"zte","Modelo":"primee"},{"Producto":"laptop lenovo z50","Cantidad":10,"Precio":1001,"Marca":"lenovo","Modelo":"z50"},{"Producto":"Yogurt Gloria 1l","Cantidad":20,"Precio":10,"Marca":"gloria","Modelo":"light"}];
  console.log(data[0].Cantidad);
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <div className="main__greeting">
            <h1>Hello Codersbite</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}

        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Ventas</h1>
              </div>
              <div>
              <button type="button" class="btn btn-outline-dar btn-active">Diario</button>
              <button type="button" class="btn btn-outline-dar">Semanal</button>
              <button type="button" class="btn btn-outline-dar">Mensual</button>
              </div>
            </div>
            <Chart1 />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Mas vendidos</h1>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart2/>
          </div >


        </div>

        {/* <!-- CHARTS ENDS HERE --> */}
        <div className="con">
          <Table/>
        </div>
        <div className='con'>
        <FormProduct/>
        </div>
      </div>

    </main>
  );
};

export default Main;
