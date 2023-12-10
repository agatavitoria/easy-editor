import type { Meta, StoryObj } from "@storybook/react";

import { EasyEditor } from "../packages";

const meta: Meta<typeof EasyEditor> = {
  component: EasyEditor,
};

export default meta;
type Story = StoryObj<typeof EasyEditor>;

export const Primary: Story = {
  args: {},
};
