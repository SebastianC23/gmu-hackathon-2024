<script lang="ts">
  let steps = ['Add Schools', 'Search for Courses', 'See your results'];
  let step: number = $state(0);
  let selectedSchools: string[] = $state([]);

  let title: string = $derived(steps[step]);

  // 0 -> 33%
  // 1 -> 66%
  // 2 -> 100%

  let progress: string = $derived(`${(step + 1) * 33}%`);

  function next() {
    if (step < steps.length - 1) {
      step += 1;
    }
  }

  function back() {
    if (step > 0) {
      step -= 1;
    }
  }
</script>

<div class="form">
  <div class="arrow">
    <div class="progress" style:width={progress}>Progress</div>
  </div>
  <div class="title">
    <h2>{title}</h2>
  </div>
  <div class="content">
    {#if step === 0}
      {@render AddSchools()}
    {/if}
    {#if step === 1}
      {@render SearchCourses()}
    {/if}
    {#if step === 2}
      {@render Results()}
    {/if}
  </div>
  <div class="btn-row">
    <button onclick={back} disabled={step === 0}>Back</button>
    <button onclick={next} disabled={step === steps.length - 1}>Next</button>
  </div>
</div>

{#snippet AddSchools()}
  <div>
    <h1>Add Schools</h1>
    <input type="text" placeholder="Search for schools" />
    <ul>
      {#each selectedSchools as school}
        <li>{school}</li>
      {/each}
    </ul>
  </div>
{/snippet}

{#snippet SearchCourses()}
  <div>
    <h1>Search for Courses</h1>
    <input type="text" placeholder="Search for courses" />
  </div>
{/snippet}

{#snippet Results()}
  <div>
    <h1>See your results</h1>
    <p>Results will be displayed here</p>
  </div>
{/snippet}

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    height: 600px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    overflow: hidden;
  }

  .title {
    font-weight: 600;
    margin: 0;
    padding: 20px;
    width: 100%;
    background-color: #000;
    color: #fff;
  }

  .content {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
  }

  .btn-row {
    height: max-content;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    & button {
      padding: 0.5em 1em;
      border-radius: 5px;
      background-color: #fff;
      color: #000;
      cursor: pointer;
      transition: all 300ms;
      border: 1px solid #ccc;

      &:hover {
        background-color: #ccc;
      }

      &[disabled] {
        background: #f5f5f5;
        color: #ccc;
        border: none;
        cursor: not-allowed;
      }
    }
  }

  .arrow {
    position: relative;
    width: 100%;
    height: 2rem;
    background-color: #f5f5f5;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & .progress {
      height: 2rem;
      background-color: var(--color-secondary);
      transition: width 300ms ease;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
</style>
