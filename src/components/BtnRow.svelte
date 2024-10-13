<script lang="ts">
  interface Props {
    formManager: FormManager;
  }

  let { formManager }: Props = $props();
</script>

<div class="btn-row">
  <button onclick={() => formManager.back()} disabled={formManager.step === 0}>
    Back
  </button>
  <button
    onclick={() => formManager.next()}
    disabled={formManager.step === formManager.steps.length - 1}>Next</button
  >
</div>

<style>
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
</style>
