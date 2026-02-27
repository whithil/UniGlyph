/**
 * Unicode Variation Selector-15 (U+FE0E) for text presentation (monochrome).
 * Unicode Variation Selector-16 (U+FE0F) for emoji presentation (color).
 */
export const VS15 = '\uFE0E';
export const VS16 = '\uFE0F';

/**
 * Converts a string by appending or replacing variation selectors to ensure 
 * text presentation for emojis.
 */
export function convertToMonochrome(input: string): string {
  if (!input) return '';

  // Use a regex that targets emoji characters and potential base characters.
  // We look for characters and strip any existing VS15 or VS16, then append VS15.
  // This approach handles most standard emojis.
  
  // Regex explanation:
  // [\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}] targets common emoji blocks.
  // [\uFE0E\uFE0F]? optionally matches an existing Variation Selector.
  const emojiRegex = /([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}])[\uFE0E\uFE0F]?/gu;

  return input.replace(emojiRegex, (_, emoji) => {
    return emoji + VS15;
  });
}
