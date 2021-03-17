import PageBase from "./page.base";

class WatchesPage extends PageBase {
  constructor() {
    super("./b/Wristwatches/31387/bn_2408451");
  }

  get $bannerTitle() {
    return $(`.title-banner__title`);
  }

  get $$searchBarAccordion() {
    return $$(
      `.x-refine__left__nav li:nth-child(2).x-refine__main__list.x-refine__main__list--aspect .x-refine__main__value .x-refine__main__list--value.x-refine__main__list--aspect .x-refine__multi-select .cbx.x-refine__multi-select-cbx`
    );
  }

  getBrandList() {
    return this.$$searchBarAccordion.map((span) => span.getText());
  }
}

export default new WatchesPage();
