export type AutocompleteSource = string[] | ((query: string, populateResults: (results: string[]) => void) => void);

export type AutocompleteOption = {
  value: string;
  label?: string;
};
