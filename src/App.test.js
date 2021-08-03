import { render, screen } from "@testing-library/react";

import Footer from "./components/Footer/Footer";

import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, "muted", {
    set: jest.fn(),
  });
});

test("Renders the Footer component", () => {
  render(<Footer />);
  expect(screen.getAllByText("About Me")).toHaveLength(1);
});
test("Renders NotFoundPage", () => {
  render(<NotFoundPage />);
  expect(screen.getAllByText("Error 404")).toHaveLength(1);
});
