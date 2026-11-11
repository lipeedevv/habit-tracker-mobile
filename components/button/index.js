import { Pressable, Text, StyleSheet } from "react-native";

export const BUTTON_PRIMARY = "primary";
export const BUTTON_SECONDARY = "secondary";
export const BUTTON_DANGER = "danger";
export const BUTTON_SUCCESS = "success";

export function Button({ type = BUTTON_PRIMARY, text, onClick }) {
  const buttonStyle = {
    [BUTTON_PRIMARY]: styles.buttonPrimary,
    [BUTTON_SECONDARY]: styles.buttonSecondary,
    [BUTTON_DANGER]: styles.buttonDanger,
    [BUTTON_SUCCESS]: styles.buttonSuccess,
  };

  return (
    <Pressable style={buttonStyle[type]} onPress={onClick}>
      <Text
        style={[
          styles.buttonText,
          type === BUTTON_PRIMARY || type === BUTTON_SUCCESS
            ? styles.buttonTextWhite
            : type === BUTTON_DANGER
              ? styles.buttonTextDanger
              : null,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: "#00543C",
    padding: 9,
    borderRadius: 20,
    marginTop: 8,
  },

  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#9AA9A1",
    padding: 8,
    borderRadius: 20,
    marginTop: 8,
  },

  buttonDanger: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#FF4B4B",
    padding: 8,
    borderRadius: 20,
    marginTop: 8,
  },

  buttonSuccess: {
    backgroundColor: "#00543C",
    padding: 9,
    borderRadius: 20,
    marginTop: 8,
  },

  buttonText: {
    color: "#00543C",
    fontSize: 12,
    textAlign: "center",
    includeFontPadding: false,
  },
  
  buttonTextWhite: {
    color: "#ffffff",
  },

  buttonTextDanger: {
    color: "#FF4B4B",
  },
});
