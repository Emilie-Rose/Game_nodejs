exports.userResponseParser = (user) => {
    return{
        // id utilisateur sinon on return null par default
        id: user._id || null,

        //Email et le username de l'utilisateur
        email: user.email,
        username: user.username,
    };
}