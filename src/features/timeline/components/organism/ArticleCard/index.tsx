import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { icons } from "@/src/common/icons";
import { ArticlePost } from "@/src/features/timeline/types";
import { ArticleHeader, IconCount } from "../../index";
import { styles } from "./styles";

interface ArticleCardProps {
  article: ArticlePost;
}

export const ArticleCard = React.memo<ArticleCardProps>(({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Count words in content
  const wordCount = article.content.split(" ").length;
  const shouldShowContinueReading = wordCount > 50 && !isExpanded;

  // Get preview text (first 50 words)
  const previewText = shouldShowContinueReading
    ? article.content.split(" ").slice(0, 50).join(" ") + "..."
    : article.content;

  const handleContinueReading = () => {
    setIsExpanded(true);
  };

  return (
    <View style={styles.container}>
      <ArticleHeader
        user={article.user}
        timestamp={article.timestamp}
        onMorePress={() => console.log("More pressed")}
      />

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{article.title}</Text>
          </View>
          {article.image && (
            <View style={styles.imageContainer}>
              <Image
                source={
                  typeof article.image.image === "string"
                    ? { uri: article.image.image }
                    : article.image.image
                }
                style={styles.articleImage}
                resizeMode="cover"
              />
            </View>
          )}
        </View>

        <View style={styles.metaSection}>
          <View style={styles.metaInfo}>
            <Text style={styles.viewsText}>{article.timestamp}</Text>
            <Text style={styles.viewsText}>•</Text>
            <Text style={styles.viewsText}>{article.readTime}</Text>
          </View>
          <Text style={styles.viewsText}>{article.stats.views}K views</Text>

          <TouchableOpacity activeOpacity={0.7}>
            <Image source={icons.bookmark} style={styles.saveIcon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={icons.more} style={styles.saveIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{previewText}</Text>

          {shouldShowContinueReading && (
            <View style={styles.gradientContainer}>
              <LinearGradient
                colors={[
                  "rgba(255,255,255,0)",
                  "rgba(255,255,255,0.8)",
                  "rgba(255,255,255,1)",
                ]}
                style={styles.gradient}
              />
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinueReading}
                activeOpacity={0.7}
              >
                <Text style={styles.continueButtonText}>Continue Reading</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={styles.actionsRow}>
        <IconCount
          icon={icons.comments}
          count={article.stats.comments}
          text="Comment"
        />
        <IconCount icon={icons.views} count={article.stats.views} text="View" />
        <IconCount icon={icons.likes} count={article.stats.likes} text="Like" />
        <TouchableOpacity activeOpacity={0.7} style={{ alignItems: "center" }}>
          <Image source={icons.share} style={{ width: 24, height: 24 }} />
          <Text style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

ArticleCard.displayName = "ArticleCard";
