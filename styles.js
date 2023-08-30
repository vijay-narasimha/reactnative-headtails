import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: 'center',

    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  box: {
    flexDirection: 'row',
  },
  inputBox: {
    flex: 1,
    padding: 2.5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
  },
  errMessage: {
    marginTop: 20,
    color: 'red',
  },
  showMatrix: {
    flexDirection: 'row',
    marginTop: 20,
  },
  column: {
    flexDirection: 'column',
  },
  item: {
    width: 30,
    height: 30,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
