<script lang="ts">
  import Select from 'svelte-select';

  export let items: Record<string, any>[];
  export let placeholder: string;
  export let showChevron: boolean;
  export let onSelect: (e: any) => void;
</script>

<div class="container">
  <Select {items} {showChevron} {placeholder} on:select={onSelect} />
</div>

<style lang="scss">
  .container {
    --border: 2px solid var(--color-purple);
    --borderHoverColor: var(--color-purple);
    --borderFocusColor: var(--color-purple);
    --itemHoverBG: rgba(81, 45, 168, 0.4);
    --itemIsActiveBG: var(--color-purple);
    --inputFontSize: 18px;

    height: 48px;
    width: 560px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 176px;
  }
</style>
