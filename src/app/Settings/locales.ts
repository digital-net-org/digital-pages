import { type Namespace } from '@digital-lib/react-digital';

export default {
    namespace: 'settings',
    fr: {
        frame: {
            label: 'Gérer mes librairies',
            result: {
                empty: 'Aucune librairie enregistrée...',
            },
            actions: {
                create: 'Importer une librairie',
                consult: 'Consulter une librairie',
                form: {
                    version: 'Version',
                    file: 'Fichier',
                },
            },
        },
    },
    en: {
        frame: {
            label: 'Manage my libraries',
            result: {
                empty: 'No component library found...',
            },
            actions: {
                create: 'Import a library',
                consult: 'View a library',
                form: {
                    version: 'Version',
                    file: 'File',
                },
            },
        },
    },
} satisfies Namespace;
