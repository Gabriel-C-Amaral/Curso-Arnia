// domain/contract
interface IStorage {
    getItem: (key: string) => any
    setItem: (key: string, value: any) => void
    deleteItem: (key: string) => void  
}

// src/infra (local Storage)

class Storagee implements IStorage {
    getItem (key: string): any {
        const storage = localStorage.getItem(key)

        if (!storage) return ''
        return JSON.parse(storage) as string
    }

    setItem (key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value))
        // output
        // 1 vira '1' .... {} vira '{}'
    }

    deleteItem (key: string) {
        localStorage.removeItem(key)
    }


}