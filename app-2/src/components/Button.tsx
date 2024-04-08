import { useSelector, useDispatch } from "react-redux";
import { Button as AntButton } from "antd";
import { RootState, AppDispatch } from "../store/store";
import { addItem, removeItem } from "../store/cartSlice";

const CartButtons = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  console.log("🚀 ~ CartButtons ~ items:", items);
  const itemsCount = items.length;
  const dispatch = useDispatch<AppDispatch>();

  const exampleItem = {
    id: Math.random(),
    name: "Produto Exemplo",
    price: 9.99,
  };

  const handleAddItem = () => {
    dispatch(addItem(exampleItem));
  };

  const handleRemoveItem = () => {
    if (itemsCount > 0) {
      const lastItemId = items[items.length - 1].id;
      dispatch(removeItem(lastItemId));
    }
  };

  return (
    <div>
      <AntButton
        onClick={handleAddItem}
        type="primary"
        style={{ margin: "0 8px" }}
      >
        Adicionar ao Carrinho
      </AntButton>
      <AntButton
        onClick={handleRemoveItem}
        type="dashed"
        style={{ margin: "0 8px" }}
      >
        Remover do Carrinho
      </AntButton>
      <p>Itens no Carrinho: {itemsCount}</p>
    </div>
  );
};

export default CartButtons;
