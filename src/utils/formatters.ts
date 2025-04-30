/**
 * Formats a date string into a human-readable format
 * @param dateString The date string to format
 * @param locale The locale to use for formatting (default: 'en-US')
 * @param options Intl.DateTimeFormatOptions to customize the format
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string | Date,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string => {
  const date =
    typeof dateString === 'string' ? new Date(dateString) : dateString;
  return new Intl.DateTimeFormat(locale, options).format(date);
};

/**
 * Truncates text to a specified length and adds ellipsis if needed
 * @param text The text to truncate
 * @param maxLength Maximum length of the text (default: 100)
 * @param ellipsis String to append when truncated (default: '...')
 * @returns Truncated text
 */
export const truncateText = (
  text: string,
  maxLength: number = 100,
  ellipsis: string = '...'
): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + ellipsis;
};

/**
 * Capitalizes the first letter of a string
 * @param text The text to capitalize
 * @returns Text with the first letter capitalized
 */
export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Formats a number as currency
 * @param amount The amount to format
 * @param currency The currency code (default: 'USD')
 * @param locale The locale to use for formatting (default: 'en-US')
 * @returns Formatted currency string
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Formats a number with thousand separators
 * @param number The number to format
 * @param locale The locale to use for formatting (default: 'en-US')
 * @returns Formatted number string
 */
export const formatNumber = (
  number: number,
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale).format(number);
};

/**
 * Formats a file size in bytes to a human-readable format
 * @param bytes The size in bytes
 * @param decimals Number of decimal places (default: 2)
 * @returns Formatted file size string
 */
export const formatFileSize = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i]
  );
};

/**
 * Slugifies a string (converts to lowercase, replaces spaces with hyphens)
 * @param text The text to slugify
 * @returns Slugified string
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple hyphens with a single hyphen
};
