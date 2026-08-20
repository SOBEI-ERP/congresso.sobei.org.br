const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api';

export async function enviarInscricaoCongresso(dados) {
  try {
    const response = await fetch(`${API_BASE_URL}/public/inscricoes-congresso`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Ocorreu um erro ao processar sua inscrição.',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Erro ao enviar inscrição:', error);
    return {
      success: false,
      message: 'Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.',
    };
  }
}

export async function consultarInscricaoCongresso(cpf, email) {
  try {
    const response = await fetch(`${API_BASE_URL}/public/inscricoes-congresso/consultar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cpf, email }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Nenhuma inscrição encontrada com o CPF e e-mail informados.',
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Erro ao consultar inscrição:', error);
    return {
      success: false,
      message: 'Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.',
    };
  }
}
