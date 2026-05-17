import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/f505f825-0106-4073-a0ed-85e60c59f4ae/files/0a87fd5f-b835-44a1-ac0e-715ee239d4e7.jpg";
const PROTEIN_IMG = "https://cdn.poehali.dev/projects/f505f825-0106-4073-a0ed-85e60c59f4ae/files/a4aee99b-7be6-45c0-9901-5b4aa12094d3.jpg";
const CAPS_IMG = "https://cdn.poehali.dev/projects/f505f825-0106-4073-a0ed-85e60c59f4ae/files/1e0eb2fc-f1ed-4f36-8032-1c4c50324736.jpg";

const NAV_LINKS = [
  { label: "Главная", id: "home" },
  { label: "Каталог", id: "catalog" },
  { label: "Характеристики", id: "tables" },
  { label: "FAQ", id: "faq" },
  { label: "Контакты", id: "contacts" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Whey Protein Classic",
    category: "Протеин",
    price: "2 490 ₽",
    weight: "900 г",
    rating: 4.8,
    reviews: 312,
    description: "Концентрат сывороточного протеина. 23 г белка на порцию, быстрое усвоение.",
    image: PROTEIN_IMG,
    tag: "Хит",
  },
  {
    id: 2,
    name: "BCAA 2:1:1 Powder",
    category: "Аминокислоты",
    price: "1 790 ₽",
    weight: "300 г",
    rating: 4.6,
    reviews: 198,
    description: "Незаменимые аминокислоты в классическом соотношении. Предотвращает катаболизм.",
    image: CAPS_IMG,
    tag: "Популярное",
  },
  {
    id: 3,
    name: "Creatine Monohydrate",
    category: "Креатин",
    price: "990 ₽",
    weight: "500 г",
    rating: 4.9,
    reviews: 541,
    description: "Чистый моногидрат креатина без добавок. Увеличивает силу и выносливость.",
    image: PROTEIN_IMG,
    tag: "Топ",
  },
  {
    id: 4,
    name: "Гейнер Mass Gainer Pro",
    category: "Гейнер",
    price: "3 190 ₽",
    weight: "3 кг",
    rating: 4.5,
    reviews: 127,
    description: "Высококалорийная смесь для набора массы. 45 г белка и 250 г углеводов.",
    image: CAPS_IMG,
    tag: null,
  },
  {
    id: 5,
    name: "L-Carnitine Liquid",
    category: "Жиросжигатель",
    price: "1 290 ₽",
    weight: "500 мл",
    rating: 4.4,
    reviews: 89,
    description: "Жидкий L-карнитин для улучшения жирового обмена и повышения энергии.",
    image: PROTEIN_IMG,
    tag: null,
  },
  {
    id: 6,
    name: "Omega-3 Fish Oil",
    category: "Витамины",
    price: "890 ₽",
    weight: "90 капсул",
    rating: 4.7,
    reviews: 263,
    description: "Рыбий жир высокой очистки. EPA и DHA для здоровья суставов и сердца.",
    image: CAPS_IMG,
    tag: "Новинка",
  },
];

const CATEGORIES = ["Все", "Протеин", "Аминокислоты", "Креатин", "Гейнер", "Жиросжигатель", "Витамины"];

const TABLE_DATA = [
  { name: "Whey Protein Classic", protein: 23, carbs: 3.5, fat: 2.1, calories: 120, servings: 30, price: 2490 },
  { name: "BCAA 2:1:1 Powder", protein: 5, carbs: 0, fat: 0, calories: 20, servings: 60, price: 1790 },
  { name: "Creatine Monohydrate", protein: 0, carbs: 0, fat: 0, calories: 0, servings: 100, price: 990 },
  { name: "Mass Gainer Pro", protein: 45, carbs: 250, fat: 8, calories: 1260, servings: 15, price: 3190 },
  { name: "L-Carnitine Liquid", protein: 0, carbs: 1, fat: 0, calories: 5, servings: 50, price: 1290 },
  { name: "Omega-3 Fish Oil", protein: 0, carbs: 0, fat: 1, calories: 9, servings: 90, price: 890 },
];

