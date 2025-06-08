import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import AuthModal from "@/components/modals/AuthModal";
import EcoCalculatorModal from "@/components/modals/EcoCalculatorModal";

const Index = () => {
  const { addItem } = useCart();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const productCategories = [
    {
      title: "Бензин",
      icon: "Car",
      description: "Экологически чистый бензин с низким содержанием серы",
      products: [
        { name: "Бензин АИ-92 ЭКО", price: "52.80", eco: "Евро-5" },
        { name: "Бензин АИ-95 ЭКО", price: "56.20", eco: "Евро-6" },
        { name: "Бензин АИ-98 Премиум", price: "62.90", eco: "Класс К5" },
      ],
    },
    {
      title: "Дизельное топливо",
      icon: "Truck",
      description: "Дизтопливо с улучшенными экологическими показателями",
      products: [
        { name: "ДТ Евро-5", price: "55.40", eco: "Евро-5" },
        { name: "ДТ Арктическое", price: "57.80", eco: "Класс 3" },
        { name: "ДТ Зимнее ЭКО", price: "56.90", eco: "Евро-6" },
      ],
    },
    {
      title: "Газовое топливо",
      icon: "Flame",
      description: "СПГ и КПГ для экологичного транспорта",
      products: [
        { name: "Метан КПГ", price: "28.50", eco: "CO2 -25%" },
        { name: "СПГ для грузовиков", price: "32.10", eco: "CO2 -20%" },
        { name: "Пропан автомобильный", price: "26.80", eco: "Класс А" },
      ],
    },
    {
      title: "Биотопливо",
      icon: "Leaf",
      description: "Возобновляемые виды топлива из биомассы",
      products: [
        { name: "Биодизель B20", price: "58.90", eco: "CO2 -40%" },
        { name: "Этанол E85", price: "45.20", eco: "CO2 -60%" },
        { name: "Биометан", price: "29.90", eco: "CO2 -80%" },
      ],
    },
  ];

  const services = [
    {
      icon: "Search",
      title: "Подбор топлива",
      description: "Поможем выбрать оптимальный вид топлива для ваших задач",
    },
    {
      icon: "Users",
      title: "Поиск поставщиков",
      description: "Найдем надежных поставщиков экологичного топлива",
    },
    {
      icon: "Truck",
      title: "Организация доставки",
      description: "Логистика с соблюдением экологических стандартов",
    },
    {
      icon: "Recycle",
      title: "Утилизация отходов",
      description: "Экологичная переработка нефтепродуктов",
    },
    {
      icon: "Award",
      title: "Сертификация",
      description: "Помощь в получении экологических сертификатов",
    },
    {
      icon: "Calculator",
      title: "Экологический след",
      description: "Расчет и снижение углеродного следа",
    },
  ];

  const ecoInitiatives = [
    {
      title: "Восстановление лесов",
      progress: 85,
      target: "10,000 деревьев",
      icon: "TreePine",
    },
    {
      title: "Очистка водоемов",
      progress: 60,
      target: "50 км береговой линии",
      icon: "Waves",
    },
    {
      title: "Солнечная энергия",
      progress: 75,
      target: "100 МВт мощности",
      icon: "Sun",
    },
  ];

  const handleAddToCart = (product: any, category: string) => {
    addItem({
      id: `${category}-${product.name}`,
      name: product.name,
      price: product.price,
      eco: product.eco,
      category: category,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" size={32} className="text-green-600" />
                <span className="text-2xl font-bold text-gray-900">
                  ЭкоТопливо
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/catalog"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Каталог
                </Link>
                <Link
                  to="/services"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Услуги
                </Link>
                <Link
                  to="/ecology"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Экология
                </Link>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Блог
                </a>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  О нас
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder="Поиск нефтепродуктов..."
                  className="w-80 px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Icon
                  name="Search"
                  size={20}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCalculatorOpen(true)}
              >
                <Icon name="Calculator" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => setIsAuthOpen(true)}
              >
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Экологически чистое топливо
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Снижаем выбросы CO2 и заботимся о будущем нашей планеты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setIsCalculatorOpen(true)}
              className="flex items-center"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Калькулятор экономии
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsAuthOpen(true)}
              className="bg-white text-green-600 hover:bg-green-50 border-white"
            >
              Войти в аккаунт
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Наша продукция
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Card
                key={category.title}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name={category.icon}
                      size={24}
                      className="mr-2 text-green-600"
                    />
                    {category.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.products.map((product) => (
                    <div
                      key={product.name}
                      className="flex flex-col p-3 border rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm">{product.name}</h4>
                        <span className="text-green-600 font-bold">
                          {product.price} ₽/л
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 bg-green-100 px-2 py-1 rounded">
                          {product.eco}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            handleAddToCart(product, category.title)
                          }
                          className="text-xs"
                        >
                          Заказать
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Посреднические услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг для экологически ответственного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-green-100"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={28}
                      className="text-green-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => (window.location.href = "/services")}
                  >
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Экологические инициативы
            </h2>
            <p className="text-xl text-gray-600">
              Наш вклад в сохранение планеты для будущих поколений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ecoInitiatives.map((initiative, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-green-100"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        name={initiative.icon}
                        size={24}
                        className="text-green-600"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {initiative.title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Прогресс</span>
                      <span>{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    <strong>Цель:</strong> {initiative.target}
                  </p>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Поддержать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Присоединяйтесь к экологической революции
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Каждый литр экологичного топлива — это шаг к чистому будущему.
            Начните свой путь к углеродной нейтральности уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Icon name="UserPlus" size={20} className="mr-2" />
              Стать партнером
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Карта инициатив
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Leaf" size={24} className="text-green-400" />
                <span className="text-xl font-bold">ЭкоТопливо</span>
              </div>
              <p className="text-gray-400 mb-4">
                Экологическая платформа для торговли нефтепродуктами
              </p>
              <div className="flex space-x-3">
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Linkedin"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Бензин ЭКО
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Дизельное топливо
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Газовое топливо
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Биотопливо
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Подбор топлива
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Логистика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Сертификация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Утилизация
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (800) 555-01-01
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@ecotoplivo.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Лубянский пр., 20с1
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 ЭкоТопливо. Все права защищены. | Создано для
              устойчивого будущего
            </p>
          </div>
        </div>
      </footer>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <EcoCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
};

export default Index;
