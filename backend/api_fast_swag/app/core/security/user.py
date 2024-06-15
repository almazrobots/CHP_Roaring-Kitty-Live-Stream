from fastapi import Depends, HTTPException
from sqlmodel import Session

from app.api.deps import get_db
from app.core.models.user import User
from app.core.schemas.user import UserCreate
from app.core.security.password_handling import get_hashed_password


def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == user.username).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")

    hashed_password = get_hashed_password(user.password)
    db_user = User(username=user.username, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
