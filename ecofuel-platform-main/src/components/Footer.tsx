import React from "react";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
                <Link to="/catalog" className="hover:text-white">
                  Бензин ЭКО
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-white">
                  Дизельное топливо
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-white">
                  Газовое топливо
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-white">
                  Биотопливо
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-white">
                  Подбор топлива
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Логистика
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Сертификация
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Утилизация
                </Link>
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
  );
};

export default Footer;
