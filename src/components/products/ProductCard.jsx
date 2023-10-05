import { useNavigate } from "react-router-dom";

const ProductCard = (vehicle) => {
  const navigate = useNavigate();
  const productInfo = vehicle.vehicle;

  return (
    <div onClick={() => navigate(`/home/products/${productInfo.id}`)}>
      <img src={productInfo?.img} />
      <div>
        <p className="card-body__title">{productInfo.modelo}</p>
        <p style={{ color: productInfo.esNuevo ? "#09ba41" : "#954809" }}>{`${
          productInfo.esNuevo ? "Nuevo" : "Usado"
        }`}</p>

        {!productInfo.esNuevo && (
          <p>
            <b>{productInfo.kilometraje}</b> km
          </p>
        )}
        {productInfo.tipo?.toLowerCase() === "moto" && (
          <>
            <p>
              Cilindraje: <b>{productInfo.cilindraje}</b>
            </p>
            <p>
              Velocidades: <b>{productInfo.numVelocidades}</b>
            </p>
          </>
        )}
        <p className="card-body__registerDate">{`${productInfo.fechaRegistro}`}</p>
        <p className="card-body__price">
          <b>$</b>
          {productInfo.precio}
        </p>
      </div>
    </div>
    // </div>
  );
};
export default ProductCard;
