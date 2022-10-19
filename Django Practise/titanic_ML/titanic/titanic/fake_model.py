def fake_predict(user_age):
    if (user_age>10):
        prediction ="survived! (Age over 10)"
    else:
        prediction="super survived!!! (Age under 10)"
    return prediction
