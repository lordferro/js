<form class="form-inline search-form js-search-form">
      <div class="form-group">
        <input type="text" class="form-control" name="query" />
      </div>

<button type="submit" class="btn btn-primary">Искать</button>
</form>

const refs = {
  searchForm: document.querySelector(".js-search-form"),
};

refs.searchForm.addEventListener('submit', onSearch);



function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  <!-- выбор по имени инпута -->
  const searchQuery = form.elements.query.value
