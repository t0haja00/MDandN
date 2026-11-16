import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';


const SIDE_WIDTH = 80;

const styles = StyleSheet.create<{ side: ViewStyle; title: TextStyle }>({
  side: {
    width: SIDE_WIDTH,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
});

export default function CustomAppBar({
  navigation,
  route,
  options,
  back,
}: NativeStackHeaderProps) {
  const { colors } = useTheme();
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      <View style={styles.side}>
        {back ? (
          <Appbar.BackAction
            color={colors.onPrimary}
            onPress={() => navigation.goBack()}
          />
        ) : null}
      </View>

      <Appbar.Content
        title={title}
        titleStyle={[styles.title, { color: colors.onPrimary }]}
      />

      <View style={styles.side}>
        {!back ? (
          <Appbar.Action
            icon="arrow-right"
            color={colors.onPrimary}
            onPress={() => navigation.navigate('Second')}
          />
        ) : null}
      </View>
    </Appbar.Header>
  );
}