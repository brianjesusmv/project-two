import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userLogin } from '../../redux/actions/user.actions'
import TextButton from '../../components/global/ui/TextButton'

const SceneLogin = ({ loginUser, isUserLoggedIn, storedUserName }) => {
  const [name, setName] = useState('')

  return (
    <ImageBackground style={styles.imageBackground}>
      <Text>
        Login
      </Text>
      <TextInput
        style={{ height: 50, width: 200, borderColor: 'gray', borderWidth: 3, padding: 10, margin: 10 }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextButton
        title="Login"
        type="secondary"
        onPress={() => loginUser(name || 'Anon')}
      />

      {isUserLoggedIn ? (<Text>{`Welcome, ${storedUserName}!`}</Text>) : undefined}

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

SceneLogin.defaultProps = { storedUserName: '' }

SceneLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
  storedUserName: PropTypes.string,
}

const mapStateToProps = (state) => ({
  storedUserName: state.user.name,
  isUserLoggedIn: state.user.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({ loginUser: (name) => dispatch(userLogin({ name })) })

export default connect(mapStateToProps, mapDispatchToProps)(SceneLogin)