import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Страница каталога товаров - основная страница для просмотра и покупки топлива
 * Содержит фильтры, категории товаров, карточки продуктов с возможностью добавления в корзину
 */
const Catalog = () => {
  // Хук для работы с корзиной (добавление товаров)
  const { addItem } = useCart();

  // Состояния для фильтров каталога
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceSort, setPriceSort] = useState("default");

  // Статические данные о категориях топлива с описанием и характеристиками
  const productCategories = [
    {
      id: "gasoline",
      title: "Бензин",
      icon: "Car", // Иконка для отображения
      description: "Экологически чистый бензин с низким содержанием серы",
      color: "bg-blue-50 border-blue-200", // Цветовая схема для карточки
      products: [
        {
          name: "Бензин АИ-92 ЭКО",
          price: "52.80",
          eco: "Евро-5", // Экологический класс
          description: "Улучшенная формула с пониженным содержанием серы",
          availability: "В наличии",
        },
        {
          name: "Бензин АИ-95 ЭКО",
          price: "56.20",
          eco: "Евро-6",
          description: "Премиум качество для современных двигателей",
          availability: "В наличии",
        },
        {
          name: "Бензин АИ-98 Премиум",
          price: "62.90",
          eco: "Класс К5",
          description: "Высокооктановое топливо для спортивных автомобилей",
          availability: "Ограничено",
        },
      ],
    },
    {
      id: "diesel",
      title: "Дизельное топливо",
      icon: "Truck",
      description: "Дизтопливо с улучшенными экологическими показателями",
      color: "bg-green-50 border-green-200",
      products: [
        {
          name: "ДТ Евро-5",
          price: "55.40",
          eco: "Евро-5",
          description: "Стандартное дизельное топливо экологического класса",
          availability: "В наличии",
        },
        {
          name: "ДТ Арктическое",
          price: "57.80",
          eco: "Класс 3",
          description: "Специальная формула для работы при низких температурах",
          availability: "В наличии",
        },
        {
          name: "ДТ Зимнее ЭКО",
          price: "56.90",
          eco: "Евро-6",
          description: "Улучшенные характеристики для зимней эксплуатации",
          availability: "В наличии",
        },
      ],
    },
    {
      id: "gas",
      title: "Газовое топливо",
      icon: "Flame",
      description: "СПГ и КПГ для экологичного транспорта",
      color: "bg-orange-50 border-orange-200",
      products: [
        {
          name: "Метан КПГ",
          price: "28.50",
          eco: "CO2 -25%",
          description:
            "Компримированный природный газ для легкового транспорта",
          availability: "В наличии",
        },
        {
          name: "СПГ для грузовиков",
          price: "32.10",
          eco: "CO2 -20%",
          description: "Сжиженный природный газ для тяжелого транспорта",
          availability: "В наличии",
        },
        {
          name: "Пропан автомобильный",
          price: "26.80",
          eco: "Класс А",
          description: "Автомобильный пропан высокой степени очистки",
          availability: "В наличии",
        },
      ],
    },
    {
      id: "bio",
      title: "Биотопливо",
      icon: "Leaf",
      description: "Возобновляемые виды топлива из биомассы",
      color: "bg-emerald-50 border-emerald-200",
      products: [
        {
          name: "Биодизель B20",
          price: "58.90",
          eco: "CO2 -40%",
          description: "20% биодизеля и 80% обычного дизельного топлива",
          availability: "В наличии",
        },
        {
          name: "Этанол E85",
          price: "45.20",
          eco: "CO2 -60%",
          description: "85% этанола для автомобилей FlexFuel",
          availability: "Ограничено",
        },
        {
          name: "Биометан",
          price: "29.90",
          eco: "CO2 -80%",
          description: "Полностью возобновляемый газ из органических отходов",
          availability: "В наличии",
        },
      ],
    },
  ];

  /**
   * Обработчик добавления товара в корзину
   * @param product - объект товара с характеристиками
   * @param category - категория товара (для группировки в корзине)
   */
  const handleAddToCart = (product: any, category: string) => {
    addItem({
      id: `${category}-${product.name}`, // Уникальный ID товара
      name: product.name,
      price: product.price,
      eco: product.eco,
      category: category,
    });
  };

  /**
   * Фильтрация товаров по выбранной категории
   * Если выбрано "all", показываем все категории
   */
  const filteredCategories =
    selectedCategory === "all"
      ? productCategories
      : productCategories.filter((cat) => cat.id === selectedCategory);

  /**
   * Сортировка товаров внутри каждой категории по цене
   */
  const sortedCategories = filteredCategories.map((category) => ({
    ...category,
    products: [...category.products].sort((a, b) => {
      if (priceSort === "low-high") {
        return parseFloat(a.price) - parseFloat(b.price);
      } else if (priceSort === "high-low") {
        return parseFloat(b.price) - parseFloat(a.price);
      }
      return 0; // Оригинальный порядок для "default"
    }),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок страницы */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог экологичного топлива
          </h1>
          <p className="text-xl text-gray-600">
            Выберите качественное топливо для вашего транспорта
          </p>
        </div>

        {/* Панель фильтров */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Категория топлива
            </label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="gasoline">Бензин</SelectItem>
                <SelectItem value="diesel">Дизельное топливо</SelectItem>
                <SelectItem value="gas">Газовое топливо</SelectItem>
                <SelectItem value="bio">Биотопливо</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Сортировка по цене
            </label>
            <Select value={priceSort} onValueChange={setPriceSort}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировать по" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">По умолчанию</SelectItem>
                <SelectItem value="low-high">Сначала дешевые</SelectItem>
                <SelectItem value="high-low">Сначала дорогие</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Отображение категорий и товаров */}
        <div className="space-y-12">
          {sortedCategories.map((category) => (
            <section key={category.id}>
              {/* Заголовок категории */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Icon
                    name={category.icon}
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              {/* Сетка товаров в категории */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-all duration-300 ${category.color}`}
                  >
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <span className="text-lg">{product.name}</span>
                        {/* Индикатор доступности товара */}
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            product.availability === "В наличии"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {product.availability}
                        </span>
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Цена товара */}
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-green-600">
                            {product.price} ₽
                          </span>
                          <span className="text-sm text-gray-500">/литр</span>
                        </div>

                        {/* Экологические характеристики */}
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <Icon
                              name="Leaf"
                              size={16}
                              className="text-green-600 mr-2"
                            />
                            <span className="text-sm font-medium text-green-700">
                              {product.eco}
                            </span>
                          </div>
                        </div>

                        {/* Кнопка добавления в корзину */}
                        <Button
                          onClick={() =>
                            handleAddToCart(product, category.title)
                          }
                          className="w-full bg-green-600 hover:bg-green-700"
                          disabled={product.availability === "Нет в наличии"}
                        >
                          <Icon
                            name="ShoppingCart"
                            size={16}
                            className="mr-2"
                          />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Сообщение если нет товаров (при фильтрации) */}
        {sortedCategories.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-gray-300 mb-4"
            />
            <h3 className="text-xl font-medium text-gray-500 mb-2">
              Товары не найдены
            </h3>
            <p className="text-gray-400">Попробуйте изменить фильтры поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
