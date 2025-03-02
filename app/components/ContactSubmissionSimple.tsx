"use client";

import { useState } from "react";
import {
  Input,
  Select,
  SelectItem,
  Textarea,
  Button,
  CheckboxGroup,
  Checkbox,
  addToast
} from "@heroui/react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const BUDGET_OPTIONS = [
  { key: "B200", label: "От 200 тыс. руб." },
  { key: "B200_300", label: "200 - 300 тыс. руб." },
  { key: "B300_500", label: "300 - 500 тыс. руб." },
  { key: "B500_plus", label: "Более 500 тыс. руб." }
];

declare global {
  interface Window {
    grecaptcha?: {
      execute(siteKey: string, options: { action: string }): Promise<string>;
      ready(cb: () => void): void;
    };
  }
}

export default function ContactSubmissionSimple() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [service, setService] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [isPolicyInvalid, setIsPolicyInvalid] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isPolicyInvalid) {
      console.error("Пользователь не дал согласие на обработку данных");
      return;
    }

    if (!window.grecaptcha) {
      console.error("reCAPTCHA скрипт не загружен");
      return;
    }

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "submit"
      });

      const response = await fetch("/api/contact-submissions-simple", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          budget,
          service,
          company,
          website,
          message,
          recaptchaToken: token
        })
      });

      if (!response.ok) {
        console.error("Ошибка при отправке формы");
        addToast({
          title: "Ошибка",
          description: "Не удалось отправить форму"
        });
        return;
      }

      setName("");
      setEmail("");
      setPhone("");
      setCity("");
      setBudget("");
      setService("");
      setCompany("");
      setWebsite("");
      setMessage("");
      setIsPolicyInvalid(true);

      // Добавляем toast
      addToast({
        title: "Форма отправлена",
        description: "Мы получили вашу заявку!"
      });

      console.log("Форма успешно отправлена");
    } catch (error) {
      console.error("Ошибка при отправке формы", error);
      addToast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке"
      });
    }
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <Input
          isRequired
          label="Ваше имя:"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          classNames={{
            label: "dark:text-white/90",
            input: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            inputWrapper: ["dark:bg-dark-4", "dark:hover:bg-dark-4"]
          }}
        />
      </div>
      <div className="flex flex-col">
        <Input
          isRequired
          label="E-Mail:"
          type="email"
          placeholder="example@mail.ru"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          classNames={{
            label: "dark:text-white/90",
            input: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            inputWrapper: [
              "dark:bg-dark-4",
              "dark:hover:bg-dark-4",
              "dark:group-data-[focus=true]:bg-dark-4"
            ]
          }}
        />
      </div>
      <div className="flex flex-col">
        <Input
          isRequired
          label="Номер телефона:"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          classNames={{
            label: "dark:text-white/90",
            input: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            inputWrapper: [
              "dark:bg-dark-4",
              "dark:hover:bg-dark-4",
              "dark:group-data-[focus=true]:bg-dark-4"
            ]
          }}
        />
      </div>
      <div className="flex flex-col">
        <Input
          isRequired
          label="Ваш город:"
          placeholder="Москва"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          classNames={{
            label: "dark:text-white/90",
            input: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            inputWrapper: [
              "dark:bg-dark-4",
              "dark:hover:bg-dark-4",
              "dark:group-data-[focus=true]:bg-dark-4"
            ]
          }}
        />
      </div>
      <div className="flex flex-col">
        <Select
          isRequired
          label="Бюджет:"
          placeholder="Выберите бюджет"
          items={BUDGET_OPTIONS}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0] as string;
            setBudget(selectedKey);
          }}
          selectedKeys={new Set([budget])}
          classNames={{
            label: "dark:text-white/90",
            trigger: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            innerWrapper: [
              "dark:bg-dark-4",
              "dark:hover:bg-dark-4",
              "dark:group-data-[focus=true]:bg-dark-4"
            ]
          }}
        >
          {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>
      </div>
      <div className="flex flex-col">
        <Input
          isRequired
          label="Вы хотели заказать услугу:"
          placeholder="Например, создание сайта"
          value={service}
          onChange={(e) => setService(e.target.value)}
          classNames={{
            label: "dark:text-white/90",
            input: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            inputWrapper: [
              "dark:bg-dark-4",
              "dark:hover:bg-dark-4",
              "dark:group-data-[focus=true]:bg-dark-4"
            ]
          }}
        />
      </div>
      <div className="flex flex-col">
        <Input
          isRequired
          label="Название компании:"
          placeholder="ООО Ромашка"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          classNames={{
            label: "dark:text-white/90",
            input: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            inputWrapper: [
              "dark:bg-dark-4",
              "dark:hover:bg-dark-4",
              "dark:group-data-[focus=true]:bg-dark-4"
            ]
          }}
        />
      </div>
      <div className="flex flex-col">
        <Input
          isRequired
          label="Веб-сайт:"
          type="url"
          placeholder="https://mysite.ru"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          classNames={{
            label: "dark:text-white/90",
            input: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            inputWrapper: [
              "dark:bg-dark-4",
              "dark:hover:bg-dark-4",
              "dark:group-data-[focus=true]:bg-dark-4"
            ]
          }}
        />
      </div>
      <div className="flex flex-col md:col-span-2">
        <Textarea
          isRequired
          minRows={10}
          label="Сообщение:"
          placeholder="Опишите задачу"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          classNames={{
            label: "dark:text-white/90",
            input: [
              "dark:bg-dark-4",
              "dark:text-white/90",
              "dark:placeholder:text-white/60"
            ],
            inputWrapper: [
              "dark:bg-dark-4",
              "dark:hover:bg-dark-4",
              "dark:group-data-[focus=true]:bg-dark-4"
            ]
          }}
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4 mt-4">
        <CheckboxGroup
          isRequired
          isInvalid={isPolicyInvalid}
          onValueChange={(values) => {
            setIsPolicyInvalid(values.length < 1);
          }}
        >
          <Checkbox value="policy" size="md" color="default">
            <p className="text-dark-2 dark:text-white">
              Отправляя заявку, Вы соглашаетесь на обработку персональных
              данных.{" "}
              <a
                href="/privacy-policy"
                className="underline z-20 relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                Политика конфиденциальности
              </a>
            </p>
          </Checkbox>
        </CheckboxGroup>
        <Button
          color="primary"
          variant="solid"
          type="submit"
          className="
            w-fit
            bg-dark-4
            hover:bg-dark-3
            text-white
            font-semibold
            text-sm
            shadow-sm
            h-10
          "
        >
          Отправить
        </Button>
      </div>
    </form>
  );
}
