import FooterComponent from './footer'

import HeaderComponent from './header'

interface BaseLayoutProps {
    children: React.ReactNode
}

export default function BaseLayoutComponent({ children }: BaseLayoutProps) {
    return (
        <div>
            <HeaderComponent />
            <main>{children}</main>
            <FooterComponent />
        </div>
    )
}
