import { clsx } from "clsx"
import { format } from "date-fns";
import { twMerge } from "tailwind-merge"
import { toast } from 'react-hot-toast';

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function generateQueryFromObject(obj) {
    return Object.keys(obj).map((key) => `${key}=${obj[key]}`).join('&');
}

export default function debounce(fn, delay = 250) {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

/*
Format a date object to a string
* @param {Date} date
* @param {string} formatString format M/d/yyyy
* @param {boolean} withTime (optional) include time in the format (default: false)
*/
export const formatFriendlyDate = (dateString = '', withTime = false) => {
    if (!dateString) return '-';

    return format(new Date(dateString), 'M/d/yyyy' + (withTime ? ' hh:mma' : ''));
}


/*
Copy a string to the clipboard
* @param {string} value
* @returns {void}
*/
export const copyToClipboard = (value = '') => {
    const textField = document.createElement('textarea');
    textField.style.whiteSpace = 'pre';
    textField.value = value;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    toast.success('Copied to clipboard');
};
