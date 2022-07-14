import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
  const { modal, handleModalClick, receta, cargando } = useBebidas();
  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i <= 15; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${i}`]}
            {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };
  return (
    !cargando && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image
          alt={`Imagen receta ${receta.strDrink}`}
          src={receta.strDrinkThumb}
        />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            <p>{receta.strInstructions}</p>
            <h2>Ingredientes y Cantidad</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default ModalBebida;
