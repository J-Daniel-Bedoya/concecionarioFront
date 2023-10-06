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
        <p className="card__info--title">{productInfo.modelo}</p>
        <p
          className="card__info--state"
          style={{ color: productInfo.esNuevo ? "#09ba41" : "#954809" }}
        >{`${productInfo.esNuevo ? "Nuevo" : "Usado"}`}</p>

        {!productInfo.esNuevo && (
          <p className="card__info--klm">
            <b>{productInfo.kilometraje}</b> km
          </p>
        )}
        {productInfo.tipo?.toLowerCase() === "moto" && (
          <>
            <p className="card__info--clj">
              Cilindraje: <b>{productInfo.cilindraje}</b>
            </p>
            <p className="card__info--vls">
              Velocidades: <b>{productInfo.numVelocidades}</b>
            </p>
          </>
        )}
        <p className="card__info--date">{`${productInfo.fechaRegistro}`}</p>
        <p className="card__info--price">
          <b>$</b>
          {productInfo.precio}
        </p>
      </div>
    </div>
    // </div>
  );
};
export default ProductCard;
