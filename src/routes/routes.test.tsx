import { render, screen, waitFor } from "@testing-library/react-native";
import { Routes } from ".";
import { SafeAreaProvider } from "react-native-safe-area-context";

describe("Routes", () => {
  it("should render search screen when city isn't selected", async () => {
    render(<Routes />, {
      wrapper: SafeAreaProvider,
    });

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    expect(title).toBeTruthy();
  });
});
