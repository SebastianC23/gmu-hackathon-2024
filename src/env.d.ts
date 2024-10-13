/// <reference path="../.astro/types.d.ts" />

type FormManager = {
  step: number;
  schools: string[];
  searchQuery: string;
  steps: string[];
  progress: string;
  title: string;
  next: () => void;
  back: () => void;
};
