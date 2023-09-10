import { mockCityAPIResponse } from "@__tests__/mocks/mockCityApiResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", () => {
  it("should return city info", async () => {
    const data = mockCityAPIResponse;

    jest.spyOn(api, "get").mockResolvedValue({
      data,
    });
    const response = await getCityByNameService("São Paulo");
    expect(response.length).toBeGreaterThan(0);
  });
});
