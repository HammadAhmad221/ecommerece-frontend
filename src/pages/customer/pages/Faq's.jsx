import React from "react";
import Footer from "../../../components/Footer";

const FAQs = () => {
  const faqData = [
    {
      question: "What is 6Lytes Electrolytes + Multivitamin Powder?",
      answer:
        "6Lytes is a zero-calorie supplement designed to enhance hydration and provide essential vitamins and minerals. It’s perfect for supporting energy, hydration, and recovery during physical activity.",
    },
    {
      question: "How do I use 6Lytes?",
      answer:
        "Simply mix 1 scoop or sachet of 6Lytes with 16oz of water. Stir or shake well, and consume before or after your workout for best results. You can take it once daily to maintain optimal hydration and nutrient levels.",
    },
    {
      question: "What are the key ingredients in 6Lytes?",
      answer:
        "6Lytes contains a blend of vitamins (like Vitamin C, B-complex, and Biotin), electrolytes (Magnesium, Potassium, Sodium), and minerals (Zinc, Selenium, Copper) that are crucial for hydration, muscle function, and immune support.",
    },
    {
      question: "Is 6Lytes calorie-free?",
      answer:
        "Yes! 6Lytes is completely free from calories, making it an excellent choice for those focused on hydration and nutrient intake without added sugars or calories.",
    },
    {
      question: "Who can benefit from using 6Lytes?",
      answer:
        "6Lytes is perfect for athletes, fitness enthusiasts, or anyone looking to stay hydrated and support their daily nutrition. It’s suitable for people of all activity levels who want to boost hydration and nutrient intake.",
    },
    {
      question: "Can I take 6Lytes if I’m not working out?",
      answer:
        "Absolutely! While 6Lytes is great for supporting hydration during and after exercise, it can be used daily to maintain proper hydration and replenish essential nutrients even if you're not exercising.",
    },
    {
      question: "Is 6Lytes suitable for vegans and vegetarians?",
      answer:
        "Yes, 6Lytes is vegan-friendly, made without any animal-derived ingredients, making it suitable for both vegans and vegetarians.",
    },
    {
      question: "Does 6Lytes contain artificial flavors or sweeteners?",
      answer:
        "No, 6Lytes is made with natural flavors and sweetened with steviol glycosides, a plant-based sweetener, ensuring a clean, natural taste without artificial additives.",
    },
    {
      question: "Can I take 6Lytes with other supplements or vitamins?",
      answer:
        "Yes, 6Lytes can be taken alongside other supplements. However, it's always a good idea to consult with a healthcare provider if you're combining multiple products, especially if you're concerned about nutrient levels.",
    },
    {
      question: "How often can I take 6Lytes?",
      answer:
        "You can take 6Lytes once daily. If you are engaging in prolonged or intense exercise, you may benefit from consuming an additional serving to support hydration and recovery.",
    },
    {
      question: "What makes 6Lytes different from other electrolyte drinks?",
      answer:
        "Unlike many other electrolyte drinks, 6Lytes is calorie-free and contains no added sugars. It also provides a complete blend of vitamins and minerals in addition to electrolytes, making it a more comprehensive solution for hydration and nutrition.",
    },
    {
      question: "Is 6Lytes safe for children?",
      answer:
        "While 6Lytes is formulated for adults, it can be consumed by children under the guidance of a healthcare provider, especially to ensure they are receiving appropriate vitamin and electrolyte levels for their age and needs.",
    },
  ];

  return (
    <div className="bg-gray-100 p-6 md:p-12">
      <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {faq.question}
            </h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
