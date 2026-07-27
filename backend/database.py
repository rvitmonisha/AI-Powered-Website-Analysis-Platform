from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.orm import declarative_base, sessionmaker


# SQLite database
DATABASE_URL = "sqlite:///./history.db"


# Database engine
engine = create_engine(
    DATABASE_URL,
    connect_args={
        "check_same_thread": False
    }
)


# Database session
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


# Base class
Base = declarative_base()



# History table
class WebsiteHistory(Base):

    __tablename__ = "history"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    url = Column(
        String,
        nullable=False
    )


    title = Column(
        String,
        nullable=False
    )


    analysis = Column(
        Text,
        nullable=False
    )


    seo_score = Column(
        Integer,
        default=0
    )



# Create table
Base.metadata.create_all(
    bind=engine
)