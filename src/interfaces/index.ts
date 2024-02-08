export interface IChildren {
    children: React.ReactNode
}

export interface IButtonCustom {
    text: string
    onClick: () => void
    css?: string
    type: 'primary' | 'ghost'
}

export interface INavItems {
    name: string
    path: string
}