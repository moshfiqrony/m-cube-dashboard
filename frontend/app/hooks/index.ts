import { useCallback } from 'react';
import { useToast } from '~/components/ui/use-toast';

export function useComingSoonToast() {
    const { toast } = useToast();

    const showToast = useCallback(() => {
        toast({
            title: 'Coming soon',
            description: 'This feature is not yet available.',
        });
    }, []);

    return showToast;
}
