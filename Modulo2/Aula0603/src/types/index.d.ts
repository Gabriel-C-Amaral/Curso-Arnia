type ItemStatus = "EM_ANDAMENTO" | "NAO_INICIADO"

type ToDoItemType = {
    id: number
    text: string
    status: ItemStatus
}