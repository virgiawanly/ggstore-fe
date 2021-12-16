import { Meta } from "@storybook/react";
import GameItem, {
  GameItemProps,
} from "../../../../components/molecules/GameItem";

export default {
  title: "Components/Molecules/GameItem",
  components: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Valorant",
  category: "Mobile",
  thumbnail: "/img/Thumbnail-1.png",
};
