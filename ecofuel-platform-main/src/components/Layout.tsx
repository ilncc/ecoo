import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";
import CartModal from "@/components/modals/CartModal";
import AuthModal from "@/components/modals/AuthModal";
import Footer from "@/components/Footer";

/**
 * Основной Layout компонент - обертка для всех страниц
 * Содержит Header с навигацией, корзиной, авторизацией и Footer
 * Управляет состоянием модальных окон корзины и авторизации
 */
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Хуки для работы с корзиной и авторизацией
  const { getTotalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();

  // Состояния модальных окон
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Элементы навигационного меню
   * active - определяет активную страницу по URL
   */
  const navItems = [
    { to: "/catalog", label: "Каталог", icon: "ShoppingBag" },
    { to: "/services", label: "Услуги", icon: "Settings" },
    { to: "/ecology", label: "Экология", icon: "Leaf" },
    { to: "/about", label: "О нас", icon: "Info" },
  ];

  /**
   * Проверка активной страницы для выделения в навигации
   */
  const isActivePage = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - фиксированная шапка сайта */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Логотип и название компании */}
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Icon name="Leaf" size={32} className="text-green-600" />
              <span className="text-2xl font-bold text-gray-900">
                ЭкоТопливо
              </span>
            </Link>

            {/* Навигационное меню для десктопа */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md font-medium transition-colors ${
                    isActivePage(item.to)
                      ? "text-green-600 bg-green-50" // Активная страница
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50" // Неактивная
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Правая часть Header - поиск, корзина, авторизация */}
            <div className="flex items-center space-x-4">
              {/* Поле поиска (скрыто на мобильных) */}
              <div className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder="Поиск нефтепродуктов..."
                  className="w-80 px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Icon
                  name="Search"
                  size={20}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>

              {/* Кнопка корзины с счетчиком товаров */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <Icon name="ShoppingCart" size={20} />
                {/* Индикатор количества товаров в корзине */}
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>

              {/* Блок авторизации */}
              {isAuthenticated ? (
                /* Если пользователь авторизован - показываем профиль */
                <div className="flex items-center space-x-2">
                  <span className="hidden md:block text-sm text-gray-600">
                    {user?.phone}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={logout}
                    className="text-gray-600 hover:text-red-600"
                  >
                    <Icon name="LogOut" size={16} className="mr-1" />
                    Выйти
                  </Button>
                </div>
              ) : (
                /* Если не авторизован - кнопка входа */
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setIsAuthOpen(true)}
                >
                  <Icon name="User" size={16} className="mr-2" />
                  Войти
                </Button>
              )}

              {/* Кнопка мобильного меню */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
              </Button>
            </div>
          </div>

          {/* Мобильное меню (показывается при клике на гамбургер) */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-green-100 py-4">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md font-medium transition-colors ${
                      isActivePage(item.to)
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                    }`}
                  >
                    <Icon name={item.icon} size={16} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Поиск для мобильной версии */}
              <div className="mt-4 px-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Icon
                    name="Search"
                    size={16}
                    className="absolute right-3 top-3 text-gray-400"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Основной контент страницы */}
      <main className="flex-1">{children}</main>

      {/* Footer - подвал сайта */}
      <Footer />

      {/* Модальные окна */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default Layout;
