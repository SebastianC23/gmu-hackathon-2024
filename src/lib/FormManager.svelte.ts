export class FormManager {
  step: number = $state(0);
  schools: string[] = $state([]);
  searchQuery: string = $state('');
  steps: string[] = ['Add Schools', 'Search for Courses', 'See your results'];
  progress: string = $derived.by(() => {
    let progress = Math.ceil((this.step + 1) * (100 / this.steps.length));
    return `${progress}%`;
  });
  title: string = $derived(this.steps[this.step]);

  next() {
    if (this.step < this.steps.length - 1) {
      this.step++;
    }
  }

  back() {
    if (this.step > 0) {
      this.step--;
    }
  }
}
