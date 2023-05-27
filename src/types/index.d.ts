import type { ESLint } from 'eslint';

export interface Configuration
  extends Omit<ESLint.ConfigData, 'extends' | 'plugins'> {
  extends: string[];
  plugins: string[];
}
