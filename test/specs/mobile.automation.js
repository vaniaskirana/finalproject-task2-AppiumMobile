const assert = require("assert");
describe("Test Element Visibility", () => {
  it("should check if the element is visible", async () => {
    // Ganti XPath selector berikut dengan selector yang sesuai
    const xpathSelector =
      '//android.widget.ImageView[@resource-id="com.fghilmany.dietmealapp:id/iv_splash"]';
    const element = await driver.$(xpathSelector);
    const isDisplayed = await element.isDisplayed();
    assert.strictEqual(isDisplayed, true, "The element is not visible");
  });
});

describe("Open Application", () => {
  it("should open apps", async () => {
    await $(
      "//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_name']"
    ).click();
    await $(
      "//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_name']"
    ).setValue("Vania Sasikirana");
    await $(
      "//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']"
    ).click();
    await $(
      "//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']"
    ).setValue("45");
    await $(
      "//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']"
    ).click();
    await $(
      "//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']"
    ).setValue("155");
    await $(
      "//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_female']"
    ).click();
    await driver.hideKeyboard();
    await $(
      "//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_next']"
    ).click();
    await $(
      "//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_low_to_medium']"
    ).click();
    await $(
      "//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_finish']"
    ).click();
    await $("//android.widget.FrameLayout[@content-desc='Profile']").click();
    await $(
      "//android.widget.ImageButton[@content-desc='add_profile']"
    ).click();
  });
});
