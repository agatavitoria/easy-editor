import type { Meta, StoryObj } from "@storybook/react";
import { EasyEditor } from "../packages";

const meta: Meta<typeof EasyEditor> = {
  component: EasyEditor,
};
export default meta;

type Story = StoryObj<typeof EasyEditor>;

const initialValue =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const Default: Story = {
  args: {
    initialValue,
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: "Escreva aqui...",
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Escreva aqui...",
    initialValue,
    readOnly: true,
  },
};
