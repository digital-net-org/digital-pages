import { type Namespace } from '@digital-lib/react-digital';

export default {
    namespace: 'pages-app',
    fr: {
        errors: {
            noFrameValidation: {
                noFrame: 'Aucune librairie de composants',
                action: 'Cliquez pour importer une librairie.',
                unhandled:
                    'Une erreur est survenue lors de la validation des librairies de composants. Veuillez contacter votre administrateur.',
            },
        },
    },
    en: {
        errors: {
            noFrameValidation: {
                noFrame: 'No component library',
                action: 'Click to import a library.',
                unhandled: 'An error occurred while validating component libraries. Please contact your administrator.',
            },
        },
    },
} satisfies Namespace;
