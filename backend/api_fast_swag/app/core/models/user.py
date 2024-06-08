from fastapi import Depends, HTTPException
from jose import jwt, JWTError
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import Session
from starlette import status

from app.api.deps import get_db
from app.core.database import Base
from app.core.security.password_handling import get_hashed_password
from app.core.security.security import oauth2_scheme, SECRET_KEY, ALGORITHM, TokenData


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)

    def set_password(self, password: str):
        self.hashed_password = get_hashed_password(password)


def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError as e:
        raise credentials_exception from e

    user = get_user_by_username(db=db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()
