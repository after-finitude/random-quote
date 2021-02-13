<script lang="ts">
  import Autocomplete from '~components/Autocomplete.svelte';
  import BaseLayout from '~components/BaseLayout.svelte';
  import BookLayout from '~components/BookLayout.svelte';
  import BookDetails from '~components/BookDetails.svelte';

  import books from '../data/books.json';
  import genres from '../data/genres.json';

  import type { Book, Genre } from '../types';

  const defaultBook: Book = {
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Description',
    image: '',
  };

  const placeholder = 'Выберите жанр';

  let currentBook = defaultBook;

  const chooseGenre = (genre: string) => {
    const booksByGenre: Book[] = books[genre];

    currentBook =
      booksByGenre[Math.floor(Math.random() * booksByGenre.length)] ??
      defaultBook;
  };

  const handleSelect = (e: CustomEvent<Genre>) => {
    chooseGenre(e.detail.value);
  };
</script>

<BaseLayout>
  <BookLayout>
    <Autocomplete
      {placeholder}
      showChevron
      items={genres}
      onSelect={handleSelect}
    />

    <BookDetails {currentBook} />
  </BookLayout>
</BaseLayout>
