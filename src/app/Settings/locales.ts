import { type Namespace } from '@digital-lib/react-digital';

export default {
    namespace: 'settings',
    fr: {
        frame: {
            label: 'Gérer mes librairies',
            result: {
                empty: 'Aucune librairie enregistrée...',
                headers: {
                    id: 'id',
                    version: 'Version',
                    createdAt: "Date d'importation",
                },
            },
            actions: {
                create: {
                    label: 'Importer une librairie',
                    form: {
                        version: {
                            label: 'Version',
                            pattern:
                                'Doit contenir entre 3 et 24 caractères, et ne peut inclure que des lettres (majuscules ou minuscules), des chiffres, des points, des tirets ou des underscores.',
                        },
                        file: {
                            label: 'Fichier',
                        },
                    },
                    error: {
                        415: 'Le fichier doit être au format Javascript.',
                        400: "Le fichier est vide ou n'est pas valide.",
                        409: 'Ce numéro de version est déjà utilisée.',
                        500: "Une erreur serveur est survenue lors de l'importation de la librairie. Contactez votre administrateur.",
                    },
                    success: 'La librairie a été importée avec succès.',
                },
                delete: {
                    error: {
                        404: "Cette librairie n'existe pas.",
                        400: 'Cette librairie est utilisée.',
                        500: 'Une erreur serveur est survenue lors de la suppression de la librairie. Contactez votre administrateur.',
                    },
                    success: 'La librairie a été supprimée avec succès.',
                },
            },
        },
    },
    en: {
        frame: {
            label: 'Manage my libraries',
            result: {
                empty: 'No component library found...',
                headers: {
                    id: 'id',
                    version: 'Version',
                    createdAt: 'Import date',
                },
            },
            actions: {
                create: {
                    label: 'Import a library',
                    form: {
                        version: {
                            label: 'Version',
                            pattern:
                                'Must be between 3 and 24 characters long and may only include letters (uppercase or lowercase), numbers, dots, hyphens, or underscores.',
                        },
                        file: {
                            label: 'File',
                        },
                        error: {
                            415: 'The file must be in Javascript format.',
                            400: 'The file is empty or invalid.',
                            409: 'This version number is already in use.',
                            500: 'A server error occurred while importing the library. Please contact your administrator.',
                        },
                        success: 'The library has been successfully imported.',
                    },
                },
                delete: {
                    error: {
                        404: 'This library does not exist.',
                        400: 'This library is in use.',
                        500: 'A server error occurred while deleting the library. Please contact your administrator.',
                    },
                    success: 'The library has been successfully deleted.',
                },
            },
        },
    },
} satisfies Namespace;
