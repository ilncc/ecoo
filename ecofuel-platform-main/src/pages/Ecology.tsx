import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Ecology = () => {
  const ecoFacts = [
    {
      icon: "TreePine",
      title: "Углеродный след",
      description:
        "Наше экотопливо снижает выбросы CO₂ на 40-80% по сравнению с обычным топливом",
      impact: "-15 млн тонн CO₂ в год",
    },
    {
      icon: "Droplets",
      title: "Качество воздуха",
      description:
        "Экологичное топливо содержит на 90% меньше серы и токсичных веществ",
      impact: "Чистый воздух для 2 млн человек",
    },
    {
      icon: "Recycle",
      title: "Биоразложение",
      description:
        "Биотопливо полностью разлагается в природе за 28 дней без вреда экосистемам",
      impact: "100% экологическая безопасность",
    },
    {
      icon: "Leaf",
      title: "Возобновляемость",
      description:
        "Источники биотоплива восстанавливаются в 50 раз быстрее нефти",
      impact: "Устойчивое развитие на века",
    },
  ];

  const ourInitiatives = [
    {
      title: "Лесовосстановление",
      description:
        "Высаживаем по 1 дереву за каждые 100 литров проданного экотоплива",
      progress: 85,
      target: "50,000 деревьев к 2025 году",
      icon: "TreePine",
    },
    {
      title: "Очистка водоемов",
      description:
        "Программа восстановления экосистем рек и озер в регионах поставок",
      progress: 60,
      target: "100 км береговой линии",
      icon: "Waves",
    },
    {
      title: "Солнечная энергия",
      description: "Переход АЗС партнеров на возобновляемые источники энергии",
      progress: 75,
      target: "200 МВт зеленой энергии",
      icon: "Sun",
    },
    {
      title: "Образование",
      description:
        "Программы экологического просвещения в школах и университетах",
      progress: 90,
      target: "100,000 учащихся",
      icon: "GraduationCap",
    },
  ];

  const comparisons = [
    {
      category: "Выбросы CO₂",
      traditional: "2.3 кг/л",
      eco: "0.9 кг/л",
      improvement: "-60%",
    },
    {
      category: "Содержание серы",
      traditional: "50 мг/кг",
      eco: "5 мг/кг",
      improvement: "-90%",
    },
    {
      category: "Срок разложения",
      traditional: "100+ лет",
      eco: "28 дней",
      improvement: "+99%",
    },
    {
      category: "Токсичность",
      traditional: "Высокая",
      eco: "Минимальная",
      improvement: "-85%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero секция */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Экология и наше топливо
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы не просто продаем топливо — мы создаем будущее, в котором
            экономический рост не противоречит сохранению природы
          </p>
        </div>

        {/* Экологические факты */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Почему экотопливо важно
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ecoFacts.map((fact, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-green-100"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        name={fact.icon}
                        size={24}
                        className="text-green-600"
                      />
                    </div>
                    <CardTitle className="text-xl">{fact.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{fact.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <span className="font-bold text-green-700">
                      {fact.impact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Сравнительная таблица */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Экотопливо vs Обычное топливо
          </h2>
          <Card className="border-green-100">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">
                        Показатель
                      </th>
                      <th className="text-center p-4 font-semibold">
                        Обычное топливо
                      </th>
                      <th className="text-center p-4 font-semibold">
                        Экотопливо
                      </th>
                      <th className="text-center p-4 font-semibold">
                        Улучшение
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comp, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4 font-medium">{comp.category}</td>
                        <td className="p-4 text-center text-red-600">
                          {comp.traditional}
                        </td>
                        <td className="p-4 text-center text-green-600 font-bold">
                          {comp.eco}
                        </td>
                        <td className="p-4 text-center">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">
                            {comp.improvement}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Наши инициативы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Наши экологические проекты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ourInitiatives.map((initiative, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-green-100"
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
                  <p className="text-gray-600 mb-4">{initiative.description}</p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Прогресс</span>
                      <span>{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <span className="text-sm text-green-700">
                      <strong>Цель:</strong> {initiative.target}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-12">
          <h2 className="text-4xl font-bold mb-6">
            Присоединяйтесь к экологической революции
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Каждый выбор в пользу экотоплива — это инвестиция в будущее наших
            детей. Начните свой путь к углеродной нейтральности уже сегодня.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">-40%</div>
              <div className="opacity-90">CO₂ выбросов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50М</div>
              <div className="opacity-90">литров экотоплива</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="opacity-90">партнеров</div>
            </div>
          </div>

          <div className="text-center">
            <Icon name="Heart" size={24} className="inline-block mr-2" />
            <span className="text-lg">Вместе создаем чистое будущее</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ecology;
