from pydantic import BaseModel, Field

from app.core.schemas.note import NoteBase


class NewsBase(BaseModel):
    text: str = Field(..., example="Remember to buy milk.")


class NewsCreate(NewsBase):
    pass


class NewsUpdate(NoteBase):
    pass


class NewsInDBBase(NoteBase):
    id: int = Field(..., example=1)

    class Config:
        orm_mode = True


class News(NewsBase):
    pass


class NewsInDB(NewsInDBBase):
    owner_id: int
