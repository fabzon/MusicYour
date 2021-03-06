import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },
  title: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: colors.dark,
    marginTop: 3,
  },
  active: {
    color: colors.green,
  },
  play: {
    color: colors.regular,
  },
});

export default styles;
