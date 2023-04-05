import { test, expect } from "@playwright/test";

test("should add a product", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.click("text=Add Product");
  await page.fill('input[name="name"]', "Butter");
  await page.fill('input[name="price"]', "2.99");
  await page.fill('input[name="quantity"]', "1");
  await page.click("text=Add");
  await expect(page).toHaveText("Butter");
});
