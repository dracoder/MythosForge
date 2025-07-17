import { getMessages } from 'next-intl/server';
export async function generateMetadata({ params: {locale} }) {
    const messages = await getMessages({locale});
    const title = messages['titles'];

    return {
        title: title['dashboard'],
    };
}

const PageLayout = ({ children }) => {
    return children
}

export default PageLayout
