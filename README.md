This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



==============================
Список правок для Atlantes.io.
Это актуальные вещи, которые могут сейчас пойти в работу.
(Отправляю разными сообщениями, чтобы если кому надо, мог себе припинить)

Дизайн:
1. Определиться с внешним видом Hero-секции.
Сейчас она не соответствует дизайну, т.к. сам заголовок стал шире и из-за этого подзаголовок не помещался. Плюс были вопросы к этой секции изначально. Поэтому я решил переделать её как сейчас. С тем текстом, что есть это оптимальный вариант. Если есть возможность поменять подзаголовок, то рекомендовал бы его сократить до менее 160 символов.
2. Подготовить мокап телефона без названия канала (бота) сверху в заголовке

Вёрстка:
1. Добавить анимации заголовков секций
2. Изменить анимации слайдера
3. Проверить ссылки. 

Тексты:
3. Output для "телефона" в слайдере. Соответствие слайд -- сообщение на телефоне прописывается отдельно, так что их может быть меньше. Т.е. одно сообщения может соответствовать нескольким слайдам
5. Ссылки: "Free trial", "Contact us", "Learn more"


Title Animations:
https://codepen.io/soulwire/pen/mEMPrK

Debug endpoint:  https://api.atlantes.io/dev/markAsPaid/INVOICE_ID 
Invoice endpoint: https://api.atlantes.io/checkInvoice/INVOICE_ID


Invoice:
{
    "InvoiceId": "98197f34-8d1c-4ea0-8837-d1c9604bdb9d",
    "TgUser": "nigel_riss",
    "Products": [
        "Trade Volume Bot PRO (3 months)",
        "Wallet Analyzer PRO (3 months)",
        "Profit Maker (3 month)"
    ],
    "ProductIds": [
        "tvb_pro_3m",
        "wa_pro_3m",
        "pm_3m"
    ],
    "Until": "2024-03-07T00:48:32.597481Z",
    "Amount": "3857",
    "Status": "expired",
    "WalletEth": "0x0ac8d6ff25d3070961758c036ff6818595ceabbf",
    "WalletTrc": "TAK64JKcUxubkbBAmKKVbBUnCJxBvP23fZ"
}


BadgeFall -- update
BotPriceCard features update on iOS
Mobile slider full slide swipe

