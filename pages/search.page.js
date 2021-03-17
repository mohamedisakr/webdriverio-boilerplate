import PageBase from "./page.base";

class SearchPage extends PageBase {
  constructor() {
    super("./");
  }

  get $searchBox() {
    return $(`#gh-ac`);
  }
  // $searchBox.setValue(searchKeyword);
  get $searchButton() {
    return $(`#gh-btn`);
  }
  // $searchButton.click();

  get $category() {
    //firstOption
    return $(`#gh-cat option:nth-child(1)`);
  }
}

export default new SearchPage();
