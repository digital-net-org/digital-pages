import { type Namespace } from '@digital-net/react-digital-localize';
export default {
    namespace: 'router',
    fr: {
        page: {
            title: {
                ['*']: 'Page non trouvée',
                [APP_PATH_HOME]: 'Accueil',
                [APP_PATH_LOGIN]: 'Connexion',
                [APP_PATH_VIEWS]: 'Editer mes vues',
                [APP_PATH_FRAMES]: 'Editer mes écrans',
            },
        },
    },
    en: {
        page: {
            title: {
                ['*']: 'Page not found',
                [APP_PATH_HOME]: 'Home',
                [APP_PATH_LOGIN]: 'Login',
                [APP_PATH_VIEWS]: 'Edit my views',
                [APP_PATH_FRAMES]: 'Edit my frames',
            },
        },
    },
} satisfies Namespace;
