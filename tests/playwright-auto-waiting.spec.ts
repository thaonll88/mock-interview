import { test, expect } from "@playwright/test";

test("Verify heading Auto-waiting and at least one text mentioned actionability", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Docs" }).click();
  await expect(page).toHaveURL(/.*docs\/intro/);

  const guidesMenu = page.getByRole("button", { name: "Guides" });
  const isExpanded = await guidesMenu.getAttribute("aria-expanded");

  if (isExpanded !== "true") {
    await guidesMenu.click();
  }
  const sidebar = page.getByLabel("Docs sidebar");
  await sidebar
    .getByRole("link", { name: "Auto-waiting", exact: true })
    .click();

  await expect(page).toHaveURL(/.*docs\/actionability/);
  await expect(
    page.getByRole("heading", { name: "Auto-waiting", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("actionability").first()).toBeVisible();
});
