import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import Icon from "@/components/ui/icon";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Icon
              name="ShoppingCart"
              size={24}
              className="mr-2 text-green-600"
            />
            Корзина
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Icon
              name="ShoppingCart"
              size={48}
              className="mx-auto mb-4 text-gray-300"
            />
            <p>Корзина пуста</p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-sm text-green-600">{item.eco}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {(parseFloat(item.price) * item.quantity).toFixed(2)} ₽
                    </p>
                    <p className="text-sm text-gray-500">{item.price} ₽/л</p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Итого:</span>
                <span className="text-xl font-bold text-green-600">
                  {getTotalPrice().toFixed(2)} ₽
                </span>
              </div>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="flex-1"
                >
                  Очистить корзину
                </Button>
                <Button className="flex-1">Оформить заказ</Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
