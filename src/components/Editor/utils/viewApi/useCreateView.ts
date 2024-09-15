import { queryClient, useDigitalMutation } from '@/api';

const generateViewName = () => {
    const date = new Date();
    const random = Math.floor(Math.random() * 100000);
    return `New_${date.getFullYear()}${date.getMonth()}${date.getDate()}-${random.toString().padStart(5, '0')}`;
};

export default function useCreateView() {
    const { mutate, isPending } = useDigitalMutation('view', {
        onSuccess: async () => {
            await queryClient.invalidateQueries({ predicate: query => query.queryKey[0] === 'view' });
        },
    });

    const create = () => {
        mutate({
            body: {
                title: generateViewName(),
                type: 0,
            },
        });
    };

    return {
        create,
        isCreating: isPending,
    };
}
