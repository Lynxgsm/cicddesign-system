import { fireEvent, render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import {Typography} from '../../Typography/Typography'

describe("Dropdown", () => {
  it("should render on the screen", () => {
    render(
      <Dropdown button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const group = screen.getByRole("group");

    expect(group).toBeDefined();
  });

  it("should be close by default", () => {
    render(
      <Dropdown button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.className).toContain("close");
  });

  it("should open the dialog and call the onClick method when the button is clicked", () => {
    const onClick = jest.fn();

    render(
      <Dropdown onClick={onClick} button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(dialog.classList.contains("close")).toBeFalsy();
    expect(onClick).toBeCalledWith(false);
  });

  it("should close the dialog when the backdrop is clicked", () => {
    render(
      <Dropdown button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");
    const button = screen.getByRole("button");
    const backdrop = screen.getByRole("complementary");
    fireEvent.click(button);
    fireEvent.click(backdrop);

    expect(dialog.className).toContain("close");
  });

  it("should close the dialog when the backdrop is focused", () => {
    render(
      <Dropdown button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");
    const button = screen.getByRole("button");
    const backdrop = screen.getByRole("complementary");
    fireEvent.click(button);
    fireEvent.focusIn(backdrop);

    expect(dialog.className).toContain("close");
  });

  it("should close the dialog when the backdrop is focused", () => {
    render(
      <Dropdown button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");
    const button = screen.getByRole("button");
    const backdrop = screen.getByRole("complementary");
    fireEvent.click(button);
    fireEvent.focusIn(backdrop);

    expect(dialog.className).toContain("close");
  });

  it("should be supernova if colorScheme is not passed", () => {
    render(
      <Dropdown button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.className).toContain("dropdown-supernova");
  });

  it("should take the colorScheme passed as props", () => {
    render(
      <Dropdown colorScheme="comet" button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.className).toContain("dropdown-comet");
  });

  test("The arrow should be at left when it is not passed in props", () => {
    render(
      <Dropdown button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.className).toContain("left");
  });

  it("Should take the arrowPosition passed in props", () => {
    render(
      <Dropdown arrowPosition="right" button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.className).toContain("right");
  });

  it("Should translate to left and top if translation is passed", () => {
    const [left, top] = ["30px", "60px"];
    render(
      <Dropdown left="auto" top="auto" button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.style.transform).toContain(`${left}, ${top}`);
  });

  it("Should parse into pixel if number is passed in translations props", () => {
    const [left, top] = [30, 60];
    render(
      <Dropdown left={left} top={top} button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.style.transform).toContain(`${left}px, ${top}px`);
  });

  it("Should not be decorated by default", () => {
    render(
      <Dropdown button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.classList.contains("decorated")).toBeFalsy();
  });

  it("Should be decorated when it is passed in props", () => {
    render(
      <Dropdown decorated button={<button>Click Me</button>}>
        <Typography variant="h5">Hello World</Typography>
      </Dropdown>
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog.className).toContain("decorated");
  });
});
