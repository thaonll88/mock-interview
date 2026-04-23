import { test, expect } from "@playwright/test";

test("should navigate to API page and verify locator heading", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "API" }).click();
  await expect(page).toHaveURL(/.*docs\/api\/class-playwright/);

  const sidebar = page.getByLabel("Docs sidebar");
  await expect(sidebar).toBeVisible();

  await sidebar.getByRole("link", { name: "Locator", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Locator", exact: true }),
  ).toBeVisible();
});
