import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image"

const config: DocsThemeConfig = {
    logo: <><Image src="https://cdn.scienhub.com/scienhub-logo/scienhub-logo-transparent128.png" alt="ScienHub logo" width={32} height={32} /> <b className="ml-1">ScienHub</b></>,
    project: {
        link: 'https://github.com/shuding/nextra'
    },
    i18n: [
        { locale: 'en', name: 'English' },
        { locale: 'zh', name: '中文' },
    ],
    footer: {
        content: <>2022-{new Date().getFullYear()} ©{' '} <a href="https://scienhub.com">ScienHub</a></>
    }
    // ... other theme options
}

export default config