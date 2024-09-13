const formatForReal = (value: number) => {
  // Verifica se o valor é um número válido
  if (isNaN(value)) {
    return 'R$ 0,00';
  }

  // Formata o número para o padrão brasileiro
  const valueFormatado = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return valueFormatado;
};

export { formatForReal };
