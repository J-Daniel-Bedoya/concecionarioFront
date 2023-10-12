import { useNavigate } from "react-router-dom";

const ProductCard = (vehicle) => {
  const navigate = useNavigate();
  const productInfo = vehicle.vehicle;

  return (
    <div
      className="card"
      onClick={() => navigate(`/home/products/${productInfo.id}`)}
    >
      <div className="card__img">
        <img src={productInfo?.img} />
      </div>
      <div className="card__info">
        <h3 className="card__info--title">{productInfo.modelo}</h3>
        <p
          className="card__info--state"
          style={{ color: productInfo.esNuevo ? "#09ba41" : "#954809" }}
        >{`${productInfo.esNuevo ? "Nuevo" : "Usado"}`}</p>

        {!productInfo.esNuevo && (
          <p className="card__info--klm">
            KM: <span>{productInfo.kilometraje}</span>
          </p>
        )}
        {productInfo.tipo?.toLowerCase() === "moto" && (
          <>
            <p className="card__info--clj">
              Cilindraje: <span>{productInfo.cilindraje}</span>
            </p>
            <p className="card__info--vls">
              Velocidades: <span>{productInfo.numVelocidades}</span>
            </p>
          </>
        )}
        <p className="card__info--date">{`${productInfo.fechaRegistro}`}</p>
        <p className="card__info--price">
          <span>$</span>
          {productInfo.precio}
        </p>
      </div>
    </div>
    // </div>
  );
};
export default ProductCard;
