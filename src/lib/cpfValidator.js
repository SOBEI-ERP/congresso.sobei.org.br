/**
 * Validador e formatador robusto de CPF para o Portal do Congresso SOBEI.
 * Suporta o formato tradicional numérico e o novo formato alfanumérico da Receita Federal (IN RFB 2.229/2024).
 */

/**
 * Remove qualquer caractere que não seja letra ou número e converte para maiúsculo.
 * @param {string} cpf 
 * @returns {string}
 */
export function cleanCpf(cpf) {
  if (!cpf) return '';
  return cpf.toString().replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}

/**
 * Aplica a máscara dinâmica oficial: XXX.XXX.XXX-XX
 * @param {string} value 
 * @returns {string}
 */
export function formatCpf(value) {
  const clean = cleanCpf(value).slice(0, 11);
  if (clean.length <= 3) return clean;
  if (clean.length <= 6) return `${clean.slice(0, 3)}.${clean.slice(3)}`;
  if (clean.length <= 9) return `${clean.slice(0, 3)}.${clean.slice(3, 6)}.${clean.slice(6)}`;
  return `${clean.slice(0, 3)}.${clean.slice(3, 6)}.${clean.slice(6, 9)}-${clean.slice(9, 11)}`;
}

/**
 * Retorna o valor numérico do caractere de acordo com a especificação da Receita Federal (ASCII - 48).
 * '0'-'9' => 0..9
 * 'A'-'Z' => 17..42
 * @param {string} char 
 * @returns {number}
 */
function getCharValue(char) {
  const code = char.charCodeAt(0);
  if (code >= 48 && code <= 57) {
    return code - 48; // '0'..'9' => 0..9
  }
  if (code >= 65 && code <= 90) {
    return code - 48; // 'A'..'Z' => 17..42
  }
  throw new Error(`Caractere inválido: ${char}`);
}

/**
 * Valida o CPF através do algoritmo oficial de Módulo 11 da Receita Federal.
 * @param {string} cpf 
 * @returns {boolean}
 */
export function validateCpf(cpf) {
  if (!cpf) return false;

  const clean = cleanCpf(cpf);

  // Deve possuir exatamente 11 caracteres
  if (clean.length !== 11) {
    return false;
  }

  // Rejeita sequências com todos os caracteres iguais (ex: 00000000000, 11111111111, AAAAAAAAAAA)
  if (/^(.)\1{10}$/.test(clean)) {
    return false;
  }

  // Os 9 primeiros caracteres devem ser [0-9A-Z]
  if (!/^[0-9A-Z]{9}[0-9]{2}$/.test(clean)) {
    return false;
  }

  // Cálculo do 1º Dígito Verificador (DV1)
  let sum1 = 0;
  for (let i = 0; i < 9; i++) {
    const val = getCharValue(clean[i]);
    sum1 += val * (10 - i);
  }
  const mod1 = sum1 % 11;
  const expectedDv1 = mod1 < 2 ? 0 : 11 - mod1;
  const actualDv1 = parseInt(clean[9], 10);

  if (actualDv1 !== expectedDv1) {
    return false;
  }

  // Cálculo do 2º Dígito Verificador (DV2)
  let sum2 = 0;
  for (let i = 0; i < 9; i++) {
    const val = getCharValue(clean[i]);
    sum2 += val * (11 - i);
  }
  sum2 += expectedDv1 * 2;
  const mod2 = sum2 % 11;
  const expectedDv2 = mod2 < 2 ? 0 : 11 - mod2;
  const actualDv2 = parseInt(clean[10], 10);

  return actualDv2 === expectedDv2;
}
