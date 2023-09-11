import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should render day", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30c",
            max: "34c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "30c",
            max: "34c",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "20/07",
            min: "30c",
            max: "34c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "21/07",
            min: "30c",
            max: "34c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "22/07",
            min: "30c",
            max: "34c",
            icon: clearDay,
            weather: "Chuva fraca",
          },
        ]}
      />
    );

    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
