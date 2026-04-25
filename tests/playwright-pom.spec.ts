import { test, expect } from "@playwright/test";

test("verify search page object model", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("button", { name: "search" }).click();
  await page.getByPlaceholder("Search docs").fill("page object model");
  await page.locator(".DocSearch-Hit").first().waitFor();

  const dropdown = page.locator(".DocSearch-Hit");
  const count = await dropdown.count();

  expect(count).toBeGreaterThanOrEqual(3);

  await dropdown
    .getByRole("link", { name: /page object models/i })
    .first()
    .click();
  await expect(page).toHaveURL(/.*docs\/pom/);
});
