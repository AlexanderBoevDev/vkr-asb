"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Pagination,
  addToast
} from "@heroui/react";

// Enum-тип (если нужно)
type BudgetRange = "B200" | "B200_300" | "B300_500" | "B500_plus";

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string | null;
  budget: BudgetRange | null;
  service: string | null;
  company: string | null;
  website: string | null;
  message: string | null;
  createdAt: string;
  updatedAt: string;
}

interface FetchResult {
  submissions: Submission[];
  totalCount: number;
  page: number;
  limit: number;
}

export default function SubmissionsListClient() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Параметры пагинации
  const [page, setPage] = useState(1);
  const itemsPerPage = 10; // limit на сервере

  // Модалки
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [editData, setEditData] = useState<Submission | null>(null);

  // Загружаем список (GET)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Важно! Путь совпадает с папкой: /contactSubmissionsSimple
        const res = await fetch(
          `/api/contact-submissions-simple?page=${page}&limit=${itemsPerPage}`
        );
        if (!res.ok) {
          throw new Error("Ошибка при получении заявок");
        }
        const data: FetchResult = await res.json();
        setSubmissions(data.submissions);
        setTotalCount(data.totalCount);
      } catch (error) {
        console.error(error);
        addToast({
          title: "Ошибка",
          description: "Не удалось получить заявки"
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  // Редактировать
  const handleEditClick = (submission: Submission) => {
    setEditData({ ...submission });
    setShowEditModal(true);
  };

  // Сохранить изменения (PATCH)
  const handleSaveEdit = async () => {
    if (!editData) return;
    try {
      const res = await fetch(
        `/api/contact-submissions-simple/${editData.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData)
        }
      );
      if (!res.ok) {
        throw new Error("Ошибка при обновлении заявки");
      }
      // Обновляем локальный список
      setSubmissions((prev) =>
        prev.map((item) => (item.id === editData.id ? editData : item))
      );
      addToast({ title: "Успешно", description: "Заявка успешно обновлена" });
      setShowEditModal(false);
      setEditData(null);
    } catch (error) {
      console.error(error);
      addToast({
        title: "Ошибка",
        description: "Ошибка при обновлении заявки"
      });
    }
  };

  // Удалить
  const handleDeleteClick = (submission: Submission) => {
    setSelectedSubmission(submission);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedSubmission) return;
    try {
      const res = await fetch(
        `/api/contact-submissions-simple/${selectedSubmission.id}`,
        {
          method: "DELETE"
        }
      );
      if (!res.ok) {
        throw new Error("Ошибка при удалении заявки");
      }
      setSubmissions((prev) =>
        prev.filter((item) => item.id !== selectedSubmission.id)
      );
      addToast({ title: "Удалено", description: "Заявка удалена успешно" });
    } catch (error) {
      console.error(error);
      addToast({ title: "Ошибка", description: "Не удалось удалить заявку" });
    } finally {
      setShowDeleteModal(false);
      setSelectedSubmission(null);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {submissions.map((submission) => (
            <Card key={submission.id} className="w-full mb-4">
              <CardBody className="dark:text-white bg-gray-100/50 dark:bg-dark-4 p-4 pb-6 lg:p-6 lg:pb-8 rounded-lg shadow-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                  <p>
                    <strong>Имя:</strong> {submission.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {submission.email}
                  </p>
                  <p>
                    <strong>Телефон:</strong> {submission.phone}
                  </p>
                  <p>
                    <strong>Город:</strong> {submission.city ?? "—"}
                  </p>
                  <p>
                    <strong>Бюджет:</strong> {submission.budget ?? "—"}
                  </p>
                  <p>
                    <strong>Услуга:</strong> {submission.service ?? "—"}
                  </p>
                  <p>
                    <strong>Компания:</strong> {submission.company ?? "—"}
                  </p>
                  <p>
                    <strong>Веб-сайт:</strong> {submission.website ?? "—"}
                  </p>
                  <div className="md:col-span-3">
                    <strong>Сообщение:</strong>
                    <p>{submission.message ?? "—"}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3 ml-auto">
                  <Button
                    variant="flat"
                    onClick={() => handleEditClick(submission)}
                  >
                    Редактировать
                  </Button>
                  <Button
                    color="danger"
                    variant="flat"
                    onClick={() => handleDeleteClick(submission)}
                  >
                    Удалить
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}

          {/* Пагинация */}
          {totalCount > 10 && (
            <div className="mt-4 flex justify-center">
              <Pagination
                isCompact
                showControls
                page={page}
                total={Math.ceil(totalCount / itemsPerPage)}
                onChange={(newPage) => setPage(newPage)}
              />
            </div>
          )}
        </div>
      )}

      {/* Модалка удаления */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        size="5xl"
        className="z-[999999]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Удаление заявки</ModalHeader>
              <ModalBody>
                <p>Вы действительно хотите удалить эту заявку?</p>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onClick={onClose}>
                  Отмена
                </Button>
                <Button color="danger" onClick={handleConfirmDelete}>
                  Удалить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Модалка редактирования */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        size="5xl"
        className="z-[999999]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Редактировать заявку</ModalHeader>
              <ModalBody>
                {editData && (
                  <div className="flex flex-col gap-5">
                    <Input
                      label="Имя"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev ? { ...prev, name: e.target.value } : null
                        )
                      }
                    />
                    <Input
                      label="Email"
                      value={editData.email}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev ? { ...prev, email: e.target.value } : null
                        )
                      }
                    />
                    <Input
                      label="Телефон"
                      value={editData.phone}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev ? { ...prev, phone: e.target.value } : null
                        )
                      }
                    />
                    <Input
                      label="Город"
                      value={editData.city ?? ""}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev ? { ...prev, city: e.target.value } : null
                        )
                      }
                    />
                    {/* Если хотите сделать селект для budget, можно, а пока обычный input */}
                    <Input
                      label="Бюджет"
                      value={editData.budget ?? ""}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev
                            ? { ...prev, budget: e.target.value as BudgetRange }
                            : null
                        )
                      }
                    />
                    <Input
                      label="Услуга"
                      value={editData.service ?? ""}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev ? { ...prev, service: e.target.value } : null
                        )
                      }
                    />
                    <Input
                      label="Компания"
                      value={editData.company ?? ""}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev ? { ...prev, company: e.target.value } : null
                        )
                      }
                    />
                    <Input
                      label="Веб-сайт"
                      value={editData.website ?? ""}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev ? { ...prev, website: e.target.value } : null
                        )
                      }
                    />
                    <Textarea
                      label="Сообщение"
                      value={editData.message ?? ""}
                      onChange={(e) =>
                        setEditData((prev) =>
                          prev ? { ...prev, message: e.target.value } : null
                        )
                      }
                    />
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" onClick={onClose}>
                  Отмена
                </Button>
                <Button onClick={handleSaveEdit}>Сохранить</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
