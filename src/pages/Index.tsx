import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Демо товары для каталога
  const products = [
    {
      id: 1,
      name: "Boeing 737-800 Professional",
      price: "29.99",
      category: "Самолеты",
      image: "/img/71ce12f0-2d4b-43e1-a9ec-5b1bf99548b7.jpg",
      rating: 4.8,
      downloads: "15K+"
    },
    {
      id: 2,
      name: "Airbus A320 Neo Complete",
      price: "34.99",
      category: "Самолеты",
      image: "/img/71ce12f0-2d4b-43e1-a9ec-5b1bf99548b7.jpg",
      rating: 4.9,
      downloads: "22K+"
    },
    {
      id: 3,
      name: "Realistic Weather Engine",
      price: "19.99",
      category: "Погода",
      image: "/img/71ce12f0-2d4b-43e1-a9ec-5b1bf99548b7.jpg",
      rating: 4.7,
      downloads: "8K+"
    },
    {
      id: 4,
      name: "Global Airports Pack",
      price: "49.99",
      category: "Аэропорты",
      image: "/img/71ce12f0-2d4b-43e1-a9ec-5b1bf99548b7.jpg",
      rating: 4.6,
      downloads: "12K+"
    }
  ];

  const addToCart = (productId) => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Plane" size={24} className="text-blue-600" />
                <span className="text-xl font-bold text-gray-900">xshop</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
                <a href="#catalog" className="text-gray-700 hover:text-blue-600 transition-colors">Каталог</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Поиск дополнений..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-blue-600">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Героический блок */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('/img/c5073e0a-153c-4c70-8e2c-8f87cb667fd1.jpg')` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight animate-fade-in">
              Дополнения для
              <span className="block text-blue-400">авиасимуляторов</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Профессиональные модели самолетов, реалистичные погодные системы 
              и детализированные аэропорты для максимального погружения в полет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Icon name="Download" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Icon name="Play" size={20} className="mr-2" />
                Демо версии
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог товаров */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные дополнения</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Лучшие дополнения для авиасимуляторов, созданные профессиональными разработчиками
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-blue-600">
                    {product.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Download" size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.downloads}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">${product.price}</span>
                    <Button 
                      size="sm" 
                      onClick={() => addToCart(product.id)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Icon name="Plus" size={16} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Быстрое оформление заказа */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Быстрое оформление</h2>
            <p className="text-gray-600">
              Оформите заказ за несколько кликов и получите ссылки для скачивания на email
            </p>
          </div>

          <Card className="p-8 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Email для получения файлов" type="email" />
                  <Input placeholder="Телефон (опционально)" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Способ оплаты</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-white transition-colors">
                    <Icon name="CreditCard" size={20} className="text-blue-600" />
                    <span>Банковская карта</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-white transition-colors">
                    <Icon name="Smartphone" size={20} className="text-green-600" />
                    <span>СБП / Мобильные платежи</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span>Товаров в корзине:</span>
                    <span>{cartItems}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Итого:</span>
                    <span className="text-blue-600">$29.99</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Icon name="Lock" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Plane" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">xshop</span>
              </div>
              <p className="text-gray-400">
                Лучшие дополнения для авиасимуляторов от профессиональных разработчиков
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Самолеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аэропорты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Погода</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ландшафты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Установка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обновления</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>support@xshop.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 xshop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;