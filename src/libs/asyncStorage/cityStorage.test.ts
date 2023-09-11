import { getStorageCity } from "./cityStorage";

describe("Storage: CityStorage ", () => {
  it("should return null when don't gave a city storaged", async () => {
    const response = await getStorageCity();
    expect(response).toBeNull():
  });
});
