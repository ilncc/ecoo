import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Services = () => {
  const mainServices = [
    {
      icon: "Search",
      title: "Подбор топлива",
      description: "Поможем выбрать оптимальный вид топлива для ваших задач",
      features: [
        "Анализ потребностей клиента",
        "Рекомендации по экономии",
        "Расчет экологической эффективности",
        "Техническая поддержка",
      ],
      price: "Бесплатно",
    },
    {
      icon: "Users",
      title: "Поиск поставщиков",
      description: "Найдем надежных поставщиков экологичного топлива",
      features: [
        "База проверенных поставщиков",
        "Сравнение цен и условий",
        "Контроль качества продукции",
        "Юридическое сопровождение",
      ],
      price: "От 15,000 ₽",
    },
    {
      icon: "Truck",
      title: "Организация доставки",
      description: "Логистика с соблюдением экологических стандартов",
      features: [
        "Экологичный транспорт",
        "Оптимизация маршрутов",
        "Страхование грузов",
        "Отслеживание доставки",
      ],
      price: "От 500 ₽/км",
    },
    {
      icon: "Recycle",
      title: "Утилизация отходов",
      description: "Экологичная переработка нефтепродуктов",
      features: [
        "Сбор отработанных материалов",
        "Безопасная переработка",
        "Получение вторичного сырья",
        "Сертификаты утилизации",
      ],
      price: "От 2,500 ₽/т",
    },
    {
      icon: "Award",
      title: "Сертификация",
      description: "Помощь в получении экологических сертификатов",
      features: [
        "Подготовка документации",
        "Взаимодействие с органами",
        "Аудит производства",
        "Поддержка сертификации",
      ],
      price: "От 50,000 ₽",
    },
    {
      icon: "Calculator",
      title: "Экологический аудит",
      description: "Расчет и снижение углеродного следа",
      features: [
        "Измерение выбросов CO₂",
        "План снижения воздействия",
        "Внедрение зеленых технологий",
        "Мониторинг результатов",
      ],
      price: "От 75,000 ₽",
    },
  ];

  const additionalServices = [
    {
      icon: "FileText",
      title: "Консультации по экологии",
      description:
        "Экспертные консультации по вопросам экологического соответствия",
    },
    {
      icon: "BarChart",
      title: "Анализ рынка топлива",
      description: "Аналитические отчеты и прогнозы цен на экотопливо",
    },
    {
      icon: "Shield",
      title: "Страхование грузов",
      description: "Комплексное страхование нефтепродуктов при транспортировке",
    },
    {
      icon: "Clock",
      title: "Срочная доставка",
      description: "Экстренные поставки топлива в сжатые сроки",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h1>
          <p className="text-xl text-gray-600">
            Полный спектр услуг для экологически ответственного бизнеса
          </p>
        </div>

        {/* Основные услуги */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Основные услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-green-100"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-green-600"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-600 mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <div className="text-center mb-3">
                      <span className="text-2xl font-bold text-green-600">
                        {service.price}
                      </span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Заказать услугу
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Дополнительные услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-green-100"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={service.icon}
                        size={24}
                        className="text-green-600"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                      >
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA секция */}
        <div className="mt-16 text-center bg-green-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-6 opacity-90">
            Наши эксперты помогут подобрать оптимальное решение для вашего
            бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
