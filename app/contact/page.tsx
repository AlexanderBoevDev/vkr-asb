"use client";

import {
  Input,
  Select,
  Textarea,
  SelectItem,
  Button,
  Checkbox
} from "@heroui/react";
import ShadowTitle from "@/app/components/ShadowTitle";
import PageTitle from "@/app/components/PageTitle";
import PageSubtitle from "@/app/components/PageSubtitle";
import { GoogleMapComponent } from "@/app/components/GoogleMapComponent";

const BUDGET_OPTIONS = [
  { key: "0", label: "До 100 тыс. руб." },
  { key: "1", label: "100 - 300 тыс. руб." },
  { key: "2", label: "300 - 500 тыс. руб." },
  { key: "3", label: "Более 500 тыс. руб." }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container flex-grow mx-auto mt-5 mb-5 px-6 max-w-[1280px]">
        <ShadowTitle text="Контакты" ratio={0.3} />
        <section className="relative overflow-hidden pb-[50px]">
          <div className="block text-dark-2 z-10 relative">
            <PageTitle title="Наши контакты" />
            <PageSubtitle subtitle="Мы создаем мощные бренды и инновационные решения" />
          </div>
        </section>
        <section className="relative overflow-hidden">
          <div className="block z-10 relative text-dark-2 dark:text-white">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Input
                    label="Ваше имя:"
                    placeholder="Введите имя"
                    required
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
                    label="E-Mail:"
                    type="email"
                    placeholder="example@mail.ru"
                    required
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
                    label="Номер телефона:"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
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
                    label="Ваш город:"
                    placeholder="Москва"
                    required
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
                    label="Бюджет:"
                    placeholder="Выберите бюджет"
                    required
                    items={BUDGET_OPTIONS}
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
                    {(item) => <SelectItem>{item.label}</SelectItem>}
                  </Select>
                </div>
                <div className="flex flex-col">
                  <Input
                    label="Вы хотели заказать услугу:"
                    placeholder="Например, создание сайта"
                    required
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
                    label="Название компании:"
                    placeholder="ООО Ромашка"
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
                    label="Веб-сайт:"
                    type="url"
                    placeholder="https://mysite.ru"
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
                    minRows={10}
                    label="Сообщение:"
                    placeholder="Опишите задачу"
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
                  <Checkbox defaultSelected size="md" color="default">
                    <p className="text-tiny dark:text-white">
                      Отправляя заявку, Вы соглашаетесь на обработку
                      персональных данных.{" "}
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
              <div className="text-sm text-dark-2 dark:text-white flex flex-col gap-6">
                <div className="bg-gray-100/50 dark:bg-dark-4 p-4 pb-6 lg:p-6 lg:pb-8 rounded-lg">
                  <h3 className="text-xl font-bold uppercase mb-4">
                    Позвонить нам
                  </h3>
                  <p className="mb-3">8 (800) 505-95-91</p>
                  <p>8 (812) 608-69-91</p>
                </div>
                <div className="bg-gray-100/50 dark:bg-dark-4 p-4 pb-6 lg:p-6 lg:pb-8 rounded-lg">
                  <h3 className="text-xl font-bold uppercase mb-4">Где мы</h3>
                  <p className="mb-2">350003, Краснодарский край,</p>
                  <p className="mb-2">г. Краснодар, пр. Чекистов, 4,</p>
                  <p>микрорайон Юбилейный</p>
                </div>
                <div className="bg-gray-100/50 dark:bg-dark-4 p-4 pb-6 lg:p-6 lg:pb-8 rounded-lg">
                  <h3 className="text-xl font-bold uppercase mb-4">
                    Написать нам
                  </h3>
                  <a className="text-xl" href="mailto:support@asb-studio.ru">
                    support@asb-studio.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="relative overflow-hidden mt-10">
        <h5 className="font-magistral tracking-wider text-xl md:text-2xl text-center absolute max-w-[360px] mt-[10%] ml-auto mr-auto left-0 right-0 z-20">
          350003, Краснодарский край, г. Краснодар, пр. Чекистов, 4
        </h5>
        <div className="mt-5">
          <GoogleMapComponent />
        </div>
      </section>
    </div>
  );
}
