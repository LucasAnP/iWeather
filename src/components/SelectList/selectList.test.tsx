import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Component: SelectList", () => {
  it("should return city details when selected.", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campo Grande", latitude: 789, longitude: 987 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/Campo/i);
    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledWith(data[1]);
  });

  it("shouldn't show options when data props is empty. ", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");

    expect(options.children).toHaveLength(0);
  });
});
