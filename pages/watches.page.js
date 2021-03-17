import PageBase from "./page.base";

class WatchesPage extends PageBase {
  constructor() {
    super("./b/Wristwatches/31387/bn_2408451");
  }

  get $bannerTitle() {
    return $(`.title-banner__title`);
  }
}

export default new WatchesPage();
