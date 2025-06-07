export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const dateFormatter = (date: string | Date) =>
  new Date(date).toLocaleString();

export const partialDateFormatter = (date: string | Date) =>
  new Date(date).toLocaleDateString();
