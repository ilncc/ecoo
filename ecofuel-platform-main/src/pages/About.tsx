import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const stats = [
    { value: "2019", label: "Год основания", icon: "Calendar" },
    { value: "500+", label: "Партнеров", icon: "Users" },
    { value: "50М л", label: "Поставлено топлива", icon: "Droplets" },
    { value: "85%", label: "Довольных клиентов", icon: "Heart" },
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Генеральный директор",
      experience: "15 лет в нефтегазовой отрасли",
      description: "Эксперт по экологическим технологиям в энергетике",
    },
    {
      name: "Мария Сидорова",
      position: "Директор по развитию",
      experience: "12 лет в B2B продажах",
      description: "Специалист по построению партнерских отношений",
    },
    {
      name: "Дмитрий Козлов",
      position: "Технический директор",
      experience: "18 лет в химической промышленности",
      description: "Руководитель отдела контроля качества топлива",
    },
  ];

  const values = [
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Приоритет экологической безопасности во всех решениях",
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Гарантированное качество и соблюдение всех стандартов",
    },
    {
      icon: "Users",
      title: "Партнерство",
      description: "Долгосрочные отношения, основанные на взаимной выгоде",
    },
    {
      icon: "Zap",
      title: "Инновации",
      description: "Внедрение передовых технологий в сфере экотоплива",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero секция */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            О компании ЭкоТопливо
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ведущая платформа посреднических услуг в сфере экологически чистых
            нефтепродуктов. Соединяем поставщиков и потребителей ради
            устойчивого развития планеты.
          </p>
        </div>

        {/* Статистика */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-green-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={stat.icon}
                      size={24}
                      className="text-green-600"
                    />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Наша миссия */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы создаем экосистему устойчивого развития в энергетической
                отрасли, обеспечивая доступ к экологически чистым нефтепродуктам
                для всех участников рынка.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наша платформа объединяет поставщиков экотоплива с
                потребителями, предоставляя полный спектр посреднических услуг:
                от подбора оптимального продукта до организации логистики и
                сертификации.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  Наша цель к 2030 году:
                </h3>
                <p className="text-green-700">
                  Снизить углеродный след транспортной отрасли России на 25%
                  через популяризацию экологичного топлива.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1497436072909-f5e4be9e6ed0?w=500"
                alt="Экологичное производство"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-green-100 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={value.icon}
                      size={24}
                      className="text-green-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Команда */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Наша команда
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-green-100 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {member.experience}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Достижения */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-8">Наши достижения</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">1500+</div>
                  <div className="opacity-90">Успешных сделок</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">15М₽</div>
                  <div className="opacity-90">Оборот в месяц</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50</div>
                  <div className="opacity-90">Регионов присутствия</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <div className="opacity-90">Выполненных поставок</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Контактная информация */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Phone"
                  size={32}
                  className="text-green-600 mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (800) 555-01-01</p>
                <p className="text-sm text-gray-500">Круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Mail"
                  size={32}
                  className="text-green-600 mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@ecotoplivo.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MapPin"
                  size={32}
                  className="text-green-600 mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">Москва, Лубянский пр., 20с1</p>
                <p className="text-sm text-gray-500">Офис 301, 3 этаж</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
