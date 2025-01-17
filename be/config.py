class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///donation.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'TempSecretKey'