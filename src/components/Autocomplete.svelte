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
    --border: 2px solid #512da8;
    --borderHoverColor: #512da8;
    --borderFocusColor: #512da8;
    --itemHoverBG: rgba(81, 45, 168, 0.4);
    --itemIsActiveBG: #512da8;
    --inputFontSize: 18px;

    height: 48px;
    width: 560px;
  }
</style>
