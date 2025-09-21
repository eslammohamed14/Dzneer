import React, { useCallback } from "react";
import { Text, View } from "react-native";

import { Checkbox } from "@/src/features/timeline";
import { TodoCardType } from "../../../types";
import { styles } from "./styles";

interface TodoCardProps {
  todoCard: TodoCardType;
  onToggleItem: (todoId: string, itemId: string) => void;
}

export const TodoCard = React.memo<TodoCardProps>(
  ({ todoCard, onToggleItem }) => {
    const handleToggleItem = useCallback(
      (itemId: string) => {
        onToggleItem(todoCard.id, itemId);
      },
      [todoCard.id, onToggleItem]
    );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{todoCard.title}</Text>
        </View>

        <View style={styles.content}>
          {todoCard.items.map((item) => (
            <Checkbox
              key={item.id}
              text={item.text}
              isCompleted={item.isCompleted}
              onToggle={() => handleToggleItem(item.id)}
            />
          ))}
        </View>
        <Text style={styles.calendar}>View the calendar</Text>
      </View>
    );
  }
);

TodoCard.displayName = "TodoCard";
