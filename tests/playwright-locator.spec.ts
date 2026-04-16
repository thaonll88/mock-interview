import { test, expect } from "@playwright/test";

test("should navigate to locators page after searching by text locator in search box", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("button", { name: "search" }).click();
  await page.getByPlaceholder("Search docs").fill("locators");
  await page.getByRole("link", { name: "Locators" }).first().click();
  await expect(page).toHaveURL(/.*docs\/locators/);
});
