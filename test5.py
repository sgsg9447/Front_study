from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbjungletest                   # 'dbsparta'라는 이름의 db를 만듭니다.

# 코딩 시작

user = db.users.find_one({'title':'주전장'})
print(user)