const FAQ_DATA = [
  {
    q: "Когда лучше принимать протеин?",
    a: "Сывороточный протеин лучше всего принимать сразу после тренировки — в течение 30–60 минут. В дни отдыха можно принимать между приёмами пищи для поддержания суточной нормы белка (1.6–2.2 г на кг веса тела).",
  },
  {
    q: "Вреден ли креатин для почек?",
    a: "При рекомендованных дозировках (3–5 г в день) и достаточном потреблении воды (2–3 л в сутки) креатин безопасен для здоровых людей. Многочисленные исследования подтвердили его безопасность при длительном применении.",
  },
  {
    q: "Нужно ли делать перерывы в приёме добавок?",
    a: "Для большинства добавок (протеин, BCAA, витамины) перерывы не нужны — это просто пища. Для стимуляторов (кофеин, предтренировочные комплексы) перерывы в 1–2 недели каждые 8 недель помогают сохранить чувствительность.",
  },
  {
    q: "Чем гейнер отличается от протеина?",
    a: "Протеин — это концентрированный источник белка (70–90%). Гейнер содержит и белок, и большое количество углеводов (соотношение примерно 1:3–1:5). Гейнер подходит для тех, кто хочет набрать массу и испытывает трудности с получением достаточного количества калорий из обычной еды.",
  },
  {
    q: "Подходит ли спортивное питание женщинам?",
    a: "Да. Протеин, BCAA, витамины и омега-3 одинаково эффективны для мужчин и женщин. Женщинам обычно рекомендуют меньшие дозировки и реже советуют креатин и гейнер — всё зависит от целей тренировок.",
  },
  {
    q: "Как выбрать протеин для похудения?",
    a: "Для похудения выбирайте изолят или гидролизат сывороточного протеина — они содержат минимум углеводов и жиров. Также хорошо подходит казеин на ночь — медленное усвоение снижает аппетит. Избегайте протеинов с добавленным сахаром.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts =
    activeCategory === "Все"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#141414]">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9f7]/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="font-['Oswald'] text-xl font-bold tracking-widest uppercase">
            PRO<span className="text-orange-500">NUTRITION</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-gray-500 hover:text-[#141414] transition-colors tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f9f9f7] border-t border-gray-200 px-4 py-3 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => { scrollTo(link.id); setMobileMenuOpen(false); }}
                className="text-left text-sm font-medium text-gray-600 uppercase tracking-wide py-1"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-14">
        <div className="relative h-[92vh] min-h-[560px] overflow-hidden">
          <img src={HERO_IMG} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-6xl mx-auto">
            <div className="animate-slide-up">
              <p className="text-orange-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Спортивное питание</p>
              <h1 className="font-['Oswald'] text-5xl md:text-7xl font-bold text-white leading-none mb-6 uppercase tracking-tight">
                Питание<br />для<br />результата
              </h1>
              <p className="text-gray-300 text-base md:text-lg max-w-md mb-8 leading-relaxed">
                Качественные добавки для достижения спортивных целей. Протеин, аминокислоты, витамины и многое другое.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("catalog")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                >
                  Смотреть каталог
                </button>
                <button
                  onClick={() => scrollTo("tables")}
                  className="border border-white/40 hover:border-white text-white px-7 py-3 text-sm font-semibold uppercase tracking-widest transition-colors"
                >
                  Характеристики
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-8 py-4 grid grid-cols-3 gap-4">
              {[
                { value: "50+", label: "Продуктов" },
                { value: "4.8★", label: "Средний рейтинг" },
                { value: "1200+", label: "Отзывов" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-['Oswald'] text-xl md:text-2xl font-bold text-orange-400">{stat.value}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20 max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-orange-500 text-xs font-semibold tracking-[0.25em] uppercase mb-2">Ассортимент</p>
          <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold uppercase mb-6">Каталог продуктов</h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest border transition-all ${
                  activeCategory === cat
                    ? "bg-[#141414] text-white border-[#141414]"
                    : "bg-transparent text-gray-500 border-gray-300 hover:border-gray-500 hover:text-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white border border-gray-100 hover:border-gray-300 transition-all hover:shadow-md">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="text-orange-500 text-[10px] font-semibold uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="font-['Oswald'] text-lg font-semibold uppercase tracking-wide mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{product.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={product.rating} />
                  <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviews} отзывов)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-['Oswald'] text-xl font-bold">{product.price}</span>
                    <span className="text-gray-400 text-xs ml-2">/ {product.weight}</span>
                  </div>
                  <button className="bg-[#141414] hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 transition-colors">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TABLES */}
      <section id="tables" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-orange-500 text-xs font-semibold tracking-[0.25em] uppercase mb-2">Данные</p>
          <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold uppercase mb-2">Характеристики продуктов</h2>
          <p className="text-gray-400 text-sm mb-8">Состав на одну порцию</p>
          <div className="overflow-x-auto border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#141414] text-white">
                  <th className="text-left px-4 py-3 font-['Oswald'] uppercase tracking-wider font-semibold">Продукт</th>
                  <th className="text-center px-4 py-3 font-['Oswald'] uppercase tracking-wider font-semibold">Белки (г)</th>
                  <th className="text-center px-4 py-3 font-['Oswald'] uppercase tracking-wider font-semibold">Углеводы (г)</th>
                  <th className="text-center px-4 py-3 font-['Oswald'] uppercase tracking-wider font-semibold">Жиры (г)</th>
                  <th className="text-center px-4 py-3 font-['Oswald'] uppercase tracking-wider font-semibold">Ккал</th>
                  <th className="text-center px-4 py-3 font-['Oswald'] uppercase tracking-wider font-semibold">Порций</th>
                  <th className="text-right px-4 py-3 font-['Oswald'] uppercase tracking-wider font-semibold">Цена</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_DATA.map((row, i) => (
                  <tr key={row.name} className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-4 py-3 font-semibold text-gray-800">{row.name}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`font-semibold ${row.protein > 10 ? "text-green-600" : "text-gray-500"}`}>{row.protein}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.carbs}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.fat}</td>
                    <td className="px-4 py-3 text-center font-medium text-gray-700">{row.calories}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.servings}</td>
                    <td className="px-4 py-3 text-right font-['Oswald'] font-semibold">{row.price.toLocaleString("ru")} ₽</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">* Данные приведены на одну стандартную порцию согласно маркировке производителя</p>

          <div className="mt-12">
            <h3 className="font-['Oswald'] text-2xl font-bold uppercase mb-6">Содержание белка по продуктам</h3>
            <div className="space-y-3">
              {TABLE_DATA.filter(r => r.protein > 0).sort((a, b) => b.protein - a.protein).map((row) => (
                <div key={row.name} className="flex items-center gap-4">
                  <div className="w-44 text-xs font-medium text-gray-600 truncate shrink-0">{row.name}</div>
                  <div className="flex-1 bg-gray-100 h-6 relative overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-end pr-2"
                      style={{ width: `${Math.min((row.protein / 50) * 100, 100)}%` }}
                    >
                      <span className="text-white text-[11px] font-bold">{row.protein}г</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 max-w-6xl mx-auto px-4">
        <p className="text-orange-500 text-xs font-semibold tracking-[0.25em] uppercase mb-2">Вопросы и ответы</p>
        <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold uppercase mb-10">Часто задаваемые вопросы</h2>
        <div className="divide-y divide-gray-100">
          {FAQ_DATA.map((item, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-5 flex items-center justify-between gap-4 hover:text-orange-500 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-['Oswald'] text-lg font-semibold uppercase tracking-wide">{item.q}</span>
                <Icon
                  name={openFaq === i ? "Minus" : "Plus"}
                  size={18}
                  className={`shrink-0 transition-colors ${openFaq === i ? "text-orange-500" : "text-gray-400"}`}
                />
              </button>
              {openFaq === i && (
                <div className="pb-5 text-gray-600 text-sm leading-relaxed animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-[#141414] text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-orange-400 text-xs font-semibold tracking-[0.25em] uppercase mb-2">Связаться с нами</p>
            <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold uppercase mb-6">Обратная связь</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Есть вопросы по продуктам, доставке или хотите оставить отзыв? Напишите нам — ответим в течение одного рабочего дня.
            </p>
            <div className="space-y-4">
              {[
                { icon: "Mail", label: "info@pronutrition.ru" },
                { icon: "Phone", label: "+7 (800) 555-35-35" },
                { icon: "MapPin", label: "Москва, ул. Спортивная, 12" },
              ].map((contact) => (
                <div key={contact.label} className="flex items-center gap-3 text-gray-300">
                  <Icon name={contact.icon} size={16} className="text-orange-400 shrink-0" fallback="CircleAlert" />
                  <span className="text-sm">{contact.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {formSent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <Icon name="Check" size={28} className="text-orange-400" />
                </div>
                <h3 className="font-['Oswald'] text-2xl font-bold uppercase mb-2">Сообщение отправлено!</h3>
                <p className="text-gray-400 text-sm">Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={() => setFormSent(false)} className="mt-6 text-orange-400 text-sm underline">
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 mb-1.5 block">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full bg-white/5 border border-white/10 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ivan@email.ru"
                    className="w-full bg-white/5 border border-white/10 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-gray-400 mb-1.5 block">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ваш вопрос или отзыв..."
                    className="w-full bg-white/5 border border-white/10 focus:border-orange-500 text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-widest py-3 text-sm transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span className="font-['Oswald'] text-white text-lg font-bold tracking-widest uppercase">
            PRO<span className="text-orange-500">NUTRITION</span>
          </span>
          <span>© 2026 ProNutrition. Все права защищены.</span>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="hover:text-white transition-colors uppercase tracking-wider">
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
