
export type Locale = 'en-US' | 'pt-BR';

export const translations = {
  'en-US': {
    title: 'UniGlyph',
    subtitle: 'Unicode Presentation Swap',
    heroTitle: 'Simplicity in Monochrome',
    heroDesc: 'Effortlessly convert colorful emojis into clean, compliant monochrome text using standard Unicode Variation Selectors.',
    inputLabel: 'Emoji Input',
    outputLabel: 'Monochrome Display',
    placeholder: 'Paste colored emojis here...',
    copy: 'Copy Text',
    copied: 'Copied',
    clear: 'Clear',
    infoInput: 'Enter text with colored emojis to see them transformed into monochrome.',
    infoOutput: 'The Variation Selector-15 (U+FE0E) has been applied to applicable characters to request a text presentation.',
    doc: 'Documentation',
    api: 'API',
    webStandards: 'Web Standards',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: 'Precision Unicode Tools',
    outputEmpty: 'Transformed output will appear here...'
  },
  'pt-BR': {
    title: 'UniGlyph',
    subtitle: 'Troca de Apresentação Unicode',
    heroTitle: 'Simplicidade em Monocromático',
    heroDesc: 'Converta emojis coloridos em texto monocromático limpo e compatível usando Seletores de Variação Unicode padrão.',
    inputLabel: 'Entrada de Emoji',
    outputLabel: 'Exibição Monocromática',
    placeholder: 'Cole emojis coloridos aqui...',
    copy: 'Copiar Texto',
    copied: 'Copiado',
    clear: 'Limpar',
    infoInput: 'Insira texto com emojis coloridos para vê-los transformados em monocromático.',
    infoOutput: 'O Seletor de Variação-15 (U+FE0E) foi aplicado aos caracteres aplicáveis para solicitar uma apresentação de texto.',
    doc: 'Documentação',
    api: 'API',
    webStandards: 'Padrões Web',
    privacy: 'Privacidade',
    terms: 'Termos de Serviço',
    copyright: 'Ferramentas de Precisão Unicode',
    outputEmpty: 'O resultado transformado aparecerá aqui...'
  }
};

export function getLocale(): Locale {
  if (typeof window === 'undefined') return 'en-US';
  const lang = navigator.language;
  if (lang.toLowerCase().startsWith('pt')) return 'pt-BR';
  return 'en-US';
}
