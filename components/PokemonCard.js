import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  const { borderColor, emoji } = getTypeDetails(type);

  const isDesktop = Platform.OS === "web" ? true : false;

  return (
    <View style={[styles.card, isDesktop && styles.desktopCard]}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}> ❤️{hp}</Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      {/* <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves:</Text>
        <Text style={[styles.movesText, { fontWeight: "300" }]}>
          {moves.join(", ")}
        </Text>
      </View> */}
      <View style={styles.movesContainer}>
        <View style={styles.movesTextContainer}>
          <Text style={styles.movesText}>Moves:</Text>
          <Text style={[styles.movesText, { fontWeight: "300" }]}>
            {moves.join(", ")}
          </Text>
        </View>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000", // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
  },

  hp: {
    fontSize: 22,
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },

  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },

  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },

  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  //   movesContainer: {
  //     marginBottom: 22,
  //   },
  //   movesText: {
  //     fontSize: 22,
  //     fontWeight: "bold",
  //   },

  movesContainer: {
    // flexDirection: "column", // Column layout
    // alignItems: "flex-start", // Align content at the start (left)
    marginBottom: 16, // Add some margin between this and other content
  },
  movesTextContainer: {
    flexDirection: "row",
    alignItems: "center", // Align content in the center vertically
    flexWrap: "wrap",
  },
  movesText: {
    fontSize: 20,
    fontWeight: "bold",
    // marginRight: 8, // Add some space between "Moves:" and the actual moves
  },

  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  // desktopCard: {
  //   maxWidth: 400,
  // },
});

export default PokemonCard;
