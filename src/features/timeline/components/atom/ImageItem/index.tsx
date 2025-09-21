import React from "react";
import { Image, ImageSourcePropType } from "react-native";

import { borderRadius, spacing } from "@/src/common/theme";
import { PostImage } from "../../../types";
import { styles } from "./styles";

interface ImageItemProps {
  image: PostImage;
  width: number;
  isMultiple?: boolean;
}

export const ImageItem = React.memo<ImageItemProps>(
  ({ image, width, isMultiple }) => {
    const aspectRatio = image.width / image.height;
    const height = width / aspectRatio;
    console.log("height ===>", height, aspectRatio);
    return (
      <Image
        source={image.image as ImageSourcePropType}
        style={[
          styles.image,
          {
            width: isMultiple ? width - spacing.lg : width,
            height: Math.max(height, 300),
            marginRight: isMultiple ? spacing.sm : 0,
            borderRadius: isMultiple ? borderRadius.xl : borderRadius.md,
          },
        ]}
        resizeMode="cover"
      />
    );
  }
);

ImageItem.displayName = "ImageItem";
