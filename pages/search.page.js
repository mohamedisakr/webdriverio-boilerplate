import PageBase from "./page.base";
import {
  searchBox,
  searchButton,
  category,
} from "../selectors/search.selectors";

class SearchPage extends PageBase {
  constructor() {
    super("./");
  }

  get $searchBox() {
    return $(searchBox);
  }

  get $searchButton() {
    return $(searchButton);
  }

  get $category() {
    return $(category);
  }
}

export default new SearchPage();
