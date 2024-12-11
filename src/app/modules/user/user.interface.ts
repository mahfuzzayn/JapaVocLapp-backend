export type TUser = {
    name: string
    email: string
    role: 'user' | 'admin'
    photoUrl?: string
    password: string
}
