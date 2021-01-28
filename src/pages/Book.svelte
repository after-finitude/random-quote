<script lang="ts">
  import BaseLayout from '~components/BaseLayout.svelte';
  import Autocomplete from '~components/Autocomplete.svelte';

  type Genre = {
    value: string;
    label: string;
  };

  const genres: Genre[] = [
    { value: 'business', label: 'Бизнес' },
    { value: 'detective', label: 'Детектив' },
    { value: 'drama', label: 'Драма' },
    { value: 'history', label: 'История' },
    { value: 'comedy', label: 'Комедия' },
    { value: 'novel', label: 'Роман' },
    { value: 'fantastic', label: 'Фантастика' },
    { value: 'fantasy ', label: 'Фэнтези' },
  ];

  const handleSelect = (e) => {
    console.log('Value: ', e.detail.value);
  };
</script>

<BaseLayout>
  <Autocomplete
    showChevron
    items={genres}
    placeholder="Выберите жанр"
    onSelect={handleSelect}
  />
</BaseLayout>
