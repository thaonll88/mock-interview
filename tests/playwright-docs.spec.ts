import { test, expect } from "@playwright/test";

test("should navigate to get started page and verify installation heading", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Get started" }).click();
  await expect(page).toHaveURL(/.*docs\/intro/);
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});
