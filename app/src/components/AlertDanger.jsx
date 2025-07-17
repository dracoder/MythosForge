import { useState, forwardRef, useImperativeHandle } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "./ui/alert-dialog";
import { useTranslations } from 'next-intl';

const AlertDanger = forwardRef(({ onConfirm, title, description }, ref) => {
    const t = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    // Expose the functions to open and close the dialog
    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }));

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
                <div className="hidden" />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title || t('components.are_you_sure')}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description || t('components.want_to_proceed')}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setIsOpen(false)}>{t('components.cancel')}</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-400" onClick={() => onConfirm()}>{t('components.continue')}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
});

export default AlertDanger;
