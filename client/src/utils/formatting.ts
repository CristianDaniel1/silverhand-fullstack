export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const dateFormatter = (date: string | Date) =>
  new Date(date).toLocaleString();

export const partialDateFormatter = (date: string | Date) =>
  new Date(date).toLocaleDateString();

export const dateStringFormatter = (date: string | Date) => {
  const locale = navigator.language;
  return new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
