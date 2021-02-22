<script lang="ts">
  import Autocomplete from '~components/Autocomplete.svelte';
  import BookDetails from '~components/BookDetails.svelte';

  import { books, genres } from '~data/booksAndGenres.ts';
  import noImage from '~data/images/noImage.jpg';

  import type { Book, Genre } from '../types';

  const defaultBook: Book = {
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Description',
    image: noImage,
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

<div class="container">
  <Autocomplete
    {placeholder}
    showChevron
    items={genres}
    onSelect={handleSelect}
  />

  <BookDetails {currentBook} />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
