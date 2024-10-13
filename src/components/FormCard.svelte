<script lang="ts">
  import { FormManager } from '../lib/FormManager.svelte.ts';
  import BtnRow from './BtnRow.svelte';

  let formManager = new FormManager();

  const schools = ['virginia tech', 'virginia commonwealth university'];
</script>

<div class="form">
  <div class="arrow">
    <div class="progress" style:width={formManager.progress}></div>
  </div>
  <div class="title">
    <h2>{formManager.title}</h2>
  </div>
  <div class="content">
    {#if formManager.step === 0}
      <h2>Select your School</h2>
      <input
        type="text"
        bind:value={formManager.searchQuery}
        placeholder="School Name"
      />
    {/if}
    {#if formManager.step === 1}
      <h2>Select your courses</h2>
      <input
        type="text"
        bind:value={formManager.searchQuery}
        placeholder="Major Name"
      />
    {/if}
    {#if formManager.step === 2}
      <h2>See your courses!</h2>
      <p>I really is that simple</p>
    {/if}
  </div>
  <BtnRow {formManager}></BtnRow>
</div>

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .arrow {
    position: relative;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #ccc;

    & .progress {
      height: 1rem;
      background-color: var(--color-secondary);
      transition: width 300ms ease;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
</style>
